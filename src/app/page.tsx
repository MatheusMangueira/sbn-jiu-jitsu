import dynamic from "next/dynamic";
import { Home as HomePage } from "../app/components/Home";
import { About, Carrossel } from "./components";

const Map = dynamic(() => import("../app/components/Map/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Carrossel />
      <Map />
    </div>
  );
}
