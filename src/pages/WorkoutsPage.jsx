import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { IconAddRecord } from "../assets/IconAddRecord";
import activityIcon from "../assets/activity.svg";
import runIcon from "../assets/run.svg";
import powerIcon from "../assets/power.svg";

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
};

export default WorkoutsPage;