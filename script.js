var sword1;
var spear1;
var mount1;
var range1;
var siege1;
var sword2;
var spear2;
var mount2;
var range2;
var siege2;
var faction1;
var faction2;
var speed1;
var speed2;

function validate1() {
   if (
      (sword1.length != 0 ||
         spear1.length != 0 ||
         mount1.length != 0 ||
         range1.length != 0 ||
         siege1.length != 0 ||
         sword2.length != 0 ||
         spear2.length != 0 ||
         mount2.length != 0 ||
         range2.length != 0 ||
         siege2.length != 0) &&
      (speed1.length == 0 || speed1 == '0')
   ) {
      alert('Tier Troops Training Speed Needed.');
   } else if (
      (faction1.length != 0 || faction2.length != 0) &&
      (speed2.length == 0 || speed2 == '0')
   ) {
      alert('Faction Troops Training Speed Needed.');
   } else {
      validate2();
   }
}

function validate2() {
   sword1 = parseFloat(sword1);
   spear1 = parseFloat(spear1);
   mount1 = parseFloat(mount1);
   range1 = parseFloat(range1);
   siege1 = parseFloat(siege1);
   sword2 = parseFloat(sword2);
   spear2 = parseFloat(spear2);
   mount2 = parseFloat(mount2);
   range2 = parseFloat(range2);
   siege2 = parseFloat(siege2);
   faction1 = parseFloat(faction1);
   faction2 = parseFloat(faction2);
   speed1 = parseFloat(speed1);
   speed2 = parseFloat(speed2);

   if (isNaN(sword1)) {
      document.getElementById('sword1').value = '';
   }
   if (isNaN(spear1)) {
      document.getElementById('spear1').value = '';
   }
   if (isNaN(mount1)) {
      document.getElementById('mount1').value = '';
   }
   if (isNaN(range1)) {
      document.getElementById('range1').value = '';
   }
   if (isNaN(siege1)) {
      document.getElementById('siege1').value = '';
   }
   if (isNaN(sword2)) {
      document.getElementById('sword2').value = '';
   }
   if (isNaN(spear2)) {
      document.getElementById('spear2').value = '';
   }
   if (isNaN(mount2)) {
      document.getElementById('mount2').value = '';
   }
   if (isNaN(range2)) {
      document.getElementById('range2').value = '';
   }
   if (isNaN(siege2)) {
      document.getElementById('siege2').value = '';
   }
   if (isNaN(faction1)) {
      document.getElementById('faction1').value = '';
   }
   if (isNaN(faction2)) {
      document.getElementById('faction2').value = '';
   }
   if (isNaN(speed1)) {
      document.getElementById('speed1').value = '';
   }
   if (isNaN(speed2)) {
      document.getElementById('speed2').value = '';
   }
   calculate_rss();
}

function calculate_time(time, time2) {
   if (isNaN(speed1)) {
      speed1 = 0;
   }
   if (isNaN(speed2)) {
      speed2 = 0;
   }
   var hours = (time / 3600) * 1000000;
   var hours2 = (time2 / 3600) * 1000000;
   hours = hours / (1 + speed1 / 100) + hours2 / (1 + speed2 / 100);
   if (hours / 8 >= 1000) {
      document.getElementById('amount-hour8').innerHTML = `8h Item: ${(
         hours / 8000
      ).toFixed(2)} K`;
   } else {
      document.getElementById('amount-hour8').innerHTML = `8h Item: ${Math.ceil(
         hours / 8
      )}`;
   }
   if (hours / 15 >= 1000) {
      document.getElementById('amount-hour15').innerHTML = `15h Item: ${(
         hours / 15000
      ).toFixed(2)} K`;
   } else {
      document.getElementById(
         'amount-hour15'
      ).innerHTML = `15h Item: ${Math.ceil(hours / 15)}`;
   }

   //    let day15 = hours / 360;
   //    let gold = (day15 * 3950) / 1000;
   //    if (gold > 1000) {
   //       document.getElementById('amount-gold').innerHTML = `Gold: ${(
   //          gold / 1000.0
   //       ).toFixed(2)} M`;
   //    } else {
   //       document.getElementById('amount-gold').innerHTML = `Gold: ${gold.toFixed(
   //          2
   //       )} K`;
   //    }
}

