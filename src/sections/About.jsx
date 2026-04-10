import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text = `Passionate about clean architecture I build scalable,
  high performance solutions from 
  prototype to production`;

  const aboutText = `Obsessed with building fast, intuitive interfaces
   —from pixel-perfect React UIs to smooth
   GSAP animations and immersive Three.js scenes. Every line of code is a promise:
    quality that users feel.
I believe great interfaces aren't just seen —
they're felt. That means obsessive attention to performance,
accessibility, and the micro-interactions that turn good products
into unforgettable ones.
  When I’m not shipping:

🐛 Breaking things just to figure out how to fix them
🔄 Refreshing GitHub for no reason.
`;

  const imgRef = useRef(null);

  useGSAP(() => {
    if (!imgRef.current) return;

    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-3xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <video
          ref={imgRef}
          autoPlay
          loop
          muted
          src="/video/coding.mp4"
          alt="man"
          className="w-96 rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
