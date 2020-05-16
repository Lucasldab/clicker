var bloodCount = 0;
var autoblood = 0;
var bloodyflesh = 0;
var multiplier = 1;
var redcells = 0;
var bloodglyphs = 0;
var bloodmana = 0;
var bloodrunes = 0;

setInterval(timer, 1000);

function update() {
    if (redcells >= 1) {
        document.getElementById('text').value = bloodCount.toFixed(1);
    } else {
        document.getElementById('text').value = bloodCount
    }
    if (bloodCount > 1) {
        if (redcells >= 1) {
            document.title = bloodCount.toFixed(1) + " Bloods";
        } else {
            document.title = bloodCount + " Bloods";
        }
    } else {
        document.title = bloodCount + " Blood";
    }
    document.getElementById("ammountMultiplier").innerHTML = "Multiplier x" + (multiplier + 1);
    document.getElementById("ammountMultiplier2").innerHTML = "x" + (multiplier + 1);
    document.getElementById("costMultiplier").innerHTML = ((multiplier + 1) * 500) + " Bloods";
    document.getElementById("currentMultiplier").innerHTML = "Your current multiplier is x" + (multiplier);

    document.getElementById("ammountRedCells").innerHTML = redcells;
    document.getElementById("costRedCells").innerHTML = (redcells + 1) * 10;

    document.getElementById("ammountMovingBlood").innerHTML = autoblood;
    document.getElementById("costMovingBlood").innerHTML = (autoblood + 1) * 15;

    document.getElementById("ammountBloodyFlesh").innerHTML = bloodyflesh;
    document.getElementById("costBloodyFlesh").innerHTML = (bloodyflesh + 1) * 25;

    document.getElementById("ammountBloodGlyphs").innerHTML = bloodglyphs;
    document.getElementById("costBloodGlyphs").innerHTML = (bloodglyphs + 1) * 50;

    document.getElementById("ammountBloodMana").innerHTML = bloodmana;
    document.getElementById("costBloodMana").innerHTML = (bloodmana + 1) * 100;

    document.getElementById("ammountBloodRunes").innerHTML = bloodrunes;
    document.getElementById("costBloodRunes").innerHTML = (bloodrunes + 1) * 200;

    document.getElementById("bloodPerSecond").innerHTML = ((autoblood + (bloodyflesh * 2) + (bloodglyphs * 5) + (bloodmana * 10) + (bloodrunes * 15)) * multiplier) + " blood/s";
}

function timer() {
    bloodCount = bloodCount + autoblood * multiplier;
    bloodCount = bloodCount + (bloodyflesh * 2) + (bloodglyphs * 5) + (bloodmana * 10) + (bloodrunes * 15) * multiplier;
    update();
}

function add() {
    bloodCount = bloodCount + 1 + (redcells / 10);
    update();
}

function save() {
    localStorage.setItem("bloodCount", bloodCount);
    localStorage.setItem("autoblood", autoblood);
    localStorage.setItem("bloodyflesh", bloodyflesh);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("redcells", redcells);
    localStorage.setItem("bloodglyphs", bloodglyphs);
    localStorage.setItem("bloodmana", bloodmana);
    localStorage.setItem("bloodrunes", bloodrunes);
}

function load() {
    bloodCount = localStorage.getItem("bloodCount");
    bloodCount = parseFloat(bloodCount);
    autoblood = localStorage.getItem("autoblood");
    autoblood = parseInt(autoblood);
    bloodyflesh = localStorage.getItem("bloodyflesh");
    bloodyflesh = parseInt(bloodyflesh);
    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier);
    redcells = localStorage.getItem("redcells");
    redcells = parseInt(redcells);
    bloodglyphs = localStorage.getItem("bloodglyphs");
    bloodglyphs = parseInt(bloodglyphs);
    bloodmana = localStorage.getItem("bloodmana");
    bloodmana = parseInt(bloodmana);
    bloodrunes = localStorage.getItem("bloodrunes");
    bloodrunes = parseInt(bloodrunes);
    update();
}

function buyRedCells() {
    if (bloodCount >= ((redcells + 1) * 10)) {
        bloodCount = bloodCount - ((redcells + 1) * 10);
        redcells++;
        update();
    }
}

function buyMovingBlood() {
    if (bloodCount >= ((autoblood + 1) * 15)) {
        bloodCount = bloodCount - ((autoblood + 1) * 15);
        autoblood++;
        update();
    }
}

function buyBloodyFlesh() {
    if (bloodCount >= ((bloodyflesh + 1) * 25)) {
        bloodCount = bloodCount - ((bloodyflesh + 1) * 25);
        bloodyflesh++;
        update();
    }
}

function buyMultiplier() {
    if (bloodCount >= ((multiplier + 1) * 500)) {
        bloodCount = bloodCount - ((multiplier + 1) * 500);
        multiplier++;
        update();
    }
}

function buyBloodGlyphs() {
    if (bloodCount >= ((bloodglyphs + 1) * 50)) {
        bloodCount = bloodCount - ((bloodglyphs + 1) * 50);
        bloodglyphs++;
        update();
    }
}

function buyBloodMana() {
    if (bloodCount >= ((bloodmana + 1) * 100)) {
        bloodCount = bloodCount - ((bloodmana + 1) * 100);
        bloodmana++;
        update();
    }
}

function buyBloodRunes() {
    if (bloodCount >= ((bloodrunes + 1) * 200)) {
        bloodCount = bloodCount - ((bloodrunes + 1) * 200);
        bloodrunes++;
        update();
    }
}