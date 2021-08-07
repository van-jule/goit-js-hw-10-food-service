import menuCards from '../menu.json';
import cardTemplate from '../templates/card.hbs';

console.log(menuCards);

// console.log(cardTemplate);
const menuEl = document.querySelector('.js-menu');

const cardsMarkup = createCardsMarkup(menuCards);

menuEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(menuCards) {
  return menuCards.map(cardTemplate).join('');
}

const checkboxEl = document.querySelector('#theme-switch-toggle');
console.log('checkboxEl', checkboxEl);

checkboxEl.addEventListener('change', onThemeToggle);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

initTheme();

function onThemeToggle(evt) {
  console.log('onThemeToggle -> onThemeToggle');
  if (evt.target.checked) {
    // document.body.classList.add(Theme.DARK);
    // document.body.classList.remove(Theme.LIGHT);
    toggleTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', 'dark');
  } else {
    // document.body.classList.add(Theme.LIGHT);
    // document.body.classList.remove(Theme.DARK);
    toggleTheme(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', 'light');
  }
}

function initTheme() {
  const currentTheme = localStorage.getItem('theme');
  console.log('initTheme -> currentTheme', currentTheme);
  if (currentTheme === 'dark') {
    checkboxEl.checked = true;
    // document.body.classList.add(Theme.DARK);
    // document.body.classList.remove(Theme.LIGHT);
    toggleTheme(Theme.DARK, Theme.LIGHT);
  }
}

function toggleTheme(add, remove) {
  document.body.classList.add(add);
  document.body.classList.remove(remove);
}
