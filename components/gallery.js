"use client";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
export default function Gallery() {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png"];
  const dividerRefs = useRef([]);
  const mainRef = useRef(null);
  const numberRefs = useRef([]);
  const titleRefs = useRef([]);

  const addToDividerRefs = (el) => {
    if (el && !dividerRefs.current.includes(el)) {
      dividerRefs.current.push(el);
    }
  };

  const addToNumberRefs = (el) => {
    if (el && !numberRefs.current.includes(el)) {
      numberRefs.current.push(el);
    }
  };

  const addToTitleRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 20%",
        end: "bottom 50%",
        markers: true,
        toggleActions: "play none none none",
      },
    });

    tl.from(dividerRefs.current, {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1,
      stagger: 0.2,
      // ease: "power2.out",
    }).from(numberRefs.current, {
        yPercent: 100,
        stagger: 0.2,
    }, "<").from(titleRefs.current, {
        yPercent: 140,
        stagger: 0.2,
    }, "-=1");
  });

  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <p>Scroll Down</p>
      </section>
      <main ref={mainRef} className="justify-center flex gap-6 items-center h-screen p-4">
        {images.map((src, index) => (
          <div key={index}>
            <div className="w-[20vw] h-[40vh] relative">
              <Image src={src} fill style={{ objectFit: "cover" }} alt="run" />
            </div>
            <div ref={addToDividerRefs} className="border-b-2 border-black mb-0 mt-2"></div>
            <div className="flex mask justify-between items-center">
              <p ref={addToNumberRefs} className="text-lg">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p ref={addToTitleRefs} className="text-xs font-extralight">
                RUNATTIRE
              </p>
            </div>
          </div>
        ))}
      </main>
      <section className="h-screen"></section>
    </>
  );
}
