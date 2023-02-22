window.application = {
  renderBlock: function(name, container) {
    window.application[name](container);
  },
}

const globalState = {
  difficult:1,
};

function renderMainScreen(container){
  const h1 = document.createElement('h1');
  h1.textContent = 'Главный экран';
  container.appendChild(h1);
}

function renderFirstPage(container){ 
  const div = document.createElement('div');
  div.classList.add('square');

  const h1 = document.createElement('h1');
  h1.textContent = 'Выбери сложность';
  h1.classList.add('chose_difficult');

  const divDif = document.createElement('div');
  divDif.classList.add('difficult_level');

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  div1.textContent = '1';
  div2.textContent = '2';
  div3.textContent = '3';
  div1.classList.add('difficult_level__number');
  div1.addEventListener('click', () => {
    console.log("1");
    globalState.difficult = 1;
  })
  div2.classList.add('difficult_level__number');
  div2.addEventListener('click', () => {
    console.log("2");
    globalState.difficult = 2;
  })
  div3.classList.add('difficult_level__number');
  div3.addEventListener('click', () => {
    console.log("3");
    globalState.difficult = 3;
  })

  const button = document.createElement('button');
  button.textContent = 'Старт';
  button.classList.add('button');
  button.addEventListener('click', () => {
    console.log('click');
    container.innerHTML = ''; 
    renderMainScreen(container);
  })

  container.appendChild(div);

  div.appendChild(h1);

  div.appendChild(divDif);
  divDif.appendChild(div1);
  divDif.appendChild(div2);
  divDif.appendChild(div3);

  div.appendChild(button);
} 

window.application['first-page'] = renderFirstPage;

window.application.renderBlock('first-page', document.querySelector('.app'));










































// const difLevelNumber1 = document.querySelector('.difficult_level__number_1');
// const difLevelNumber2 = document.querySelector('.difficult_level__number_2');
// const difLevelNumber3 = document.querySelector('.difficult_level__number_3');

// const buttonStart = document.querySelector('.button_start');

// buttonStart.addEventListener('click',(event) => {
//   event.preventDefault();
//   window.location.href = '/game.html';
// });

// difLevelNumber1.addEventListener('click', (event) =>{
//     console.log("1");
//     globalState.difficult = 1;
//   });

//   difLevelNumber2.addEventListener('click', (event) =>{
//     console.log("2");
//     globalState.difficult = 2;
//   });

//   difLevelNumber3.addEventListener('click', (event) =>{
//     console.log("3");
//     globalState.difficult = 3;
//   });