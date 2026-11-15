import { useState } from "react";
import Sidebar from "./Sidebar";

export const ProfilePage = () => {
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
              Профиль пользователя
            </h1>
            <p className="font-inter font-medium text-lightgreen-adarkgreen text-sm tracking-[0.50px] leading-4">
              Ваши данные, цели и дневные нормы
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
          <div className="self-stretch grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Левая колонка */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              <div className="self-stretch relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-lightgreen-alightgreen rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-center gap-3 overflow-hidden">
                      <div className="w-16 h-16 relative rounded-full bg-white flex items-center justify-center">
                        <span className="text-lightgreen-adarkgreen text-xl font-medium">А</span>
                      </div>
                      <div className="self-stretch text-center text-lightgreen-adarkgreen text-2xl font-normal font-roboto leading-9">
                        Алексей Смирнов
                      </div>
                      <div className="self-stretch text-center text-lightgreen-adarkgreen text-sm font-normal font-inter">
                        username@email.com
                      </div>
                    </div>
                    <button className="self-stretch h-12 bg-lightgreen-adarkorange rounded-[100px] flex justify-center items-center hover:opacity-90 transition-opacity">
                      <span className="text-white text-sm font-medium font-roboto leading-5 tracking-tight">
                        Редактировать профиль
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="self-stretch relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-[#181d18] text-xl font-normal font-roboto leading-7">
                      Ваша цель
                    </div>
                    <div className="text-lightgreen-adarkgreen text-2xl font-normal font-roboto leading-8">
                      Снижение веса
                    </div>
                    <div className="self-stretch flex flex-col gap-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Текущий вес</span>
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">68.4 кг</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Целевой вес</span>
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">65.0 кг</span>
                      </div>
                    </div>
                    <button className="mt-2 h-10 px-4 rounded-[100px] border border-[#c1c9be] text-[#181d18] text-sm font-medium font-roboto hover:bg-black/5 transition-colors self-start">
                      Изменить цель
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Центральная колонка */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="self-stretch relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch text-[#181d18] text-xl font-normal font-roboto leading-7">
                      Личные данные
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="text-gray-500 text-xs font-normal font-inter">Дата рождения</div>
                      <div className="text-[#181d18] text-base font-normal font-inter">15 апреля 1996 · 30 лет</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-gray-500 text-xs font-normal font-inter">Пол</div>
                      <div className="text-[#181d18] text-base font-normal font-inter">Мужской</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-gray-500 text-xs font-normal font-inter">Рост</div>
                      <div className="text-[#181d18] text-base font-normal font-inter">175 см</div>
                    </div>
                    
                    <button className="h-10 px-4 rounded-[100px] border border-[#c1c9be] text-[#181d18] text-sm font-medium font-roboto hover:bg-black/5 transition-colors self-start mt-2">
                      Изменить
                    </button>
                  </div>
                </div>
              </div>

              <div className="self-stretch relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch text-[#181d18] text-xl font-normal font-roboto leading-7">
                      Активность и здоровье
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="text-gray-500 text-xs font-normal font-inter">Уровень активности</div>
                      <div className="text-[#181d18] text-base font-normal font-inter">Умеренный</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-gray-500 text-xs font-normal font-inter">Режим</div>
                      <div className="text-[#181d18] text-base font-normal font-inter">3–5 тренировок в неделю</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-gray-500 text-xs font-normal font-inter">Единицы измерения</div>
                      <div className="text-[#181d18] text-base font-normal font-inter">кг · см · мл</div>
                    </div>
                    
                    <button className="h-10 px-4 rounded-[100px] border border-[#c1c9be] text-[#181d18] text-sm font-medium font-roboto hover:bg-black/5 transition-colors self-start mt-2">
                      Изменить
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              <div className="self-stretch relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-lightgreen-alightorange rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-[#181d18] text-xl font-normal font-roboto leading-7">
                      Дневные нормы
                    </div>
                    <div className="text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10 mb-2">
                      2000 ккал
                    </div>
                    
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex justify-between items-center">
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Белки</span>
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">120 г</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Жиры</span>
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">65 г</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Углеводы</span>
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">235 г</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">Вода</span>
                        <span className="text-lightgreen-adarkgreen text-sm font-normal font-inter">2000 мл</span>
                      </div>
                    </div>

                    <button className="mt-4 h-10 px-4 rounded-[100px] border border-[#c1c9be] text-[#181d18] text-sm font-medium font-roboto hover:bg-black/5 transition-colors self-start">
                      Настроить нормы
                    </button>
                  </div>
                </div>
              </div>

              <div className="self-stretch relative rounded-2xl flex justify-start items-start">
                <div className="w-full h-full absolute bg-[#f1f5ec] rounded-xl overflow-hidden" />
                <div className="flex-1 rounded-xl flex justify-start items-start overflow-hidden relative">
                  <div className="flex-1 p-6 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch text-[#181d18] text-xl font-normal font-roboto leading-7">
                      О ваших данных
                    </div>
                    <div className="self-stretch text-gray-500 text-sm font-normal font-inter leading-5">
                      Измерения и цели помогают отслеживать прогресс. Вы можете изменить их в любое время.
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

export default ProfilePage;