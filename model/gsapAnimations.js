import { useEffect } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function headerGsapAnimations(component) {
  const headerBtnAnimation = () => {
    const headerBtn = gsap.timeline({ defaults: {duration: .1}, repeat: -1, repeatDelay: 3 });
    headerBtn.to('.header__button__gsap', {rotate: 3})
    .to('.header__button__gsap', {rotate: -3})
    .to('.header__button__gsap', {rotate: 3})
    .to('.header__button__gsap', {rotate: 0})
    return headerBtn
  } 
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({ defaults: {duration: 2} })
      .from('.header__title__gsap', {
        opacity: 0, 
        y: 50, 
        ease: "power3"
      })
      .from('.header__paragraph__gsap', {
        opacity: 0, 
        y: 50, 
        ease: "power2",
        delay: 0
      })
      .add(headerBtnAnimation)
    }, component);
    
    return () => ctx.revert();
  }, []);
}

export function aboutGsapAnimations(component) {
  const rightImageClass = '.style_about__positionRight__QtNp6';
  const leftSecondImageClass = '.style_about__positionLeft_second__4SmnG';
  const leftThirdImageClass = '.style_about__positionLeft_third___AybA';
  const leftFirthImageClass = '.style_about__positionLeft_firth__LF2yU';


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function setBlockNumber(i, param) {
      let ctx = gsap.context(() => {
        gsap.timeline({scrollTrigger: {
          trigger: `.about__item__${i}`,
          start: 'top 30%'
        }})
        .from(param, {
          opacity: 0,
          duration: 0.5, 
          x: -100, 
          ease: "power3",
        })
        .from(`.about__item__title__${i}`, {
          opacity: 0, 
          duration: 0.5, 
          x: -100,
          ease: "power3",
        })
        .from(`.about__item__text__${i}`, {
          opacity: 0, 
          duration: 0.5, 
          y: 50,
          ease: "power3",
        })
      }, component);

      return ctx;
    }

    setBlockNumber(1, rightImageClass);
    setBlockNumber(2, leftSecondImageClass);
    setBlockNumber(3, leftThirdImageClass);
    setBlockNumber(4, leftFirthImageClass)
    

    return () => ctx.revert();
  }, []);
}