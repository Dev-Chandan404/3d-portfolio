<<<<<<< HEAD
import { useRef, useEffect } from "react";
=======
import { useRef } from "react";
>>>>>>> 0a2603d7792f1065ef7e3b447774002857e50083
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
<<<<<<< HEAD
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

=======
>>>>>>> 0a2603d7792f1065ef7e3b447774002857e50083
const Services = () => {
  const text = `I build secure, high-performance frontends with 
  smooth UX that drive growth
  — not headaches.`;
  const serviceRefs = useRef([]);
<<<<<<< HEAD
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  useGSAP(() => {
    // Only run animations on desktop to save mobile performance
    if (isMobile) return;

    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse", // Cleaner toggle
        },
        duration: 1,
        ease: "circ.out",
      });
    });

    // Cleanup all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

=======
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
useGSAP(()=>{
  serviceRefs.current.forEach((el)=>{
    if (!el) return;

    gsap.from(el,{
      y:200,
      scrollTrigger:{
        trigger:el,
        start:"top 80%"
      },
      duration:1,
      ease:"circ.out",
    });
  });
},[])
>>>>>>> 0a2603d7792f1065ef7e3b447774002857e50083
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subtitle={"Behind the sence, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
<<<<<<< HEAD
        withScrollTRigger={!isMobile} // Disable header scroll trigger on mobile
=======
        withScrollTRigger={true}
>>>>>>> 0a2603d7792f1065ef7e3b447774002857e50083
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
<<<<<<< HEAD
          className={`px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 ${
            isDesktop ? "sticky" : ""
          }`}
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: "auto" } // No sticky on mobile
=======
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                top: `calc(10vh + ${index * 5}em)`,
                marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
              }
              : { top: 0 }
>>>>>>> 0a2603d7792f1065ef7e3b447774002857e50083
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-wideset lg:text-white">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

<<<<<<< HEAD
export default Services;
=======
export default Services;
>>>>>>> 0a2603d7792f1065ef7e3b447774002857e50083
