const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu');
		});
	}
};

showMenu('nav-toggle', 'nav-menu');

/*==== Remove Menu Mobile ====*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	// When click on each nav__link, remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==== Scroll Section Active Link ====*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

function scrollHeader() {
	const nav = document.getElementById('header');
	if (this.scrollY >= 200) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

function scrollTop() {
	const scrollTop = document.getElementById('scroll-top');
	if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
	else scrollTop.classList.remove('scroll-top');
}

window.addEventListener('scroll', scrollTop);

/*==== DARK&LIGHT THEME ====*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

//validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme==='dark'? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

//activate-deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

/*==== SCROLL REVEAL ANIMATION ====*/

const sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:2000,
    reset:true
});

sr.reveal(`.home__data, .home__img,
.about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button,
.footer__content`,{
    interval:200
})