// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set god_mode to 1 and BELIEVE!

// Potions are used from bot right to top left @ , items spawn in top left @ 0.


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
tradeSlotList 					= ["trade1", "trade2", "trade3", "trade4", "trade5", "trade6", "trade7", "trade8", "trade9", "trade10", "trade11", "trade12", "trade13", "trade14", "trade15", "trade16"]

//arraySelfNames 					= (((arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","")).replace(",,",",")).split(",")

//////Str
//strArrSelfNames 				= ((arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","")).replace(",,",",")
strArrSelfNames 				= (arraySelfNamesE + "," + arraySelfNamesP + "," + arraySelfNamesV + "," + arraySelfNamesEE).replace(", \"\"","").replace(",,",",")

next_HealTarget					= ""
next_AttackTarget				= ""

//targ = Target
targ_autoAttack					= ""
targ_autoAssist					= ""
last_Buffed						= ""


//targ_autoAssistNames			= ("target:'" & arraySelfNames.join("',target:'") & "'").replace(",target:''","")
targ_autoAssistNames			= strArrSelfNames.replace(",,", ",").replace(",", ",target:")
targ_autoAssistNamesFilter 		= autoAssistNamesFilter


//TradeMode
lastSolditemname				= ""

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
next_TradePostItems				= 0


//////BOOLs
god_mode						= 1
sentInvite						= 0

//////Ints
amt_MP							= 500
quant							= 1000

//lmtr = Limiter
lmtr_AutoInviteWait				= 100
lmtr_moveToRate					= 2
lmtr_InviteCheck				= 100
lmtr_SendGoldAboveAtLeast		= 500000
lmtr_SendGoldAboveBase			= 250000
lmtr_offloaditemsRate			= 100
lmtr_compounditemsRate			= 5
lmtr_tradepostitemsRate			= 3
lmtr_HealAoERate				= 4
MainLooperRate					= 450


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

