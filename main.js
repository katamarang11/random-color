const btn = document.querySelectorAll('.btn');
const coloredSquare = document.querySelectorAll('.colored-square');
const colorTitleBtn = document.querySelectorAll('.color-title-btn');

for (let i = 0; i < btn.length; i++) {
  colorOutput(colorTitleBtn[i], coloredSquare[i], btn[i]);
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    colorOutput(colorTitleBtn[i], coloredSquare[i], btn[i]);
  });
}

for (let i = 0; i < colorTitleBtn.length; i++) {
  colorTitleBtn[i].addEventListener('click', function () {
    let meaning = colorTitleBtn[i].textContent;
    navigator.clipboard.writeText(meaning);
  });
}

function colorСreation() {
  let randomColor = '';
  for (let i = 0; i < 3; i++) {
    let j = (Math.floor(Math.random() * 256)).toString(16).toUpperCase();
    if (j.length < 2) {
      j = 0 + j;
    }
    randomColor += j;
  }
  return randomColor;
}

function colorOutput(text, color, btnColor) {
  const randomColor = colorСreation();
  const arrayColor = hexToRgb(randomColor);
  const twoСolors = getContrastYIQ(arrayColor);

  text.textContent = `#${randomColor}`;
  color.style.backgroundColor = `#${randomColor}`;

  btnColor.style.color = twoСolors;
  text.style.color = twoСolors;
}

function hexToRgb(hex) {
  let x = [];
  x.push(parseInt(hex.slice(0, 2), 16));
  x.push(parseInt(hex.slice(2, 4), 16));
  x.push(parseInt(hex.slice(4, 6), 16));
  return x;
}

function getContrastYIQ(hexcolor) {
  const r = hexcolor[0];
  const g = hexcolor[1];
  const b = hexcolor[2];
  const yqi = ((r * 299) + (g * 587) + (b * 144)) / 1000;
  return (yqi >= 128) ? 'black' : 'white';
}
