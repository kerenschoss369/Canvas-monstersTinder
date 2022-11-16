const gMonsters = createMonsters();
var gCurrPlace = 0; //the current place on the monsters array

function createMonsters() {
    var monsters = [];
    for (var i = 1; i <= 8; i++) {
        var img = new Image();
        img.src = `images/${i}.png`;
        img.classList.add('monster-img');
        monsters.push(img);
    }
    return monsters;
}

function updateCurrPlace() {
    if (gCurrPlace === 7) gCurrPlace = 0;
    else gCurrPlace++;
}

function nextMonster() {
    updateCurrPlace();
    return gMonsters[gCurrPlace];
}