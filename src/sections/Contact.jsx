import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
    const text = `Got a project in mind or just curious? Let’s talk.`;
    const items = [
        "Dream it. Code it.",
        "Learn. Build. Repeat.",
        "Logic meets creativity",
        "Bug hunter by night",
        "Break it. Fix it.",
    ];
    useGSAP(() => {
        gsap.from(".social-link", {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".social-link",
            },
        });
    }, []);
    return (
        <section
            id="contact"
            className="flex flex-col justify-between min-h-screen bg-black"
        >
            <div>
                <AnimatedHeaderSection
                    subTitle={"You Dream It, I Code it"}
                    title={"Contact"}
                    text={text}
                    textColor={"text-white"}
                    withScrollTrigger={true}
                />
                <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
                    <div className="flex flex-col w-full gap-10">
                        <div className="social-link">
                            <h2>E-mail</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                                dev.chandankumar404@gmail.com
                            </p>
                        </div>
                        <div className="social-link">
                            <h2>Linkedin</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                                <a href="https://www.linkedin.com/in/chandan-kumar-28423439b/">
                                <i className="fa fa-linkedin-square" style={{fontSize:"36px"}}></i>

                                </a>
                            </p>
                        </div>
                        <div className="social-link">
                            <h2>Social Media</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <div className="flex flex-wrap gap-2">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                                    >
                                        {"{ "}
                                        {social.name}
                                        {" }"}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Marquee items={items} className="text-white bg-transparent" /> */}
        </section>
    );
};

export default Contact;
