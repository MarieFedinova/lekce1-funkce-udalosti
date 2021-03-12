// tady je místo pro náš program

let ctverecek = document.querySelector('.ctverecek');

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  let text = "Gratulace, právě jsi spustila tuto funkci!";
  console.log(text);
  alert(text);
  ctverecek.style.lineHeight = '30px';
  ctverecek.textContent = text;
}

/**
 * Změní barvu čtverečku na zelenou.
 */
function zmenBarvu() {
  ctverecek.style.backgroundColor = 'green';
}

/**
 * Zobrazí výsledek.
 */
function zobrazVysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}
