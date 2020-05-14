var bloodCount = 0;
var autoClick = 0;

setInterval(timer, 1000);

function update() {
    document.getElementById('text').value = bloodCount;
    if (bloodCount > 1) {
        document.title = bloodCount + " Bloods";
    } else {
        document.title = bloodCount + " Blood";
    }
    document.getElementById("ammountMovingBlood").innerHTML = autoClick
    document.getElementById("costMovingBlood").innerHTML = (autoClick + 1) * 12;
}

function timer() {
    bloodCount = bloodCount + autoClick;
    update();
}

function add() {
    bloodCount++;
    update();
}

function save() {
    localStorage.setItem("bloodCount", bloodCount);
    localStorage.setItem("autoClick", autoClick);
}

function load() {
    bloodCount = localStorage.getItem("bloodCount");
    bloodCount = parseInt(bloodCount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(bloodCount);
    update();
}

function buyMovingBlood() {
    if (bloodCount >= ((autoClick + 1) * 12)) {
        bloodCount = bloodCount - ((autoClick + 1) * 12);
        autoClick++;
        update();
    }
}