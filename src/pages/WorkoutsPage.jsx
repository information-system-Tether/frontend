import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery";
import Sidebar from "./Sidebar";
import { IconAddRecord } from "../assets/IconAddRecord";
import activityIcon from "../assets/activity.svg";
import runIcon from "../assets/run.svg";
import powerIcon from "../assets/power.svg";
import bottomIcon from "../assets/mobile_bottom.svg";

const activities = [
  {
    id: 1,
    title: "Утренний бег",
    time: "30 мин · 07:10",
    calories: "300 ккал",
    icon: runIcon,
  },
  {
    id: 2,
    title: "Силовая тренировка",
    time: "45 мин · 18:30",
    calories: "150 ккал",
    icon: powerIcon,
  },
];

export const WorkoutsPage = () => {
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
                Тренировки
              </h1>
              <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
                Пятница, 25 октября
              </p>
            </div>

            <div className="inline-flex h-12 items-center justify-center relative">
              <Link
                to="/workouts/add"
                className="inline-flex bg-lightgreen-adarkorange rounded-[100px] flex-col items-center justify-center relative overflow-hidden transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen focus-visible:ring-offset-2"
              >
                <span className="inline-flex items-center justify-center gap-2 px-4 py-2.5">
                  <IconAddRecord className="!relative !w-5 !h-5" />
                  <span className="font-m3-label-large text-white whitespace-nowrap">
                    Добавить активность
                  </span>
                </span>
              </Link>
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
            <div className="self-stretch inline-flex justify-start items-start gap-6">
              <div className="flex-1 p-7 bg-lightgreen-alightgreen rounded-2xl flex justify-start items-center gap-4 overflow-hidden">
                <div className="size-16 bg-lightgreen-adarkorange rounded-xl flex justify-center items-center overflow-hidden">
                  <img src={activityIcon} alt="Activity" className="w-14 h-14" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                    Всего сожжено сегодня
                  </div>
                  <div className="text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                    450 ккал
                  </div>
                </div>
              </div>

              <div className="flex-1 relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                      Время активности
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                      75 мин
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-inter leading-5">
                      Цель: 150 мин в неделю
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                      Тренировки на неделе
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                      4 из 5
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-inter leading-5">
                      Еще одна до цели
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch inline-flex justify-start items-start gap-8 overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="self-stretch inline-flex justify-between items-start overflow-hidden">
                  <div className="flex-1 text-[#181d18] text-2xl font-normal font-roboto leading-8">
                    Выполненные активности
                  </div>
                  <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">
                    Сегодня
                  </div>
                </div>

                <div className="self-stretch rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#c1c9be] flex flex-col justify-start items-start overflow-hidden bg-white">
                  {activities.map((act) => (
                    <div key={act.id} className="self-stretch pl-4 inline-flex justify-start items-center overflow-hidden border-b border-[#c1c9be]/30 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-lightgreen-alightgreen flex items-center justify-center mr-3">
                        <img src={act.icon} alt="" className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-h-[52px] flex flex-col justify-center items-start overflow-hidden">
                        <div className="self-stretch px-4 py-2.5 rounded-xl inline-flex justify-start items-center gap-3">
                          <div className="flex-1 inline-flex flex-col justify-start items-start">
                            <div className="self-stretch flex flex-col justify-start items-start gap-[3px] overflow-hidden">
                              <div className="self-stretch text-[#181d18] text-base font-normal font-inter">{act.title}</div>
                              <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-inter leading-4">
                                {act.time}
                              </div>
                            </div>
                          </div>
                          <div className="min-h-7 inline-flex flex-col justify-center items-start gap-1">
                            <div className="text-right text-gray-500 text-sm font-medium font-roboto leading-5 tracking-tight">
                              {act.calories}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-96 inline-flex flex-col justify-start items-start">
                <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start">
                  <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                  <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                    <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch text-[#181d18] text-2xl font-normal font-roboto leading-8">
                        Недельная цель
                      </div>
                      <div className="text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-9">
                        310 / 400 мин
                      </div>
                      <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                        Отличный темп. Добавьте прогулку в выходные, чтобы закрыть цель.
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
        <div className="flex items-center justify-between mb-6">
          <button type="button" className="w-10 h-10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="text-[#181d18] text-xl font-normal font-roboto leading-7">Тренировки за сегодня</div>
          <div className="w-10" />
        </div>

        <div className="w-full p-5 bg-lightgreen-alightgreen rounded-2xl flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-lightgreen-adarkorange rounded-xl flex justify-center items-center shrink-0">
            <img src={activityIcon} alt="" className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-lightgreen-adarkgreen text-sm font-normal font-inter">
              Всего сожжено сегодня
            </div>
            <div className="text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-9">
              450 ккал
            </div>
          </div>
        </div>

        <div className="text-[#181d18] text-2xl font-normal font-roboto leading-8 mb-4">
          Выполненные активности
        </div>

        <div className="w-full rounded-2xl border border-[#c1c9be] flex flex-col overflow-hidden bg-white">
          {activities.map((act) => (
            <div key={act.id} className="w-full px-4 py-2.5 flex items-center gap-3 border-b border-[#c1c9be]/30 last:border-0">
              <div className="w-8 h-8 rounded-full bg-lightgreen-alightgreen flex items-center justify-center shrink-0">
                <img src={act.icon} alt="" className="w-4 h-4" />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <div className="text-[#181d18] text-base font-semibold font-inter">{act.title}</div>
                <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">{act.time}</div>
              </div>
              <div className="text-right text-gray-500 text-sm font-medium font-roboto">
                {act.calories}
              </div>
            </div>
          ))}
        </div>
      </div>

            <div className="w-full bg-white border-t border-[#c1c9be] flex flex-col relative">
        <Link
          to="/workouts/add"
          className="absolute -top-16 right-6 w-14 h-14 bg-lightgreen-adarkorange rounded-2xl shadow-xl flex items-center justify-center z-20 hover:opacity-90 transition-opacity"
          aria-label="Добавить активность"
        >
          <IconAddRecord className="!relative !w-6 !h-6" />
        </Link>

        <div className="w-full h-16 flex justify-center items-center mt-2">
          <Link to="/home" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">
              Главная
            </span>
          </Link>
          <Link to="/food-diary" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">
              Дневник
            </span>
          </Link>
          <Link to="/workouts" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 bg-lightgreen-alightgreen rounded-2xl flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6" />
            </div>
            <span className="text-lightgreen-adarkgreen text-xs font-medium font-roboto">
              Тренировки
            </span>
          </Link>
          <Link to="/weight" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">
              Вес
            </span>
          </Link>
        </div>
        <div className="self-stretch h-5 flex justify-center items-center">
          <div className="w-36 h-[5px] bg-[#181d18] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;