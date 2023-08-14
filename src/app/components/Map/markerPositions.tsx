import { Content } from "./components/Content";
import torquarto from "../../assets/images/torquarto.png";
import bicudo from "../../assets/images/bicudo.png";
import cla from "../../assets/images/cla.png";
import kids from "../../assets/images/kids.png";

type MarkerPositions = {
  position: [number, number];
  content: JSX.Element;
}[];

export const markerPositions: MarkerPositions = [
  {
    position: [-12.901751, -38.486415],
    content: (
      <Content
        contact="(71) 9 9691-3238"
        href="https://api.whatsapp.com/send/?phone=5571996913238&text&type=phone_number&app_absent=0"
        image={torquarto}
        teach="Matheus Torquato e Juba"
        title="Escola de luta"
        nameEndress="Plataforma, Salvador - BA, 40717-634"
        endress="https://www.google.com.br/maps/place/Final+De+Linha+De+Plataforma/@-12.9014708,-38.4890727,551m/data=!3m1!1e3!4m10!1m2!2m1!1srua+famosa+22+final+de+linha+plataforma!3m6!1s0x7160fd7bd3ab7c7:0x23ce38109feaf03d!8m2!3d-12.9001008!4d-38.4869175!15sCidydWEgZmFtb3NhIDIyIGZpbmFsIGRlIGxpbmhhIHBsYXRhZm9ybWGSAQhidXNfc3RvcOABAA!16s%2Fg%2F1ptz22lrs?entry=ttu"
      />
    ),
  },
  {
    position: [-12.838866, -38.46966],
    content: (
      <Content
        contact="(71) 9 0000-0000"
        href="https://api.whatsapp.com/send?phone=5571999999999&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20escola%20de%20luta%20Torquato%20Jiu-Jitsu"
        image={bicudo}
        teach="Robson Junior"
        title="Bicudo Team"
        nameEndress="R. da Independência, 124 - Paripe, Salvador - BA, 40820-030"
        endress="https://www.google.com.br/maps/place/R.+da+Independ%C3%AAncia,+124+-+Paripe,+Salvador+-+BA,+40820-030/@-12.8390478,-38.4698961,116m/data=!3m1!1e3!4m6!3m5!1s0x71612135d1c2a0f:0x58a539d42c25958d!8m2!3d-12.8389779!4d-38.4697147!16s%2Fg%2F11fwgnp6t0?entry=ttu"
      />
    ),
  },

  {
    position: [-12.866897, -38.477159],
    content: (
      <Content
        contact="(71) 9 8656-3616"
        href="https://api.whatsapp.com/send/?phone=5571986563616&text&type=phone_number&app_absent=0"
        image={cla}
        teach='Érico Virgens “LELEU"'
        title="CLÃ DA LUTA"
        nameEndress="...."
        endress="https://www.google.com.br/maps/place/Plataforma,+Salvador+-+BA/@-12.9018528,-38.487581,276m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x7160fd51e406463:0x1bf47c1feb9fa5e4!2sRua+Baptista+Machado+-+Plataforma,+Salvador+-+BA,+40710-510!3b1!8m2!3d-12.8932095!4d-38.4876134!16s%2Fg%2F1ymtp2dj9!3m5!1s0x7160fd820e6603d:0xff584258f7f74ac!8m2!3d-12.9018528!4d-38.4863646!16s%2Fg%2F11f621vwqr?entry=ttu"
      />
    ),
  },

  {
    position: [-12.89325, -38.487592],
    content: (
      <Content
        contact="(71) 9 9643-7184"
        href="https://api.whatsapp.com/send?phone=5571996437184"
        image={kids}
        teach="..."
        title="Escola de Jiu-jítsu Teens e Kids"
        nameEndress="Rua Baptista Machado, Plataforma, Salvador - BA - CEP 40710510"
        endress="https://www.google.com.br/maps/place/Rua+Baptista+Machado+-+Plataforma,+Salvador+-+BA,+40710-510/@-12.8932223,-38.4876465,116m/data=!3m1!1e3!4m6!3m5!1s0x7160fd51e406463:0x1bf47c1feb9fa5e4!8m2!3d-12.8932095!4d-38.4876134!16s%2Fg%2F1ymtp2dj9?entry=ttu"
      />
    ),
  },
];