function tooFar(target,rangeamnt){
	return (target && parent.distance(character, target) > rangeamnt)
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

////// Other Functions

function CastSpell(spell,target){
	if(can_use(spell,target)){use_skill(spell,target)};
}

function CastHeal(target){
	if(can_use("heal")){use_skill("heal",target)};
}


////// End Other Functions


// TODO:

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

function movetowards(target,stopBeforeAmt){
	if(!stopBeforeAmt || stopBeforeAmt<0){stopBeforeAmt=0};
	if(target){
		let tarX = target.real_x
		let tarY = target.real_y
		next_GotoCords = ""
	}
	move(
		character.x+(target.x-character.x-stopBeforeAmt),
		character.y+(target.y-character.y-stopBeforeAmt)
		);
}

function followTarget(target,followDistance,stayBehindBack){
	return
	let tarPlayer = get_player(target)
	let tpAngle = tarPlayer.angle
	if(tarPlayer){
		if(TSOL_moveTo>=lmtr_moveToRate+Date()){
		movetowards(tarPlayer,followDistance)
		//move(tarPlayer)
		//move(character.real_x+5,character.real_y)
		TSOL_moveTo = Date()
		};
	};
}

function ismyOtherSelf(wTarg){
	if(!wTarg){return 0};
	for (IndexNum in arraySelfNames) {
		otherself = arraySelfNames[IndexNum];
		if(otherself===wTarg.name){return 1};
	}
	return 0
}

function myOtherSelfsname(){
	let myOtherSelfis = ""
	let foundOtherSelf = 0
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
		if(getCChp()<=trigger_HPLow5){  //20%
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(getCChp()<=trigger_HPLow4){  //30%
			//use('use_hp');
			//set_message("DrankHP!");
			
		}else if(getCChp()<=trigger_HPLow3){  //40%
			//use('use_hp');
			//set_message("DrankHP!");
		}else if(getCChp()<=trigger_HPLow2){  //50%
			//use('use_hp');
			//heal(character)
			//set_message("CastHeal!");
		}else if(getCChp()<=trigger_HPLow1){  //60%
			use('use_hp');
			set_message("DrankHP!");
		//======== amount based healing ========
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
		//force use if MP<25%
		if(character.mp/character.max_mp<=0.25){
			use('use_mp');
			set_message("UsedMPPot");
		};
		if(getMAmp(character)>amt_MP){
			use('use_mp');
			set_message("UsedMPPot");
			};
	};
	return 
}

function LeastLife(targ1,targ2){
	if(targ1 && targ2){
		if(targ1.max_hp-targ1.hp>=targ2.max_hp-targ2.hp){return targ1};
		if(targ2.max_hp-targ2.hp>=targ1.max_hp-targ1.hp){return targ2};
	}
	return targ1
}

function needsHeal(target,healamt){
	if(target.max_hp-target.hp>=healamt){return true};
	return false
}

function inSameParty(wTarg){
		return wTarg && character.party && character.party == wTarg.party
}

function HealerModeSelf(){
	if(needsHeal(character,character.attack) && can_use("heal")){
		heal(character);
		GL("Healed:Self");
		TSOL_healsplself = NQD();
	};
	return
}

function EnergizeCaptain(){
	captain = get_player("Logic")
	if(captain && can_use("energize")){
		//mpperc = getCCmp(captain)
		//missingmp = getMAmp(captain)
		//if(mpperc>=0.25 || missingmp>=800){
			use_skill("energize",captain);
		//}
	}
	
}

function MerchantBuffMode(){
	
	//use("mluck",character);
	rangeamt = character.range;
	for (id in parent.entities) {
        let current = parent.entities[id];
        if (!current || current.type != "character" || current.rip || current.invincible || current.npc || tooFar(current,320) || !can_use("mluck") || current.name===last_Buffed) {continue};
		GL(current.slots["elixir"]);
		if (inSameParty(current) || ismyOtherSelf(current)){
			GL("BuffFriend:"+current.name);
			use("mluck",current);
			last_Buffed += current.name;
			continue;
		}
		
		GL("BuffFriendly:"+current.name);
		use("mluck",current);
		
	}
	
	
	
}

function HealerMode(){
	rangeamt = character.range
	healamt = character.attack
	//next_HealTarget = ""
	
	for (id in parent.entities) {
        let current = parent.entities[id];
        if (!current || current.type != "character" || current.rip || current.invincible || current.npc || getMAhp(current)==0) {continue};
		if (inSameParty(current) || ismyOtherSelf(current)){
			
			if(parent.distance(character, current) <= rangeamt){
			if(needsHeal(current,healamt) || current.hp/current.max_hp<=0.65){
			if(next_HealTarget){
				next_HealTarget = LeastLife(current,next_HealTarget)
				//GL("ChgTar:"+next_HealTarget)
				
			}else{
				next_HealTarget = current
				//GL("NHT:"+current)
				
			}  //if next_HealTarget
			}  //if needsHeal or hp < 65%
			}  //if in range
			//};
			
		}  //if inSameParty or ismyOtherSelf
		
		if(!next_HealTarget && (needsHeal(current,healamt) || getCChp(current)<=0.65)){
			next_HealTarget = current
		} //if notargets and friendly needs heal
		
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
//TODO low
function TankMode(){
	useTaunt = 0
	if(!character.target){
		closest = get_nearest_monster({target:"Logic",target:"EvilAltarBoy",target:"Boozn",target:"Indubitiable",target:"Scriptkiddie"});
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

function HealerModeAoE(){
	
	if(tooSoon(next_HealAoEtime) || !can_use("partyheal")){return};
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
	
	maxHPPool = character.max_hp
	if(getCChp(character)<=0.55){pplwithCritHP = 1}else{pplwithCritHP = 0}
	currentHPPool = character.hp
	healsNeededAmt = 0
	maxHealAmtppl = 1
	healsNeededAmt = healsNeededAmt + getMAhp(character)
	
	for (id in parent.entities) {
        let current = parent.entities[id];
		//if(current.name==="EvilAltarBoy"){GL(current.name+","+current.hp+","+current.max_hp+","+(character.party+"_"+current.party))}
		
        if (current.type != "character" || current.rip || current.invincible || current.npc || !inSameParty(current)) {continue};
		//GL(current.name+","+current.hp+","+current.max_hp+","+inSameParty(current))
		currentHPPool = currentHPPool + current.hp
		maxHPPool = maxHPPool + current.max_hp
		healsNeededAmt = healsNeededAmt + getMAhp(current)
		if(getCChp(current)<=0.55){pplwithCritHP++};
		maxHealAmtppl++
		
    }  //end for
	
	maxHealAmt = aoeHealAmt * maxHealAmtppl
	groupHPPerc = (currentHPPool/maxHPPool).toFixed(2) * 100
	
	GL("HP: -"+healsNeededAmt+" : "+currentHPPool+" / "+maxHPPool+" : "+groupHPPerc+"%")
	if((groupHPPerc<=trigger_HealAoETeamHPLowPerc || pplwithCritHP>trigger_HealAoETeamHPCntatCritical || healsNeededAmt>=trigger_HealAoETeamHPHealNeededAmt)){
	//if(can_use("partyheal") && (groupHPPerc<=trigger_HealAoETeamHPLowPerc || pplwithCritHP>trigger_HealAoETeamHPCntatCritical || healsNeededAmt>=trigger_HealAoETeamHPHealNeededAmt)){
		use("partyheal");
		GL("PartyHeal!");
		next_HealAoEtime = NQD(lmtr_HealAoERate,"s")
	};
	if(!next_HealAoEtime || next_HealAoEtime<NQD()){next_HealAoEtime = NQD(lmtr_HealAoERate/2,"s")};
	return 
}

function compound_items() {
  let to_compound = character.items.reduce((collection, item, index) => {
    if (item && item.level < maxLevel && whitelist.includes(item.name)) {
      let key = item.name + item.level;
      !collection.has(key) ? collection.set(key, [item.level, index]) : collection.get(key).push(index);
    }
    return collection;
  }, new Map());

	if(use_better_scrolls){scrollCost=240000}else{scrollCost=6400}
  for (var c of to_compound.values()) {
    let scroll_name = use_better_scrolls && c[0] > 1 ? 'cscroll1' : 'cscroll0';

    for (let i = 1; i + 2 < c.length; i += 3) {
      let [scroll, _] = find_item(i => i.name == scroll_name);
	  if(character.gold < scrollCost){GL("Need more gold! "+ (scrollCost-character.gold))};
      if (scroll == -1) {
		//GL("Bought:"+scroll_name);
        parent.buy(scroll_name);
        return
      }
	  //GL("Compounding")
      parent.socket.emit('compound', {
        items: [c[i], c[i + 1], c[i + 2]],
        scroll_num: scroll,
        offering_num: null,
        clevel: c[0]
      });
	  return
	  
    }
  }
  
  GL("Work Complete")
}

function find_item(filter) {
  for (let i = 0; i < character.items.length; i++) {
    let item = character.items[i];

    if (item && filter(item))
      return [i, character.items[i]];
  }

  return [-1, null];
}

function offloaditems(){
	if(tooSoon(next_offloaditems)){return};
	offloadOtherChar = "Potmiddleman";
	offload = 1;
	if(character.name===offloadOtherChar){offload = 0};
	GL("Offloading Items...")
	for(InvNum in character.items){
		let wItem = character.items[InvNum];
		if(wItem){
			let wItemcnt = (character.items[InvNum].q || 1)
			sendAmt = wItemcnt
			switch(wItem.name){
				case "dexamulet":
				case "hpamulet":
				case "intamulet":
				case "stramulet":
				case "dexbelt":
				case "hpbelt":
				case "intbelt":
				case "strbelt":
				case "dexearring":
				case "intearring":
				case "strearring":
				case "vitearring":
				case "orbofint":
				case "orbofres":
				case "orbofsc":
				case "orbofstr":
				case "orbofhp":
				case "dexring":
				case "intring":
				case "ringsj":
				case "strring":
				case "vitring":
				//case "":
					DepBox = "items1";
					break;
				case "mpot0":
				case "mpot1":
				case "hpot0":
				case "hpot1":
				case "stand0":
					continue;
				case "candypop":
					if(wItemcnt>25){sendAmt = wItemcnt - 25; break}else{continue};
					
				default:
					DepBox = "items0"
			} //switch
			
			//GL(sendAmt)
			//if(!sendAmt || sendAmt<1){sendAmt=1};
			if(offload && !character.bank){
				send_item(offloadOtherChar,InvNum,sendAmt);
			}else if(!offload && character.bank){
				bank_store(InvNum,DepBox,0);
				
			}else if(offload && character.bank){
				bank_store(InvNum,DepBox,0);
				
			}
			ext_offloaditems = NQD(lmtr_offloaditemsRate,"s")
		} //if
		
	} //for
	
	if(!tooSoon(next_offloaditems)){next_offloaditems = NQD(lmtr_offloaditemsRate,"s")}
	//TSOL_offloaditems = NQD()
	
}

function cast(spell, target){
	if(can_use(spell) && target){use(spell,target)}
}

function MergeMode(){
	if(tooSoon(next_compounditems)){return};
	compound_items();
	next_compounditems = NQD(lmtr_compounditemsRate,"s");
}

function TradeSlotsFull(){
	let fullTradeSlots = 0;
	for(i in tradeSlotList){
		if(character.slots[tradeSlotList[i]]){fullTradeSlots += 1};
	}
	if(fullTradeSlots==16){return true};
	return false
}

function TradeMode(){
	if(tooSoon(next_TradePostItems) || TradeSlotsFull()){return};
	GL(NQD());
	
	if(character.gold>(20*3000)){buy("hpot0",3000);};
	if(character.gold>(20*3000)){buy("mpot0",3000);};
	
	for(cinv = 14; cinv >= 0; cinv--){
	let wTItem = character.items[cinv];
	if(!wTItem || !filterItemsTradeMode(wTItem)){continue};
	for(i in tradeSlotList){
		if(character.slots[tradeSlotList[i]]){continue};
		let wTItemcnt = character.items[cinv].q;
		if(quant>wTItemcnt){break};
		let tslot = tradeSlotList[i];
		setTimeout(trade(cinv,tslot,perPrice,quant),100);
		GL(cinv+"="+wTItemcnt+"->"+tslot);
		lastSolditemname = wTItem.name;
		if(wTItemcnt<=1000){break};
	}
		//buy(wTItem.name,quant);
	
	}
	//GL("Posted Items.")
	
	if(character.gold>(20*quant)){
		if(lastSolditemname==""){
			//buy("hpot0",quant);
			//buy("mpot0",quant);
		}else if(lastSolditemname=="hpot0"){
			//buy("hpot0",quant);
		}else if(lastSolditemname=="mpot0"){
			//buy("mpot0",quant);
		}
	}
	
	next_TradePostItems = NQD(lmtr_tradepostitemsRate,"s");
}

function filterItemsTradeMode(wTItem){
	quant = 1;
	switch(wTItem.name){
		case "stand0":
		case "candypop":
			return false;
		case "mpot0":
		case "hpot0":
			perPrice = 10;
			quant = 1000;
			return true
			//break;
		case "mpot1":
		case "hpot1":
			perPrice = 55;
			quant = 1000;
			return true
			//break;
			
	}
	return false
}

function autoAttack(targ_autoAttack,forceSwitch){
	var ctarget = get_targeted_monster();
	let target = get_nearest_monster({target:"Logic",target:"Landstander",target:"Boozn",target:"Indubitiable",target:"Scriptkiddie",target:"EvilAltarBoy"})
	
	if(targ_autoAttack && forceSwitch){
		target=targ_autoAttack;
		if(can_attack(target))
		{
			set_message("Attack:"+character.attack);
			attack(target);
		}
	}
	
	if(!target)
	{
		//target=get_nearest_monster({target:"Logic",target:"EvilAltarBoy",target:"Boozn",target:"Indubitiable",target:"Scriptkiddie",target:"Landstander"});
		target=get_nearest_monster();
		//if(target){change_target(target)}
	}
	
	if(!in_attack_range(target)){target=get_nearest_monster()}

	if(can_attack(target))
	{
		set_message("Attack:"+character.attack);
		attack(target);
	}
	
}

function autoAssist(targ_autoAssist){
	
	//followOtherSelfname = isOtherSelf();
	//game_log(followOtherSelfname);
	//followTarget(followOtherSelfname);
	
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

setInterval(MainLooper,MainLooperRate);
// Main Looper
function MainLooper(){
	//performance_trick(); //thanks javascript? browers only?
	//if(is_paused()){pause()};
	
	if(character.ctype=="merchant"){
		setInterval(MerchantBuffMode(), 250);
		setInterval(MergeMode(), lmtr_compounditemsRate);
		setInterval(TradeMode(), lmtr_tradepostitemsRate);
		pause();
		
		};
	
	pause();
	if(character.rip || !god_mode){return}
	set_message("");
	
	UseMPPot();
	if(character.ctype=="priest"){HealerModeSelf()};
	UseHPPot();
	
	if(character.ctype=="merchant"){return};
	if(is_moving(character)){if(is_paused()){pause();};return};
	
	if(!character.slots.elixir){use(41)};
	
	if(character.ctype=="priest"){HealerMode()};
	if(character.ctype=="mage"){EnergizeCaptain()};
	if(character.ctype=="warrior"){TankMode()};
	
	loot();
	if(get_player("Potmiddleman")){offloaditems()};
	
	//if(!attack_mode || character.rip || is_moving(character)) return;
	
	
	if(character.ctype=="priest"){HealerModeAoE()};
	
	
	//autoAssist();
	autoAttack();
	UseHPPot();
	//partyManager("Logic");
	//partyManager();
	
	
	if(get_player("Potmiddleman") && character.name!="Potmiddleman" && character.gold>lmtr_SendGoldAboveAtLeast){send_gold("Potmiddleman",(character.gold-lmtr_SendGoldAboveBase))};
	//if(is_paused()){pause()};
	
}