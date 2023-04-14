function alerts(firstCard, secondCard, targetFirst, targetSecond) {
	if (secondCard === firstCard) {
		alert('good');
	}
	else {
		alert('bad');
		targetFirst.classList.remove('flip');
		targetSecond.classList.remove('flip');
	}
}

function compare() {
	let hasFlipperedCard = false;
	let firstCard , secondCard, targetFirst, targetSecond;
	const temp = document.querySelectorAll('.memory-card');
	
	const flipCard = e => {
		const target = e.target.parentElement;
		const images = target.querySelectorAll('img');
		const firstClass = images[0].classList;
		target.classList.add('flip');

		if (!hasFlipperedCard) {
		hasFlipperedCard = true;
		targetFirst = target;
		firstCard = firstClass[0];
		console.log(firstCard);
		}
		else {
		hasFlipperedCard = false;
		targetSecond = target;
		secondCard = firstClass[0];
		console.log(secondCard);
		setTimeout(() => alerts(firstCard, secondCard, targetFirst, targetSecond), 100)
		
		//setTimeout(() => secondCard === firstCard ? alert('good') : alert('bad'), 100);
		}
	}

	temp.forEach(card => {
		card.addEventListener('click', flipCard);
	})
}

compare();