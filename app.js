// Split It: split a bill between people.
const totalInput = document.getElementById('total');
const peopleOutput = document.getElementById('people');
const eachOutput = document.getElementById('each');

let people = 6;

function formatEuro(value) {
  return '€' + value.toFixed(2);
}

function update() {
  const total = Math.max(0, Number(totalInput.value) || 0);
  const each = total / people;
  peopleOutput.textContent = people;
  eachOutput.textContent = formatEuro(each);
}

document.getElementById('less').addEventListener('click', () => {
  people = Math.max(1, people - 1);
  update();
});

document.getElementById('more').addEventListener('click', () => {
  people = Math.min(50, people + 1);
  update();
});

totalInput.addEventListener('input', update);

// Light or dark mode: follows the phone until you tap the button.
const themeButton = document.getElementById('theme');

function isDark() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen) return chosen === 'dark';
  return matchMedia('(prefers-color-scheme: dark)').matches;
}

function showThemeButton() {
  themeButton.textContent = isDark() ? '☀️' : '🌙';
  themeButton.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch (e) {}
  showThemeButton();
}

themeButton.addEventListener('click', () => setTheme(isDark() ? 'light' : 'dark'));

try {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;
} catch (e) {}
showThemeButton();

update();
