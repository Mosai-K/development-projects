document.getElementById('navToggle').addEventListener('click', function() {
    const sideNav = document.getElementById('sideNav');
    const navbar = document.querySelector('.navbar');
    sideNav.classList.toggle('open');
    navbar.classList.toggle('nav-open');
});

document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        const sideNav = document.getElementById('sideNav');
        const navbar = document.querySelector('.navbar');
        sideNav.classList.remove('open');
        navbar.classList.remove('nav-open');
    });
});

function onSelect() {
    var selectBox = document.getElementById('dropdown');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue !== "Select") { 
        showPopup(selectedValue);
    }
}


function showPopup(option) {
    document.getElementById('popup-text').innerText = option;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}