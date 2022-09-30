let players1 = [
    prompt("1-oyinchini kiriting"),
    prompt("2-oyinchini kiriting"),
    prompt("3-oyinchini kiriting"),
    prompt("4-oyinchini kiriting"),
];
let players2 = [
    prompt("5-oyinchini kiriting"),
    prompt("6-oyinchini kiriting"),
    prompt("7-oyinchini kiriting"),
    prompt("8-oyinchini kiriting"),
];
let players3 = [
    prompt("9-oyinchini kiriting"),
    prompt("10-oyinchini kiriting"),
];

let kattaDiv = document.querySelector(".umumiy");
let count = 1;
function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
async function ran(players) {
  while (players.length) {
    await sleep();
    let Ind = Math.floor(Math.random() * players.length);
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    div.setAttribute("id", `d${count}`);
    div.setAttribute(
      "class",
      "animate__animated animate__bounceInUp animate__repeat-1"
    );
    img.setAttribute("src", "./img/606545.png");
    p.textContent = players[Ind];
    count++;
    div.append(img, p);
    kattaDiv.append(div);
    players.splice(Ind, 1);
  }
}
async function bir() {
  await ran(players1);
  await ran(players2);
  await ran(players3);
}
bir();
// Najot Talim Jamoasi ;-)
