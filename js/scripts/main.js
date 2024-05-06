/*document.addEventListener('contextmenu', event => {
    event.preventDefault()
}, false);

document.onkeydown = function(event) {
    if (!event.target.matches('input') && !event.target.matches('textarea')) {
        return false;
    }
};

!(function t() {
  try {
    !(function t(n) {
      (1 === ("" + n / n).lenght && 0 !== n) ||
        function () {}.constructor("debugger")(),
        t(++n);
    })(0);
  } catch (n) {
    setTimeout(t, 0e3);
  }
})();*/



// Marquee

if(window.jQuery) {
  $(document).ready(function() {
    $('.marquee').marquee({
      duration: 4000,
      gap: 50,
      direction: 'left',
      pauseOnHover: true,
      duplicated: true,
      delayBeforeStart: 0,
      speed: 80,
    })
  })
}

function starLoader() {
  let counterElement = document.querySelector('.counter');
  let currentValue = 0;

  function atualizarContador() {
    if(currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() *10) +1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(atualizarContador, delay);
  }
  
  atualizarContador();
}

starLoader();

gsap.to('.counter', 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to('.bar', 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: 'power4.inOut',
});

const btnDarkMode = document.querySelector('.js-switch button');
const btnDarkModeResponsivo = document.querySelector('.switch-mobile');
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

btnDarkMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

btnDarkModeResponsivo.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});


const buttons = document.querySelectorAll('.services');
const serviceHome = document.querySelectorAll('.service-home');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    serviceHome.forEach((service) => {
      service.classList.remove('active', 'animeLeft');
    });

    const dataClass = button.getAttribute('data-class');
    const content = document.querySelectorAll(dataClass);
    content.forEach((item) => item.classList.add('active', 'animeLeft'));
  });

  if (index === 0) {
    button.classList.add('active');
    const dataClass = button.getAttribute('data-class');
    const content = document.querySelectorAll(dataClass);
    content.forEach((item) => item.classList.add('active', 'animeLeft'));
  }
});




const navTabs = document.querySelectorAll('.tab-content li');
const tabContent = document.querySelectorAll('.conteudo-abas');
const tabImage = document.querySelectorAll('.tab-image');

navTabs.forEach(function(tab, pane) {
  tab.addEventListener('click', (event) => {
    event.preventDefault(),
    navTabs.forEach(function(event) {
      event.classList.remove('active');
    }),
    tabContent.forEach(function(event) {
      event.classList.remove('active');
    }),
    tabImage.forEach(function(event) {
      event.classList.remove('active');
    }),
    tabContent[pane].classList.add('active');
    tab.classList.add('active');
    tabImage[pane].classList.add('active');
    tab.classList.add('active');
  })
});

var accordion = document.getElementById('js-faq');
var btnQuestion = document.querySelectorAll('.question');
for (var i = 0; i < btnQuestion.length; i++) {
  btnQuestion[i].onclick = function() {
    for (var element = 0; element < btnQuestion.length; element++) {
      if (btnQuestion[element] !== this) {
        btnQuestion[element].classList.remove('active');
      }
    }
    this.classList.toggle('active');
  };
}

var anoAtualElemento = document.getElementById('current-year');
var anoAtual = new Date().getFullYear();
anoAtualElemento.textContent = anoAtual;

const linksSection = document.querySelectorAll('.js-nav li a');

function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const section = document.querySelector(href);

    const initPosition = section.offsetTop;

    window.scrollTo({
        top: initPosition - 74,
        behavior: "smooth",
    })
}

linksSection.forEach(link => {
    link.addEventListener('click', scrollToSection);
})

const btnMobile = document.getElementById('js-btn-mobile');

btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('is-active');
  document.documentElement.classList.toggle('menu-opened');
})

luge.settings({
  smooth: {inertia: 0.1}
})