const player1 = {
    player: 1,
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["sword", "axe"],
    attack: () => {
        console.log(`${player1.name + " Fight"}`);
    },
};

const player2 = {
    player: 2,
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["sword", "axe"],
    attack: () => {
        console.log(`${player2.name + " Fight"}`);
    },
};

const createPlayer = function(className, player) {
    const $arena = document.querySelector(".arenas");
    const $fighter = document.createElement("div");
    $fighter.classList.add(`${className}`);
    const $progressBar = document.createElement("div");
    $progressBar.classList.add("progressbar");
    const $life = document.createElement("div");
    $life.classList.add("life");
    $life.style.width = `${player.life}`;
    const $name = document.createElement("div");
    $name.classList.add("name");
    $name.innerText = `${player.name}`;
    const $character = document.createElement("div");
    $character.classList.add("character");
    const $img = document.createElement("img");
    $img.src = `${player.img}`;

    $character.appendChild($img);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $fighter.appendChild($progressBar);
    $fighter.appendChild($character);
    $arena.appendChild($fighter);
};

createPlayer("player1", player1);
createPlayer("player2", player2);