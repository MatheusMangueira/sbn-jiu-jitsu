import Image from "next/image";
import { Title } from "../Title";
import grupo from "../../assets/images/grupo.png";

export const PhotoPage = () => {
  return (
    <div className="sm:p-10 p-4 min-h-[100vh]">
      <div className="w-full flex items-center justify-center pb-10">
        <Title color="text-primary" title="Galeria" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
        <Image src={grupo} alt="" />
      </div>
    </div>
  );
};
