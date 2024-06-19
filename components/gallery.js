"use client";
import Image from "next/image";
import { useRef } from "react";
export default function Gallery() {
  const dividerRefs = useRef([]);

  const addToDividerRefs = (el) => {
    if (el && !dividerRefs.current.includes(el)) {
      dividerRefs.current.push(el);
    }
  };

  // useGSAP();

  return (
    <main className="justify-center flex gap-6 items-center h-screen p-4">
      <div className="border ">
        <div className="w-[20vw] h-[40vh] relative">
          <Image src="/1.png" fill alt="Picture of the author" />
        </div>
        {/* <div className="w-full bg-black h-[2px] my-2"></div> */}
        <div class="border-b-2 border-black mb-0 mt-2"></div>
        <div className="flex justify-between items-center">
          <p className="text-lg">01</p>
          <p className="text-xs font-extralight">RUNATTIRE</p>
        </div>
      </div>

      <div className="">
        <div className="w-[20vw] h-[40vh] relative">
          <Image src="/2.png" fill alt="Picture of the author" />
        </div>
        <div class="border-b-2 border-black mb-0 mt-2"></div>
        <div className="flex justify-between items-center">
          <p className="text-lg">02</p>
          <p className="text-xs font-extralight">RUNATTIRE</p>
        </div>
      </div>
      <div className="">
        <div className="w-[20vw] h-[40vh] relative">
          <Image src="/3.png" fill alt="Picture of the author" />
        </div>
        <div class="border-b-2 border-black mb-0 mt-2"></div>
        <div className="flex justify-between items-center">
          <p className="text-lg">03</p>
          <p className="text-xs font-extralight">RUNATTIRE</p>
        </div>
      </div>
      <div>
        <div className="w-[20vw] h-[40vh] relative">
          <Image src="/4.png" fill alt="Picture of the author" />
        </div>
        <div class="border-b-2 border-black mb-0 mt-2"></div>
        <div className="flex justify-between items-center">
          <p className="text-lg">04</p>
          <p className="text-xs font-extralight">RUNATTIRE</p>
        </div>
      </div>
    </main>
  );
}
