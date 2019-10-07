const bigImage = document.querySelector('#bigImage picture')
const gallery = document.getElementById('gallery')

gallery.addEventListener('click', evt => {
	bigImage.firstElementChild.srcset = evt.target.previousElementSibling.srcset // Change srcset in source
	bigImage.lastElementChild.src = evt.target.src // Change src in img
})
