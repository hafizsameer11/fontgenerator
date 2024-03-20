import Image from "next/image";
import Textarea from "./components/Textarea";
import FontGeneratorDiv from "./components/FontGeneratorDiv";
import FontGenerator from "./components/FontGenerator";
import HomeSecondSections from "./components/HomeDetails/HomeSecondSections";

export default function Home() {
  return (
    <>
      <main className="mb-[50px]">
        <h2 className="text-[30px] font-semibold text-center mt-[40px]">
          Font Generator
        </h2>
        <p className="w-[50%] m-auto text-center">
          Online font generator lets you customize your font styles, sizes, and
          designs for a unique touch. Transform your text into art with our
          Fancy font generator.
        </p>
        <div className="add-space-first text-center ">
          <p>Ad will be display here</p>
        </div>
        <FontGenerator />
        <HomeSecondSections />

      </main>
    </>
  );
}
