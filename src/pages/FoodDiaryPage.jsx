import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery";
import Sidebar from "./Sidebar";
import { IconAddRecord } from "../assets/IconAddRecord";
import categoryIcon from "../assets/Category-icon.svg";
import bottomIcon from "../assets/mobile_bottom.svg";

const meals = [
  {
    id: 1,
    name: "Овсяная каша",
    weight: "250 г",
    calories: "300 ккал",
    macros: "б: 7,5 ж: 4,3 у: 37,5",
  },
  {
    id: 2,
    name: "Банан средний",
    weight: "120 г",
    calories: "100 ккал",
    macros: "1,1 / 0,3 / 20,1",
  },
  {
    id: 3,
    name: "Куриное филе",
    weight: "150 г",
    calories: "250 ккал",
    macros: "35,4 / 2,3 / 0,5",
  },
  {
    id: 4,
    name: "Рис бурый",
    weight: "180 г",
    calories: "350 ккал",
    macros: "3,5 / 5,3 / 32,5",
  },
];

const mobileMeals = [
  {
    title: "Завтрак",
    total: "425",
    goal: "500",
    items: [
      { name: "Овсяная каша на молоке", weight: "250 г", cal: "320 ккал" },
      { name: "Банан средний", weight: "120 г", cal: "105 ккал" },
    ],
  },
  {
    title: "Обед",
    total: "575",
    goal: "700",
    items: [
      { name: "Куриное филе гриль", weight: "150 г", cal: "240 ккал" },
      { name: "Рис бурый отварной", weight: "180 г", cal: "215 ккал" },
      { name: "Овощной салат с маслом", weight: "150 г", cal: "120 ккал" },
    ],
  },
  {
    title: "Ужин",
    total: "0",
    goal: "500",
    items: [],
  },
];

