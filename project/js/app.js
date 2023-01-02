// # start global variables
//please see the readme attached


const header = document.querySelector('.page__header');
const list = document.querySelector('#navbar__list');
const sections = Array.from(document.querySelectorAll('section'));
const toggler = document.createElement('button');
const bar = document.createElement('span');
const spans = `<span></span><span></span><span></span><span></span>`;
const btnHover = document.querySelectorAll('.btn-hover');
let timer = null;

// # end global variable

// # start helper functions

// add link to the list

let AddLinks = (ele) => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.textContent = ele.dataset.nav;
  a.setAttribute('href', `#${ele.id}`);
  a.className = `menu__link ${ele.id}`;
  a.classList.add('btn-hover');
  for (let i = 0; i < 4; i++) {
    a.appendChild(document.createElement('span'));
  }
  // add click event to link to move smoothly
  a.onclick = scroll;
  li.appendChild(a);
  list.appendChild(li);
};

// this function made for smooth scrolling

let scroll = (e) => {
  e.preventDefault();
  let sec = document.querySelector(`${e.target.getAttribute('href')}`).offsetTop;
  window.scrollTo({
    top: sec,
    behavior: 'smooth'
  });
};


// add active class to the section in the viewport

const shower = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('your-active-class');
      document.querySelector(`.${entry.target.id}`).classList.add('active');
    } else {
      entry.target.classList.remove('your-active-class');
      document.querySelector(`.${entry.target.id}`).classList.remove('active');
    }
  });
});

// open and close the navbar menu
const OcNav = () => {
    list.classList.toggle('open');
    toggler.classList.toggle('close');
  };
  

//this function for hide the header


// # end helper functions

/*
when the function load this function will
 - add spans -important part for animation- to all the elements witch have btn-hover class
 - add svg to the h2 on every element has class landing__container
  - for know this section can be collapsed

*/

// looping in the sections and make a link to each section
sections.map(AddLinks);

// add id 'toggler' to the toggle btn

toggler.setAttribute('id', 'toggler');

// add bars to toggler btn

for (let i = 0; i < 3; i++) {
  bar.classList.add('bar');
  toggler.appendChild(bar);
}

// add the toggler btn to the navbar

document.querySelector('.navbar__menu').appendChild(toggler);

// open and close navbar menu when user click the toggler btn

toggler.addEventListener('click', OcNav);

// add class active to the section on the view port

document.querySelectorAll('section').forEach((ele) => shower.observe(ele));

// hide the navbar when the scroll stop

// window.addEventListener('scroll', hiddenNavbar, false);

// show navbar when user scroll scroll

window.onscroll = () => {
  document.querySelector('header').style = 'transform: translateY(0);';
};



