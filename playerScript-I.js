// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set god_mode to 1 and BELIEVE!

//extra settings
auto_reload(true)

//on_party_invite("Logic")

//////Vars Start//////

//////Array
arraySelfNamesE					= ["Logic", "Scriptkiddie", "Landstander", "EvilAltarBoy", "Indubitiable", ""]
arraySelfNamesP					= ["Boozn", ""]
arraySelfNamesV					= ["Vaserati", ""]
arraySelfNamesEE				= ["Exhaust", "Lethargy", "Existant"]
arraySelfNames 					= (arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","").split(",")

//////Str
next_HealTarget					= ""

//targ = Target
targ_autoAttack					= ""
targ_autoAssist					= ""

//


//////DateTime
//TSOL = TimeStampOfLast
TSOL_InviteCheck				= 0
TSOL_healspl					= 0
TSOL_healhppot					= 0
TSOL_healmppot					= 0
TSOL_AInviteSent				= 0
TSOL_inviteout					= 0
next_InviteOut					= 0
next_InviteCheck				= 0

//////BOOLs
sentInvite						= 0

//////Ints
amt_MP							= 300
//lmtr = Limiter
lmtr_AutoInviteWait				= 1200
lmtr_moveToRate					= 2000
lmtr_InviteCheck				= 10

//////Ints % - Trigger At %

//above perc mana to heal friendlies outside party not in pvp
trigger_MinMPtoHealNonPartyFriendlies 	= 0.73

trigger_HPLow1                  = 0.60
trigger_HPLow2                  = 0.50
trigger_HPLow3                  = 0.40
trigger_HPLow4                  = 0.30
trigger_HPLow5                  = 0.20

//////Ints # - Trigger At #
//amt from full
trigger_HPLossAmt1               = 150
trigger_HPLossAmt2               = 250
trigger_HPLossAmt3               = 350
trigger_HPLossAmt4               = 450
trigger_HPLossAmt5               = 550


//////Vars end//////

function NQD(duration,type){
	//year, month, day [, hour, minute, second, millisecond ]
	newDate = Date()
	if(type=="s"){
		newDate = new Date() + Date(duration*1000)
	}else if(type=="m"){
		newDate = new Date() + Date(duration*1000*60)
		//newDate = new Date(0,0,0,0,0,duration)
	}else if(type=="h"){
		newDate = new Date() + Date(duration*1000*60*60)
		//newDate = new Date(0,0,0,0,0,duration)
	}else if(type=="d"){
		newDate = new Date() + Date(duration*1000*60*60*24)
		//newDate = new Date(0,0,0,0,0,duration)
	}else if(!type){
		newDate = Date()
	}else{
		newDate = "broke?"
	}
	return newDate
}

function get_RA(hp,max_hp){
	remainder = max_hp - hp
	
	return remainder
}

function get_RC(hp,max_hp){
	remainder = max_hp - hp
	
	return remainder
}

function GL(message){
	game_log(message)
}

function CastSpell(spell,target){
	if(can_use(spell,target)){use_skill(spell,target)};
}

function CastHeal(target){
	if(can_use("heal",target)){use_skill("heal",target)};
}

function AutoInvite(){
	//sentInvite = 0;
	//GL(new Date)
	//createParty= 0;
	//GL("AInvTS:"+TSOL_InviteCheck>next_InviteOut);
	//GL((TSOL_InviteCheck>next_InviteOut && TSOL_AInviteSent!==0) && sentInvite);
	//GL(TSOL_InviteCheck>next_InviteOut && TSOL_AInviteSent!==0 && sentInvite);
	//if(TSOL_AInviteSent!==0 && sentInvite){sentInvite=0; return sentInvite};    //fails
	//if(TSOL_AInviteSent>=(New Date(0)+lmtr_AutoInviteWait)){return sentInvite};
	//if(!character.party){createParty=1};
	//GL(arraySelfNames)
	//if(createParty){
	TSOL_AInviteSent = NQD();
	for (IndexNum in arraySelfNames) {
		//GL(IndexNum)
		otherself = arraySelfNames[IndexNum];
		//GL("foundAInv:"+otherself);
		
		//GL(otherself!==character.name);
		//GL("checked for invite from " + otherself);
		//for (otherself in arraySelfNamesE) {
		if(otherself.name!==character.name && otherself!=""){
			//GL("AutoInviting.."+otherself);
			send_party_invite(otherself,0);
			sentInvite = 1;
			next_InviteOut = NQD(lmtr_AutoInviteWait,"s");
			//GL("NTSInvOut:"+next_InviteOut);
			//GL(otherself+" invited");
			//set_message("AutoInvite:"+otherself);
			//if(on_party_request(otherself)){accept_party_request(otherself)};
			//if(on_party_request(otherself)){accept_party_request(otherself)};
		};
		
		
	}; //for
	//}; //if
	
	
	
	return sentInvite
}

function AutoAcceptSelfInvite(){
	//set_message("SearchInvites")
	//GL(TSOL_InviteCheck<next_InviteCheck)
	if(TSOL_InviteCheck<next_InviteCheck){return false}
	
	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
		if(otherself.name!==character.name && otherself!=""){
		//GL("srchAAcpt:"+otherself);
		//GL("srchAI:"+on_party_request(otherself))
		
			//if(on_party_request(otherself)){
				accept_party_invite(otherself);
				//GL("Autoaccepted:"+otherself);
			//};
		};
		
	}
	next_InviteCheck = NQD(lmtr_InviteCheck,"s")
	TSOL_InviteCheck = NQD()
}

