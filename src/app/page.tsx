import { Home as HomePage } from "../app/components/Home";
import { About, Carrossel, Map } from "./components";

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
