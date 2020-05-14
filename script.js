var bloodcount = 0

function title() {
    if (bloodcount > 1) {
        document.title = bloodcount + " Bloods";
    } else {
        document.title = bloodcount + " Blood";
    }
}

function add() {
    bloodcount++;
    document.getElementById('text').value = bloodcount;
    title();
}

function save() {
    localStorage.setItem("bloodcount", bloodcount);
}

function load() {
    bloodcount = localStorage.getItem("bloodcount");
    bloodcount = parseInt(bloodcount);
    document.getElementById('text').value = bloodcount;
    title();
}