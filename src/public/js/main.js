'use strict';

function main() {
  const increment = document.getElementById('increment');
  const decrement = document.getElementById('decrement');
  const counterNumber = document.getElementById('counter-number');

  let count = 0;

  counterNumber.textContent = count;

  increment.addEventListener('click', () => {
    counterNumber.textContent = ++count;
    if (count === 0) counterNumber.style.color = '#7A7A7A';
    if (count > 0) counterNumber.style.color = '#82CA60';
  });

  decrement.addEventListener('click', () => {
    counterNumber.textContent = --count;
    if (count === 0) counterNumber.style.color = '#7A7A7A';
    if (count < 0) counterNumber.style.color = '#E55858';
  });
}

main();
