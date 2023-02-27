window.application = {
  renderBlock: function (name, container) {
    window.application[name](container);
  },
};

const globalState = {
  difficult: 1,
};

function renderTaimer(divGameHead) {
  const divTime = document.createElement("div");
  divTime.classList.add("div_time");

  const min = document.createElement("h1");
  min.textContent = "min";
  min.classList.add("min_sek");

  const sek = document.createElement("h1");
  sek.textContent = "sek";
  sek.classList.add("min_sek");

  const time = document.createElement("h1");
  time.textContent = "00:00";
  time.classList.add("time");

  divGameHead.appendChild(divTime);
  divTime.appendChild(min);
  divTime.appendChild(sek);
  divTime.appendChild(time);
}

function renderMainScreen(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);

  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";
  button.addEventListener('click', () => {
    container.innerHTML = "";
    renderMainScreenOpenCards(container);
  })

  const divCards = document.createElement("div");
  divCards.classList.add("div_cards");

  const card1 = document.createElement("img");
  card1.classList.add("card");

  const card2 = document.createElement("img");
  card2.classList.add("card");

  const card3 = document.createElement("img");
  card3.classList.add("card");

  const card4 = document.createElement("img");
  card4.classList.add("card");

  const card5 = document.createElement("img");
  card5.classList.add("card");

  const card6 = document.createElement("img");
  card6.classList.add("card");

  const card7 = document.createElement("img");
  card7.classList.add("card");

  const card8 = document.createElement("img");
  card8.classList.add("card");

  const card9 = document.createElement("img");
  card9.classList.add("card");

  const card10 = document.createElement("img");
  card10.classList.add("card");

  const card11 = document.createElement("img");
  card11.classList.add("card");

  const card12 = document.createElement("img");
  card12.classList.add("card");

  const card13 = document.createElement("img");
  card13.classList.add("card");

  const card14 = document.createElement("img");
  card14.classList.add("card");

  const card15 = document.createElement("img");
  card15.classList.add("card");

  const card16 = document.createElement("img");
  card16.classList.add("card");

  const card17 = document.createElement("img");
  card17.classList.add("card");

  const card18 = document.createElement("img");
  card18.classList.add("card");

  const card19 = document.createElement("img");
  card19.classList.add("card");

  const card20 = document.createElement("img");
  card20.classList.add("card");

  const card21 = document.createElement("img");
  card21.classList.add("card");

  const card22 = document.createElement("img");
  card22.classList.add("card");

  const card23 = document.createElement("img");
  card23.classList.add("card");

  const card24 = document.createElement("img");
  card24.classList.add("card");

  const card25 = document.createElement("img");
  card25.classList.add("card");

  const card26 = document.createElement("img");
  card26.classList.add("card");

  const card27 = document.createElement("img");
  card27.classList.add("card");

  const card28 = document.createElement("img");
  card28.classList.add("card");

  const card29 = document.createElement("img");
  card29.classList.add("card");

  const card30 = document.createElement("img");
  card30.classList.add("card");

  const card31 = document.createElement("img");
  card31.classList.add("card");

  const card32 = document.createElement("img");
  card32.classList.add("card");

  const card33 = document.createElement("img");
  card33.classList.add("card");

  const card34 = document.createElement("img");
  card34.classList.add("card");

  const card35 = document.createElement("img");
  card35.classList.add("card");

  const card36 = document.createElement("img");
  card36.classList.add("card");

  container.appendChild(divGameHead);   
  divGameHead.appendChild(button);

  container.appendChild(divCards);
  divCards.appendChild(card1);
  divCards.appendChild(card2);
  divCards.appendChild(card3);
  divCards.appendChild(card4);
  divCards.appendChild(card5);
  divCards.appendChild(card6);
  divCards.appendChild(card7);
  divCards.appendChild(card8);
  divCards.appendChild(card9);
  divCards.appendChild(card10);
  divCards.appendChild(card11);
  divCards.appendChild(card12);
  divCards.appendChild(card13);
  divCards.appendChild(card14);
  divCards.appendChild(card15);
  divCards.appendChild(card16);
  divCards.appendChild(card17);
  divCards.appendChild(card18);
  divCards.appendChild(card19);
  divCards.appendChild(card20);
  divCards.appendChild(card21);
  divCards.appendChild(card22);
  divCards.appendChild(card23);
  divCards.appendChild(card24);
  divCards.appendChild(card25);
  divCards.appendChild(card26);
  divCards.appendChild(card27);
  divCards.appendChild(card28);
  divCards.appendChild(card29);
  divCards.appendChild(card30);
  divCards.appendChild(card31);
  divCards.appendChild(card32);
  divCards.appendChild(card33);
  divCards.appendChild(card34);
  divCards.appendChild(card35);
  divCards.appendChild(card36);
}

