var bloodCount = 0;
var autoblood = 0;
var bloodyflesh = 0;
var multiplier = 1;

setInterval(timer, 1000);

function update() {
    document.getElementById('text').value = bloodCount;
    if (bloodCount > 1) {
        document.title = bloodCount + " Bloods";
    } else {
        document.title = bloodCount + " Blood";
    }
    document.getElementById("ammountMovingBlood").innerHTML = autoblood
    document.getElementById("costMovingBlood").innerHTML = (autoblood + 1) * 12;

    document.getElementById("ammountBloodyFlesh").innerHTML = bloodyflesh
    document.getElementById("costBloodyFlesh").innerHTML = (bloodyflesh + 1) * 15;

    document.getElementById("bloodPerSecond").innerHTML = ((autoblood + (bloodyflesh*2))*multiplier) + " blood/s"
}

function timer() {
    bloodCount = bloodCount + autoblood;
    bloodCount = bloodCount + (bloodyflesh*2);
    update();
}

function add() {
    bloodCount++;
    update();
}

function save() {
    localStorage.setItem("bloodCount", bloodCount);
    localStorage.setItem("autoblood", autoblood);
    localStorage.setItem("bloodyflesh", bloodyflesh);
}

function load() {
    bloodCount = localStorage.getItem("bloodCount");
    bloodCount = parseInt(bloodCount);
    autoblood = localStorage.getItem("autoblood");
    autoblood = parseInt(autoblood);
    bloodyflesh = localStorage.getItem("bloodyflesh");
    bloodyflesh = parseInt(bloodyflesh);
    update();
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