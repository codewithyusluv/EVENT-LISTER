const countDisplay = document.getElementById('count');
const plusButton = document.getElementById('btnPlus');
const minusButton = document.getElementById('btnMinus');
const resetButton = document.getElementById('btnReset');
const saveButton = document.getElementById('btnSave');
const loadButton = document.getElementById('btnLoad');
const storageStatus = document.getElementById('storageStatus');

const savedCountKey = 'event-listener-count';
let count = 0;

function updateCount() {
	countDisplay.textContent = count;
}

function loadSavedCount() {
	try {
		const savedValue = localStorage.getItem(savedCountKey);
		const savedCount = Number(savedValue);

		if (savedValue !== null && Number.isFinite(savedCount)) {
			count = savedCount;
			updateCount();
			storageStatus.textContent = 'Saved value loaded.';
		}
	} catch (error) {
		storageStatus.textContent = 'Storage is unavailable in this browser.';
	}
}

plusButton.addEventListener('click', () => {
	count += 1;
	updateCount();
});

minusButton.addEventListener('click', () => {
	count -= 1;
	updateCount();
});

resetButton.addEventListener('click', () => {
	count = 0;
	updateCount();
});

saveButton.addEventListener('click', () => {
	try {
		localStorage.setItem(savedCountKey, String(count));
		storageStatus.textContent = `Value ${count} saved.`;
	} catch (error) {
		storageStatus.textContent = 'Could not save the value.';
	}
});

loadButton.addEventListener('click', () => {
	try {
		const savedValue = localStorage.getItem(savedCountKey);
		const savedCount = Number(savedValue);

		if (savedValue !== null && Number.isFinite(savedCount)) {
			count = savedCount;
			updateCount();
			storageStatus.textContent = `Value ${count} loaded.`;
		} else {
			storageStatus.textContent = 'No saved value found.';
		}
	} catch (error) {
		storageStatus.textContent = 'Could not load the saved value.';
	}
});

loadSavedCount();