function renderMainScreenOpenCards(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);

  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";

  const divCards = document.createElement("div");
  divCards.classList.add("div_cards");

  const card1 = document.createElement("img");
  card1.classList.add("card1");

  const card2 = document.createElement("img");
  card2.classList.add("card2");

  const card3 = document.createElement("img");
  card3.classList.add("card3");

  const card4 = document.createElement("img");
  card4.classList.add("card4");

  const card5 = document.createElement("img");
  card5.classList.add("card5");

  const card6 = document.createElement("img");
  card6.classList.add("card6");

  const card7 = document.createElement("img");
  card7.classList.add("card7");

  const card8 = document.createElement("img");
  card8.classList.add("card8");

  const card9 = document.createElement("img");
  card9.classList.add("card9");

  const card10 = document.createElement("img");
  card10.classList.add("card10");

  const card11 = document.createElement("img");
  card11.classList.add("card11");

  const card12 = document.createElement("img");
  card12.classList.add("card12");

  const card13 = document.createElement("img");
  card13.classList.add("card13");

  const card14 = document.createElement("img");
  card14.classList.add("card14");

  const card15 = document.createElement("img");
  card15.classList.add("card15");

  const card16 = document.createElement("img");
  card16.classList.add("card16");

  const card17 = document.createElement("img");
  card17.classList.add("card17");

  const card18 = document.createElement("img");
  card18.classList.add("card18");

  const card19 = document.createElement("img");
  card19.classList.add("card19");

  const card20 = document.createElement("img");
  card20.classList.add("card20");

  const card21 = document.createElement("img");
  card21.classList.add("card21");

  const card22 = document.createElement("img");
  card22.classList.add("card22");

  const card23 = document.createElement("img");
  card23.classList.add("card23");

  const card24 = document.createElement("img");
  card24.classList.add("card24");

  const card25 = document.createElement("img");
  card25.classList.add("card25");

  const card26 = document.createElement("img");
  card26.classList.add("card26");

  const card27 = document.createElement("img");
  card27.classList.add("card27");

  const card28 = document.createElement("img");
  card28.classList.add("card28");

  const card29 = document.createElement("img");
  card29.classList.add("card29");

  const card30 = document.createElement("img");
  card30.classList.add("card30");

  const card31 = document.createElement("img");
  card31.classList.add("card31");

  const card32 = document.createElement("img");
  card32.classList.add("card32");

  const card33 = document.createElement("img");
  card33.classList.add("card33");

  const card34 = document.createElement("img");
  card34.classList.add("card34");

  const card35 = document.createElement("img");
  card35.classList.add("card35");

  const card36 = document.createElement("img");
  card36.classList.add("card36");

  container.appendChild(divGameHead); 
  divGameHead.appendChild(button);

  container.appendChild(divCards);
  divCards.appendChild(card1);
  divCards.appendChild(card2);
  divCards.appendChild(card3);
  divCards.appendChild(card4);
  divCards.appendChild(card5);
  divCards.appendChild(card6);
  divCards.appendChild(card7);
  divCards.appendChild(card8);
  divCards.appendChild(card9);
  divCards.appendChild(card10);
  divCards.appendChild(card11);
  divCards.appendChild(card12);
  divCards.appendChild(card13);
  divCards.appendChild(card14);
  divCards.appendChild(card15);
  divCards.appendChild(card16);
  divCards.appendChild(card17);
  divCards.appendChild(card18);
  divCards.appendChild(card19);
  divCards.appendChild(card20);
  divCards.appendChild(card21);
  divCards.appendChild(card22);
  divCards.appendChild(card23);
  divCards.appendChild(card24);
  divCards.appendChild(card25);
  divCards.appendChild(card26);
  divCards.appendChild(card27);
  divCards.appendChild(card28);
  divCards.appendChild(card29);
  divCards.appendChild(card30);
  divCards.appendChild(card31);
  divCards.appendChild(card32);
  divCards.appendChild(card33);
  divCards.appendChild(card34);
  divCards.appendChild(card35);
  divCards.appendChild(card36);
}

function renderFirstPage(container) {
  const div = document.createElement("div");
  div.classList.add("square");

  const h1 = document.createElement("h1");
  h1.textContent = "Выбери сложность";
  h1.classList.add("chose_difficult");

  const divDif = document.createElement("div");
  divDif.classList.add("difficult_level");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div1.textContent = "1";
  div2.textContent = "2";
  div3.textContent = "3";
  div1.classList.add("difficult_level__number");
  div1.addEventListener("click", () => {
    console.log("1");
    globalState.difficult = 1;
  });
  div2.classList.add("difficult_level__number");
  div2.addEventListener("click", () => {
    console.log("2");
    globalState.difficult = 2;
  });
  div3.classList.add("difficult_level__number");
  div3.addEventListener("click", () => {
    console.log("3");
    globalState.difficult = 3;
  });

  const button = document.createElement("button");
  button.textContent = "Старт";
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log("click");
    container.innerHTML = "";
    renderMainScreen(container);
  });

  container.appendChild(div);

  div.appendChild(h1);

  div.appendChild(divDif);
  divDif.appendChild(div1);
  divDif.appendChild(div2);
  divDif.appendChild(div3);

  div.appendChild(button);
}

window.application["first-page"] = renderFirstPage;

window.application.renderBlock("first-page", document.querySelector(".app"));