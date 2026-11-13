import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import runIcon from "../assets/run.svg";
import walkIcon from "../assets/walk.svg";
import powerIcon from "../assets/power.svg";
import bikeIcon from "../assets/bike.svg";
import swimIcon from "../assets/swim.svg";
import yogaIcon from "../assets/yoga.svg";

const activities = [
  { id: "run", label: "Бег", icon: runIcon },
  { id: "walk", label: "Ходьба", icon: walkIcon },
  { id: "power", label: "Силовая", icon: powerIcon },
  { id: "bike", label: "Велосипед", icon: bikeIcon },
  { id: "swim", label: "Плавание", icon: swimIcon },
  { id: "yoga", label: "Йога", icon: yogaIcon },
];

export const AddActivityPage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState("run");
  const [duration, setDuration] = useState("45");
  const [startTime, setStartTime] = useState("18:30");

  const calculatedCalories = parseInt(duration) * 10 || 0;

  return (
    <div
      className="flex min-h-screen items-start relative bg-[#f7fbf2]"
      data-m3-mode="green-LT"
      data-shape-mode="baseline"
    >
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-col items-start relative flex-1 grow">
        <header className="flex h-[88px] items-center gap-3 pl-8 pr-10 py-0 relative self-stretch w-full border-b border-[#c1c9be]">
          <button 
            onClick={() => navigate("/workouts")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Назад"
          >
            <span className="text-lightgreen-adarkgreen text-xl font-bold">←</span>
          </button>

          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="font-m3-headline-large text-[#181d18] truncate">
              Добавить активность
            </h1>
            <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
              Новая запись тренировки
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
          <div className="self-stretch inline-flex justify-start items-start gap-10">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch text-[#181d18] text-2xl font-normal font-roboto leading-8">
                Выберите тип активности
              </div>
              <div className="w-full max-w-[760px] inline-flex justify-start items-start gap-4 flex-wrap content-start overflow-hidden">
                {activities.map((act) => {
                  const isSelected = selectedActivity === act.id;
                  return (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => setSelectedActivity(act.id)}
                      className={`w-60 h-28 rounded-2xl outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-center items-center gap-2 overflow-hidden transition-colors ${
                        isSelected
                          ? "bg-lightgreen-alightgreen outline-lightgreen-adarkgreen"
                          : "bg-lightgreen-alightorange outline-lightgreen-adarkorange hover:bg-lightgreen-alightorange/80"
                      }`}
                    >
                      <img src={act.icon} alt="" className="w-6 h-6" />
                      <div className={`text-xs font-${isSelected ? 'bold' : 'medium'} font-inter text-lightgreen-adarkgreen`}>
                        {act.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-[480px] inline-flex flex-col justify-start items-start">
              <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-7 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-[#181d18] text-2xl font-normal font-roboto leading-8">
                      Параметры активности
                    </div>

                    <div className="self-stretch h-14 relative flex flex-col justify-start items-start">
                      <div className="self-stretch flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#c1c9be] flex flex-col justify-start items-start">
                        <div className="self-stretch flex-1 pl-4 py-1 rounded-lg inline-flex justify-start items-start gap-1">
                          <div className="flex-1 h-12 py-1 relative inline-flex flex-col justify-center items-start">
                            <div className="self-stretch inline-flex justify-start items-center">
                              <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                className="flex-1 bg-transparent text-[#181d18] text-base font-normal font-roboto leading-6 tracking-wide outline-none"
                              />
                            </div>
                            <div className="px-1 absolute top-[-10px] left-0 bg-[#f1f5ec] inline-flex justify-start items-center">
                              <span className="text-gray-500 text-xs font-normal font-roboto leading-4 tracking-wide">
                                Длительность (минут)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch h-14 relative flex flex-col justify-start items-start">
                      <div className="self-stretch flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#c1c9be] flex flex-col justify-start items-start">
                        <div className="self-stretch flex-1 pl-4 py-1 rounded-lg inline-flex justify-start items-start gap-1">
                          <div className="flex-1 h-12 py-1 relative inline-flex flex-col justify-center items-start">
                            <div className="self-stretch inline-flex justify-start items-center">
                              <input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="flex-1 bg-transparent text-[#181d18] text-base font-normal font-roboto leading-6 tracking-wide outline-none"
                              />
                            </div>
                            <div className="px-1 absolute top-[-10px] left-0 bg-[#f1f5ec] inline-flex justify-start items-center">
                              <span className="text-gray-500 text-xs font-normal font-roboto leading-4 tracking-wide">
                                Время начала
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch py-4 inline-flex justify-between items-start overflow-hidden">
                      <div className="inline-flex flex-col justify-start items-start gap-[3px] overflow-hidden">
                        <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">
                          Расчет калорий
                        </div>
                        <div className="text-[#181d18] text-base font-normal font-inter">
                          ~10 ккал / мин
                        </div>
                      </div>
                      <div className="inline-flex flex-col justify-start items-end gap-[3px] overflow-hidden">
                        <div className="text-lightgreen-adarkgreen text-xs font-normal font-inter">
                          Будет сожжено
                        </div>
                        <div className="text-lightgreen-adarkgreen text-2xl font-normal font-roboto leading-8">
                          {calculatedCalories} ккал
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => navigate("/workouts")}
                      className="self-stretch h-12 bg-lightgreen-adarkgreen rounded-[100px] inline-flex flex-col justify-center items-center overflow-hidden hover:opacity-90 transition-opacity"
                    >
                      <span className="px-4 py-2.5 inline-flex justify-center items-center gap-2">
                        <span className="text-white text-sm font-medium font-roboto leading-5 tracking-tight">
                          Сохранить тренировку
                        </span>
                      </span>
                    </button>
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

export default AddActivityPage;