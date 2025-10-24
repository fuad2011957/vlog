import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/shadcn/dialog";

export function Valak() {
  return (
    <section className="w-[350px] bg-[#202020]">
      <div className="avatar__container relative">
        <div className="bg__img absolute z-10">
          <img src="/ValakHeader.png" alt="" />
        </div>

        <div className="avatar flex flex-col items-center text-white">
          <img className="ss" src="./avatar.png" alt="" />
          <div className="don flex flex-col items-center gap-5.5">
            <div className="avatar__about flex flex-col text-center">
              <p className="font-medium text-[18px]">Дмитрий Валак</p>
              <p className="font-thin text-[#DEDEDE]">
                блог front-end разработчика
              </p>
            </div>
            <div className="avatar__soc flex items-center gap-5.5 mb-[65px]">
              <a href="">
                <img width={"25.47px"} src="./inst-icon.svg" alt="" />
              </a>
              <a href="">
                <img width={"25.47px"} src="./vk-icon.svg" alt="" />
              </a>
              <a href="">
                <img width={"25.47px"} src="./pinterest-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="info__container">
        <div className="line__black"></div>
        <p className="p text-white text-center text-[14px]">
          Front-end разработчик. Практик верстки сайтов. Созданием сайтов
          занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
          более 10 000 часов в создании сайтов различной сложности.
        </p>
        <div className="line__black"></div>
      </div>

      <div className="btn__container flex items-center justify-center gap-4">
        <Link className="" href={`/my-works`}>
          <button
            type="button"
            className="bg-[#ED3024] w-[120px] h-[40px] flex items-center justify-center text-white border-0 rounded-[40px] text-[13px] cursor-pointer"
          >
            Мои работы
          </button>
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <button
              className="bg-[#3137C9] w-[120px] h-[40px] flex items-center justify-center text-white  border-0 rounded-[40px] text-[13px] cursor-pointer"
              type="button"
            >
              Написать мне
            </button>
          </DialogTrigger>


          <DialogContent className="bg-[#202020] border-0 rounded-[6px] gfgf">
            <DialogHeader>
              <DialogDescription className="flex flex-col items-start gap-6 justify-center">
                <div className="inp__con flex flex-col w-full gap-5">
                  <input className='border-0 border-b-2 border-b-[#3F3F3F] focus:border-b-[#107EFF] transition' type="text" placeholder="Дмитрий Валак"/>
                  <input className='border-0 border-b-2 border-b-[#3F3F3F] focus:border-b-[#107EFF] transition' type="email" placeholder="Ваш e-mail"/>
                  <input className='border-0 border-b-2 border-b-[#3F3F3F] focus:border-b-[#107EFF] transition' type="text" placeholder="Текст сообщения"/>
                </div>
                <div className="btn flex items-end">
                  <button className="send-mess">Отправить</button>
                </div>
                <div className="niz flex items-center text-center text-[#B3B3B3] gap-18">
                  <p>e-mail: <span>info@mywebsite.ru</span></p>
                  <p>тел: <span>+943-232-856-22</span></p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
