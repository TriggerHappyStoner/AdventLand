
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
next_AttackTarget					= ""

//targ = Target
targ_autoAttack					= ""
targ_autoAssist					= ""

//targ_autoAssistNames			= ("target:'" & arraySelfNames.join("',target:'") & "'").replace(",target:''","")
targ_autoAssistNames			= strArrSelfNames.replace(",,", ",").replace(",", ",target:")

//////DateTime
//TSOL = TimeStampOfLast
TSOL_InviteCheck				= 0
TSOL_healspl					= 0
TSOL_healhppot					= 0
TSOL_healmppot					= 0
TSOL_AInviteSent				= 0
TSOL_inviteout					= 0
TSOL_offloaditems				= 0
TSOL_compounditems				= 0
next_InviteOut					= 0
next_InviteCheck				= 0
next_offloaditems				= 0
next_compounditems				= 0
next_HealAoEtime				= 0


//////BOOLs
god_mode						= 1
sentInvite						= 0

//////Ints
amt_MP							= 500

//lmtr = Limiter
lmtr_AutoInviteWait				= 10
lmtr_moveToRate					= 2000
lmtr_InviteCheck				= 10
lmtr_SendGoldAboveAtLeast		= 500000
lmtr_SendGoldAboveBase			= 250000
lmtr_offloaditemsRate			= 100
lmtr_compounditemsRate			= 10
lmtr_HealAoERate				= 4


//////Ints % - Trigger At %

//above perc mana to heal friendlies outside party not in pvp
trigger_MinMPtoHealNonPartyFriendlies 	= 0.75

trigger_HealAoETeamHPLowPerc			= 0.60
trigger_HealAoETeamHPHealNeededAmt		= 1600
trigger_HealAoETeamHPCntatCritical		= 3

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

//////Ints names to inv slots
citems_r1c1 = 00;
citems_r1c2 = 01;
citems_r1c3 = 02;
citems_r1c4 = 03;
citems_r1c5 = 04;
citems_r1c6 = 05;
citems_r1c7 = 06;
citems_r2c1 = 07;
citems_r2c2 = 08;
citems_r2c3 = 09;
citems_r2c4 = 10;
citems_r2c5 = 11;
citems_r2c6 = 12;
citems_r2c7 = 13;
citems_r3c1 = 14;
citems_r3c2 = 15;
citems_r3c3 = 16;
citems_r3c4 = 17;
citems_r3c5 = 18;
citems_r3c6 = 19;
citems_r3c7 = 20;
citems_r4c1 = 21;
citems_r4c2 = 22;
citems_r4c3 = 23;
citems_r4c4 = 24;
citems_r4c5 = 25;
citems_r4c6 = 26;
citems_r4c7 = 27;
citems_r5c1 = 28;
citems_r5c2 = 29;
citems_r5c3 = 30;
citems_r5c4 = 31;
citems_r5c5 = 32;
citems_r5c6 = 33;
citems_r5c7 = 34;
citems_r6c1 = 35;
citems_r6c2 = 36;
citems_r6c3 = 37;
citems_r6c4 = 38;
citems_r6c5 = 39;
citems_r6c6 = 40;
citems_r6c7 = 41;


////// extras
var whitelist = ['wbook0', 'intamulet', 'stramulet', 'dexamulet', 'intearring', 'strearring', 'dexearring', 'hpbelt', 'hpamulet', 'ringsj', 'amuletofm', 'orbofstr', 'orbofint', 'orbofres', 'orbofhp'];
var use_better_scrolls = false; //240,000 Gold Scroll = true [only will use for +2 and higher], 6,400 Gold Scroll = false [will only use base scroll no matter what]
var maxLevel = 3;

//////Vars end//////


