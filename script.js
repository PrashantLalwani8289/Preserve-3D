const panel = document.querySelector('.panel');
const buttons = document.querySelectorAll('.radio');

for (let target of buttons) {
	target.addEventListener('change', () => {
    panel.style.setProperty('--transform-style', target.value);
	});
}