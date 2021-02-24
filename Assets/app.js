const home = document.getElementById('home');
const profile = document.getElementById('profile');
const youtube = document.getElementById('youtubeContent');

window.addEventListener('scroll', navBackground);

function navBackground() {
    var num = 300;
    const nav = document.getElementById('nav');
    const logo = document.querySelector('.logo img');
    if (document.body.scrollTop > num || document.documentElement.scrollTop > num) {
        logo.style.maxWidth = '10vw';
        nav.style.height = '7%';
        nav.style.backgroundColor = 'rgba(250,250,250,0.95)';
    } else {
        logo.style.maxWidth = '15vw';
        nav.style.height = '15%';
        nav.style.backgroundColor = 'transparent';
    }
}

window.addEventListener('scroll', profileLoadAnim);

function profileLoadAnim() {
    if (inView('menuProfile')) {
        profile.style.opacity = 1;
        profile.style.top = 0;
    }
}

window.addEventListener('scroll', youtubeLoadAnim);

function youtubeLoadAnim() {
    if (inView('menuYoutube')) {
        youtube.style.opacity = 1;
        youtube.style.top = '15rem';
    }
}

function inView(element) {
    var elementHeight = document.getElementById(element).clientHeight;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    var scrollPosition = scrollY + windowHeight;
    var elementPosition = document.getElementById(element).getBoundingClientRect().top + scrollY + elementHeight - 750;

    if (scrollPosition > elementPosition) {
        return true;
    } else {
        return false;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});