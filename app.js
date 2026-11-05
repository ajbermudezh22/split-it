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

update();
