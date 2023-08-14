import Link from "next/link";

type Props = {
  name: string;
  href: string;
};

export const ButtonCustom = ({ name, href }: Props) => {
  return (
    <Link
      href={href}
      className=" bg-white hover:bg-primary flex flex-col items-center justify-center rounded-full
      hover:text-white font-medium sm:text-2xl text-lg text-black sm:p-4 p-2  transition duration-500 ease-in-out "
    >
      {name}
    </Link>
  );
};
