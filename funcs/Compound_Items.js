// Auto Compounding
// Courtesy of: Mark

var compounditemsList = [
	'wbook0', 		'ringsj', 		'amuletofm', 	'orbofres', 	'orbofsc', 
	'dexamulet', 	'intamulet', 	'hpamulet', 	'stramulet',
	'dexbelt', 		'intbelt', 		'hpbelt', 		'strbelt',
	'dexearring', 	'intearring', 	'vitearring', 	'strearring',
	'dexring', 		'intring', 		'vitring', 		'strring',
					'orbofint', 	'orbofhp', 		'orbofstr'
	];
	
//var whitelist = ['wbook0', 'intamulet', 'stramulet', 'dexamulet', 'intearring', 'strearring', 'dexearring', 'hpbelt', 'hpamulet', 'ringsj', 'amuletofm', 'orbofstr', 'orbofint', 'orbofres', 'orbofhp'];
var use_better_scrolls = false; //240,000 Gold Scroll = true [only will use for +2 and higher], 6,400 Gold Scroll = false [will only use base scroll no matter what]
var maxLevel = 3;
//compound settings

function GL(message){
	game_log(message)
}

setInterval(compound_items(),333);

function compound_items() {
  let to_compound = character.items.reduce((collection, item, index) => {
    if (item && item.level < maxLevel && compounditemsList.includes(item.name)) {
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
        parent.buy(scroll_name);
		baughtScroll = 1
        return
      }
      parent.socket.emit('compound', {
        items: [c[i], c[i + 1], c[i + 2]],
        scroll_num: scroll,
        offering_num: null,
        clevel: c[0]
      });
	  return
	  
    }
  }
  
  GL("Work Complete?")
}

function find_item(filter) {
  for (let i = 0; i < character.items.length; i++) {
    let item = character.items[i];

    if (item && filter(item))
      return [i, character.items[i]];
  }

  return [-1, null];
}