gsap.registerPlugin(ScrollTrigger);

let tlOne = gsap.timeline({repeat:0, repeatDelay:0});

tlOne.to('.bold-head', {
    delay:0.5,
    duration: 2,
    text: " Hello!",
    color: "orange"
})
    .from('.sign', {
        duration:.3,
        opacity:0,
        scale:1.5,
        y:-100,
        stagger: 0.5,
    })
    .from('.header-btn', {
        duration:1.5,
        opacity:0,
        y:50,
    })

function animate (){
if (window.innerWidth >= 800){
    gsap.from('#myPhoto', {
        duration:1.5,
        opacity:0,
        y: -100,
        scrollTrigger: {
            trigger: '.about',
            start: "top 80%",
            end: 'top 20%',
            scrub:3,
        }
    })

    gsap.from('.textaboutme', {
        duration:1.5,
        opacity:0,
        x:20,
        scrollTrigger: {
            trigger: '.about',
            start: "top 80%",
            end: 'top 20%',
            scrub:3,
    }
})

    gsap.from('.first', {
        duration:1.5,
        opacity:0,
        scale:0.5,
        scrollTrigger:{
            trigger: '#portfolio',
            start: 'top 70%',
        }
    })

    gsap.from('.image', {
        opacity:0,
        x:-20,
        stagger: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger:'#portfolio',
            start: 'top 70%',
            end: 'bottom 10%',
        }
    })

    gsap.from('.second', {
        duration:1.5,
        opacity:0,
        scale:0.5,
        scrollTrigger:{
            trigger: '#myWeb',
            start: 'top 70%',
        }
    })

    gsap.from('.reviews__h2', {
        duration:2,
        opacity:0,
        scale:0.5,
        scrollTrigger:{
            trigger: '.reviews',
            start: 'top 50%',
        }
    })

    gsap.from('.contact__h2', {
        duration:2,
        opacity:0,
        scale:0.5,
        scrollTrigger:{
            trigger: '#contacts',
            start: 'top 80%',
        }
    })

    gsap.from('.footersign', {
        duration:.3,
        opacity:0,
        scale:1.5,
        y:-50,
        stagger: 0.5,
        scrollTrigger: {
            trigger:'.myCont',
            start: 'top 60%'
        }
    })
}

else {
        gsap.from('.one', {
        opacity:0,
        x:20,
        duration:1.8,
        scrollTrigger:{
            trigger:"#myPhoto",
            start: 'top 50%',
        }
    })

    gsap.from('.two', {
        opacity:0,
        x:20,
        duration:1.8,
        scrollTrigger:{
            trigger:".textOne",
            start: 'bottom 60%',
        }
    })
    gsap.from('.three', {
        opacity:0,
        x:20,
        duration:1.8,
        scrollTrigger:{
            trigger:".textTwo",
            start: 'bottom 60%',
        }
    })

    gsap.from('.textOne', {
        duration:1.8,
        opacity:0,
        x:-20,
        scrollTrigger: {
            trigger:".one",
            start:'top 60%'
        }
    })

    gsap.from('.textTwo', {
        duration:1.8,
        opacity:0,
        x:-20,
        scrollTrigger: {
            trigger:".two",
            start:'top 60%'
        }
    })
    gsap.from('.textThree', {
        duration:1.8,
        opacity:0,
        x:-20,
        scrollTrigger: {
            trigger:".three",
            start:'top 60%'
        }
    }) 


    gsap.from('.first', {
        duration:1.2,
        opacity:0,
        scale:.5,
        scrollTrigger:{
            trigger: '#portfolio',
            start: 'top 70%',
        }
    })

    gsap.from('.image', {
        duration: 2,
        opacity:0,
        y:50,
        stagger: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger:'#portfolio',
            start: 'top 45%',
            end: 'bottom 10%',
        }
    })

    gsap.from('.second', {
        duration:1.2,
        opacity:0,
        scale:.5,
        scrollTrigger:{
            trigger: '#myWeb',
            start: 'top 70%',
        }
    })

    gsap.from('.reviews__header', {
        duration:1.5,
        opacity:0,
        scale:.5,
        scrollTrigger:{
            trigger: '.reviews',
            start: 'top 80%',
        }
    })

    gsap.from('.contact__title', {
        duration:1.5,
        opacity:0,
        scale:.5,
        scrollTrigger:{
            trigger: '#contacts',
            start: 'top 80%',
        }
    })

    gsap.from('.footersign', {
        duration:.3,
        opacity:0,
        scale:1.5,
        y:-50,
        stagger: 0.5,
        scrollTrigger: {
            trigger:'.myCont',
            start: 'top 90%'
        }
    })
}
}
animate();