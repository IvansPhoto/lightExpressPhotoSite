const bigImage = document.querySelectorAll('#bigImage picture')
const gallery = document.getElementById('gallery')

console.log(gallery.length)

bigImage[0].classList.add('shown')
gallery.addEventListener('click', ev => {
	bigImage.forEach(element => {
		element.classList.remove('shown')
		if (ev.target.attributes.index.value == element.id) element.classList.add('shown')
	})
})