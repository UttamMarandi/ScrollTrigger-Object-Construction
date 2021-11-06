gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".top_div");
ScrollTrigger.create({
  trigger: ".top_div",
  start: "top top",
  end: "bottom 10%",
  //   end: () => `+=${document.querySelector(".top_div").offsetHeight}`,
  //   end: "bottom 50px",
  pin: ".top_div",
  scrub: true,
  pinSpacing: false,
  // markers: true,
});
ScrollTrigger.create({
  trigger: ".panda_div",
  start: "top top",
  end: "bottom 50px",
  scrub: true,
  pin: ".panda_div",
  pinSpacing: false,
  // markers: true,
});
// panda
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".panda_div",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});
tl.from(".anim_eyes", { y: innerHeight * 1.5 })
  .from(".anim_eyeband", { y: innerHeight * 1.5 })
  .from(".anim_jacket", { y: innerHeight * 1.5 })
  .from(".anim_crown", { y: innerHeight * 1.5 });
