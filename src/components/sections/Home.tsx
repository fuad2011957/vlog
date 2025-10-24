import Header from "../header/header";
import FotkiHome from "./Fotki";
import Inputik from "./inputik";
import InputResult from "./Input-result";
import Menalka from "./menalka";

export function HomePage() {
  return (
    <section className=" bg-[#181818] flex flex-col items-center   min-h-screen w-full">
      <Header className={"mb-[100px]"} />
      <FotkiHome className={"mb-[100px]"} />
      <Inputik />
      <InputResult />
      <Menalka />
    </section>
  );
}
