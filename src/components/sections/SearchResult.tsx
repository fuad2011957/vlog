"use client"

import { useSearchParams } from "next/navigation";
import Header from "../header/header";
import ResultBox from "@/shared/ui/ResultBox";


export function SearchResultPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const notFound = searchParams.get("notfound");

  if (notFound === "true") {
    return (
      <div className="result_search bg-[#181818] min-h-screen w-full">
        <Header className="" />
        <main className="flex flex-col items-center justify-center">
          <div className="flex-1 p-8 flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="jjj text-5xl font-bold text-white">404 - Страница не найдена</h1>
              <div className="ggg bg-[#202020] rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Результаты поиска "{query}"
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  К сожалению, по вашему запросу ничего не найдено.
                </p>
                <div className="text-gray-400">
                  <p className="mb-4">Возможно, вы имели в виду:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Создание сайта</li>
                    <li>Интернет-маркетинг</li>
                    <li>Продвижение видео</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <section className="bg-[#181818] min-h-screen w-full flex items-center flex-col">
        <Header className={``} />
        <div className="result__con flex flex-col items-start gap-10">
            <h1 className="text-3xl font-semibold text-white mb-4">
                Результаты поиска "{query}"
            </h1>
            <div className="result flex flex-col items-center gap-13">
                <ResultBox h1={`Как писать код быстро и безболезненно?`} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.`}/>
                <ResultBox h1={`Купил новый ноутбук за 150 000 руб?`} />
                <ResultBox h1={`Как писать код быстро и безболезненно?`} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.`}/>
                <ResultBox h1={`Купил новый ноутбук за 150 000 руб?`}/>
            </div>
        </div>
    </section>
  );
}