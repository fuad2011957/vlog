import Link from "next/link";
import Header from "../header/header";
import { Valak } from "./Valak";
import Rectangle1 from "@/shared/assets/img/Rectangle1.jpg";
import Rectangle2 from "@/shared/assets/img/Rectangle2.jpg";

export function MyWorksPage() {
  return (
    <div className="bg-[#181818] w-full">
      <Header className="" />
      <div className="sect flex flex-col items-center gap-13">
        <section className="flex items-center justify-between bg-[#202020]">
          <div className="left">
            <img src={Rectangle1.src} alt="" />
          </div>
          <div className="right flex flex-col items-end justify-between h-138">
            <div className="info__box flex flex-col items-start justify-between gap-10">
              <h1 className="text-2xl font-bold">altermono.com</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum volutpat orci turpis urna. Et vestibulum, posuere
                tortor lacinia sit. Sagittis porttitor orci auctor in at
                tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
                nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
                volutpat.
              </p>
              <div className="spans w-full flex items-center gap-2.5 text-[13px]">
                <span className="bg-[#EA8C1E] border-0 rounded-[6px] flex items-center justify-center">
                  дизайн
                </span>
                <span className="bg-[#EA8C1E] border-0 rounded-[6px] flex items-center justify-center">
                  создание сайта
                </span>
                <span className="bg-[#EA8C1E] border-0 rounded-[6px] flex items-center justify-center">
                  SMM
                </span>
              </div>
            </div>

            <Link className="" href={``}>
              {" "}
              <button
                className="bg-[#3137C9] w-[120px] h-[40px]
               flex items-center justify-center text-white rounded-[6px]
               text-[13px] border-0 cursor-pointer"
                type="button"
              >
                Перейти на сайт
              </button>{" "}
            </Link>
          </div>
        </section>
        <section className="flex items-center justify-between bg-[#202020]">
          <div className="left">
            <img src={Rectangle2.src} alt="" />
          </div>
          <div className="right flex flex-col items-end justify-between h-128">
            <div className="info__box flex flex-col items-start justify-between gap-14">
              <h1 className="text-2xl font-bold">codedoco.com</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum volutpat orci turpis urna. Et vestibulum, posuere
                tortor lacinia sit. Sagittis porttitor orci auctor in at
                tincidunt arcu egestas.
              </p>
              <div className="spans w-full flex items-center gap-2.5 text-[13px]">
                <span className="bg-[#EA8C1E] border-0 rounded-[6px] flex items-center justify-center">
                  дизайн
                </span>
                <span className="bg-[#EA8C1E] border-0 rounded-[6px] flex items-center justify-center">
                  создание сайта
                </span>
                <span className="bg-[#EA8C1E] border-0 rounded-[6px] flex items-center justify-center">
                  SMM
                </span>
              </div>
            </div>

            <Link
              className=" bg-[#3137C9] w-[120px] h-[40px]
               flex items-center justify-center text-white rounded-[6px]
               text-[13px] border-0 cursor-pointer"
              href={`#`}
            >
              Перейти на сайт
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
