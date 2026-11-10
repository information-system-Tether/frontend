import { useState } from "react";
import { IconHomeMenu } from "../assets/IconHomeMenu";
import { IconAddRecord } from "../assets/IconAddRecord";
import { MetricCard } from "./MetricCard";
import metricIcon from "../assets/metric-icon.svg";
import metricIcon2 from "../assets/metric-icon-2.svg";
import stepsIcon from "../assets/steps.svg";
import Sidebar from "./Sidebar";

export const HomePage = () => {
  const [isRecordDialogOpen, setIsRecordDialogOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const closeDialog = () => setIsRecordDialogOpen(false);

  return (
    <>
      <div
        className="flex min-h-screen items-start relative bg-[#f7fbf2]"
        data-m3-mode="green-LT"
        data-shape-mode="baseline"
      >

      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(v => !v)} />

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
                    {/* Кольцо калорий с оранжевым сегментом */}
                    <div 
                      className="relative flex items-center justify-center w-[130px] h-[130px] rounded-full"
                      style={{
                        background: 'conic-gradient(var(--lightgreen-adarkorange) 0% 27.5%, var(--lightgreen-adarkgreen) 27.5% 100%)'
                      }}
                    >
                      <div className="absolute inset-[24px] bg-[#f1f5ec] rounded-full flex flex-col items-center justify-center">
                        <span className="font-m3-headline-medium text-3xl text-lightgreen-adarkgreen">1450</span>
                        <span className="text-[10px] text-gray-500">из 2000 ккал</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-1 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Осталось употребить</p>
                        <p className="text-xl font-medium text-[#181d18]">550 ккал</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Белки</span>
                          <span>75 г из 120 г</span>
                        </div>
                        <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full">
                          <div className="h-full bg-lightgreen-adarkgreen rounded-full" style={{ width: '62%' }} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Жиры</span>
                          <span>45 г из 65 г</span>
                        </div>
                        <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full">
                          <div className="h-full bg-lightgreen-adarkgreen rounded-full" style={{ width: '70%' }} />
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
                    <h2 className="font-m3-title-large font-normal text-3xl text-[#181d18]">Баланс недели</h2>
                    <span className="text-xs text-gray-500">19–25 октября</span>
                  </div>
                  <div className="flex items-end justify-between w-full h-[120px] gap-4">
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, idx) => (
                      <div key={day} className="flex flex-col items-center flex-1 h-full justify-end">
                        <div 
                          className={`w-full rounded-t-md ${idx === 6 ? 'bg-lightgreen-adarkorange' : 'bg-lightgreen-alightorange'}`}
                          style={{ height: `${[40, 60, 50, 80, 70, 90, 75][idx]}%` }}
                        />
                        <span className="text-xs text-gray-500 mt-2">{day}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="flex flex-col w-[380px] items-start gap-5 relative">
                <article className="flex flex-col w-full p-6 bg-[#f1f5ec] rounded-[var(--shape-corner-large)] relative">
                  <h2 className="font-m3-title-large font-normal text-[#181d18] mb-2">Текущий вес</h2>
                  <p className="font-m3-headline-medium text-[#181d18] mb-1">68.4 кг</p>
                  <p className="text-xs text-lightgreen-adarkgreen">-1.1 кг за 30 дней</p>
                </article>

                <article className="flex flex-col w-full p-6 bg-[#f1f5ec] rounded-[var(--shape-corner-large)] relative">
                  <h2 className="font-m3-title-large font-normal text-3xl text-[#181d18] mb-3">Фокус дня</h2>
                  <p className="text-sm text-gray-600 mb-4">Осталось выпить 800 мл воды и пройти 3,000 шагов.</p>
                  <div className="w-full h-2 bg-lightgreen-alightgreen rounded-full relative">
                    <div className="absolute top-0 left-0 h-full bg-lightgreen-adarkgreen rounded-full" style={{ width: '40%' }} />
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
};

export default HomePage;