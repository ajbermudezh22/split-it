// Split It: split a bill between people.
const totalInput = document.getElementById('total');
const peopleOutput = document.getElementById('people');
const eachOutput = document.getElementById('each');
const roundInput = document.getElementById('round');
const extraOutput = document.getElementById('extra');

let people = 6;

function formatEuro(value) {
  return '€' + value.toFixed(2);
}

function update() {
  const total = Math.max(0, Number(totalInput.value) || 0);
  const exact = total / people;
  // Round up: every share becomes a whole euro, the difference is a small tip.
  const rounded = Math.ceil(Math.round(total * 100) / people / 100);
  const extra = rounded * people - total;
  const round = roundInput.checked;

  peopleOutput.textContent = people;
  eachOutput.textContent = round ? '€' + rounded : formatEuro(exact);
  extraOutput.hidden = !round || extra < 0.005;
  extraOutput.textContent = formatEuro(extra) + ' extra in total, call it a tip';
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
roundInput.addEventListener('change', update);

update();
