// =============togle icon navbar section =======//


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};
// ============ scrol section active links =======================//

let sections = document.querySelectorAll
    ('section');
let navLinks = document.querySelectorAll
    ('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.onscrollY > 100);

    // =============togle icon navbar section =======//



    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

//  ============SCROLL REVEAL====//

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200

// });

// ScrollReveal().reveal('.home-content, .heading ,.box-1 ', { origin: 'top' });
// ScrollReveal().reveal('.home-content h1, .about-img ,.box-1 p', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content , .how-its-works1 h2 ', { origin: 'right' });
// ScrollReveal().reveal('.home-img,.cources-container,.other-cources-box,.contact form ,.box-1 img ', { origin: 'bottom' });



//  learn QURAN and teach it to others 


// =============typed js =======//
// const typed = new Typed('.multiple-text', {
//     Strings: ['learn QURAN', 'learn QURAN and teach', 'learn QURAN and teach it to others '],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })
var typed = new Typed('#element', {
    strings: ['learn QURAN', 'learn QURAN and teach', 'learn QURAN and teach it to others '],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 100,
    showCursor: false,
    loop: true
});

var typed = new Typed('#ele', {
    strings: [' Be among the Best:', 'Be among the Best: <span >Learn and Teach the Quran to others</span>'],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 100,
    showCursor: false,
    loop: true
});



function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "abdulsalambb4u@gmail.com",
        Password: "password",
        To: 'abdulsalambb4u@gmail.com',
        From: document.getElementById("email").value,
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );

}



// timer section 
var countDownDate = new Date('jul 16, 2023 00:00:00')
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }

} , 1000)
