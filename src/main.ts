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
    // markers: true,
    trigger: ".second-section",
    start: "-200%",
    end: "-100%",
    scrub: true,
  },
});

secondSectionTimeline.fromTo(
  ".headline>h1",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0 }
);
secondSectionTimeline.fromTo(
  "img.background-art",
  {
    y: 0,
  },
  {
    y: -20,
  },
  "<"
);
