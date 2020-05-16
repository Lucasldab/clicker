var bloodCount = 0;
var autoblood = 0;
var bloodyflesh = 0;
var multiplier = 1;
var redcells = 0;

setInterval(timer, 1000);

function update() {
    if (redcells>=1){
        document.getElementById('text').value = bloodCount.toFixed(1);
    }else{
        document.getElementById('text').value = bloodCount
    }
    if (bloodCount > 1) {
        if (redcells >= 1){
            document.title = bloodCount.toFixed(1) + " Bloods";
        }else{
            document.title = bloodCount + " Bloods";
        }
    } else {
        document.title = bloodCount + " Blood";
    }
    document.getElementById("ammountMultiplier").innerHTML = "Multiplier x" + (multiplier+1);
    document.getElementById("ammountMultiplier2").innerHTML = "x" + (multiplier+1);
    document.getElementById("costMultiplier").innerHTML = ((multiplier+1)*100) + " Bloods";
    document.getElementById("currentMultiplier").innerHTML = "Your current multiplier is x" + (multiplier);

    document.getElementById("ammountRedCells").innerHTML = redcells;
    document.getElementById("costRedCells").innerHTML = (redcells + 1) * 10;

    document.getElementById("ammountMovingBlood").innerHTML = autoblood;
    document.getElementById("costMovingBlood").innerHTML = (autoblood + 1) * 12;

    document.getElementById("ammountBloodyFlesh").innerHTML = bloodyflesh;
    document.getElementById("costBloodyFlesh").innerHTML = (bloodyflesh + 1) * 15;

    document.getElementById("bloodPerSecond").innerHTML = ((autoblood + (bloodyflesh*2))*multiplier) + " blood/s";
}

function timer() {
    bloodCount = bloodCount + autoblood*multiplier;
    bloodCount = bloodCount + (bloodyflesh*2)*multiplier;
    update();
}

function add() {
    bloodCount = bloodCount + 1 + (redcells/10);
    update();
}

function save() {
    localStorage.setItem("bloodCount", bloodCount);
    localStorage.setItem("autoblood", autoblood);
    localStorage.setItem("bloodyflesh", bloodyflesh);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("redcells", redcells);
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
    update();
}

function redCells() {
    if (bloodCount >= ((redcells + 1) * 10)) {
        bloodCount = bloodCount - ((redcells + 1) * 10);
        redcells++;
        update();
    }
}

function buyMovingBlood() {
    if (bloodCount >= ((autoblood + 1) * 12)) {
        bloodCount = bloodCount - ((autoblood + 1) * 12);
        autoblood++;
        update();
    }
}

function buyBloodyFlesh() {
    if (bloodCount >= ((bloodyflesh + 1) * 15)) {
        bloodCount = bloodCount - ((bloodyflesh + 1) * 15);
        bloodyflesh++;
        update();
    }
}

function buyMultiplier() {
    if (bloodCount >= ((multiplier+1)*100)){
        bloodCount = bloodCount - ((multiplier+1)*100);
        multiplier++;
        update();
    }
}