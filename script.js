(() => {
	window.addEventListener('DOMContentLoaded', () => {
		createCards('sort');
		document.querySelector('.btn_shuffle').addEventListener('click', () => {
			createCards('shuffle');
		});
		document.querySelector('.btn_sort').addEventListener('click', () => {
			createCards('sort');
		});		
	});
	
	const createCards = (mode) => {
		let cardVar = '',
			tmpArr = [],
			cardCts = 9,
			numVal = 0;
		
		while(tmpArr.length < cardCts){
			(mode === 'shuffle') ? numVal = (Math.floor(Math.random() * cardCts) + 1)  : numVal = tmpArr.length + 1;
			if(tmpArr.indexOf(numVal) === -1 ) {
				cardVar = `${cardVar}<div class='card card_${numVal}'>${numVal}</div>`;
				tmpArr.push(numVal);
			}
		}
		document.querySelector('#cards').innerHTML = cardVar;
	}
})();