import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ContentProps = {
  title: string;
  image: StaticImageData;
  teach: string;
  contact: string;
  href: string;
  endress: string;
  nameEndress: string;
};

export const Content = ({
  contact,
  href,
  image,
  teach,
  title,
  endress,
  nameEndress,
}: ContentProps) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Image width={24} height={24} src={image} alt="logo" />
        <h1 className="text-primary font-bold">{title}</h1>
      </div>
      <p className="text-primary">
        Professor: {teach} <br />
        <Link target="_blank" href={href}>
        <span className="text-primary">Contato:</span> {contact}
        </Link>
        <br />
        <Link
         target="_blank" href={endress}>
          <span className="text-primary">Endereço:</span> {nameEndress}
        </Link>
      </p>
    </div>
  );
};
