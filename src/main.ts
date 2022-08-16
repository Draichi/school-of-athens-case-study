import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".first-section",
    start: 0,
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const secondSectionTimeline = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".second-section",
    start: "-200%",
    end: "-100%",
    scrub: true,
  },
});

secondSectionTimeline.fromTo(".headline>h1", { y: -20 }, { y: 0 });
secondSectionTimeline.fromTo(
  "img.background-art",
  {
    y: 0,
  },
  {
    y: -50,
  },
  "<"
);
secondSectionTimeline.fromTo(
  "img.background-art",
  {
    scale: 1,
    x: 0,
  },
  {
    scale: 2,
    x: -400,
  },
  "<50%"
);
