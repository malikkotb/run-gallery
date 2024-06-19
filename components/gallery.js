"use client";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import randomType from "./randomType";
gsap.registerPlugin(useGSAP);
export default function Gallery() {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png"];
  const dividerRefs = useRef([]);
  const mainRef = useRef(null);
  const numberRefs = useRef([]);
  const titleRefs = useRef([]);
  const imageRefs = useRef([]);

  const addToRefs = (refsArray) => (el) => {
    if (el && !refsArray.current.includes(el)) {
      refsArray.current.push(el);
    }
  };

  const addToImageRefs = addToRefs(imageRefs);
  const addToDividerRefs = addToRefs(dividerRefs);
  const addToNumberRefs = addToRefs(numberRefs);
  const addToTitleRefs = addToRefs(titleRefs);

  const handleHover = (scale) => {
    gsap.to(imageRefs.current, { scale, duration: 0.3, ease: "power2.inOut" });
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 20%",
        end: "bottom 50%",
        toggleActions: "play none none none",
      },
    });

    tl.to(
      imageRefs.current,
      {
        // opacity: 0,
        // y: -50,
        // clipPath: "inset(0 100% 0 0)",
        clipPath: "polygon(0% 100%, 100% 54%, 100% 100%, 0% 100%)",
        stagger: 0.1,
      },
      ""
    )
      .to(imageRefs.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.1,
      })
      .from(
        dividerRefs.current,
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          stagger: 0.2,
          // ease: "power2.out",
        },
        "-=0.9"
      )
      .from(
        numberRefs.current,
        {
          yPercent: 100,
          stagger: 0.2,
        },
        "<"
      )
      .from(
        titleRefs.current,
        {
          yPercent: 140,
          stagger: 0.2,
        },
        "-=1"
      );
  });

  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <p>Scroll Down</p>
      </section>
      <main ref={mainRef} className="justify-center flex gap-6 items-center h-screen p-4">
        {images.map((src, index) => (
          <div key={index}>
            <div
              ref={addToImageRefs}
              onMouseEnter={() => handleHover(1.2)}
              onMouseLeave={() => handleHover(1)}
              className="w-[20vw] h-[40vh] relative"
            >
              <Image src={src} fill style={{ objectFit: "cover" }} alt="run" />
            </div>
            <div ref={addToDividerRefs} className="border-b border-black mb-0 mt-2"></div>
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
