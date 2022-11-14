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



function doStep1(callback) {
  const result = alice1.animate(aliceTumbling, aliceTiming);
  callback(result.finished);
}

function doStep2(callback) {
  const result = alice2.animate(aliceTumbling, aliceTiming);
  callback(result.finished);
}

function doStep3(callback) {
  const result = alice3.animate(aliceTumbling, aliceTiming);
  callback(result.finished);
}

function doOperation() {
  alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
    alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
      alice3.animate(aliceTumbling, aliceTiming).finished.then(() => {
        doOperation();
      });
    });
  });
};

doOperation();