function calculate_rss() {
   var food = 0.0;
   var wood = 0.0;
   var stone = 0.0;
   var iron = 0.0;
   var silver = 0.0;
   var time = 0.0;
   var time2 = 0.0;
   var score = 0.0;
   var might = 0.0;
   if (sword1 >= 0) {
      food = food + sword1 * 16;
      wood = wood + sword1 * 5;
      stone = stone + sword1 * 0;
      iron = iron + sword1 * 35;
      silver = silver + sword1 * 2;
      time = time + sword1 * 10;
      score = score + sword1 * 1;
      might = might + sword1 * 5;
   }
   if (spear1 >= 0) {
      food = food + spear1 * 16;
      wood = wood + spear1 * 24;
      stone = stone + spear1 * 6;
      iron = iron + spear1 * 0;
      silver = silver + spear1 * 3;
      time = time + spear1 * 10;
      score = score + spear1 * 1;
      might = might + spear1 * 5;
   }
   if (mount1 >= 0) {
      food = food + mount1 * 27;
      wood = wood + mount1 * 0;
      stone = stone + mount1 * 17;
      iron = iron + mount1 * 7;
      silver = silver + mount1 * 3;
      time = time + mount1 * 10;
      score = score + mount1 * 1;
      might = might + mount1 * 5;
   }
   if (range1 >= 0) {
      food = food + range1 * 8;
      wood = wood + range1 * 25;
      stone = stone + range1 * 5;
      iron = iron + range1 * 9;
      silver = silver + range1 * 3;
      time = time + range1 * 9;
      score = score + range1 * 1;
      might = might + range1 * 5;
   }
   if (siege1 >= 0) {
      food = food + siege1 * 6;
      wood = wood + siege1 * 13;
      stone = stone + siege1 * 33;
      iron = iron + siege1 * 2;
      silver = silver + siege1 * 3;
      time = time + siege1 * 22;
      score = score + siege1 * 1;
      might = might + siege1 * 15;
   }
   if (sword2 >= 0) {
      food = food + sword2 * 590;
      wood = wood + sword2 * 160;
      stone = stone + sword2 * 0;
      iron = iron + sword2 * 1060;
      silver = silver + sword2 * 45;
      time = time + sword2 * 82;
      score = score + sword2 * 5;
      might = might + sword2 * 25;
   }
   if (spear2 >= 0) {
      food = food + spear2 * 615;
      wood = wood + spear2 * 1165;
      stone = stone + spear2 * 175;
      iron = iron + spear2 * 0;
      silver = silver + spear2 * 60;
      time = time + spear2 * 82;
      score = score + spear2 * 5;
      might = might + spear2 * 25;
   }
   if (mount2 >= 0) {
      food = food + mount2 * 1290;
      wood = wood + mount2 * 0;
      stone = stone + mount2 * 590;
      iron = iron + mount2 * 150;
      silver = silver + mount2 * 60;
      time = time + mount2 * 82;
      score = score + mount2 * 5;
      might = might + mount2 * 25;
   }
   if (range2 >= 0) {
      food = food + range2 * 220;
      wood = wood + range2 * 1115;
      stone = stone + range2 * 135;
      iron = iron + range2 * 225;
      silver = silver + range2 * 30;
      time = time + range2 * 74;
      score = score + range2 * 5;
      might = might + range2 * 45;
   }
   if (siege2 >= 0) {
      food = food + siege2 * 170;
      wood = wood + siege2 * 480;
      stone = stone + siege2 * 1290;
      iron = iron + siege2 * 45;
      silver = silver + siege2 * 50;
      time = time + siege2 * 180;
      score = score + siege2 * 5;
      might = might + siege2 * 55;
   }

   let booster = document.getElementById('booster');
   if (booster.checked) {
      score = score + (5 * score) / 100;
      might = might + (5 * might) / 100;
   }

   if (faction1 >= 0) {
      food = food + faction1 * 1288.7;
      wood = wood + faction1 * 887.09;
      stone = stone + faction1 * 808;
      iron = iron + faction1 * 683.87;
      silver = silver + faction1 * 67.74;
      time2 = time2 + faction1 * 270;
      score = score + faction1 * 20;
      might = might + faction1 * 75;
   }
   if (faction2 >= 0) {
      food = food + faction2 * 838.7;
      wood = wood + faction2 * 1048.39;
      stone = stone + faction2 * 1014.52;
      iron = iron + faction2 * 816.13;
      silver = silver + faction2 * 94.03;
      time2 = time2 + faction2 * 300;
      score = score + faction2 * 20;
      might = might + faction2 * 85;
   }

   if (food >= 1000 * 1000) {
      document.getElementById('amount-food').innerHTML = `Food: ${(
         food / 1000000.0
      ).toFixed(2)} T`;
   } else if (food >= 1000) {
      document.getElementById('amount-food').innerHTML = `Food: ${(
         food / 1000.0
      ).toFixed(2)} B`;
   } else {
      document.getElementById('amount-food').innerHTML = `Food: ${food.toFixed(
         2
      )} M`;
   }

   if (wood >= 1000 * 1000) {
      document.getElementById('amount-wood').innerHTML = `Wood: ${(
         wood / 1000000.0
      ).toFixed(2)} T`;
   } else if (wood >= 1000) {
      document.getElementById('amount-wood').innerHTML = `Wood: ${(
         wood / 1000.0
      ).toFixed(2)} B`;
   } else {
      document.getElementById('amount-wood').innerHTML = `Wood: ${wood.toFixed(
         2
      )} M`;
   }

   if (stone >= 1000 * 1000) {
      document.getElementById('amount-stone').innerHTML = `Stone: ${(
         stone / 1000000.0
      ).toFixed(2)} T`;
   } else if (stone >= 1000) {
      document.getElementById('amount-stone').innerHTML = `Stone: ${(
         stone / 1000.0
      ).toFixed(2)} B`;
   } else {
      document.getElementById(
         'amount-stone'
      ).innerHTML = `Stone: ${stone.toFixed(2)} M`;
   }

   if (iron >= 1000 * 1000) {
      document.getElementById('amount-iron').innerHTML = `Iron: ${(
         iron / 1000000.0
      ).toFixed(2)} T`;
   } else if (iron >= 1000) {
      document.getElementById('amount-iron').innerHTML = `Iron: ${(
         iron / 1000.0
      ).toFixed(2)} B`;
   } else {
      document.getElementById('amount-iron').innerHTML = `Iron: ${iron.toFixed(
         2
      )} M`;
   }

   if (silver >= 1000*1000) {
      document.getElementById('amount-silver').innerHTML = `Silver: ${(
         silver / 1000000.0
      ).toFixed(2)} T`;
   } else if (silver >= 1000) {
      document.getElementById('amount-silver').innerHTML = `Silver: ${(
         silver / 1000.0
      ).toFixed(2)} B`;
   } else {
      document.getElementById(
         'amount-silver'
      ).innerHTML = `Silver: ${silver.toFixed(2)} M`;
   }

   if (score >= 1000) {
      document.getElementById('amount-score').innerHTML = `Score: ${(
         score / 1000.0
      ).toFixed(2)} B`;
   } else {
      document.getElementById(
         'amount-score'
      ).innerHTML = `Score: ${score.toFixed(2)} M`;
   }

   if (might >= 1000) {
      document.getElementById('amount-might').innerHTML = `Might: ${(
         might / 1000.0
      ).toFixed(2)} B`;
   } else {
      document.getElementById(
         'amount-might'
      ).innerHTML = `Might: ${might.toFixed(2)} M`;
   }

   calculate_time(time, time2);
}

