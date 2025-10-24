import Header from "@/components/header/header";
import { Valak } from "@/components/sections/Valak";
import ChitatHome from "./Chitat-home";

const Chitat = () => {
  return <main className={`min-h-[1700px] flex`}>
    <Valak />
    <ChitatHome />
  </main>;
};

export default Chitat;
