import { useState } from 'react';
import Sidebar from './Sidebar';
import categoryIcon from '../assets/Category-icon.svg';
import allIcon from '../assets/all.svg';

const products = [
  {
    id: 1,
    name: 'Куриная грудка',
    kcal: '137 ккал / 100 г',
    macros: 'белки: 35,4   •  жиры: 2,3   •  углеводы: 0,5',
    favorite: true,
  },
  {
    id: 2,
    name: 'Яблоко красное',
    kcal: '52 ккал / 100 г',
    macros: '7,5 / 4,3 / 37,5',
    favorite: false,
  },
  {
    id: 3,
    name: 'Творог 5%',
    kcal: '121 ккал / 100 г',
    macros: '15,5 / 2,3 / 8,9',
    favorite: true,
  },
  {
    id: 4,
    name: 'Банан',
    kcal: '89 ккал / 100 г',
    macros: '3,41 / 4,3 / 37,5',
    favorite: false,
  },
  {
    id: 5,
    name: 'Гречка отварная',
    kcal: '110 ккал / 100 г',
    macros: '17,5 / 4,3 / 37,5',
    favorite: false,
  },
];

export default function AddProductPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(1);
  const [portion, setPortion] = useState(150);

  const selected = products.find((p) => p.id === selectedId) ?? products[0];
  const totalKcal = Math.round((parseInt(selected.kcal, 10) * portion) / 100);

  return (
    <div className="flex min-h-screen items-start relative bg-[#f7fbf2]">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />

      <div className="flex flex-col items-start relative flex-1 grow">
        <header className="flex h-20 items-center gap-3 pl-8 pr-10 border-b border-[#c1c9be] self-stretch w-full">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="font-m3-headline-large text-[#181d18] truncate">
              Добавить продукт
            </h1>
            <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
              Дневник питания · Сегодня, 25 октября
            </p>
          </div>
          <button
            type="button"
            className="w-11 h-11 bg-lightgreen-alightgreen rounded-full flex items-center justify-center text-lightgreen-adarkgreen text-base font-medium focus-visible:ring-2 focus-visible:ring-lightgreen-adarkgreen focus-visible:ring-offset-2"
            aria-label="Профиль пользователя"
          >
            А
          </button>
        </header>

        <main className="flex flex-col items-start gap-6 p-10 self-stretch w-full">
          <div className="self-stretch inline-flex justify-start items-center gap-10 overflow-hidden">
            <div className="flex-1 h-14 max-w-[720px] bg-[#eef3e9] rounded-3xl flex justify-start items-center gap-1 overflow-hidden">
              <div className="flex-1 self-stretch p-1 flex justify-start items-center">
                <button
                  type="button"
                  className="size-12 flex justify-center items-center rounded-full text-lightgreen-adarkgreen hover:bg-black/5"
                  aria-label="Поиск"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
                <div className="flex-1 self-stretch px-5 flex justify-start items-center gap-2.5">
                  <input
                    type="text"
                    placeholder="Поиск по 12 480 продуктам"
                    className="w-full bg-transparent outline-none text-[#4a5246] placeholder:text-[#4a5246] text-base font-['Inter'] tracking-wide"
                  />
                </div>
              </div>
            </div>

            <div className="w-72 h-12 flex justify-center items-center">
              <button
                type="button"
                className="flex-1 h-12 py-1 flex justify-center items-center"
              >
                <span className="flex-1 self-stretch bg-lightgreen-alightorange rounded-l-[100px] outline outline-1 outline-offset-[-1px] outline-lightgreen-adarkorange inline-flex flex-col justify-center items-center overflow-hidden">
                  <span className="self-stretch flex-1 px-3 py-2.5 inline-flex justify-center items-center gap-2">
                    <img src={allIcon} alt="" className="w-4 h-4" aria-hidden="true" />
                    <span className="text-center text-lightgreen-adarkgreen text-sm font-medium font-['Inter'] leading-5 tracking-tight">
                      Все продукты
                    </span>
                  </span>
                </span>
              </button>
              <button
                type="button"
                className="flex-1 h-12 py-1 flex justify-center items-center"
              >
                <span className="flex-1 self-stretch rounded-r-[100px] outline outline-1 outline-offset-[-1px] outline-[#c1c9be] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                  <span className="self-stretch flex-1 px-3 py-2.5 inline-flex justify-center items-center gap-2">
                    <span className="text-center text-[#181d18] text-sm font-medium font-['Inter'] leading-5 tracking-tight">
                      Избранное
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="self-stretch inline-flex justify-start items-start gap-8">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch inline-flex justify-between items-start overflow-hidden">
                <div className="flex-1 text-[#181d18] text-2xl font-normal font-['Inter'] leading-8">
                  Все продукты
                </div>
                <div className="text-lightgreen-adarkgreen text-xs font-normal font-['Inter']">
                  Показано 5 из 12 480
                </div>
              </div>

              <div className="self-stretch rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#c1c9be] flex flex-col justify-start items-start overflow-hidden">
                {products.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedId(p.id)}
                    className={`self-stretch pl-4 inline-flex justify-start items-center overflow-hidden text-left ${
                      selectedId === p.id ? 'bg-black/5' : ''
                    }`}
                  >
                    <span className="size-5 flex items-center justify-center shrink-0">
                      <img
                        src={categoryIcon}
                        alt=""
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="flex-1 min-h-12 rounded-sm inline-flex flex-col justify-center items-start overflow-hidden">
                      <span className="self-stretch px-4 py-2.5 rounded-xl inline-flex justify-start items-center gap-3">
                        <span className="flex-1 inline-flex flex-col justify-start items-start">
                          <span className="self-stretch flex flex-col justify-start items-start gap-[3px] overflow-hidden">
                            <span className="self-stretch text-[#181d18] text-base font-normal font-['Inter']">
                              {p.name}
                            </span>
                            <span className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-['Inter'] leading-4">
                              {p.kcal}  •  {p.macros}
                            </span>
                          </span>
                        </span>
                        <span className="min-h-7 inline-flex flex-col justify-center items-start gap-1">
                          <span className="text-right text-[#4a5246] text-sm font-medium font-['Inter'] leading-5 tracking-tight">
                            {p.favorite ? '★' : '☆'}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-96 pt-12 inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start">
                <div className="w-96 h-80 left-0 top-0 absolute bg-lightgreen-alightgreen rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-[#181d18] text-2xl font-normal font-['Inter'] leading-8">
                      Выбранный продукт
                    </div>
                    <div className="self-stretch text-lightgreen-adarkgreen text-sm font-normal font-['Inter'] leading-5">
                      {selected.name}
                    </div>
                    <label className="self-stretch h-14 rounded-sm flex flex-col justify-start items-start">
                      <span className="self-stretch flex-1 rounded-sm outline outline-1 outline-offset-[-1px] outline-[#c1c9be] flex flex-col justify-start items-start gap-2.5 relative">
                        <span className="self-stretch flex-1 pl-4 py-1 rounded-tl-sm rounded-tr-sm inline-flex justify-start items-start gap-1">
                          <span className="flex-1 h-12 py-1 relative inline-flex flex-col justify-center items-start">
                            <input
                              type="number"
                              min={1}
                              value={portion}
                              onChange={(e) => setPortion(Number(e.target.value) || 0)}
                              className="w-full bg-transparent outline-none text-[#181d18] text-base font-['Inter'] leading-6 tracking-wide"
                            />
                            <span className="px-1 left-[-4px] top-[-12px] absolute bg-lightgreen-alightgreen text-[#4a5246] text-xs font-normal font-['Inter'] leading-4 tracking-wide">
                              Порция (г)
                            </span>
                          </span>
                        </span>
                      </span>
                    </label>
                    <div className="self-stretch text-lightgreen-adarkgreen text-xs font-normal font-['Inter'] leading-4">
                      Итого
                    </div>
                    <div className="text-lightgreen-adarkgreen text-xl font-normal font-['Inter']">
                      {totalKcal} ккал
                    </div>
                    <button
                      type="button"
                      className="self-stretch h-12 inline-flex justify-center items-center"
                    >
                      <span className="flex-1 bg-lightgreen-adarkgreen rounded-[100px] inline-flex flex-col justify-center items-center overflow-hidden hover:opacity-90">
                        <span className="self-stretch px-4 py-2.5 inline-flex justify-center items-center gap-2">
                          <span className="text-white text-sm font-medium font-['Inter'] leading-5 tracking-tight">
                            Добавить в Дневник
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="self-stretch relative rounded-2xl inline-flex justify-start items-start">
                <div className="w-96 h-44 left-0 top-0 absolute bg-lightgreen-alightorange rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-[#181d18] text-2xl font-normal font-['Inter'] leading-8">
                      Пищевая ценность
                    </div>
                    <div className="self-stretch inline-flex justify-between items-center">
                      <span className="text-lightgreen-adarkgreen text-sm font-normal font-['Inter']">Белки</span>
                      <span className="text-lightgreen-adarkgreen text-sm font-normal font-['Inter']">29.8 г</span>
                    </div>
                    <div className="self-stretch inline-flex justify-between items-center">
                      <span className="text-lightgreen-adarkgreen text-sm font-normal font-['Inter']">Жиры</span>
                      <span className="text-lightgreen-adarkgreen text-sm font-normal font-['Inter']">2.8 г</span>
                    </div>
                    <div className="self-stretch inline-flex justify-between items-center">
                      <span className="text-lightgreen-adarkgreen text-sm font-normal font-['Inter']">Углеводы</span>
                      <span className="text-lightgreen-adarkgreen text-sm font-normal font-['Inter']">0 г</span>
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