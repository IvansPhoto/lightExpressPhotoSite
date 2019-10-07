const button = document.getElementById('menuButton')
const nav = document.querySelector('nav')

button.addEventListener('click', ()=> {
	nav.classList.toggle('shown')
	button.classList.toggle('cyan')
})