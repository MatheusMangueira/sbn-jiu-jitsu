"use client"
import Image, { StaticImageData } from "next/image"
import { InstagramLogo } from "phosphor-react"
import Link from "next/link"

type AcademyCardProps = {
  nameAcademy: string
  teachers: string;
  address: string;
  insta: string;
  hours: string;
  gallery: StaticImageData | string;
  logo: StaticImageData | string;
}

export const AcademyCard = ({ nameAcademy, address, gallery, hours, logo, insta, teachers }: AcademyCardProps) => {
  return (
    <div className="sm:flex-row flex-col flex items-center sm:justify-start justify-center p-5 gap-4">
      <div className="p-2"> <Image
        src={logo}
        alt="academy"
      /></div>
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-medium text-lg text-primary">{nameAcademy}</h1>
        <div>
          <p className="font-medium"> Professores: <span className="text-sm">{teachers}</span></p>
          <p className="font-medium">Endereço: <span>{address}</span></p>
          <p className="font-medium flex items-center gap-2"> Redes Sociais:<Link href={insta}> <InstagramLogo size={18} /> </Link> </p>
          <p className="font-medium text-md">Horario: <span className="text-sm" >{hours}</span> </p>
        </div>
        <div className="flex gap-4">

          <Image
            className="w-28 h-28"
            alt="gallery" src={gallery} />

        </div>
      </div>
    </div>
  )
}