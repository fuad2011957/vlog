import Header from "@/components/header/header";
import Link from "next/link";

const ChitatHome = () => {
  return (
    <section
      className={`bg-[#181818] flex flex-col items-center  w-full min-h-screen`}
    >
      <Header className={"mb-[100px]"} />
      <div
        className={`sam w-[770px]  items-center bg-[#202020] min-h-[1500px] rounded-[5px]`}
      >
        <div className={`chitat__verx flex items-center justify-between`}>
          <Link className={`text-3 text-[#828282]`} href={"/"}>
            вернуться назад
          </Link>
          <div className={`flex gap-1 items-center`}>
            <h1 className={`text-3 text-[#828282]`}>поделиться</h1>
            <img width={18.75} height={20} src={"/chitat1.png"} alt="" />
          </div>
        </div>
        <div>
          <h1
            className={`leading-[21px] text-[18px] text-[#FFFFFF] font-medium`}
          >
            Как создавать сайты легко
          </h1>
          <div className={`chitat__nije flex gap-[15px] items-center`}>
            <h1 className={`text-[#828282] text-[12px]`}>21.06.2020</h1>
            <span
              className={`w-[6px] h-[6px] rounded-full bg-[#C4C4C4]`}
            ></span>
            <p className={`text-[#828282] text-[12px]`}>создание сайтов</p>
          </div>
        </div>
        <div className={`chitat__eshe_nije flex flex-col items-center gap-7`}>
          <h1 className={`text-[14px] leading-[21px] text-[#FFFFFF]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Elementum volutpat orci turpis
            urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor
            orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia
            eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare
            vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
            tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt
            arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam
            sit sed volutpat massa. Egestas ornare vel volutpat.
          </h1>
          <img width={720} src="/chitatFoto.png" alt="" />
          <h2 className={`text-[14px] leading-[21px] text-[#FFFFFF]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Elementum volutpat orci turpis
            urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor
            orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia
            eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare
            vel volutpat.
          </h2>
        </div>
        <div className={`flex flex-col gap-3`}>
          <h1 className={`text-[16px] font-medium text-[#FFFFFF]`}>
            Интересно почитать
          </h1>
          <div
            className={`chitat__eshe_eshe_nije flex justify-between items-center border-b border-b-[#1c1c1c] `}
          >
            <div className={`flex flex-col gap-5`}>
              <div>
                <h1 className={`text-[14px] text-[#F3EBA2] font-medium`}>
                  Как я сходил на FrontEnd Conf 2021
                </h1>
                <p className={`text-[12px] text-[#828282]`}>21.06.2020</p>
              </div>
              <div>
                <h1 className={`text-[14px] text-[#F3EBA2] font-medium`}>
                  Как писать код быстро и ...
                </h1>
                <p className={`text-[12px] text-[#828282]`}>21.06.2020</p>
              </div>
            </div>
            <div className={`flex flex-col gap-5`}>
              <div>
                <h1 className={`text-[14px] text-[#F3EBA2] font-medium`}>
                  Купил новый ноутбук за 150 000 руб
                </h1>
                <p className={`text-[12px] text-[#828282]`}>21.06.2020</p>
              </div>
              <div>
                <h1 className={`text-[14px] text-[#F3EBA2] font-medium`}>
                  Купил новый ноутбук за 150 000 руб
                </h1>
                <p className={`text-[12px] text-[#828282]`}>21.06.2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`chitat__blizko gap-5 flex flex-col justify-center`}>
          <h1 className={`text-[#FFFFFF] text-[16px]`}>Обсуждение</h1>
          <input
            placeholder="Текст комментария"
            className={`placeholder:text-[#828282] text-white placeholder:text-[14px] bg-none border-b border-b-gray-500`}
            type="text"
          />
          <button
            className={`text-[12px] bg-[#3137C9] text-[#FFFFFF] w-[91px] h-[30px] rounded-[7px]`}
          >
            Отправить
          </button>
        </div>
        <div className={`nizina flex flex-col gap-2`}>
          <div className={`flex items-center gap-3`}>
            <img src="/Avatar1.png" alt="" />
            <div className={`flex flex-col items-center`}>
              <h1 className={`text-[#FFFFFF] font-medium text-[12px]`}>Дмитрий Валак</h1>
              <p className={`text-[12px] text-[#757575]`}>1 неделю назад</p>
            </div>
          </div>
          <h1 className={`text-[12px] text-[#FFFFFF]`}>
            Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci
            auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu
            auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
            volutpat.
          </h1>
          <Link className={`text-[#107EFF] text-[12px]`} href="">
            ответить
          </Link>
        </div>
        <div className={`nije_nije flex flex-col gap-2`}>
          <div className={`flex items-center gap-3`}>
            <img src="/Avatar2.png" alt="" />
            <div className={`flex flex-col items-start  `}>
              <h1 className={`text-[#FFFFFF]  font-medium text-[12px]`}>Джонни</h1>
              <p className={`text-[12px] text-[#757575]`}>1 неделю назад</p>
            </div>
          </div>
          <h1 className={`text-[12px] text-[#FFFFFF]`}>
            Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci
            auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu
            auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
            volutpat.
          </h1>
          <Link className={`text-[#107EFF] text-[12px]`} href="">ответить</Link>
        </div>
      </div>
    </section>
  );
};

export default ChitatHome;
