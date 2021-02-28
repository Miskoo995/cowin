const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    //get current element class 
    const current = document.querySelector('.current');
    //remove current element class 
    current.classList.remove('current');
    //Chekcing for next element sibling
    if(current.nextElementSibling){
        //Add current class to that sibling
    current.nextElementSibling.classList.add('current');

    }else{

        slides[0].classList.add('current');
    }
    setTimeout(()=>current.classList.remove('current'));
}
const prevSlide = () => {
    //get current element class 
    const current = document.querySelector('.current');
    //remove current element class 
    current.classList.remove('current');
    //Chekcing for prev element sibling
    if(current.previousElementSibling){
        //Add current class to that sibling
    current.previousElementSibling.classList.add('current');

    }else{

        slides[slides.length -1].classList.add('current');
    }
    setTimeout(()=>current.classList.remove('current'));
}

next.addEventListener('click', e =>{
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


prev.addEventListener('click', e =>{
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
    }
});


// Auto slide 

if(auto){

    //Run slide in the interval time 

    slideInterval = setInterval(nextSlide, intervalTime);
}