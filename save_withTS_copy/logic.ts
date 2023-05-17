function compare1(container: HTMLElement) {
	let hasFlippedCard = false;
	let firstCard: string, secondCard: string, targetFirst: HTMLElement, targetSecond: HTMLElement;
	const temp = document.querySelectorAll('.memory-card');
  
	const flipCard = (e: Event) => {
	  const target = (e.target as HTMLElement).parentElement;
	  if (!target) return;
	  const images = target.querySelectorAll('img');
	  const firstClass = images[0].classList;
	  target.classList.add('flip');
  
	  if (!hasFlippedCard) {
		hasFlippedCard = true;
		targetFirst = target;
		firstCard = firstClass[0];
	  } else {
		hasFlippedCard = false;
		targetSecond = target;
		secondCard = firstClass[0];
		setTimeout(() => { 
		  if (secondCard !== firstCard)
			defeatScreen1(container);
		  else if (checkFlipClass() === 1)
			wictoryScreen1(container);
		}, 100);
	  }
	};
  
	temp.forEach((card) => {
	  card.addEventListener('click', flipCard);
	});
  }
  

  function compare2(container: HTMLElement) {
	let hasFlippedCard = false;
	let firstCard: string, secondCard: string, targetFirst: HTMLElement, targetSecond: HTMLElement;
	const temp = document.querySelectorAll('.memory-card');
  
	const flipCard = (e: Event) => {
	  const target = (e.target as HTMLElement).parentElement;
	  if (!target) return;
	  const images = target.querySelectorAll('img');
	  const firstClass = images[0].classList;
	  target.classList.add('flip');
  
	  if (!hasFlippedCard) {
		hasFlippedCard = true;
		targetFirst = target;
		firstCard = firstClass[0];
	  } else {
		hasFlippedCard = false;
		targetSecond = target;
		secondCard = firstClass[0];
		setTimeout(() => { 
		  if (secondCard !== firstCard)
			defeatScreen2(container);
		  else if (checkFlipClass() === 1)
			wictoryScreen2(container);
		}, 100);
	  }
	};
  
	temp.forEach((card) => {
	  card.addEventListener('click', flipCard);
	});
  }
  

  function compare3(container: HTMLElement) {
	let hasFlippedCard = false;
	let firstCard: string, secondCard: string, targetFirst: HTMLElement, targetSecond: HTMLElement;
	const temp = document.querySelectorAll('.memory-card');
  
	const flipCard = (e: Event) => {
	  const target = (e.target as HTMLElement).parentElement;
	  if (!target) return;
	  const images = target.querySelectorAll('img');
	  const firstClass = images[0].classList;
	  target.classList.add('flip');
  
	  if (!hasFlippedCard) {
		hasFlippedCard = true;
		targetFirst = target;
		firstCard = firstClass[0];
	  } else {
		hasFlippedCard = false;
		targetSecond = target;
		secondCard = firstClass[0];
		setTimeout(() => { 
		  if (secondCard !== firstCard)
			defeatScreen3(container);
		  else if (checkFlipClass() === 1)
			wictoryScreen3(container);
		}, 100);
	  }
	};
  
	temp.forEach((card) => {
	  card.addEventListener('click', flipCard);
	});
  }
  