function gotoNearest_stopShort(target,stopBeforeAmt){
	var current = target
	
	if(!current){
		current = get_player(target)
	}
	
	
	
	return 
}


function movetowards(target,stopBeforeAmt){
	return
	move(
		character.x+(target.x-character.x-stopBeforeAmt),
		character.y+(target.y-character.y-stopBeforeAmt)
		);
		
			
}

function followTarget(target,followDistance,stayBehindBack){
	return
	tarPlayer = get_player(target)
	tpAngle = tarPlayer.angle
	
	
	if(tarPlayer){
		if(TSOL_moveTo>=lmtr_moveToRate+Date()){
		movetowards(tarPlayer,followDistance)
		//move(tarPlayer)
		//move(character.real_x+5,character.real_y)
		TSOL_moveTo = Date()
		};
	};
}


function ismyOtherSelf(name){
	var myOtherSelfis
	
	
	//for (otherself in (arraySelfNamesE & arraySelfNamesP)) {
	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
	//for (otherself in [arraySelfNamesE, arraySelfNamesP]) {
	//for (otherself in arraySelfNamesE) {
		if(!otherself==character.name && !name==character.name){myOtherSelfis = 1};
		if(otherself==name){myOtherSelfis=1};
		
	}
	
	return myOtherSelfis
}

function myOtherSelf(){
	var myOtherSelfis = ""
	var foundOtherSelf = 0
	
	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
	//for (otherself in [arraySelfNamesE, arraySelfNamesP]) {
	//for (otherself in arraySelfNamesE) {
		if(!otherself==character.name ){
			
			myOtherSelfis = get_player(otherself)
			if(myOtherSelfis){foundOtherSelf = 1; return myOtherSelfis};
			
		};
		
	}
	if(!foundOtherSelf){}
	//if(character.name=="Logic" && !myOtherSelfname=="Logic"){
	//	myOtherSelfis = get_player(myOtherSelfname)
	//}
	//
	//if(character.name=="Scriptkiddie" && !myOtherSelfname=="Scriptkiddie"){
	//	myOtherSelfis = get_player(myOtherSelfname)
	//}
	
	return myOtherSelfis
}

function UseHPPot() {
	if(can_heal(character)){
		//======== percent based healing ========
		if(character.hp/character.max_hp<=trigger_HPLow5){  //20%
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.hp/character.max_hp<=trigger_HPLow4){  //30%
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.hp/character.max_hp<=trigger_HPLow3){  //40%
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.hp/character.max_hp<=trigger_HPLow2){  //50%
			//use('use_hp');
			heal(character)
			set_message("CastHeal!");
		}else if(character.hp/character.max_hp<=trigger_HPLow1){  //60%
			use('use_hp');
			set_message("DrankHP!");
		//======== start of amount based healing ========
		}else if(character.max_hp-trigger_HPLossAmt5<=character.hp){  //550
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt4<=character.hp){  //450
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt3<=character.hp){  //350
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt2<=character.hp){  //250
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt1<=character.hp){  //150
			use('use_hp');
			set_message("DrankHP!");
		}
	}

	return 
}

function UseMPPot() {
	
	if(can_heal(character)){
		//force use if MP<10%
		if(character.mp/character.max_mp<=0.25){
			use('use_mp');
			set_message("UsedMPPot");
		};
		
		if(character.max_mp-character.mp>amt_MP){
			use('use_mp');
			set_message("UsedMPPot");
			};
		
		if(character.max_mp-amt_MP>character.mp){
			use('use_mp');
			set_message("UsedMPPot");
		};
	};
	
	return 
}

function LeastLife(name1,name2){
	current = ""
	if(name1 && name2){
		if(name1.max_hp-name1.hp>=name2.max_hp-name2.hp){return name1};
		if(name2.max_hp-name2.hp>=name1.max_hp-name1.hp){return name2};
	
	}
	return current
}

function needsHeal(target,healamt){
	if(target.max_hp-target.hp>=healamt){return true};
	return false
}



function inSameParty(player){
	if(character.party === player.party){return true};
	return false
}






