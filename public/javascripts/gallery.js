const bigSource = document.querySelector('#bigImage source')
const bigImage = document.querySelector('#bigImage img')
const gallery = document.getElementById('gallery')

const transitionDuration = 250 //To be able to manage animation duration or turn off animation completely
bigImage.style.transitionDuration = `${transitionDuration}ms`

gallery.addEventListener('click', ev => {
	const imgNumber = ev.target.attributes.imgNumber.value // Get number of an image from gallery
	const imgFolder = ev.target.attributes.folder.value // Get a folder name of an image from gallery

	bigImage.style.opacity = '0' //Start animation to hide the image

	setTimeout(() => {
		bigSource.srcset = `/images/${imgFolder}/${imgNumber}_480.webp 480w, /images/${imgFolder}/${imgNumber}_960.webp 960w, /images/${imgFolder}/${imgNumber}_1920.webp 1920w`
		bigImage.src = `/images/${imgFolder}/${imgNumber}_1920.jpg`

		bigImage.onload = () => {
			setTimeout(() => {
				bigImage.style.opacity = '1'
			}, transitionDuration) //Start animation right after loading the new image
		}
	}, transitionDuration)
})


// gallery.addEventListener('click', ev => {
// 	const imgNumber = ev.target.attributes.imgNumber.value // Get number of an image from gallery
// 	const imgFolder = ev.target.attributes.folder.value // Get a folder name of an image from gallery
//
// 	bigImage.classList.toggle('opacity-1') // For animation - remove "opacity: 1"
// 	bigImage.classList.toggle('opacity-0') // For animation - add "opacity: 0"
//
// 	setTimeout(() => {
// 		bigSource.srcset = `/images/${imgFolder}/${imgNumber}_480.webp 480w, /images/${imgFolder}/${imgNumber}_960.webp 960w, /images/${imgFolder}/${imgNumber}_1920.webp 1920w`
// 		bigImage.src = `/images/${imgFolder}/${imgNumber}_1920.jpg`
// 	}, 250)
//
//
// 	bigImage.onload = () => {
// 		setTimeout(() => {
// 			bigImage.classList.toggle('opacity-1')
// 			bigImage.classList.toggle('opacity-0')
// 		}, 350)
// 	}
// })


