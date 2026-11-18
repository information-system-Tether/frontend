import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery";
import Sidebar from "./Sidebar";
import { IconAddRecord } from "../assets/IconAddRecord";
import scalesIcon from "../assets/scales.svg";
import bottomIcon from "../assets/mobile_bottom.svg";

const weightHistory = [
  { id: 1, date: "25 октября, 08:00", weight: "68.4 кг" },
  { id: 2, date: "22 октября, 08:15", weight: "68.9 кг" },
  { id: 3, date: "18 октября, 07:45", weight: "69.2 кг" },
  { id: 4, date: "12 октября, 08:30", weight: "69.5 кг" },
];

const WeightChart = ({ isMobile }) => (
  <div className={`relative w-full ${isMobile ? "h-36" : "h-64"} mt-4`}>
    <svg className="w-full h-full" viewBox="0 0 1000 250" preserveAspectRatio="none">
      <line x1="0" y1="62.5" x2="1000" y2="62.5" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="125" x2="1000" y2="125" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="187.5" x2="1000" y2="187.5" stroke="#e5e7eb" strokeWidth="1" />
      
      <path 
        d="M 0 200 C 100 200, 150 220, 250 220 C 350 220, 400 150, 500 150 C 600 150, 650 120, 750 100 C 850 80, 950 40, 1000 40" 
        fill="none" 
        stroke="#4B662C" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      <circle cx="1000" cy="40" r="6" fill="#4B662C" />
    </svg>
  </div>
);