function HealerMode() {
	rangeamt = character.range
	healamt = character.attack
	
	//next_HealTarget = ""
	
	
	for (id in parent.entities) {
        var current = parent.entities[id];
        if (current.type != "character" || current.rip || current.invincible || current.npc) {continue};
		
        //if (current.guild && character.guild == current.guild){ continue};
        //if (args.friendship && in_arr(current.owner, parent.friends)){continue};
        //if (args.exclude && in_arr(current.name, args.exclude)){continue}; // get_nearest_hostile({exclude:["Wizard"]}); Thanks
        
		if (inSameParty(current)){
			 
			//if(current.max_hp-current.hp>character.attack && next_HealTarget.hp){
			//toHealList
			//simple_distance()
			//GL(current.max_hp)
			//GL(current.hp)
			//GL(current.max_hp-current.hp>=healamt)
			//GL(current.max_hp-current.hp<=healamt)
			
			if(parent.distance(character, current) <= rangeamt){
			if(needsHeal(current,healamt) || current.hp/current.max_hp<=0.50){
			if(next_HealTarget){
				next_HealTarget = LeastLife(current,next_HealTarget)
				//GL("CHT:"+next_HealTarget)
				
			}else{
				next_HealTarget = current
				//GL("NHT:"+current)
				
			}  //if next_HealTarget
			}  //if needsHeal
			}  //if in range
			//};
			
		}  //if inSameParty
		current = ""
    }  //end for
	
	
	
	if(can_heal(next_HealTarget) && next_HealTarget){
		//CastHeal(next_HealTarget)
		heal(next_HealTarget)
		//use("heal",next_HealTarget)
		
		GL("Healed:"+next_HealTarget.id)
		next_HealTarget = ""
		
	}
	
	return
}

 function TankMode(){
	
	var current = get_nearest_monster()
	//var current = get_nearest_hostile()
	//Spam taunt while over 55% mana
	//GL(current.target)
	if(
		character.mp/character.max_mp>=0.55
	&&  can_use("taunt")
    &&  current.target!==character.name
    &&  inSameParty(current)
    //&&  
		
		
		
	) //endIf Conditions
	
	{ //start if routine
		
		GL("Cast:Taunt")
		CastSpell("taunt",current)
		
		
		return
		
	};
	
	
	
	
 }


var attack_mode=1
//var followTargetname=""
//var followOtherSelfname=""
//var gotoTargetname=""

function autoAttack(targ_autoAttack,forceSwitch){
	var target=get_targeted_monster();
	if(targ_autoAttack && forceSwitch){
		target=targ_autoAttack
	}
	
	//if(!target && !get_nearest_monster({target:Logic}))
	if(!target)
	{
		target=get_nearest_monster({});
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return "F_NM"
		}
	}
	
	if(!in_attack_range(target))
	{
		target=get_nearest_monster({});
		//move(
		//	character.x+(target.x-character.x)/2,
		//	character.y+(target.y-character.y)/2
		//	);
		// Walk half the distance
	}
	//else if(can_attack(target))
	if(can_attack(target))
	{
		set_message("Attack:"+character.attack);
		attack(target);
	}
	
	
	
}

function autoAssist(targ_autoAssist){
	
	
	//followOtherSelfname = myOtherSelf();
	//game_log(followOtherSelfname);
	//followTarget(followOtherSelfname);
	
	
}


//TODO::

//  bank_store(num, pack, pack_slot)



//TODO END


// Main Looper
setInterval(function(){
	//performance_trick(); //thanks javascript?
	if(is_paused()){parent.pause()};
	if(character.rip) return;
	set_message("GO!")
	UseMPPot();
	UseHPPot();
	//if(TSOL_InviteCheck>next_InviteOut){AutoInvite};
	//if(TSOL_InviteCheck>=next_InviteCheck){AutoInvite()};
	//if(TSOL_InviteCheck>=next_InviteCheck && !character.party){AutoAcceptSelfInvite()};
	//GL(character.frequency)
	if(character.ctype=="priest"){HealerMode()};
	if(character.ctype=="warrior"){TankMode()};
	//GL("Class:"+character.ctype)
	//use_hp_or_mp();
	loot();
	
	
	//if(!attack_mode || character.rip || is_moving(character)) return;
	
	// Potions are used from bot right to top left, items spawn in top left.
	// #6 = Top right?
	if(item_properties(character.items[6]) && character.name === "Logic"){send_item("Indubitiable", 6, 1)};
	if(item_properties(character.items[6]) && character.name === "Indubitiable"){send_item("Logic", 6, 1)};
	//if(
	//	item_properties(character.items[6])
	//&&  character.target
	//&&  inSameParty(character.target)
	
	//){
	//	send_item("Indubitiable", 6, 1)
		//send_item(character.target, 6, 1)
		
		
	//}; //endif send_item
	
	if(is_moving(character)) return;
	//autoAssist();
	autoAttack();
	
	//GL(character.frequency)
	
	
	
},1000);

// Learn Javascript: https://www.codecademy.com/learn/learn-javascript
// Write your own CODE: https://github.com/kaansoral/adventureland
// NOTE: If the tab isn't focused, browsers slow down the game
// NOTE: Use the performance_trick() function as a workaround

