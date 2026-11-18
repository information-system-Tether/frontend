import { useState } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { Link } from "react-router-dom";
import { IconAddRecord } from "../assets/IconAddRecord";
import { MetricCard } from "./MetricCard";
import Sidebar from "./Sidebar";
import metricIcon from "../assets/metric-icon.svg";
import metricIcon2 from "../assets/metric-icon-2.svg";
import stepsIcon from "../assets/steps.svg";
import bottomIcon from "../assets/mobile_bottom.svg"; 

export const HomePage = () => {
  const [isRecordDialogOpen, setIsRecordDialogOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const closeDialog = () => setIsRecordDialogOpen(false);

  if (isDesktop) {
    return (
      <>
        <div
          className="flex min-h-screen items-start relative bg-[#f7fbf2]"
          data-m3-mode="green-LT"
          data-shape-mode="baseline"
        >
          <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />

          <div className="flex flex-col items-start relative flex-1 grow">
            <header className="flex h-[88px] items-center gap-3 pl-8 pr-10 py-0 relative self-stretch w-full border-b border-[#c1c9be]">
              <div className="flex-1 flex flex-col items-start justify-center">
                <h1 className="font-m3-headline-large text-[#181d18] truncate">
                  Привет, Алексей!
                </h1>
                <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
                  Пятница, 25 октября
                </p>
              </div>

              <div className="inline-flex h-12 items-center justify-center relative">
                <button
                  type="button"
                  onClick={() => setIsRecordDialogOpen(true)}
                  className="inline-flex bg-lightgreen-adarkorange rounded-[100px] flex-col items-center justify-center relative overflow-hidden transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen focus-visible:ring-offset-2"
                  aria-haspopup="dialog"
                  aria-expanded={isRecordDialogOpen}
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
                className="relative w-11 h-11 bg-lightgreen-alightgreen rounded-[22px] overflow-hidden focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen focus-visible:ring-offset-2"
                aria-label="Профиль пользователя"
              >
                <span className="absolute inset-0 flex items-center justify-center text-lightgreen-adarkgreen text-base font-medium">
                  А
                </span>
              </button>
            </header>

            <main className="flex-col items-start gap-6 p-10 self-stretch w-full flex relative">
              <div className="gap-8 self-stretch w-full flex items-start relative">
                <section className="flex-col gap-6 flex-1 flex items-start relative">
                  <article className="flex flex-col w-full p-6 bg-[#f1f5ec] rounded-[var(--shape-corner-large)] relative">
                    <div className="flex items-center gap-8">
                      <div
                        className="relative flex items-center justify-center w-[130px] h-[130px] rounded-full"
                        style={{
                          background:
                            "conic-gradient(var(--lightgreen-adarkorange) 0% 27.5%, var(--lightgreen-adarkgreen) 27.5% 100%)",
                        }}
                      >
                        <div className="absolute inset-[24px] bg-[#f1f5ec] rounded-full flex flex-col items-center justify-center">
                          <span className="font-m3-headline-medium text-3xl text-lightgreen-adarkgreen">
                            1450
                          </span>
                          <span className="text-[10px] text-gray-500">
                            из 2000 ккал
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col flex-1 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Осталось употребить
                          </p>
                          <p className="text-xl font-medium text-[#181d18]">
                            550 ккал
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Белки</span>
                            <span>75 г из 120 г</span>
                          </div>
                          <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full">
                            <div
                              className="h-full bg-lightgreen-adarkgreen rounded-full"
                              style={{ width: "62%" }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Жиры</span>
                            <span>45 г из 65 г</span>
                          </div>
                          <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full">
                            <div
                              className="h-full bg-lightgreen-adarkgreen rounded-full"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <div className="flex items-start gap-5 relative self-stretch w-full">
                    <MetricCard
                      title="Вода"
                      value="1200 / 2000 мл"
                      subtitle="+250 мл в 11:30"
                      icon={metricIcon}
                      iconClassName="relative w-6 h-[26.82px] mt-[-3.82px]"
                    />
                    <MetricCard
                      title="Шаги"
                      value="7,420"
                      subtitle="74% от цели"
                      icon={stepsIcon}
                      iconClassName="relative w-6 h-6 mt-[-1.00px]"
                    />
                    <MetricCard
                      title="Активность"
                      value="450 ккал"
                      subtitle="75 минут сегодня"
                      icon={metricIcon2}
                      iconClassName="relative w-6 h-[24.49px] mt-[-1.49px]"
                    />
                  </div>

                  <article className="flex flex-col w-full p-6 bg-[#f1f5ec] rounded-[var(--shape-corner-large)] relative">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="font-m3-title-large font-normal text-3xl text-[#181d18]">
                        Баланс недели
                      </h2>
                      <span className="text-xs text-gray-500">19–25 октября</span>
                    </div>
                    <div className="flex items-end justify-between w-full h-[120px] gap-4">
                      {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(
                        (day, idx) => (
                          <div
                            key={day}
                            className="flex flex-col items-center flex-1 h-full justify-end"
                          >
                            <div
                              className={`w-full rounded-t-md ${
                                idx === 6
                                  ? "bg-lightgreen-adarkorange"
                                  : "bg-lightgreen-alightorange"
                              }`}
                              style={{
                                height: `${[40, 60, 50, 80, 70, 90, 75][idx]}%`,
                              }}
                            />
                            <span className="text-xs text-gray-500 mt-2">
                              {day}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </article>
                </section>

                <section className="flex flex-col w-[380px] items-start gap-5 relative">
                  <article className="flex flex-col w-full p-6 bg-[#f1f5ec] rounded-[var(--shape-corner-large)] relative">
                    <h2 className="font-m3-title-large font-normal text-[#181d18] mb-2">
                      Текущий вес
                    </h2>
                    <p className="font-m3-headline-medium text-[#181d18] mb-1">
                      68.4 кг
                    </p>
                    <p className="text-xs text-lightgreen-adarkgreen">
                      -1.1 кг за 30 дней
                    </p>
                  </article>

                  <article className="flex flex-col w-full p-6 bg-[#f1f5ec] rounded-[var(--shape-corner-large)] relative">
                    <h2 className="font-m3-title-large font-normal text-3xl text-[#181d18] mb-3">
                      Фокус дня
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Осталось выпить 800 мл воды и пройти 3,000 шагов.
                    </p>
                    <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-lightgreen-adarkgreen rounded-full"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>1000</span>
                      <span>10,000</span>
                    </div>
                  </article>
                </section>
              </div>
            </main>
          </div>
        </div>

        {isRecordDialogOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeDialog();
            }}
          >
            <section
              className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="record-dialog-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="record-dialog-title"
                    className="font-m3-headline-large text-[#181d18] text-xl"
                  >
                    Добавить запись
                  </h2>
                  <p className="mt-2 text-sm text-lightgreen-adarkgreen">
                    Выберите тип записи для сегодняшнего дня.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeDialog}
                  className="rounded-full px-2 py-1 text-xl text-lightgreen-adarkgreen focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen"
                  aria-label="Закрыть окно"
                >
                  ×
                </button>
              </div>
              <div className="mt-6 grid gap-3">
                {["Питание", "Вода", "Тренировка"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={closeDialog}
                    className="rounded-xl bg-[#f1f5ec] px-4 py-3 text-left text-sm text-lightgreen-adarkgreen transition-colors hover:bg-lightgreen-alightgreen focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f7fbf2] flex flex-col">
      <div className="flex-1 px-5 pt-6 pb-2 overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col gap-[3px]">
            <div className="text-gray-500 text-xs font-normal font-inter uppercase">
              Пятница, 25 октября
            </div>
            <div className="text-[#181d18] text-3xl font-normal font-roboto leading-9">
              Привет, Алексей!
            </div>
          </div>
          <div className="w-10 h-10 bg-lightgreen-alightgreen rounded-full flex justify-center items-center">
            <div className="text-lightgreen-adarkgreen text-xs font-bold font-inter">
              А
            </div>
          </div>
        </div>

        <div className="w-full p-5 bg-[#f1f5ec] rounded-2xl flex items-center gap-4 mb-5">
          <div className="relative w-28 h-28 flex items-center justify-center rounded-full shrink-0">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(var(--lightgreen-adarkorange) 0% 27.5%, var(--lightgreen-adarkgreen) 27.5% 100%)",
              }}
            />
            <div className="absolute inset-[16px] bg-[#f1f5ec] rounded-full flex flex-col items-center justify-center">
              <div className="text-[#181d18] text-xl font-bold font-inter">
                1450
              </div>
              <div className="text-gray-500 text-[8px] font-normal font-inter">
                из 2000 ккал
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <div className="text-gray-500 text-xs font-normal font-inter">
                Осталось употребить
              </div>
              <div className="text-lightgreen-adarkgreen text-2xl font-normal font-roboto leading-8">
                550 ккал
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-normal font-inter">Белки</span>
                <span className="text-[#181d18] font-semibold font-inter">
                  75 г из 120 г
                </span>
              </div>
              <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full">
                <div
                  className="h-full bg-lightgreen-adarkgreen rounded-full"
                  style={{ width: "62%" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-normal font-inter">Жиры</span>
                <span className="text-[#181d18] font-semibold font-inter">
                  45 г из 65 г
                </span>
              </div>
              <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full">
                <div
                  className="h-full bg-lightgreen-adarkgreen rounded-full"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-5">
          <div className="flex-1 p-5 bg-[#f1f5ec] rounded-2xl flex flex-col gap-3.5">
            <div className="flex justify-between items-center">
              <span className="text-[#181d18] text-sm font-medium font-roboto">Вода</span>
              <img src={metricIcon} alt="" className="w-5 h-5" />
            </div>
            <div className="text-[#181d18] text-3xl font-normal font-roboto leading-9">
              1200 / 2000 мл
            </div>
            <div className="text-gray-500 text-xs font-normal font-inter">
              60% дневной цели
            </div>
          </div>

          <div className="flex-1 p-5 bg-[#f1f5ec] rounded-2xl flex flex-col gap-3.5">
            <div className="flex justify-between items-center">
              <span className="text-[#181d18] text-sm font-medium font-roboto">Шаги</span>
              <img src={stepsIcon} alt="" className="w-5 h-5" />
            </div>
            <div className="text-[#181d18] text-3xl font-normal font-roboto leading-9">
              7,420
            </div>
            <div className="text-gray-500 text-xs font-normal font-inter">
              Цель: 10,000 шагов
            </div>
          </div>
        </div>

        <div className="w-full p-4 bg-[#e0e4db] rounded-xl flex flex-col gap-3 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[3px]">
              <div className="text-[#181d18] text-base font-semibold font-inter">
                Текущий вес
              </div>
              <div className="text-gray-500 text-xs font-normal font-inter">
                Взвешивание сегодня утром
              </div>
            </div>
            <div className="text-lightgreen-adarkgreen text-xl font-bold font-inter">
              68.4 кг
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white border-t border-[#c1c9be] flex flex-col">
        <div className="w-full h-16 flex justify-center items-center">
          <Link to="/home" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 bg-lightgreen-alightgreen rounded-2xl flex justify-center items-center">
               <img src={bottomIcon} alt="" className="w-6 h-6" />
            </div>
            <span className="text-lightgreen-adarkgreen text-xs font-medium font-roboto">
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
             <div className="w-14 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">
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

export default HomePage;