export const WeightDynamicsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div
        className="flex min-h-screen items-start relative bg-[#f7fbf2]"
        data-m3-mode="green-LT"
        data-shape-mode="baseline"
      >
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex flex-col items-start relative flex-1 grow">
          <header className="flex h-[88px] items-center gap-3 pl-8 pr-10 py-0 relative self-stretch w-full border-b border-[#c1c9be]">
            <div className="flex-1 flex flex-col items-start justify-center">
              <h1 className="font-m3-headline-large text-[#181d18] truncate">
                Динамика веса
              </h1>
              <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
                Последнее измерение сегодня, 08:00
              </p>
            </div>

            <div className="inline-flex h-12 items-center justify-center relative">
              <button
                type="button"
                className="inline-flex bg-lightgreen-adarkorange rounded-[100px] flex-col items-center justify-center relative overflow-hidden transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen focus-visible:ring-offset-2"
              >
                <span className="inline-flex items-center justify-center gap-2 px-4 py-2.5">
                  <IconAddRecord className="!relative !w-5 !h-5" />
                  <span className="font-m3-label-large text-white whitespace-nowrap">
                    Добавить запись
                  </span>
                </span>
              </button>
            </div>

            <button
              type="button"
              className="relative w-11 h-11 bg-lightgreen-alightgreen rounded-full overflow-hidden focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen focus-visible:ring-offset-2"
              aria-label="Профиль пользователя"
            >
              <span className="absolute inset-0 flex items-center justify-center text-lightgreen-adarkgreen text-base font-medium">
                А
              </span>
            </button>
          </header>

          <main className="flex-col items-start gap-6 p-10 self-stretch w-full flex relative">
            <div className="self-stretch inline-flex justify-start items-start gap-5">
              <div className="flex-1 relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                      Текущий вес
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                      68.4 кг
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-inter leading-5">
                      −0.5 кг с прошлой недели
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                      Цель
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                      65.0 кг
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-inter leading-5">
                      Осталось 3.4 кг
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                      Изменение за 30 дней
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                      −1.1 кг
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-inter leading-5">
                      Устойчивый прогресс
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch inline-flex justify-start items-start gap-8 overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="w-80 h-12 inline-flex justify-center items-center bg-white rounded-full border border-[#c1c9be] overflow-hidden">
                  <button className="flex-1 h-full bg-lightgreen-alightorange text-lightgreen-adarkgreen text-sm font-medium font-roboto flex justify-center items-center gap-2 border-r border-[#c1c9be]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    30 дней
                  </button>
                  <button className="flex-1 h-full text-[#181d18] text-sm font-medium font-roboto flex justify-center items-center border-r border-[#c1c9be] hover:bg-black/5 transition-colors">
                    14 дней
                  </button>
                  <button className="flex-1 h-full text-[#181d18] text-sm font-medium font-roboto flex justify-center items-center hover:bg-black/5 transition-colors">
                    выбрать ▼
                  </button>
                </div>

                <div className="self-stretch p-6 bg-[#f1f5ec] rounded-2xl flex flex-col justify-start items-start gap-3 overflow-hidden">
                  <div className="text-[#181d18] text-sm font-normal font-inter">
                    График за последние 30 дней
                  </div>
                  <WeightChart isMobile={false} />
                  <div className="self-stretch inline-flex justify-between items-start overflow-hidden mt-2">
                    <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">25 сентября</div>
                    <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">Сегодня</div>
                  </div>
                </div>
              </div>

              <div className="w-96 inline-flex flex-col justify-start items-start gap-4">
                <div className="self-stretch text-[#181d18] text-2xl font-normal font-roboto leading-8">
                  История взвешиваний
                </div>
                
                <div className="self-stretch rounded-2xl border border-[#c1c9be] flex flex-col justify-start items-start overflow-hidden bg-white">
                  {weightHistory.map((item) => (
                    <div key={item.id} className="self-stretch pl-4 inline-flex justify-start items-center overflow-hidden border-b border-[#c1c9be]/30 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-lightgreen-alightgreen flex items-center justify-center mr-3">
                        <img src={scalesIcon} alt="" className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-h-[52px] flex flex-col justify-center items-start overflow-hidden">
                        <div className="self-stretch px-4 py-2.5 rounded-xl inline-flex justify-start items-center gap-3">
                          <div className="flex-1 inline-flex flex-col justify-start items-start">
                            <div className="self-stretch text-[#181d18] text-base font-normal font-inter">
                              {item.date}
                            </div>
                          </div>
                          <div className="min-h-7 inline-flex flex-col justify-center items-start gap-1">
                            <div className="text-right text-gray-500 text-sm font-medium font-roboto leading-5 tracking-tight">
                              {item.weight}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start mt-2">
                  <div className="w-full h-full absolute bg-lightgreen-alightgreen rounded-xl overflow-hidden" />
                  <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                    <div className="flex-1 p-5 inline-flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch text-lightgreen-adarkgreen text-s font-normal font-inter leading-5">
                        Прогноз
                      </div>
                      <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                        При текущем темпе вы достигнете цели примерно через 12 недель.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f7fbf2] flex flex-col">
      <div className="flex-1 px-5 pt-4 pb-2 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <button type="button" className="w-10 h-10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="text-[#181d18] text-xl font-normal font-roboto leading-7">Динамика веса</div>
          <div className="w-10" />
        </div>

        <div className="w-full p-4 bg-lightgreen-alightgreen rounded-2xl flex justify-between items-center mb-4">
          <div className="flex flex-col gap-1">
            <div className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Текущий вес</div>
            <div className="text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-9">68.4 кг</div>
          </div>
          <button className="h-10 px-3 bg-lightgreen-adarkgreen rounded-[100px] flex justify-center items-center text-white text-sm font-medium font-roboto">
            Добавить запись
          </button>
        </div>

        <div className="w-full p-4 bg-[#f1f5ec] rounded-2xl flex flex-col gap-3 mb-4">
          <div className="text-[#181d18] text-sm font-bold font-inter">График за последние 30 дней</div>
          <WeightChart isMobile={true} />
          <div className="w-full flex justify-between items-start">
            <div className="text-gray-500 text-xs font-normal font-inter">25 сентября</div>
            <div className="text-gray-500 text-xs font-normal font-inter">Сегодня</div>
          </div>
        </div>

        <div className="text-[#181d18] text-2xl font-normal font-roboto leading-8 mb-3">
          История взвешиваний
        </div>

        <div className="w-full rounded-2xl border border-[#c1c9be] flex flex-col overflow-hidden bg-white">
          {weightHistory.map((item) => (
            <div key={item.id} className="w-full px-4 py-2.5 flex items-center justify-between border-b border-[#c1c9be]/30 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-lightgreen-alightgreen flex items-center justify-center shrink-0">
                  <img src={scalesIcon} alt="" className="w-4 h-4" />
                </div>
                <span className="text-[#181d18] text-base font-semibold font-inter">{item.date}</span>
              </div>
              <span className="text-gray-500 text-sm font-medium font-roboto">{item.weight}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white border-t border-[#c1c9be] flex flex-col">
        <div className="w-full h-16 flex justify-center items-center">
          <Link to="/home" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">Главная</span>
          </Link>
          <Link to="/food-diary" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">Дневник</span>
          </Link>
          <Link to="/workouts" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">Тренировки</span>
          </Link>
          <Link to="/weight" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 bg-lightgreen-alightgreen rounded-2xl flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6" />
            </div>
            <span className="text-lightgreen-adarkgreen text-xs font-medium font-roboto">Вес</span>
          </Link>
        </div>
        <div className="self-stretch h-5 flex justify-center items-center">
          <div className="w-36 h-[5px] bg-[#181d18] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default WeightDynamicsPage;