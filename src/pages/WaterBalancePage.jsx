import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery";
import Sidebar from "./Sidebar";
import bottomIcon from "../assets/mobile_bottom.svg";

const consumptionData = [
  { time: "8:00", height: "h-9" },
  { time: "9:00", height: "h-14" },
  { time: "10:00", height: "h-12" },
  { time: "11:00", height: "h-24" },
  { time: "12:00", height: "h-20" },
  { time: "13:00", height: "h-28" },
  { time: "14:00", height: "h-32" },
  { time: "15:00", height: "h-32" },
  { time: "16:00", height: "h-40" },
];

const waterHistory = [
  { id: 1, time: "08:15", amount: "+250 мл" },
  { id: 2, time: "11:30", amount: "+500 мл" },
  { id: 3, time: "14:45", amount: "+450 мл" },
];

const WaterConsumptionChart = () => (
  <div className="w-full rounded-xl flex justify-start items-start overflow-hidden">
    <div className="w-full p-6 flex flex-col justify-start items-start gap-4">
      <div className="w-full flex justify-between items-start overflow-hidden">
        <div className="flex-1 text-[#181d18] text-2xl font-normal font-roboto leading-8">
          Ритм потребления воды
        </div>
        <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">
          Сегодня
        </div>
      </div>
      <div className="w-full h-48 flex justify-start items-end gap-4 mt-4">
        {consumptionData.map((item, index) => (
          <div key={item.time} className="flex-1 flex flex-col justify-start items-center gap-2">
            <div
              className={`w-full ${item.height} rounded-lg ${
                index === consumptionData.length - 1 ? "bg-lightgreen-adarkgreen" : "bg-lightgreen-alightgreen"
              }`}
            />
            <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const WaterBalancePage = () => {
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
                Баланс воды
              </h1>
              <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
                Пятница, 25 октября
              </p>
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
            <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start">
              <div className="w-full h-full absolute bg-lightgreen-alightgreen rounded-xl overflow-hidden" />
              <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                <div className="flex-1 p-8 inline-flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-start items-center gap-12">
                    <div className="relative flex items-center justify-center w-[220px] h-[220px] rounded-full shrink-0">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "conic-gradient(var(--lightgreen-adarkorange) 0% 40%, var(--lightgreen-adarkgreen) 40% 100%)",
                        }}
                      />
                      <div className="absolute inset-[32px] bg-lightgreen-alightgreen rounded-full flex flex-col items-center justify-center">
                        <div className="text-[#181d18] text-xl font-normal font-inter mb-1">
                          1200 / 2000
                        </div>
                        <div className="text-lightgreen-adarkgreen text-sm font-normal font-inter">
                          мл выпито
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                      <div className="text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                        60% дневной цели
                      </div>
                      <div className="self-stretch text-lightgreen-adarkgreen text-base font-normal font-inter leading-6">
                        Осталось выпить 800 мл. В вашем темпе цель будет достигнута примерно к 19:30.
                      </div>
                      <div className="self-stretch inline-flex items-start gap-3 mt-2">
                        <button className="h-12 flex justify-center items-center hover:opacity-90 transition-opacity">
                          <div className="bg-lightgreen-adarkgreen rounded-[100px] px-6 py-2.5 flex justify-center items-center">
                            <span className="text-white text-sm font-medium font-roboto leading-5 tracking-tight">
                              +100 мл
                            </span>
                          </div>
                        </button>
                        <button className="h-12 flex justify-center items-center hover:opacity-90 transition-opacity">
                          <div className="bg-lightgreen-adarkgreen rounded-[100px] px-6 py-2.5 flex justify-center items-center">
                            <span className="text-white text-sm font-medium font-roboto leading-5 tracking-tight">
                              +250 мл
                            </span>
                          </div>
                        </button>
                        <button className="h-12 flex justify-center items-center hover:opacity-90 transition-opacity">
                          <div className="bg-lightgreen-adarkgreen rounded-[100px] px-6 py-2.5 flex justify-center items-center">
                            <span className="text-white text-sm font-medium font-roboto leading-5 tracking-tight">
                              +500 мл
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start">
              <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
              <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                <WaterConsumptionChart />
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
        <div className="flex items-center justify-between mb-6">
          <button type="button" className="w-10 h-10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="text-[#181d18] text-xl font-normal font-roboto leading-7">Баланс воды</div>
          <div className="w-10" />
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="relative w-44 h-44 flex items-center justify-center rounded-full shrink-0">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(var(--lightgreen-adarkorange) 0% 40%, var(--lightgreen-adarkgreen) 40% 100%)",
              }}
            />
            <div className="absolute inset-[16px] bg-[#f7fbf2] rounded-full flex flex-col items-center justify-center">
              <div className="text-[#181d18] text-base font-bold font-inter">1200 / 2000</div>
              <div className="text-gray-500 text-sm font-normal font-inter">мл выпито</div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="text-[#181d18] text-2xl font-normal font-roboto leading-8">Быстрое добавление</div>
            <div className="flex gap-2.5">
              <button className="flex-1 h-12 bg-lightgreen-adarkgreen rounded-[100px] flex justify-center items-center text-white text-sm font-medium font-roboto">
                +100 мл
              </button>
              <button className="flex-1 h-12 bg-lightgreen-adarkgreen rounded-[100px] flex justify-center items-center text-white text-sm font-medium font-roboto">
                +250 мл
              </button>
              <button className="flex-1 h-12 bg-lightgreen-adarkgreen rounded-[100px] flex justify-center items-center text-white text-sm font-medium font-roboto">
                +500 мл
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 mt-2">
            <div className="text-[#181d18] text-2xl font-normal font-roboto leading-8">История за сегодня</div>
            <div className="w-full rounded-2xl border border-[#c1c9be] flex flex-col overflow-hidden bg-white">
              {waterHistory.map((item) => (
                <div key={item.id} className="w-full px-4 py-2.5 flex items-center justify-between border-b border-[#c1c9be]/30 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-lightgreen-adarkgreen rounded-full" />
                    </div>
                    <span className="text-[#181d18] text-base font-semibold font-inter">{item.time}</span>
                  </div>
                  <span className="text-gray-500 text-sm font-medium font-roboto">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
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

export default WaterBalancePage;