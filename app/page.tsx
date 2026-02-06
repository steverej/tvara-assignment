import BlurHeading from "@/components/BlurHeading";
import GeminiChat from "@/components/InputBox";
import MagneticLines from "@/components/MagneticLines";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">

      <div className="w-4xl flex justify-center items-center p-20">
        <BlurHeading title={'REACT BITS'} className={''} />
      </div>

      <div className="w-4xl flex justify-center items-center p-20">
        <MagneticLines rows={8} cols={20} />
      </div>

      <div className="w-4xl flex justify-center items-center p-20">
        <GeminiChat />
      </div>

    </div>
  );
}
