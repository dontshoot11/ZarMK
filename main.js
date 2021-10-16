const $arena = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

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

const createElement = function(tag, className) {
    const $tag = document.createElement(tag);
    className ? $tag.classList.add(className) : null;
    return $tag;
};

const createPlayer = function(player) {
    const $fighter = createElement("div", `player${player.player}`);
    const $progressBar = createElement("div", "progressbar");
    const $life = createElement("div", "life");
    $life.style.width = `${player.hp}%`;
    const $name = createElement("div", "name");
    $name.innerText = `${player.name}`;
    const $character = createElement("div", "character");
    const $img = createElement("img");
    $img.src = `${player.img}`;

    $character.appendChild($img);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $fighter.appendChild($progressBar);
    $fighter.appendChild($character);

    return $fighter;
};

const changeHP = function(player) {
    const damage = getRandomNumber(1, 21);
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    player.hp -= damage;
    player.hp > 0 ?
        ($playerLife.style.width = `${player.hp}%`) :
        ($playerLife.style.width = `0%`);
    checkPlayers();
};

const playerWin = function(name) {
    const $winTitle = createElement("div", "winTitle");
    $winTitle.innerText = `${name} win`;
    return $winTitle;
};

const checkPlayers = function() {
    if (player1.hp < 0 && player2.hp > 0) {
        $arena.appendChild(playerWin(`${player2.name}`));
        $randomButton.disabled = true;
        return;
    } else if (player2.hp < 0 && player1.hp > 0) {
        $arena.appendChild(playerWin(`${player1.name}`));
        $randomButton.disabled = true;
        return;
    }
};

const getRandomNumber = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));

$randomButton.addEventListener("click", () => {
    const playerNumber = getRandomNumber(1, 3);
    playerNumber === 1 ? changeHP(player1) : changeHP(player2);
});