import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "back.inOut",
    });

    gsap.to(".link", {
      scrollTrigger: {
        trigger: ".link",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "back.out",
      stagger: 0.5,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div
          className="mb-12 w-full items-end justify-between md:flex"
          id="higlight-section"
        >
          <h1 id="title" className="section-heading">
            Get the Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              {" "}
              watch the film
              <img src={watchImg} alt="watch icon" className="ml-2" />
            </p>

            <p className="link">
              {" "}
              watch the event
              <img src={rightImg} alt="event icon" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;
