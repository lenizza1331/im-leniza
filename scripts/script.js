//animation for my photo
let myPhoto = document.querySelector("#myPhoto");
let myPhotoArray = ['https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(25).png?v=1639966299494',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(22).png?v=1639966299592',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(37).png?v=1639966300001',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(21).png?v=1639966300356',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(33).png?v=1639966300490',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(3).jpg?v=1640377951610',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(31).png?v=1639966300975'];
let b=0;
myPhoto.addEventListener("mouseenter", ()=> { 
    b++;
        if (b>myPhotoArray.length-1) {
            b=0
        }
    document.querySelector('#myPhoto').src=myPhotoArray[b];
});
myPhoto.addEventListener("click", ()=> { 
    b++;
        if (b>myPhotoArray.length-1) {
            b=0
        }
    document.querySelector('#myPhoto').src=myPhotoArray[b];
});


//animation for my scroll arrow
const scrollTop = document.querySelector('#scrollTop');
window.onscroll = () => {
    if (window.scrollY > 600){
        scrollTop.classList.remove('scrollUp_hide');
    }
    else {scrollTop.classList.add('scrollUp_hide')}
};

scrollTop.onclick = ()=>{
    window.scrollTo(0,0);
}


//animation for navbar on scroll

let lastScroll = 0;
const defaultOffset = 150;
const header = document.querySelector('.navbar');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('sticky-top');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && containHide() ) {
        //scroll down
        header.classList.remove('sticky-top');
        
    }
    else if(scrollPosition() < lastScroll && !containHide()  && scrollPosition() > defaultOffset){
        //scroll up
        header.classList.add('sticky-top');
        
    }
    lastScroll = scrollPosition();
})