////// Extra Functions
function NQD(duration,type){
	// Date(year, month, day [, hour, minute, second, millisecond ])
	if(duration<1){duration=1};
	if(type=="s"){
		newDate = new Date() * 1 + (duration*1000) //+#secs
	}else if(type=="m"){
		newDate = new Date() * 1 + (duration*1000*60) //+#mins
	}else if(type=="h"){
		newDate = new Date() * 1 + (duration*1000*60*60) //+#hrs
	}else if(type=="d"){
		newDate = new Date() * 1 + (duration*1000*60*60*24) //+#days
	}else if(!type){
		newDate = new Date() * 1//now
	}else{
		newDate = new Date() * 1
	}
	
	return newDate
}

function tooSoon(wTime){
	return (wTime && wTime>=NQD())
}

function getCL(){
	return character.level
}

//get Missing Amount of target Mana
function getMAmp(target){
	if(!target){target = character};
	let missAmt = target.max_mp - target.mp
	return missAmt
}

// get Current Percent of target Mana
function getCCmp(target){
	if(!target){target = character};
	let currentPerc = target.mp/target.max_mp
	return currentPerc
}
 
// get Missing Percent of target Mana
function getMCmp(target){
	if(!target){target = character};
	let missPerc = 1 - target.mp/target.max_mp
	return missPerc
}

//get Missing Amount of Health points from target
function getMAhp(target){
	if(!target){target = character};
	let missAmt = target.max_hp - target.hp
	return missAmt
}

// get Current Percent Health points of target
function getCChp(target){
	if(!target){target = character};
	let currentPerc = target.hp/target.max_hp
	// return currentPerc
}

//get Missing Percent of Health points from target
function getMChp(target){
	if(!target){target = character};
	let missPerc = 1 - target.hp/target.max_hp
	return missPerc
}

function GL(message){
	game_log(message)
}

function isCharType(target,chartype){
	wTar = get_player(target)
	if(wTar && chartype && wTar.ctype == chartype){
		return 1
	}
	return 0
}

////// End Extra Functions



function partyManager(leader){
	GL(on_party_request("EvilAltarBoy"));
	if(tooSoon(next_InviteOut)){return};
	next_InviteOut = NQD(lmtr_AutoInviteWait,"s");
	if(!character.party && character.name===leader){createParty = 1};

	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
		//GL(on_party_request(otherself));
		invitee = get_player(otherself);
		if(!invitee || invitee.party==character.party || otherself.name===character.name || otherself!=""){continue};
		if(invitee && !invitee.party){send_party_invite(otherself,0);};
		if(invitee && invitee.party){send_party_invite(otherself,1);};
		//if(){
			GL(on_party_request(otherself));
			send_party_invite(otherself,0);
			next_InviteOut = NQD(lmtr_AutoInviteWait,"s");
			//GL("NTSInvOut:"+next_InviteOut);
			//GL(otherself+" invited");
			//set_message("AutoInvite:"+otherself);
			//if(on_party_request(otherself)){accept_party_request(otherself)};
			//if(on_party_request(otherself)){accept_party_request(otherself)};
		//};
	}; //for
		
		TSOL_AInviteSent = NQD();
		
		return
		
	//function AutoAcceptSelfInvite()
	//{
	//	//set_message("SearchInvites")
	//	//GL(TSOL_InviteCheck<next_InviteCheck)
	//	if(TSOL_InviteCheck<next_InviteCheck){return false}
	//	
	//	for (IndexNum in arraySelfNames) {
	//		otherself = arraySelfNames[IndexNum];
	//		if(otherself.name!==character.name && otherself!=""){
	//				accept_party_invite(otherself);
	//		};
	//		
	//	}
	//	
	//	next_InviteCheck = NQD(lmtr_InviteCheck,"s")
	//	TSOL_InviteCheck = NQD()
	//}
	
	
}

rate_MainLooper = 1000

function MainLooper(){
	GL(Date())
	GL(on_party_invite("Logic"));
	GL(on_party_invite("EvilAltarBoy"));
	GL(on_party_invite("Boozn"));
	//partyManager("Logic);
	send_cm("EvilAltarBoy","inviteme")
	
}

setInterval(MainLooper,rate_MainLooper);
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
next_AttackTarget					= ""

