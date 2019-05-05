function GL(message){
	game_log(message);
}

setInterval(Exchanger,2000);

function Exchanger(){
	GL("Exhanging Items...");
	for(InvNum in character.items){
		let wItem = character.items[InvNum];
		if(wItem && filterItemsExchanger(wItem)){
			let wItemcnt = (character.items[InvNum].q || 1)
			let turnincnt = ((wItemcnt-processOver)/quant)
			if(turnincnt>=1){
				for(xchgLoopcnt = 1;xchgLoopcnt<=turnincnt;xchgLoopcnt++){
					GL(wItem.name)
					setTimeout(exchange(InvNum),50)
					break;
				}
				
			}
		}
		
	}
	
}

function filterItemsExchanger(wItem){
	//quant = 1;
	switch(wItem.name){
		case "candypop":
			quant = 10;
			processOver = 200;
			return true
			//break;
		case "redenvelope":
		case "redenvelopev2":
			quant = 1;
			processOver = 5;
			return true
			//break;
		case "armorbox":
		case "weaponbox":
		case "gem0":
		case "gem1":
			quant = 1;
			processOver = 5;
			return true
			//break;
		case "seashell":
			quant = 20;
			processOver = 5;
			return false
			//break;
	}
	return false
}
