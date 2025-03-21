const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});



Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("#n-left a" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  
var a = gsap.timeline()

a.from("#n-left a",{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.1
})

a.from("h3",{
    y:-500,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.1
})
a.from("h2",{
    x:-500,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.1
})
Shery.makeMagnet("#imageshow" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("#rightimg,#leftimg" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.makeMagnet("#imgess" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