//targ = Target
targ_autoAttack					= ""
targ_autoAssist					= ""

//targ_autoAssistNames			= ("target:'" & arraySelfNames.join("',target:'") & "'").replace(",target:''","")
targ_autoAssistNames			= strArrSelfNames.replace(",,", ",").replace(",", ",target:")

//////DateTime
//TSOL = TimeStampOfLast
TSOL_InviteCheck				= 0
TSOL_healspl					= 0
TSOL_healhppot					= 0
TSOL_healmppot					= 0
TSOL_AInviteSent				= 0
TSOL_inviteout					= 0
TSOL_offloaditems				= 0
TSOL_compounditems				= 0
next_InviteOut					= 0
next_InviteCheck				= 0
next_offloaditems				= 0
next_compounditems				= 0
next_HealAoEtime				= 0


//////BOOLs
god_mode						= 1
sentInvite						= 0

//////Ints
amt_MP							= 500

//lmtr = Limiter
lmtr_AutoInviteWait				= 10
lmtr_moveToRate					= 2000
lmtr_InviteCheck				= 10
lmtr_SendGoldAboveAtLeast		= 500000
lmtr_SendGoldAboveBase			= 250000
lmtr_offloaditemsRate			= 100
lmtr_compounditemsRate			= 10
lmtr_HealAoERate				= 4


//////Ints % - Trigger At %

//above perc mana to heal friendlies outside party not in pvp
trigger_MinMPtoHealNonPartyFriendlies 	= 0.75

trigger_HealAoETeamHPLowPerc			= 0.60
trigger_HealAoETeamHPHealNeededAmt		= 1600
trigger_HealAoETeamHPCntatCritical		= 3

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

//////Ints names to inv slots
citems_r1c1 = 00;
citems_r1c2 = 01;
citems_r1c3 = 02;
citems_r1c4 = 03;
citems_r1c5 = 04;
citems_r1c6 = 05;
citems_r1c7 = 06;
citems_r2c1 = 07;
citems_r2c2 = 08;
citems_r2c3 = 09;
citems_r2c4 = 10;
citems_r2c5 = 11;
citems_r2c6 = 12;
citems_r2c7 = 13;
citems_r3c1 = 14;
citems_r3c2 = 15;
citems_r3c3 = 16;
citems_r3c4 = 17;
citems_r3c5 = 18;
citems_r3c6 = 19;
citems_r3c7 = 20;
citems_r4c1 = 21;
citems_r4c2 = 22;
citems_r4c3 = 23;
citems_r4c4 = 24;
citems_r4c5 = 25;
citems_r4c6 = 26;
citems_r4c7 = 27;
citems_r5c1 = 28;
citems_r5c2 = 29;
citems_r5c3 = 30;
citems_r5c4 = 31;
citems_r5c5 = 32;
citems_r5c6 = 33;
citems_r5c7 = 34;
citems_r6c1 = 35;
citems_r6c2 = 36;
citems_r6c3 = 37;
citems_r6c4 = 38;
citems_r6c5 = 39;
citems_r6c6 = 40;
citems_r6c7 = 41;


////// extras
var whitelist = ['wbook0', 'intamulet', 'stramulet', 'dexamulet', 'intearring', 'strearring', 'dexearring', 'hpbelt', 'hpamulet', 'ringsj', 'amuletofm', 'orbofstr', 'orbofint', 'orbofres', 'orbofhp'];
var use_better_scrolls = false; //240,000 Gold Scroll = true [only will use for +2 and higher], 6,400 Gold Scroll = false [will only use base scroll no matter what]
var maxLevel = 3;

//////Vars end//////


