setInterval(function(){
	if(!character.bank){return};
	for(InvNum in character.items){
		let wItem = character.items[InvNum];
		if(wItem && filterItems(wItem)){
			bank_store(InvNum)
			game_log(wItem.name)
		}
	}
},200);

function filterItems(wItem){
	switch(wItem.name){
		case "stand0":
		case "mpot0":
		case "mpot1":
		case "hpot0":
		case "hpot1":
			return false;
	}
	return true
}