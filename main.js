window.addEventListener('scroll', () => {
	document.querySelector('nav').classList.toggle
	('window-scroll', window.scrollY > 0);
})

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints:{
		600: {
			slidesPerView: 3
		}
	}
  });

/*show/hide faq answer*/

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=> {
	faq.addEventListener('click', () =>{
		faq.classList.toggle('open');

		/*change icon*/

		const icon=faq.querySelector('.faq__icon i');
		if(icon.className==='uil uil-plus'){
			icon.className='uil uil-minus';
		} else{
			icon.className='uil uil-plus';
		}
	})
})


/*show hide nav menu*/

const menu=document.querySelector('.nav__menu');
const menuBtn=document.querySelector('#open-menu-btn');
const closeBtn=document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click', () =>{
	menu.style.display = 'flex';
	closeBtn.style.display='inline-block';
	menuBtn.style.display= 'none';
})


const closeNav =() =>{
	menu.style.display ='none';
	closeBtn.style.display = 'none';
	menuBtn.style.display ='inline-block';
}
     
closeBtn.addEventListener('click', closeNav);

// Add China stars
const chinaFlag = document.querySelector('.china-flag');
for (let i = 0; i < 5; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  if (i === 0) star.classList.add('main');
  chinaFlag.appendChild(star);
}

// Add USA stars
const usaBlueSection = document.createElement('div');
usaBlueSection.className = 'blue-section';
document.querySelector('.usa-flag').appendChild(usaBlueSection);

for (let i = 0; i < 9; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.setProperty('--i', i); // Use CSS variable for positioning
  usaBlueSection.appendChild(star);
}
