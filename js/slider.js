var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container_main_info--slider--content");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



const nextSlide = ()=>{
    let sliderCounter = 0;
    setInterval(()=>{
        sliderCounter++;
        console.log(sliderCounter)
        if(sliderCounter >0 && sliderCounter < 5){
            currentSlide(sliderCounter)
        }else{
            sliderCounter = 0;
        }

    },5000)
}
nextSlide();