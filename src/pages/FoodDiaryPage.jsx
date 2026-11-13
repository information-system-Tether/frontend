import { useState } from "react";
import Sidebar from "./Sidebar";
import { IconHomeMenu } from "../assets/IconHomeMenu";
import { IconAddRecord } from "../assets/IconAddRecord";
import categoryIcon from '../assets/Category-icon.svg';
import { Link } from "react-router-dom";

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

export const FoodDiaryPage = () => {
  const [isRecordDialogOpen, setIsRecordDialogOpen] = useState(false);
  const closeDialog = () => setIsRecordDialogOpen(false);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div
        className="flex min-h-screen items-start relative bg-[#f7fbf2]"
        data-m3-mode="green-LT"
        data-shape-mode="baseline"
      >
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(v => !v)} />

        {/* Основной контент */}
        <div className="flex flex-col items-start relative flex-1 grow">
          {/* Шапка */}
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

          {/* Контент страницы */}
          <main className="flex-col items-start gap-6 p-10 self-stretch w-full flex relative">
            
            {/* Заголовок дня */}
            <div className="flex items-center gap-3 w-[520px] h-12 border-b border-[#c1c9be] pb-2">
              <span className="text-lightgreen-adarkgreen text-base font-normal font-inter">▶</span>
              <span className="text-black text-base font-normal font-inter">25/10/2026</span>
              <span className="text-lightgreen-adarkgreen text-xs font-normal font-inter">•</span>
              <span className="text-black text-base font-normal font-inter">1060 ккал</span>
            </div>

            <div className="self-stretch inline-flex justify-start items-start gap-8 overflow-hidden">
              
              {/* Левая колонка: Приемы пищи */}
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch bg-[#f1f5ec] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#c1c9be] flex flex-col justify-start items-start overflow-hidden">
                  
                  {/* Заголовок блока */}
                  <div className="self-stretch p-4 bg-lightgreen-alightorange inline-flex justify-between items-start overflow-hidden">
                    <div className="text-black text-base font-bold font-inter">Итого за сегодня</div>
                    <div className="justify-start">
                      <span className="text-[#181d18] text-sm font-semibold font-inter">1000 </span>
                      <span className="text-lightgreen-adarkgreen text-xs font-normal font-inter">/ 1500 ккал</span>
                    </div>
                  </div>

                  {/* Список продуктов */}
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

                {/* Кнопка добавления внизу списка */}
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

              {/* Правая колонка: Итого за день */}
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

      {/* Диалоговое окно */}
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
};

export default FoodDiaryPage;