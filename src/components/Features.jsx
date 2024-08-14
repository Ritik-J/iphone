import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

function Features() {
  useGSAP(() => {
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
      duration: 2,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1.5,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-w">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore Full Story
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold text-center">
              iphone
            </h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in Titanium
            </h2>
          </div>

          <div className="flex-center flex-col px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                id="explore-video"
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                className="w-full h-full object-cover object-center border border-white rounded-xl"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative mt-5">
              <div className="feature-video-container">
                <div className="flex-1 overflow-hidden h-[50vh] border border-white rounded-xl">
                  <img src={explore1Img} className="feature-video g_grow" />
                </div>
                <div className="flex-1 overflow-hidden h-[50vh] border border-white rounded-xl">
                  <img src={explore2Img} className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
