let players1 = ["Abbos", "Omadbek", "Nomonjon", "Azimxoja"];
let players2 = ["Murtazoxon", "Muhammadyahyo", "Sanjar Ali", "Mirabdulloh"];
let players3 = ["Botirjon", "Abdulaziz"];

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