export const FoodDiaryPage = () => {
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
                  Дневник питания
                </h1>
                <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
                  Сегодня, 25 октября
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
                      Добавить продукт
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
              <div className="flex items-center gap-3 w-[520px] h-12 border-b border-[#c1c9be] pb-2">
                <span className="text-lightgreen-adarkgreen text-base font-normal font-inter">▶</span>
                <span className="text-black text-base font-normal font-inter">25/10/2026</span>
                <span className="text-lightgreen-adarkgreen text-xs font-normal font-inter">•</span>
                <span className="text-black text-base font-normal font-inter">1060 ккал</span>
              </div>

              <div className="self-stretch inline-flex justify-start items-start gap-8 overflow-hidden">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
                  <div className="self-stretch bg-[#f1f5ec] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#c1c9be] flex flex-col justify-start items-start overflow-hidden">
                    <div className="self-stretch p-4 bg-lightgreen-alightorange inline-flex justify-between items-start overflow-hidden">
                      <div className="text-black text-base font-bold font-inter">Итого за сегодня</div>
                      <div className="justify-start">
                        <span className="text-[#181d18] text-sm font-semibold font-inter">1000 </span>
                        <span className="text-lightgreen-adarkgreen text-xs font-normal font-inter">/ 1500 ккал</span>
                      </div>
                    </div>

                    {meals.map((meal) => (
                      <div key={meal.id} className="self-stretch pl-4 inline-flex justify-start items-center overflow-hidden border-b border-[#c1c9be]/30 last:border-0">
                        <img
                          src={categoryIcon}
                          alt=""
                          className="w-5 h-5 shrink-0"
                          aria-hidden="true"
                        />
                        <div className="flex-1 min-h-[52px] flex flex-col justify-center items-start overflow-hidden">
                          <div className="self-stretch px-4 py-2.5 rounded-xl inline-flex justify-start items-center gap-3">
                            <div className="flex-1 inline-flex flex-col justify-start items-start">
                              <div className="self-stretch flex flex-col justify-start items-start gap-[3px] overflow-hidden">
                                <div className="self-stretch text-[#181d18] text-base font-normal font-inter">{meal.name}</div>
                                <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-inter leading-4">
                                  {meal.weight} / {meal.calories}
                                </div>
                              </div>
                            </div>
                            <div className="min-h-7 inline-flex flex-col justify-center items-start gap-1">
                              <div className="text-right text-gray-500 text-sm font-medium font-roboto leading-5 tracking-tight">
                                {meal.macros}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsRecordDialogOpen(true)}
                    className="self-stretch h-12 inline-flex justify-center items-center"
                  >
                    <div className="flex-1 bg-lightgreen-adarkgreen rounded-[100px] inline-flex flex-col justify-center items-center overflow-hidden hover:opacity-90 transition-opacity">
                      <div className="self-stretch px-4 py-2.5 inline-flex justify-center items-center gap-2">
                        <IconAddRecord className="!relative !w-5 !h-5" />
                        <span className="text-white text-sm font-medium font-roboto leading-5 tracking-tight">
                          Добавить продукт
                        </span>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="w-96 inline-flex flex-col justify-start items-start">
                  <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start">
                    <div className="w-full h-full absolute bg-lightgreen-alightgreen rounded-xl overflow-hidden" />
                    <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                      <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                        <div className="self-stretch text-[#181d18] text-2xl font-normal font-roboto leading-8">
                          Итого за день
                        </div>
                        <div className="text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
                          1000 ккал
                        </div>
                        <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-inter leading-5">
                          из 1500 ккал · 50%
                        </div>

                        <div className="self-stretch inline-flex justify-between items-center mt-2">
                          <div className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Белки</div>
                          <div className="text-lightgreen-adarkgreen text-sm font-semibold font-inter">75 / 120 г</div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-center">
                          <div className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Жиры</div>
                          <div className="text-lightgreen-adarkgreen text-sm font-semibold font-inter">45 / 65 г</div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-center">
                          <div className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Углеводы</div>
                          <div className="text-lightgreen-adarkgreen text-sm font-semibold font-inter">118 / 220 г</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    Добавить продукт
                  </h2>
                  <p className="mt-2 text-sm text-lightgreen-adarkgreen">
                    Найдите продукт в базе или добавьте свой.
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

              <div className="mt-6 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Поиск продукта..."
                  className="w-full bg-[#f1f5ec] rounded-xl px-4 py-3 text-sm text-[#181d18] outline-none focus:ring-2 focus:ring-lightgreen-adarkgreen"
                />
                <Link
                  to="/food-diary/add"
                  onClick={closeDialog}
                  className="w-full rounded-xl bg-lightgreen-alightorange px-4 py-3 text-center text-sm font-medium text-black transition-colors hover:opacity-90 block"
                >
                  Создать свой продукт
                </Link>
              </div>
            </section>
          </div>
        )}
      </>
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
          <div className="text-[#181d18] text-xl font-normal font-roboto leading-7">Сегодня, 25 октября</div>
          <div className="w-10" />
        </div>

        <div className="flex flex-col gap-4">
          {mobileMeals.map((meal, idx) => (
            <div key={idx} className="bg-[#f1f5ec] rounded-2xl border border-[#c1c9be] flex flex-col overflow-hidden">
              <div className="p-4 bg-lightgreen-alightorange flex justify-between items-center">
                <div className="text-[#181d18] text-base font-bold font-inter">{meal.title}</div>
                <div>
                  <span className="text-[#181d18] text-sm font-semibold font-inter">{meal.total} </span>
                  <span className="text-gray-500 text-xs font-normal font-inter">/ {meal.goal} ккал</span>
                </div>
              </div>
              
              {meal.items.length > 0 ? (
                meal.items.map((item, i) => (
                  <div key={i} className="px-4 py-2.5 flex items-center gap-3 border-b border-[#c1c9be]/30 last:border-0">
                    <img
                      src={categoryIcon}
                      alt=""
                      className="w-5 h-5 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="flex-1 flex flex-col gap-[3px]">
                      <div className="text-[#181d18] text-base font-semibold font-inter">{item.name}</div>
                      <div className="text-gray-500 text-xs font-normal font-inter">{item.weight}</div>
                    </div>
                    <div className="text-right text-gray-500 text-sm font-medium font-roboto">{item.cal}</div>
                  </div>
                ))
              ) : (
                <div className="p-4 flex justify-center items-center">
                  <span className="text-gray-500 text-sm font-normal font-inter">Нет добавленных продуктов</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-lightgreen-adarkgreen rounded-2xl flex justify-between items-center">
          <div className="text-white text-base font-semibold font-inter">Всего за день</div>
          <div className="text-white text-base font-bold font-inter">1000 ккал</div>
        </div>
      </div>

      <div className="w-full bg-white border-t border-[#c1c9be] flex flex-col relative">
        <button
          onClick={() => setIsRecordDialogOpen(true)}
          className="absolute -top-6 right-5 w-12 h-12 bg-lightgreen-adarkorange rounded-2xl shadow-lg flex items-center justify-center z-10"
        >
          <IconAddRecord className="!relative !w-6 !h-6" />
        </button>

        <div className="w-full h-16 flex justify-center items-center mt-2">
          <Link to="/home" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-8 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">Главная</span>
          </Link>
          <Link to="/food-diary" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-14 h-8 bg-lightgreen-alightgreen rounded-2xl flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6" />
            </div>
            <span className="text-lightgreen-adarkgreen text-xs font-medium font-roboto">Дневник</span>
          </Link>
          <Link to="/workouts" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-8 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">Тренировки</span>
          </Link>
          <Link to="/weight" className="flex-1 self-stretch py-1.5 flex flex-col justify-center items-center gap-1">
            <div className="w-8 h-8 flex justify-center items-center">
              <img src={bottomIcon} alt="" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-gray-500 text-xs font-medium font-roboto">Вес</span>
          </Link>
        </div>
        <div className="self-stretch h-5 flex justify-center items-center">
          <div className="w-36 h-[5px] bg-[#181d18] rounded-full" />
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
            aria-labelledby="record-dialog-title-mobile"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="record-dialog-title-mobile"
                  className="font-m3-headline-large text-[#181d18] text-xl"
                >
                  Добавить продукт
                </h2>
                <p className="mt-2 text-sm text-lightgreen-adarkgreen">
                  Найдите продукт в базе или добавьте свой.
                </p>
              </div>
              <button
                type="button"
                onClick={closeDialog}
                className="rounded-full px-2 py-1 text-xl text-lightgreen-adarkgreen"
                aria-label="Закрыть окно"
              >
                ×
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Поиск продукта..."
                className="w-full bg-[#f1f5ec] rounded-xl px-4 py-3 text-sm text-[#181d18] outline-none"
              />
              <Link
                to="/food-diary/add"
                onClick={closeDialog}
                className="w-full rounded-xl bg-lightgreen-alightorange px-4 py-3 text-center text-sm font-medium text-black transition-colors hover:opacity-90 block"
              >
                Создать свой продукт
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default FoodDiaryPage;