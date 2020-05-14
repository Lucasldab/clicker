var bloodcount = 0

function add(){
    bloodcount++;
    document.getElementById('text').value = bloodcount;
    document.title = bloodcount + " Blood";
}