////// Extra Functions
function NQD(duration,type){
	// Date(year, month, day [, hour, minute, second, millisecond ])
	if(duration<1){duration=1};
	if(type=="s"){
		newDate = new Date() * 1 + (duration*1000) //+#secs
	}else if(type=="m"){
		newDate = new Date() * 1 + (duration*1000*60) //+#mins
	}else if(type=="h"){
		newDate = new Date() * 1 + (duration*1000*60*60) //+#hrs
	}else if(type=="d"){
		newDate = new Date() * 1 + (duration*1000*60*60*24) //+#days
	}else if(!type){
		newDate = new Date() * 1//now
	}else{
		newDate = new Date() * 1
	}
	
	return newDate
}

function tooSoon(wTime){
	return (wTime && wTime>=NQD())
}

function getCL(){
	return character.level
}

//get Missing Amount of target Mana
function getMAmp(target){
	if(!target){target = character};
	let missAmt = target.max_mp - target.mp
	return missAmt
}

// get Current Percent of target Mana
function getCCmp(target){
	if(!target){target = character};
	let currentPerc = target.mp/target.max_mp
	return currentPerc
}
 
// get Missing Percent of target Mana
function getMCmp(target){
	if(!target){target = character};
	let missPerc = 1 - target.mp/target.max_mp
	return missPerc
}

//get Missing Amount of Health points from target
function getMAhp(target){
	if(!target){target = character};
	let missAmt = target.max_hp - target.hp
	return missAmt
}

// get Current Percent Health points of target
function getCChp(target){
	if(!target){target = character};
	let currentPerc = target.hp/target.max_hp
	// return currentPerc
}

//get Missing Percent of Health points from target
function getMChp(target){
	if(!target){target = character};
	let missPerc = 1 - target.hp/target.max_hp
	return missPerc
}

function GL(message){
	game_log(message)
}

function isCharType(target,chartype){
	wTar = get_player(target)
	if(wTar && chartype && wTar.ctype == chartype){
		return 1
	}
	return 0
}

////// End Extra Functions



function partyManager(leader){
	GL(on_party_request("EvilAltarBoy"));
	if(tooSoon(next_InviteOut)){return};
	next_InviteOut = NQD(lmtr_AutoInviteWait,"s");
	if(!character.party && character.name===leader){createParty = 1};

	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
		//GL(on_party_request(otherself));
		invitee = get_player(otherself);
		if(!invitee || invitee.party==character.party || otherself.name===character.name || otherself!=""){continue};
		if(invitee && !invitee.party){send_party_invite(otherself,0);};
		if(invitee && invitee.party){send_party_invite(otherself,1);};
		//if(){
			GL(on_party_request(otherself));
			send_party_invite(otherself,0);
			next_InviteOut = NQD(lmtr_AutoInviteWait,"s");
			//GL("NTSInvOut:"+next_InviteOut);
			//GL(otherself+" invited");
			//set_message("AutoInvite:"+otherself);
			//if(on_party_request(otherself)){accept_party_request(otherself)};
			//if(on_party_request(otherself)){accept_party_request(otherself)};
		//};
	}; //for
		
		TSOL_AInviteSent = NQD();
		
		return
		
	//function AutoAcceptSelfInvite()
	//{
	//	//set_message("SearchInvites")
	//	//GL(TSOL_InviteCheck<next_InviteCheck)
	//	if(TSOL_InviteCheck<next_InviteCheck){return false}
	//	
	//	for (IndexNum in arraySelfNames) {
	//		otherself = arraySelfNames[IndexNum];
	//		if(otherself.name!==character.name && otherself!=""){
	//				accept_party_invite(otherself);
	//		};
	//		
	//	}
	//	
	//	next_InviteCheck = NQD(lmtr_InviteCheck,"s")
	//	TSOL_InviteCheck = NQD()
	//}
	
	
}

rate_MainLooper = 1000

function MainLooper(){
	
	if(!character.party){
	send_cm("EvilAltarBoy","inviteme")
	GL(Date())
	GL(accept_party_invite("Logic"));
	GL(accept_party_invite("EvilAltarBoy"));
	GL(accept_party_invite("Boozn"));
	//partyManager("Logic);
	}
	
}

setInterval(MainLooper,rate_MainLooper);