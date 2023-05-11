let u = 0;

let ups = 0;
let costOfUps = 10;

let upc = 1;
let costOfUpC = 10;
function moreUPS() {
  if (u > costOfUps) {
    ups += 10;
    u -= costOfUps;
    costOfUps = increasePrice("ups");
  }
  update();
}
function update() {
  document.getElementById('u').innerHTML = "Alvaris: "+u.toString();
  document.getElementById('ups').innerHTML = "Alvaris per Second: " + ups;
  document.getElementById('upc').innerHTML = "Alvaris per Click: " + upc;  
}
function moreUPC() {
  if (u > costOfUpC) {
    upc += 10;
    u -= costOfUpC;
    costOfUpC = increasePrice("upc");
  }
  update();
}
async function moreU() {
  //just a bit of responsiveness
  document.getElementById('clickericon').width += 10;
  document.getElementById('clickericon').height += 10;
  await new Promise(resolve => setTimeout(resolve, 50));
  document.getElementById('clickericon').width -= 10;
  document.getElementById('clickericon').height -= 10;

  let lol = ['Great!', 'Cool!', "Livin' rich, eh?"];
  u += upc;
  update();
}
async function rec() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  u += ups;
  update();
  requestAnimationFrame(rec);
}
rec();
function increasePrice(which) {
  let currentPrice;
  if (which == "ups") {currentPrice = costOfUps} else if (which == "upc") {currentPrice = costOfUpC;}
  
  let nexPrice;
  switch (currentPrice) {
    case 10: //Minimum Price
      nexPrice = 20;
      break;
    case 20:
        nexPrice = 30;
      break;
    case 30:
      nexPrice = 40;
      break;
    case 40:
        nexPrice = 50;
      break;
    case 50:
        nexPrice = 60;
      break;
    case 60:
        nexPrice = 70;
      break;
    case 70:
      nexPrice = 80;
      break;
    case 80:
        nexPrice = 90;
      break;
    case 90:
        nexPrice = 100;
      break;
    case 100:
        nexPrice = 115;
      break;
    case 115:
        nexPrice = 133;
      break;
    case 133:
        nexPrice = 153;
      break;
    case 153:
        nexPrice = 175;
      break;
    case 175:
      nexPrice = 202;
      break;
    case 202:
        nexPrice = 232;
      break;
    case 232:
        nexPrice = 267;
      break;
    case 267:
        nexPrice = 306;
      break;
    case 306:
        nexPrice = 352;
      break;
    case 352:
        nexPrice = 405;
      break;
    case 405:
        nexPrice = 466;
      break;
    case 466:
      nexPrice = 536;
      break;
    case 536:
        nexPrice = 616;
      break;
    case 616:
        nexPrice = 708;
      break;
    case 708:
        nexPrice = 814;
      break;
    case 814:
        nexPrice = 936;
      break;
    case 936:
      nexPrice = 1077;
      break;
    case 1077:
        nexPrice = 1200;
      break;
    case 1200:
        nexPrice = 1300;
      break;
    case 1300:
        nexPrice = 1400;
      break;
    case 1400:
        nexPrice = 1500;
      break;
    case 1500:
        nexPrice = 1600;
      break;
    case 1600:
        nexPrice = 1800;
      break;
    case 1800:
        nexPrice = 2000;
      break;
    case 2000:
        nexPrice = 2200;
      break;
    case 2200:
        nexPrice = 2500;
      break;
    case 2500:
        nexPrice = 2700;
      break;
    case 2700:
        nexPrice = 3000;
      break;
    case 3000:
        nexPrice = 3100;
      break;
    case 3100:
      nexPrice = 3200;
      break;
    case 3200:
      nexPrice = 3300;
      break;
    case 3300:
      nexPrice = 3400;
      break;
    case 3400:
      nexPrice = 3500;
      break;
    case 3500:
      nexPrice = 3600;
      break;
    case 3600:
      nexPrice = 3700;
      break;
    case 3700:
      nexPrice = 3800;
      break;
    case 3800:
      nexPrice = 3900;
      break;
    case 3900:
      nexPrice = 4000;
      break;
    case 4000:
      nexPrice = 4300;
      break;
    case 4300:
      nexPrice = 4600;
      break;
    case 4600:
      nexPrice = 5000;
      break;
    case 5000:
      nexPrice = 5500;
      break;
    case 5500:
      nexPrice = 6000;
      break;
    case 6000:
      nexPrice = 6500;
      break;
    case 6500:
      nexPrice = 7200;
      break;
    case 7200:
      nexPrice = 8000;
      break;
    case 8000:
      nexPrice = 8900;
      break;
    case 8900:
      nexPrice = 10000;
      break;
    case 10000:
      nexPrice = 14000;
      break;
    case 14000:
      nexPrice = 17000;
      break;
    case 17000:
      nexPrice = 20000;
      break;
    case 20000:
      nexPrice = 23000;
      break;
    case 23000:
      nexPrice = 26000;
      break;
    case 26000:
      nexPrice = 30000;
      break;
    case 30000:
      nexPrice = 40000;
      break;
    case 40000:
      nexPrice = 50000;
      break;
    case 50000:
      nexPrice = 60000;
      break;
    case 60000:
      nexPrice = 70000;
      break;
    case 70000:
      nexPrice = 80000;
      break;
    case 80000:
      nexPrice = 90000;
      break;
    case 90000:
      nexPrice = 100000;
      break;
    case 100000:
      nexPrice = 130000;
      break;
    case 130000:
      nexPrice = 170000;
      break;
    case 170000:
      nexPrice = 220000;
      break;
    case 220000:
      nexPrice = 290000;
      break;
    case 290000:
      nexPrice = 380000;
      break;
    case 380000:
      nexPrice = 500000;
      break;
    case 500000:
      nexPrice = 650000;
      break;
    case 650000:
      nexPrice = 800000;
      break;
    case 800000:
      nexPrice = 1000000;
      break;
    case 1000000:
      nexPrice = 2000000;
      break;
    case 2000000:
      nexPrice = 3000000;
      break;
    case 3000000:
      nexPrice = 4000000;
      break;
    case 4000000:
      nexPrice = 5000000;
      break;
    case 5000000:
      nexPrice = 7000000;
      break;
    case 7000000:
      nexPrice = 9000000;
      break;
    case 9000000:
      nexPrice = 12000000;
      break;
    case 12000000:
      nexPrice = 15000000;
      break;
    case 15000000:
      nexPrice = 19000000;
      break;
    case 19000000:
      nexPrice = 23000000;
      break;
    case 23000000:
      nexPrice = 27000000;
      break;
    case 27000000:
      nexPrice = 31000000;
      break;
    case 31000000:
      nexPrice = 35000000;
      break;
    case 35000000:
      nexPrice = 40000000;
      break;
    case 40000000:
      nexPrice = 48000000;
      break;
    case 48000000:
      nexPrice = 58000000;
      break;
    case 58000000:
      nexPrice = 68000000;
      break;
    case 68000000:
      nexPrice = 79000000;
      break;
    case 79000000:
      nexPrice = 89000000;
      break;
    case 89000000:
      nexPrice = 100000000;
      break;
    case 100000000:
      break;
    }
    return nexPrice;
}
document.getElementById('clickericon').addEventListener('click', moreU)
update()

