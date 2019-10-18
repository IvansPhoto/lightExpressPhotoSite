const bigSource = document.querySelector('#bigImage source')
const bigImage = document.querySelector('#bigImage img')
const gallery = document.getElementById('gallery')


gallery.addEventListener('click', ev => {
	const imgNumber = ev.target.attributes.imgNumber.value // Get number of an image from gallery
	const imgFolder = ev.target.attributes.folder.value // Get a folder name of an image from gallery

	bigImage.classList.toggle('opacity-1') // For animation - remove "opacity: 1"
	bigImage.classList.toggle('opacity-0') // For animation - add "opacity: 1"

	setTimeout(() => {
		bigSource.srcset = `/images/${imgFolder}/${imgNumber}_480.webp 480w, /images/${imgFolder}/${imgNumber}_960.webp 960w, /images/${imgFolder}/${imgNumber}_1920.webp 1920w`
		bigImage.src = `/images/${imgFolder}/${imgNumber}_1920.jpg`
	}, 250)

	setTimeout(() => {
		bigImage.classList.toggle('opacity-1')
		bigImage.classList.toggle('opacity-0')
	}, 350)

})
