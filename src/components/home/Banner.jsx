import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-start justify-between items-center">
      <div className="flex-1 space-y-5">
        <h2
          className={`${fontBangla.className} text-5xl md:text-6xl font-bold leading-20`}
        >
          আপনার শিশুকে দিন একটি
          <span className="text-primary"> সুন্দর ভবিষ্যৎ</span>
        </h2>
        <p>Buy every toy with up to 15% discount</p>
        <button className="btn btn-primary btn-outline">
          Explore products
        </button>
      </div>
      <div className="flex-1">
        <Image
          alt="Buy every toy with up to 15% discount"
          src={"/assets/hero.png"}
          width={500}
          height={400}
          priority={true}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