function getData() {
   sword1 = document.getElementById('sword1').value;
   spear1 = document.getElementById('spear1').value;
   mount1 = document.getElementById('mount1').value;
   range1 = document.getElementById('range1').value;
   siege1 = document.getElementById('siege1').value;
   sword2 = document.getElementById('sword2').value;
   spear2 = document.getElementById('spear2').value;
   mount2 = document.getElementById('mount2').value;
   range2 = document.getElementById('range2').value;
   siege2 = document.getElementById('siege2').value;
   faction1 = document.getElementById('faction1').value;
   faction2 = document.getElementById('faction2').value;
   speed1 = document.getElementById('speed1').value;
   speed2 = document.getElementById('speed2').value;
   validate1();
}

function cleardata() {
   if (confirm('Do you want to Clear All?')) {
      document.getElementById('sword1').value = '';
      document.getElementById('spear1').value = '';
      document.getElementById('mount1').value = '';
      document.getElementById('range1').value = '';
      document.getElementById('siege1').value = '';
      document.getElementById('sword2').value = '';
      document.getElementById('spear2').value = '';
      document.getElementById('mount2').value = '';
      document.getElementById('range2').value = '';
      document.getElementById('siege2').value = '';
      document.getElementById('faction1').value = '';
      document.getElementById('faction2').value = '';
      document.getElementById('speed1').value = '';
      document.getElementById('speed2').value = '';
      document.getElementById('amount-food').innerHTML = `Food: `;
      document.getElementById('amount-wood').innerHTML = `Wood: `;
      document.getElementById('amount-stone').innerHTML = `Stone: `;
      document.getElementById('amount-iron').innerHTML = `Iron: `;
      document.getElementById('amount-silver').innerHTML = `Silver: `;
      document.getElementById('amount-hour8').innerHTML = `8h Item: `;
      document.getElementById('amount-hour15').innerHTML = `15h Item: `;
      document.getElementById('amount-gold').innerHTML = `Gold: `;
      document.getElementById('amount-score').innerHTML = `Score: `;
      document.getElementById('amount-might').innerHTML = `Might: `;
   }
}
