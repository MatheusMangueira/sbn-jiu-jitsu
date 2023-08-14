import Link from "next/link";
import logo from "../../assets/images/SBN-logo.png";
import Image from "next/image";
import faixa from "../../assets/images/faixa.png";

const header = [
  {
    id: 0,
    name: "Inicio",
    path: "/",
  },
  {
    id: 1,
    name: "Quem somos",
    path: "/",
  },
  {
    id: 2,
    name: "Academias",
    path: "/",
  },
  {
    id: 3,
    name: "Galeria",
    path: "/photos",
  },
];

export const Header = () => {
  return (
    <div className="sm:px-10 px-4 bg-primary w-full">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-10 ">
          <Image src={logo} alt="logo" />
          {header.map((item) => (
            <Link
              className="text-white hover:text-gray-400 transition duration-500 ease-in-out"
              key={item.id}
              href={item?.path || "/"}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Image src={faixa} alt="faixa" />
      </div>
    </div>
  );
};
