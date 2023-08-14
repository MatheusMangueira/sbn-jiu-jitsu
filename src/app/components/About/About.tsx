import Image from "next/image";
import { Title } from "../Title";
import grupo from "../../assets/images/grupo.png";
import Link from "next/link";

export const About = () => {
  return (
    <div className="sm:p-10 p-4 ">
      <div className="w-full flex items-center justify-center pb-10">
        <Title 
        color="text-primary"
        title="Quem somos" />
      </div>
      <div className="w-full flex flex-col sm:flex-row sm:gap-20 gap-10 justify-center ">
        <p className="max-w-xl sm:text-xl text-md font-medium ">
          Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
          texto randômico. Com mais de 2000 anos, suas raízes podem ser
          encontradas em uma obra de literatura latina clássica datada de 45 AC.
          Richard McClintock, um professor de latim do Hampden-Sydney College na
          Virginia, pesquisou uma das mais obscuras palavras em latim,
          consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por.
          Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
          texto randômico. Com mais de 2000 anos, suas raízes podem ser
          encontradas em uma obra de literatura latina clássica datada de 45 AC.
          Richard McClintock, um professor de latim do Hampden-Sydney College na
          Virginia, pesquisou uma das mais obscuras palavras em latim,
          consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por
        </p>

        <div className="flex flex-col gap-5 sm:items-end">
          <Image
            className="w-[800px] rounded-xl shadow-lg"
            src={grupo}
            alt="Quem somos"
          />

          <Link 
          className="text-center sm:text-lg text-white bg-red-700 rounded-lg py-2 px-4 font-medium w-full hover:bg-primary transition-all ease-in-out duration-500 uppercase"
          href="/">Faça parte do time</Link>
        </div>
      </div>
    </div>
  );
};
