let link = document.getElementById('contact-link');
let monologue = document.getElementById('info');
let details = document.getElementById('contact')

function unhideContact () {
    if(link.innerHTML == 'View Contact Details') {
        link.innerHTML = 'Back to the Cat Monologue';
        monologue.style.display = 'none';
        details.style.display = 'block';
    } else {
        link.innerHTML = 'View Contact Details';
        monologue.style.display = 'block';
        details.style.display = 'none';
    }
}


link.addEventListener('mouseover', function() {
    link.style.color = 'yellow';
});

link.addEventListener('mouseout', function() {
    link.style.color = 'black';
});

link.onmousedown = unhideContact;