import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logotype from "../assets/logotype.svg"; 

export const OnboardingPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "Алексей Смирнов",
    birthDate: "15.04.1996",
    gender: "Мужской",
    height: "175",
    weight: "68.4",
    targetWeight: "65.0",
  });

  const [activity, setActivity] = useState("Умеренный");
  const [goal, setGoal] = useState("Снижение веса");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    navigate("/home");
  };

  const InputField = ({ label, name, value, onChange, type = "text" }) => (
    <div className="flex-1 h-14 bg-[#e0e4db] rounded-t-md flex flex-col justify-end relative overflow-visible">
      <div className="flex-1 px-4 pt-2 pb-1 flex flex-col justify-center relative">
        <label className="text-gray-500 text-[11px] font-roboto tracking-wide mb-0.5">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-[#181d18] text-base font-roboto outline-none p-0"
        />
      </div>
      <div className="w-full h-[1px] bg-gray-400" />
    </div>
  );

  const SelectOption = ({ label, value, currentValue, onChange }) => {
    const isSelected = currentValue === value;
    return (
      <button
        type="button"
        onClick={() => onChange(value)}
        className={`flex-1 h-12 px-3 rounded-xl border flex items-center gap-3 transition-colors ${
          isSelected 
            ? "bg-lightgreen-alightgreen border-lightgreen-adarkgreen text-lightgreen-adarkgreen" 
            : "bg-[#f1f5ec] border-[#c1c9be] text-[#181d18] hover:bg-black/5"
        }`}
      >
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? "border-lightgreen-adarkgreen" : "border-gray-400"}`}>
          {isSelected && <div className="w-2.5 h-2.5 bg-lightgreen-adarkgreen rounded-full" />}
        </div>
        <span className="text-sm font-medium font-inter">{label}</span>
      </button>
    );
  };

  return (
    <div className="flex min-h-screen items-start relative bg-[#f7fbf2]" data-m3-mode="green-LT">
      
      <div className="w-[640px] self-stretch p-16 bg-lightgreen-alightgreen inline-flex flex-col justify-start items-start gap-10">
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <img
            className="relative w-[130px] h-auto"
            alt="Tether"
            src={logotype}
          />
        </div>
        
        <div className="self-stretch text-lightgreen-adarkgreen text-3xl font-normal font-roboto leading-10">
          Ваш ритм. Ваши цели.
        </div>
        
        <div className="self-stretch text-lightgreen-adarkgreen text-lg font-normal font-inter leading-7">
          Расскажите немного о себе, чтобы настроить питание, воду и движение под ваши цели. Все данные можно изменить в профиле.
        </div>
      </div>

      <div className="flex-1 min-h-screen p-10 flex flex-col justify-center items-center">
        <div className="w-[820px] p-8 bg-[#f1f5ec] rounded-2xl flex flex-col justify-start items-start gap-6">
          
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-[#181d18] text-3xl font-normal font-roboto">
              Добро пожаловать, {formData.name.split(' ')[0]}!
            </h1>
            <p className="text-gray-500 text-sm font-normal font-inter">
              Давайте настроим Tether под вас. Эти данные помогут определить ваши первые цели.
            </p>
            <p className="text-lightgreen-adarkgreen text-xs font-normal font-inter">
              username@email.com · Первоначальная настройка
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 mt-2">
            <h2 className="text-[#181d18] text-xl font-roboto">О вас</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Имя" name="name" value={formData.name} onChange={handleChange} />
              <InputField label="Дата рождения" name="birthDate" value={formData.birthDate} onChange={handleChange} />
              <InputField label="Пол" name="gender" value={formData.gender} onChange={handleChange} />
              <InputField label="Рост (см)" name="height" value={formData.height} onChange={handleChange} type="number" />
              <InputField label="Текущий вес (кг)" name="weight" value={formData.weight} onChange={handleChange} type="number" />
              <InputField label="Целевой вес (кг)" name="targetWeight" value={formData.targetWeight} onChange={handleChange} type="number" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 mt-2">
            <h2 className="text-[#181d18] text-base font-medium font-roboto">Уровень активности</h2>
            <div className="flex gap-3 w-full">
              <SelectOption label="Умеренный" value="Умеренный" currentValue={activity} onChange={setActivity} />
              <SelectOption label="Низкий" value="Низкий" currentValue={activity} onChange={setActivity} />
              <SelectOption label="Высокий" value="Высокий" currentValue={activity} onChange={setActivity} />
            </div>
            <p className="text-gray-500 text-xs font-inter mt-1">
              {activity === "Умеренный" && "Умеренная активность — 3–5 тренировок в неделю."}
              {activity === "Низкий" && "Низкая активность — 1–2 тренировки в неделю."}
              {activity === "Высокий" && "Высокая активность — 6–7 тренировок в неделю."}
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <h2 className="text-[#181d18] text-base font-medium font-roboto">Ваша цель</h2>
            <div className="flex gap-3 w-full">
              <SelectOption label="Снижение веса" value="Снижение веса" currentValue={goal} onChange={setGoal} />
              <SelectOption label="Поддержание веса" value="Поддержание веса" currentValue={goal} onChange={setGoal} />
              <SelectOption label="Набор массы" value="Набор массы" currentValue={goal} onChange={setGoal} />
            </div>
          </div>

          <div className="w-full mt-2 p-4 bg-lightgreen-alightorange rounded-xl flex flex-col gap-3">
            <h2 className="text-[#181d18] text-xl font-roboto">Первые дневные ориентиры</h2>
            <div className="flex items-center justify-between w-full">
              <div className="text-lightgreen-adarkgreen text-2xl font-roboto">2000 ккал</div>
              <div className="flex flex-col gap-1 items-end">
                <div className="flex gap-4 text-lightgreen-adarkgreen text-sm font-inter">
                  <span>Белки / Жиры / Углеводы</span>
                  <span>120 / 65 / 235 г</span>
                </div>
                <div className="flex gap-4 text-lightgreen-adarkgreen text-sm font-inter">
                  <span>Вода</span>
                  <span>2000 мл</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-xs font-inter w-full leading-5">
            Это стартовые ориентиры, а не медицинская рекомендация. Все данные и нормы можно изменить в профиле.
          </p>

          <button
            onClick={handleSubmit}
            className="w-full h-12 bg-lightgreen-adarkorange text-white rounded-full font-medium font-roboto hover:opacity-90 transition-opacity mt-2"
          >
            Завершить настройку
          </button>

        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;