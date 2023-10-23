const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let imageIndex = 0;

function changeSlide() {
    const banner = document.getElementById("banner");
    const bannerImg = banner.querySelector(".banner-img");
    const bannerText = banner.querySelector("p");
    bannerImg.src = "./assets/images/slideshow/" + slides[imageIndex].image;
    bannerText.innerHTML = slides[imageIndex].tagLine;
	
	const dots = banner.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index == imageIndex)	{
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
	});
}
		
document.getElementById("arrow_left").addEventListener("click", function() {
    imageIndex--;
    
    if (imageIndex < 0) {
        imageIndex = slides.length - 1;
    }
    
    changeSlide();
});


document.getElementById("arrow_right").addEventListener("click", function() {
    imageIndex++;
    
    if (imageIndex >= slides.length) {
        imageIndex = 0;
    }
    

    changeSlide();
});

changeSlide();
