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


//the section being viewed
const offset = (section) => {
  return value = Math.floor(section. getBoundingClientRect().top);
};


// remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = 'background-color : rgba(255, 255, 255, 0.187)';
};

//adding the active class
const addActive = (conditional, section) => {
  if(conditional){
    section.classList.add('your-active-class');
    section.style.cssText = 'background-color : grey';
  };
};

//implementing the function

const sectionActivate = () =>  {
  sections.forEach(section =>{
    const elementOffset = offset(section);

    inviewport = () => elementOffset < 150 && elementOffset >= -150;

    removeActive(section);
    addActive(inviewport(), section);
  });
};

window.addEventListener('scroll',sectionActivate);

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

// show navbar when user scroll scroll
window.onscroll = () => {
  document.querySelector('header').style = 'transform: translateY(0);';
};



