// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to 1 and ENGAGE!

arraySelfNamesE					= ["Logic", "Scriptkiddie", "Landstander", "", "", ""]
arraySelfNamesP					= ["Boozn", "", ""]
TSOL_InviteCheck				= 0
lmtr_moveToRate					= 2000
lmtr_InviteCheck				= 10
TSOL_healspl					= 0
TSOL_healhppot					= 0
TSOL_healmppot					= 0
TTNA_AutoInviteWait				= 600
sentInvite						= 0
arraySelfNames 					= (arraySelfNamesE + "," + arraySelfNamesP).split(",")
//var TSOL_inviteout					= New DateTime(0) + -1 * TTNA_AutoInviteWait  --fails
TSOL_inviteout					= 0
next_InviteOut					= 0
next_InviteCheck				= 0
next_HealTarget					= ""

//perc life to trigger
trigger_HPLow1                  = 0.60
trigger_HPLow2                  = 0.50
trigger_HPLow3                  = 0.40
trigger_HPLow4                  = 0.30
trigger_HPLow5                  = 0.20

//amt from full
trigger_HPLossAmt1               = 150
trigger_HPLossAmt2               = 250
trigger_HPLossAmt3               = 350
trigger_HPLossAmt4               = 450
trigger_HPLossAmt5               = 550

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

function GRA(hp,max_hp){
	remainder = max_hp - hp
	
	return remainder
}

function GRC(hp,max_hp){
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
	createParty= 0;
	//GL("AInvTS:"+TSOL_InviteCheck>next_InviteOut);
	//GL((TSOL_InviteCheck>next_InviteOut && TSOL_inviteout!=0) && sentInvite);
	//GL(TSOL_InviteCheck>next_InviteOut && TSOL_inviteout!=0 && sentInvite);
	if(TSOL_InviteCheck>next_InviteOut && TSOL_inviteout!=0 && sentInvite){sentInvite=0; return sentInvite};    //fails
	//if(TSOL_inviteout>=(New Date(0)+TTNA_AutoInviteWait)){return sentInvite};
	if(!character.party){createParty=1};
	//GL(arraySelfNames)
	if(createParty){
	TSOL_inviteout = NQD();
	for (IndexNum in arraySelfNames) {
		//GL(IndexNum)
		otherself = arraySelfNames[IndexNum];
		//GL("foundAInv:"+otherself);
		
		//GL(otherself!=character.name);
		//GL("checked for invite from " + otherself);
		//for (otherself in arraySelfNamesE) {
		if(otherself!=character.name){
			//GL("AutoInviting.."+otherself);
			send_party_invite(otherself,0);
			sentInvite = 1;
			next_InviteOut = NQD(TTNA_AutoInviteWait,"s");
			//GL("NTSInvOut:"+next_InviteOut);
			//GL(otherself+" invited");
			//set_message("AutoInvite:"+otherself);
			//if(on_party_request(otherself)){accept_party_request(otherself)};
			//if(on_party_request(otherself)){accept_party_request(otherself)};
		};
		
		
	}; //for
	}; //if
	
	
	
	return sentInvite
}

function AutoAcceptSelfInvite(){
	//set_message("SearchInvites")
	//GL(TSOL_InviteCheck<next_InviteCheck)
	if(TSOL_InviteCheck<next_InviteCheck){return false}
	
	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
		//GL("fndAAcpt:"+otherself);
		//for (otherself in arraySelfNamesE) {
		if(otherself!=character.name){
			if(on_party_request(otherself)){
				//GL("autoinvite from:"+otherself);
				//accept_party_request(otherself);
				parent.socket.emit('party', {event: 'raccept', name: otherself});
				//accept_party_request(otherself);
				//set_message("Auto"+otherself);
				GL("Autoaccepted:"+otherself);
				
				
				
			};
		};
		
	}
	next_InviteCheck = NQD(lmtr_InviteCheck,"s")
	TSOL_InviteCheck = NQD()
}

function gotoNearest(target,stopBeforeAmt){
	return
}


function movetowards(target,stopBeforeAmt,stayBehind){
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
		movetowards(tarPlayer,3)
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
		if(character.mp/character.max_mp<=0.10){
			use('use_mp');
			set_message("UsedMPPot");
		}
	
		if(character.max_mp-550>character.mp){
			use('use_mp');
			set_message("UsedMPPot");
		}
	}
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
        
		if (current.party && character.party == current.party){
			 
			//if(current.max_hp-current.hp>character.attack && next_HealTarget.hp){
			//toHealList
			//simple_distance()
			//GL(current.max_hp)
			//GL(current.hp)
			//GL(current.max_hp-current.hp>=healamt)
			//GL(current.max_hp-current.hp<=healamt)

			if(parent.distance(character, current) <= rangeamt){
			if(needsHeal(current,healamt)){
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
			
		}  //if inParty
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


var attack_mode=1
//var followTargetname=""
//var followOtherSelfname=""
//var gotoTargetname=""



setInterval(function(){
	if(character.rip) return;
	set_message("GO!")
	//AutoInvite();
	//AutoAcceptSelfInvite();
	//GL(character.frequency)
	if(character.ctype=="priest"){HealerMode()};
	//GL("Class:"+character.ctype)
	//use_hp_or_mp();
	loot();
	
	
	//if(!attack_mode || character.rip || is_moving(character)) return;
	
	UseHPPot();
	UseMPPot();
	
	
	if(is_moving(character)) return;

	//followOtherSelfname = myOtherSelf();
	//game_log(followOtherSelfname);
	//followTarget(followOtherSelfname);
	
	var target=get_targeted_monster();
	
	//if(!target && !get_nearest_monster({target:Logic}))
	if(!target)
	{
		target=get_nearest_monster({});
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return;
		}
	}
	
	if(!in_attack_range(target))
	{
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

},650);

// Learn Javascript: https://www.codecademy.com/learn/learn-javascript
// Write your own CODE: https://github.com/kaansoral/adventureland
// NOTE: If the tab isn't focused, browsers slow down the game
// NOTE: Use the performance_trick() function as a workaround

