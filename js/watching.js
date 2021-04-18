const cardTemplate = document.querySelector("#cardTemplate").content;
const cardsGrid = document.querySelector(".cardsGrid");
const shows = {
	"Arrow": {
		"img_url": "https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_.jpg",
		"current_season": 2,
		"current_episode": 7,
		"season_episode_count": 20
	},
	"Merlin": {
		"img_url": "https://m.media-amazon.com/images/M/MV5BZTBjYjM3ZjItZTI1MS00ODZhLWFhZDgtODgxMmMzN2JlOTExXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR1,0,182,268_AL_.jpg",
		"current_season": 5,
		"current_episode": 19,
		"season_episode_count": 27
	},
	"Grimm": {
		"img_url": "https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"current_season": 1,
		"current_episode": 15,
		"season_episode_count": 20
	},
	"Daredevil": {
		"img_url": "https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"current_season": 3,
		"current_episode": 7,
		"season_episode_count": 15
	},
	"Iron Fist": {
		"img_url": "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"current_season": 1,
		"current_episode": 6,
		"season_episode_count": 20
	},
	"A Series of Unfortunate Events": {
		"img_url": "https://m.media-amazon.com/images/M/MV5BMTYzMjA3OTgxOV5BMl5BanBnXkFtZTgwMjAwMDU5NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"current_season": 2,
		"current_episode": 9,
		"season_episode_count": 12
	},
	"Sherlock": {
		"img_url": "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"current_season": 4,
		"current_episode": 2,
		"season_episode_count": 3
	},
}

function updateShowProgress(card, showTitle) {
	card.querySelector(".card__progressText").innerText = `S${shows[showTitle].current_season}E${shows[showTitle].current_episode}`;
	let progressBar = card.querySelector(".card__progressBar");
	progressBar.style.setProperty("--data-total", shows[showTitle].season_episode_count);
	progressBar.style.setProperty("--data-completed", shows[showTitle].current_episode);
}

for(let [showTitle, showInfo] of Object.entries(shows)) {
	let newCard = cardTemplate.cloneNode(true);

	newCard.querySelector(".card__img").src = showInfo.img_url;
	newCard.querySelector(".card__imgContainer").onclick = (evt) => {
		console.log(evt.srcElement)
		let card = evt.target.parentElement;
		let cardPulse = card.previousElementSibling;
		cardPulse.classList.remove('pulse');
		void cardPulse.offsetWidth;
		cardPulse.classList.add('pulse');

		let showTitle = card.querySelector(".card__title").innerText;
		shows[showTitle].current_episode += 1;
		if (shows[showTitle].current_episode > shows[showTitle].season_episode_count) {
			shows[showTitle].current_episode = 1;
			shows[showTitle].current_season += 1; 
		}
		updateShowProgress(card, showTitle);
	};

	newCard.querySelector(".card__title").innerText = showTitle;
	updateShowProgress(newCard, showTitle);
	cardsGrid.appendChild(newCard);
} 