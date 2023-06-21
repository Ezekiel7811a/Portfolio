import { gsap } from "gsap";

//makes the element appear from nowhere over duration seconds
export const fadeIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0.8 },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
    }
  );
};

//makes the element appear progressively while sliding up
export const slideUp = (element) => {
  gsap.fromTo(
    element,
    { y: 10, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );
};

//makes the element appear progressively while sliding up
export const underlineHover = (element) => {
  //underline the text slowly over a duration of 1 second on hover
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      textDecoration: "underline",
    });
  });

  //remove underline on mouse leave
  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      textDecoration: "none",
    });
  });
};