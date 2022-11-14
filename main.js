const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function animateAlice1() {
  const response = await alice1.animate(aliceTumbling, aliceTiming);
}
async function animateAlice2() {
  const response = await alice2.animate(aliceTumbling, aliceTiming);
}
async function animateAlice3() {
  const response = await alice3.animate(aliceTumbling, aliceTiming);
}

animateAlice1();
animateAlice2();
animateAlice3();