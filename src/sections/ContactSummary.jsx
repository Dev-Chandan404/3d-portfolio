import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  // useGSAP(() => {
  //   gsap.to(containerRef.current, {
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "center center",
  //       end: "+=800 center",
  //       scrub: 0.5,
  //       pin: true,
  //       pinSpacing: true,
  //       markers: false,
  //     },
  //   });
  // }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      {/* <Marquee items={items} /> */}
      <img className="w-screen lg:hidden h-40" src="images/q1.jpg" alt="" />

      <div className="mt-5 overflow-hidden font-light text-center contact-text-responsive">
        <p className="text-balance">
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <br /> <span className="text-gold">together</span> “
        </p>
      </div>
      <img className="w-screen lg:hidden h-40" src="images/1.jpeg" alt="" />

      {/* <Marquee
  items={["Frontend Dev", "Creative Coder", "UI Explorer"]}
  className="text-4xl text-center  border-2 border-t-black md:text-6xl font-bold"
  
/> */}
    </section>
  );
};

export default ContactSummary;
