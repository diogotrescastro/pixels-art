const getBlack = document.querySelector('#black');
const getColor1 = document.querySelector('#color1');
const getColor2 = document.querySelector('#color2');
const getColor3 = document.querySelector('#color3');

const getColor4 = document.querySelector('#color4');
const getColor5 = document.querySelector('#color5');
const getColor6 = document.querySelector('#color6');
const getColor7 = document.querySelector('#color7');
const getColor8 = document.querySelector('#color8');
const getColor9 = document.querySelector('#color9');
const getColor10 = document.querySelector('#color10');
const getColor11 = document.querySelector('#color11');
const getColor12 = document.querySelector('#color12');
const getColor13 = document.querySelector('#color13');
const getColor14 = document.querySelector('#color14');
const getColor15 = document.querySelector('#color15');


// Função usada de base retirada de: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function generateColor() {
  const r = (Math.random() * 255);
  const g = (Math.random() * 255);
  const b = (Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function getColor() {
  getBlack.style.backgroundColor = 'black';
  getColor1.style.backgroundColor = '#F94144';
  getColor2.style.backgroundColor = '#F3722C';
  getColor3.style.backgroundColor = '#F8961E';
  getColor4.style.backgroundColor = '#F9844A';
  getColor5.style.backgroundColor = '#F9C74F';
  getColor6.style.backgroundColor = '#90BE6D';
  getColor7.style.backgroundColor = '#43AA8B';
  getColor8.style.backgroundColor = '#4D908E';
  getColor9.style.backgroundColor = '#577590';
  getColor10.style.backgroundColor = '#277DA1';
  getColor11.style.backgroundColor = '#FF99C8';
  getColor12.style.backgroundColor = '#FCF6BD';
  getColor13.style.backgroundColor = '#D0F4DE';
  getColor14.style.backgroundColor = '#A9DEF9';
  getColor15.style.backgroundColor = '#E4C1F9';
}

getBlack.addEventListener('click', selectedPalette());
getColor3.addEventListener('click', selectedPalette());
getColor1.addEventListener('click', selectedPalette());
getColor2.addEventListener('click', selectedPalette());
getColor4.addEventListener('click', selectedPalette());
getColor5.addEventListener('click', selectedPalette());
getColor6.addEventListener('click', selectedPalette());
getColor7.addEventListener('click', selectedPalette());
getColor8.addEventListener('click', selectedPalette());
getColor9.addEventListener('click', selectedPalette());
getColor10.addEventListener('click', selectedPalette());
getColor11.addEventListener('click', selectedPalette());
getColor12.addEventListener('click', selectedPalette());
getColor13.addEventListener('click', selectedPalette());
getColor14.addEventListener('click', selectedPalette());
getColor15.addEventListener('click', selectedPalette());

function selectedPalette() {
  const getColors = document.querySelectorAll('.color');
  const getPalette = document.querySelector('#color-palette');
  getPalette.addEventListener('click', (event) =>{
    if (event.target.className === 'color') {
    event.target.className = 'color selected';
    for (index = 0; index < getColors.length; index += 1){
      if (getColors[index] !== event.target) {
        getColors[index].className = 'color';
      }  
      }
    }
  })
}



function colorPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const localPixel = event.target;
    if (localPixel.className === 'pixel') {
      localPixel.style.backgroundColor = selectedColor;
    }
  });
}

function clear() {
  const pixel = document.getElementsByClassName('pixel');
  const bttn = document.getElementById('clear-board');

  bttn.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

window.onload = () => {
  getColor();
  colorPixel();
  clear();
  generateColor();
};
