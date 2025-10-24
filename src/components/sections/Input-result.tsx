import Link from "next/link";


const InputResult = () => {
 
  return (
    <section className={`flex items-center h-[1500px] flex-col gap-[30px]`}>
      <div
        className={`salam  w-[770px] h-[161px] rounded-[5px]   bg-[#202020] flex flex-col justify-center gap-[5px]`}
      >
        <div className={`flex flex-col items-start gap-[10px]`}>
          <h1
            className={`text-[14px] leading-[21px] text-[#D2D2D2] text-start`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat.
          </h1>
          <p className={`text-[#828282] text-[12px] leading-auto`}>
            21.06.2020
          </p>
        </div>
      </div>
      <div className="second">
        <div className={`second__first`}></div>
        <div className={`second__second`}>
          <h1 className={`text-[18px] text-[#FFFFFF]`}>
            Как писать код быстро и безболезненно?
          </h1>
          <p className={`text-[14px] leading-[21px] text-[#D2D2D2]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat.
          </p>
          <div className={`second__third flex justify-between `}>
            <div className={`flex gap-[15px] items-center`}>
              <p className={`text-[#828282]`}>21.06.2020</p>
              <span
                className={`w-[6px] h-[6px] bg-[#C4C4C4] rounded-full`}
              ></span>
              <p className={`text-[#828282]`}>создание сайтов</p>
            </div>
            <div>
              <Link className={`text-[#107EFF]`} href={"/chitat"}>
                читать
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <div className={`third__first`}></div>
        <div className={`third__second`}>
          <h1 className={`text-[18px] text-[#FFFFFF]`}>
            Купил новый ноутбук за 150 000 руб
          </h1>
          <div className={`flex justify-between`}>
            <div className={`flex gap-[15px] items-center`}>
              <p className={`text-[12px] text-[#828282]`}>21.06.2020</p>
              <span
                className={`w-[6px] h-[6px] bg-[#C4C4C4] rounded-full`}
              ></span>
              <p className={`text-[12px] text-[#828282]`}>продвижение видео</p>
            </div>
            <div>
              <Link className={`text-[#107EFF]`} href={"/ostavit"}>
                оставить комментарий
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth">
        <div className={`fourth__first`}></div>
        <div className={`fourth__second`}>
            <h1 className={`text-[18px] text-[#FFFFFF]`}>
           Как я сходил на FrontEnd Conf 2021
          </h1>
          <p className={`text-[14px] leading-[21px] text-[#D2D2D2]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
          </p>
          <div className={`second__third flex justify-between `}>
            <div className={`flex gap-[15px] items-center`}>
              <p className={`text-[#828282]`}>21.06.2020</p>
              <span
                className={`w-[6px] h-[6px] bg-[#C4C4C4] rounded-full`}
              ></span>
              <p className={`text-[#828282]`}>создание сайтов</p>
            </div>
            <div>
              <Link className={`text-[#107EFF]`} href={"/chitat"}>
                читать
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputResult;
