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
arraySelfNames 					= (arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","").replace(",,",",").split(",")

//arraySelfNames 					= (((arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","")).replace(",,",",")).split(",")

//////Str
//strArrSelfNames 				= ((arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","")).replace(",,",",")
strArrSelfNames 				= (arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","").replace(",,",",")

next_HealTarget					= ""

//targ = Target
targ_autoAttack					= ""
targ_autoAssist					= ""

//targ_autoAssistNames			= ("target:'" & arraySelfNames.join("',target:'") & "'").replace(",target:''","")
targ_autoAssistNames			= strArrSelfNames.replace(",,", ",").replace(",", ",target:")
targ_autoAssistNamesFilter = autoAssistNamesFilter


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
god_mode						= 1
sentInvite						= 0

//////Ints
amt_MP							= 500


sendSlot_r1c1 = 00;
sendSlot_r1c2 = 01;
sendSlot_r1c3 = 02;
sendSlot_r1c4 = 03;
sendSlot_r1c5 = 04;
sendSlot_r1c6 = 05;
sendSlot_r1c7 = 06;
sendSlot_r2c1 = 07;
sendSlot_r2c2 = 08;
sendSlot_r2c3 = 09;
sendSlot_r2c4 = 10;
sendSlot_r2c5 = 11;
sendSlot_r2c6 = 12;
sendSlot_r2c7 = 13;
sendSlot_r3c1 = 14;
sendSlot_r3c2 = 15;
sendSlot_r3c3 = 16;
sendSlot_r3c4 = 17;
sendSlot_r3c5 = 18;
sendSlot_r3c6 = 19;
sendSlot_r3c7 = 20;
sendSlot_r4c1 = 21;
sendSlot_r4c2 = 22;
sendSlot_r4c3 = 23;
sendSlot_r4c4 = 24;
sendSlot_r4c5 = 25;
sendSlot_r4c6 = 26;
sendSlot_r4c7 = 27;
sendSlot_r5c1 = 28;
sendSlot_r5c2 = 29;
sendSlot_r5c3 = 30;
sendSlot_r5c4 = 31;
sendSlot_r5c5 = 32;
sendSlot_r5c6 = 33;
sendSlot_r5c7 = 34;
sendSlot_r6c1 = 35;
sendSlot_r6c2 = 36;
sendSlot_r6c3 = 37;
sendSlot_r6c4 = 38;
sendSlot_r6c5 = 39;
sendSlot_r6c6 = 40;
sendSlot_r6c7 = 41;

//lmtr = Limiter
lmtr_AutoInviteWait				= 1200
lmtr_moveToRate					= 2000
lmtr_InviteCheck				= 10
lmtr_SendGoldAboveAtLeast		= 10000
lmtr_SendGoldAboveBase			= 25000

//////Ints % - Trigger At %

//above perc mana to heal friendlies outside party not in pvp
trigger_MinMPtoHealNonPartyFriendlies 	= 0.75

trigger_TeamHPLowPerc			= 0.60
trigger_TeamHPHealNeededAmt		= 10000
trigger_TeamHPatCritical		= 2

trigger_HPLow1                  = 0.60
trigger_HPLow2                  = 0.50
trigger_HPLow3                  = 0.40
trigger_HPLow4                  = 0.30
trigger_HPLow5                  = 0.20

//////Ints # - Trigger At #
//amt from full
trigger_HPLossAmt1               = 350
trigger_HPLossAmt2               = 450
trigger_HPLossAmt3               = 550
trigger_HPLossAmt4               = 650
trigger_HPLossAmt5               = 750

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

function getCL(){
	return character.level
}

function getMAmp(target){
	remainder = target.max_mp - target.mp
	return remainder
}


function getRCmp(target){
	remainder = 1 - target.mp/target.max_mp
	return remainder
}

function getCCmp(target){
	remainder = target.mp/target.max_mp
	return remainder
}

function getMAhp(target){
	remainder = target.max_hp - target.hp
	return remainder
}

function getCChp(target){
	remainder = target.hp/target.max_hp
	return remainder
}

function getMChp(target){
	remainder = 1 - target.hp/target.max_hp
	return remainder
}

function GL(message){
	game_log(message)
}

function CastSpell(spell,target){
	if(can_use(spell,target)){use_skill(spell,target)};
}

function CastHeal(target){
	if(can_use("heal")){use_skill("heal",target)};
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
	///}; //if
	
	
	
	return sentInvite
}

function AutoAcceptSelfInvite(){
	//set_message("SearchInvites")
	//GL(TSOL_InviteCheck<next_InviteCheck)
	if(TSOL_InviteCheck<next_InviteCheck){return false}
	
	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
		if(otherself.name!==character.name && otherself!=""){
				accept_party_invite(otherself);
		};
		
	}
	next_InviteCheck = NQD(lmtr_InviteCheck,"s")
	TSOL_InviteCheck = NQD()
}

function movetowards(target,stopBeforeAmt){
	if(target){
		tarX = target.real_x
		tarY = target.real_y
		next_GotoCords = ""
		
	}
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
	var myOtherSelf
	for (IndexNum in arraySelfNamesE) {
		otherself = arraySelfNames[IndexNum];
		if(otherself!==character.name && name!==character.name){myOtherSelf = 0};
		if(otherself===name){myOtherSelf=1};
	}
	return myOtherSelf
}

function myOtherSelfsname(){
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
	if(can_heal(character) && can_use("hppotion")){
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
			//heal(character)
			set_message("CastHeal!");
		}else if(character.hp/character.max_hp<=trigger_HPLow1){  //60%
			use('use_hp');
			set_message("DrankHP!");
		//======== start of amount based healing ========
		}else if(character.max_hp-trigger_HPLossAmt5<=character.hp){  //750
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt4<=character.hp){  //650
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt3<=character.hp){  //550
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt2<=character.hp){  //450
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(character.max_hp-trigger_HPLossAmt1<=character.hp){  //350
			use('use_hp');
			set_message("DrankHP!");
		}
	}

	return 
}

function UseMPPot() {
	
	if(can_heal(character) && can_use("mppotion")){
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

function HealerModeSelf() {
	if(needsHeal(character,character.attack) && can_use("heal")){
		
		heal(character);
		GL("Healed:Self");
	};
	return
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
	useTaunt = 0
	if(!character.target){
		closest = get_nearest_monster()
		//current = get_nearest_hostile()
	}
	
	//Spam taunt while over 55% mana
	if(
		character.mp/character.max_mp>=0.55
	&&  can_use("taunt")
    &&  closest.target!==character.name
    &&  inSameParty(get_target_of(closest))
    //&&  
	) //endIf Conditions
	
	{ //start if routine
		useTaunt = 1
		
	};
	
	if(useTaunt){
		GL("Cast:Taunt")
		CastSpell("taunt",closest)
	};
	return
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

function HealerModeAoE(){ //TODO
	//rangeamt = character.range
	//healamt = character.attack
	if(getCL>=80){
		aoeHealAmt = 800
	}else if(getCL()>=72 && getCL<80){ //between lvls 72-80
		aoeHealAmt = 720
	}else if(getCL()>=60 && getCL<72){ //between lvls 60-72
		aoeHealAmt = 600
	}else if(getCL()>=40 && getCL<60){ //between lvls 40-60
		aoeHealAmt = 500
	}else{ //else or below lvl 40 (1-39)
		aoeHealAmt = 400
	};
	
	maxHPPool = 0
	pplwithCritHP = 0
	currentHPPool = character.hp
	healsNeededAmt = 1
	maxHealAmtppl = 1
	
	healsNeededAmt = healsNeededAmt + getMAhp(character)
	
	for (id in parent.entities) {
        var current = parent.entities[id];
        if (!inSameParty(current) || current.type != "character" || current.rip || current.invincible || current.npc) {continue};
		
		currentHPPool = currentHPPool + current.hp
		maxHPPool = maxHPPool + current.max_hp
		healsNeededAmt = healsNeededAmt + getMAhp(current)
		if(getMChp(current)>0.55){pplwithCritHP++};
		maxHealAmtppl++
		
    }  //end for
	
	
	maxHealAmt = aoeHealAmt * maxHealAmtppl
	groupHPPerc = currentHPPool/maxHPPool
	
	//GL("needhp:"+healsNeededAmt+",curhp:"+currentHPPool+",maxhp:"+maxHPPool+",Grp%:"+groupHPPerc+",max:"+maxHealAmt)
	if((groupHPPerc<=trigger_TeamHPLowPerc || pplwithCritHP>trigger_TeamHPatCritical || healsNeededAmt>=trigger_TeamHPHealNeededAmt)){
	//if(can_use("partyheal") && (groupHPPerc<=trigger_TeamHPLowPerc || pplwithCritHP>trigger_TeamHPatCritical || healsNeededAmt>=trigger_TeamHPHealNeededAmt)){
		use("partyheal");
		GL("PartyHeal!");
	};
	
	return 
}

//TODO::

//  bank_store(num, pack, pack_slot)

function cast(spell, target){
	if(can_use(spell) && target){use_skill(spell,target)}
}

function autoAssist(targ_autoAssist){
	
	//followOtherSelfname = myOtherSelf();
	//game_log(followOtherSelfname);
	//followTarget(followOtherSelfname);
	
}

function EnergizeCaptain(){
	captain = get_player("Logic")
	if(captain && can_use("energize")){
		//mpperc = getCCmp(captain)
		//missingmp = getMAmp(captain)
		//GL(mpperc &"__"& missingmp &"__"&captain.name)
		//if(mpperc>=0.25 || missingmp>=800){
			use_skill("energize",captain);
		//}
	}
	
}

function autoAssistNamesFilter(){
	nameFilter=[];
	for(indexNum in arraySelfNames){
		wChar = arraySelfNames[indexNum];
		if(wChar && wChar!==""){
			pushInfo = [];
			pushInfo.push({'target' : wChar});
			GL(pushInfo);
			nameFilter[indexNum].target = wChar;
			nameFilter.push(pushInfo);
			//nameFilter.push({'target':wChar});
		};
	}
	return nameFilter
}


//::TODO END


// Main Looper
setInterval(function(){
	//performance_trick(); //thanks javascript? browers only?
	//if(is_paused()){parent.pause()};
	if(character.rip) return;
	set_message("");
	UseMPPot();
	if(character.ctype=="priest"){HealerModeSelf()};
	UseHPPot();
	
	//newTarg = get_nearest_monster({target:"Logic",target:"Boozn",target:"Indubitiable"});
	//GL(targ_autoAssistNames);
	//targ_autoAssistNamesFilter = autoAssistNamesFilter();
	//GL(targ_autoAssistNamesFilter);
	//newTarg = get_nearest_monster(targ_autoAssistNamesFilter);
	//if(newTarg){GL("FoundMobAfter:"+newTarg.target)}
	
	//if(TSOL_InviteCheck>next_InviteOut){AutoInvite};
	//if(TSOL_InviteCheck>=next_InviteCheck){AutoInvite()};
	//if(TSOL_InviteCheck>=next_InviteCheck && !character.party){AutoAcceptSelfInvite()};
	//GL(character.frequency);
	if(character.ctype=="priest"){HealerModeAoE()};
	if(character.ctype=="priest"){HealerMode()};
	if(character.ctype=="mage"){EnergizeCaptain()};
	if(character.ctype=="warrior"){TankMode()};
	//GL("Class:"+character.ctype);
	//use_hp_or_mp();
	loot();
	
	
	//if(!attack_mode || character.rip || is_moving(character)) return;
	
	// Potions are used from bot right to top left @ , items spawn in top left @ 0.
	// #6 = Top right?
	//if(character.gold>lmtr_SendGoldAboveBase){sendGoldAmt = lmtr_SendGoldAboveBase-character.gold};
	//if(sendGoldAmt>=lmtr_SendGoldAboveAtLeast && character.name === "Logic"){send_gold(get_player("Indubitiable"), sendGoldAmt);GL("SentGold:"+sendGoldAmt)};
	//if(character.name === "Logic"){
		//send_gold("Indubitiable", sendGoldAmt);
		//GL("SentGold:"+sendGoldAmt+get_player("Indubitiable"));
		
	//};
	
	//if(item_properties(character.items[sendSlot_r6c7]) && character.name === "Indubitiable"){send_item("Logic", sendSlot_r6c7, 100)};
	if(item_properties(character.items[sendSlot_r6c7]) && character.name!=="Logic" && ismyOtherSelf(character.name)){send_item("Logic", sendSlot_r6c7, 1)};
	if(item_properties(character.items[sendSlot_r6c7]) && character.name === "Logic"){send_item("Indubitiable", sendSlot_r6c7, 1)};
	if(item_properties(character.items[sendSlot_r6c6]) && character.name === "Logic"){send_item("Boozn", sendSlot_r6c6, 1)};
	if(item_properties(character.items[sendSlot_r6c6]) && character.name === "Boozn"){send_item("Indubitiable", sendSlot_r6c6, 1)};
	if(item_properties(character.items[sendSlot_r6c7]) && character.name === "Boozn"){send_item("Logic", sendSlot_r6c7, 1)};
	
	if(is_moving(character)) return;
	//autoAssist();
	autoAttack();
	UseHPPot();
	loot();
	
},800);

// Learn Javascript: https://www.codecademy.com/learn/learn-javascript
// Write your own CODE: https://github.com/kaansoral/adventureland
// NOTE: If the tab isn't focused, browsers slow down the game
// NOTE: Use the performance_trick() function as a workaround

