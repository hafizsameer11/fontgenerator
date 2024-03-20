import Image from "next/image";
import React from "react";
import img1 from "@/public/home/font_1.png";

export default function HomeSecondSections() {
  return (
    <div className="home-second-section w-[60%] m-auto">
      <div className="home-section-second-inro flex gap-[30px] mt-[50px]">
        <div className="first">
          <Image src={img1} className="w-[100%]" />
        </div>
        <div className=" second">
          <h2 className="text-[25px]">Introduction to Font Generator</h2>
          <p className="mb-8">
          A font generator is an online tool that permits the creation of custom fonts. Either a brand-new typeface can be created from scratch, or an existing font can be tweaked to create a personalized version.
          </p>
          <p>
          The font generator can be used to create bespoke fonts for a website or blog. You can use them to create logos or add personality to your website. This tool offers a large number of font styles, so it should be easy to find one that matches your needs. Once youve found a font copy and paste you like.


          </p>
        </div>
      </div>
    </div>
  );
}
