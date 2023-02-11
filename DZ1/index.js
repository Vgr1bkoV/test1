const globalState = {};
const LS = localStorage;

const difLevelNumber1 = document.querySelector('.difficult_level__number_1');
const difLevelNumber2 = document.querySelector('.difficult_level__number_2');
const difLevelNumber3 = document.querySelector('.difficult_level__number_3');

const buttonStart = document.querySelector('.button_start');

buttonStart.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href = '/game.html';
});

difLevelNumber1.addEventListener('click', (event) =>{
    console.log("1");
    globalState.difficult = 1;
    LS.setItem('global', JSON.stringify(globalState));
  });

  difLevelNumber2.addEventListener('click', (event) =>{
    console.log("2");
    globalState.difficult = 2;
    LS.setItem('global', JSON.stringify(globalState));
  });

  difLevelNumber3.addEventListener('click', (event) =>{
    console.log("3");
    globalState.difficult = 3;
    LS.setItem('global', JSON.stringify(globalState));
  });