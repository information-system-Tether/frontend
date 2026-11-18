import { useState } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { Link } from "react-router-dom";
import logotype from "../assets/logotype.svg";
import { Icon } from "../assets/Icon";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterPage = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (isDesktop) {
    return (
      <main className="flex min-h-screen items-start relative bg-[#f7fbf2]" data-m3-mode="green-LT">
        <section className="flex flex-col w-[640px] items-start gap-10 p-16 relative self-stretch bg-lightgreen-alightgreen">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <img className="relative w-[130px] h-auto" alt="Tether" src={logotype} />
          </div>
          <h1 className="relative self-stretch font-m3-headline-large text-[32px] font-normal text-lightgreen-adarkgreen">
            Начните путь к здоровому образу жизни
          </h1>
          <div className="self-stretch flex flex-col justify-start items-start gap-7">
            {[
              "Персональные цели и нормы",
              "Дневник питания без лишних шагов",
              "Наглядная динамика прогресса"
            ].map((text, i) => (
              <div key={i} className="self-stretch inline-flex justify-start items-center gap-3">
                <div className="w-7 h-7 bg-lightgreen-adarkorange rounded-full flex justify-center items-center">
                  <span className="text-white text-xs font-inter">✓</span>
                </div>
                <div className="flex-1 text-lightgreen-adarkgreen text-base font-normal font-inter">{text}</div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="min-h-[960px] items-center justify-center flex-1 grow flex flex-col p-10 relative">
          <div className="w-[560px] p-9 bg-[#f1f5ec] rounded-2xl flex flex-col justify-start items-start gap-6">
            <header className="flex flex-col items-start gap-2 relative self-stretch w-full">
              <h2 className="relative self-stretch font-m3-headline-large text-[32px] font-normal text-[#181d18]">
                Создать аккаунт
              </h2>
              <p className="relative self-stretch font-inter text-[15px] font-normal text-gray-500">
                Заполните данные — это займет меньше минуты
              </p>
            </header>
            
            <form className="flex flex-col items-start gap-4 relative self-stretch w-full" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col h-14 items-start relative self-stretch w-full rounded-t-md">
                <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow bg-[#e0e4db] rounded-t-md">
                  <div className="flex items-start px-4 py-1 relative flex-1 self-stretch w-full grow rounded-t-md">
                    <div className="flex flex-col h-12 items-start justify-center py-1 relative flex-1 grow">
                      <label htmlFor="name" className="relative flex-1 font-m3-body-small text-[#424940]">
                        Имя
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="relative self-stretch w-full border-none bg-transparent mt-[-1px] font-m3-body-large text-[#181d18] p-0 outline-none"
                        placeholder="Иван Иванов"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400" />
              </div>

              <div className="flex flex-col h-14 items-start relative self-stretch w-full rounded-t-md">
                <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow bg-[#e0e4db] rounded-t-md">
                  <div className="flex items-start px-4 py-1 relative flex-1 self-stretch w-full grow rounded-t-md">
                    <div className="flex flex-col h-12 items-start justify-center py-1 relative flex-1 grow">
                      <label htmlFor="email" className="relative flex-1 font-m3-body-small text-[#424940]">
                        Электронная почта
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="relative self-stretch w-full border-none bg-transparent mt-[-1px] font-m3-body-large text-[#181d18] p-0 outline-none"
                        placeholder="username@email.com"
                        value={formValues.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400" />
              </div>

              <div className="flex flex-col h-14 items-start relative self-stretch w-full rounded-t-md">
                <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow bg-[#e0e4db] rounded-t-md">
                  <div className="flex items-start pl-4 pr-0 py-1 relative flex-1 self-stretch w-full grow rounded-t-md">
                    <div className="flex flex-col h-12 items-start justify-center py-1 relative flex-1 grow">
                      <label htmlFor="password" className="relative font-m3-body-small text-[#424940]">
                        Пароль
                      </label>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="relative self-stretch w-full border-none bg-transparent mt-[-1px] font-m3-body-large text-[#181d18] p-0 outline-none"
                        placeholder="Придумайте пароль"
                        value={formValues.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                      />
                    </div>
                    <div className="flex w-12 h-12 items-center justify-center">
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="w-10 h-10 flex items-center justify-center rounded-full">
                        <Icon className="!relative !w-6 !h-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400" />
              </div>

              <div className="flex flex-col h-14 items-start relative self-stretch w-full rounded-t-md">
                <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow bg-[#e0e4db] rounded-t-md">
                  <div className="flex items-start pl-4 pr-0 py-1 relative flex-1 self-stretch w-full grow rounded-t-md">
                    <div className="flex flex-col h-12 items-start justify-center py-1 relative flex-1 grow">
                      <label htmlFor="confirmPassword" className="relative font-m3-body-small text-[#424940]">
                        Подтвердите пароль
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className="relative self-stretch w-full border-none bg-transparent mt-[-1px] font-m3-body-large text-[#181d18] p-0 outline-none"
                        placeholder="Повторите пароль"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                      />
                    </div>
                    <div className="flex w-12 h-12 items-center justify-center">
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="w-10 h-10 flex items-center justify-center rounded-full">
                        <Icon className="!relative !w-6 !h-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400" />
              </div>

              <div className="flex items-center gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => setIsAgreed(!isAgreed)}
                  className={`w-5 h-5 rounded flex items-center justify-center border ${isAgreed ? "bg-lightgreen-adarkgreen border-lightgreen-adarkgreen" : "border-gray-400 bg-transparent"}`}
                >
                  {isAgreed && <span className="text-white text-xs">✓</span>}
                </button>
                <span className="text-gray-500 text-xs font-inter">
                  Я принимаю условия использования и политику конфиденциальности
                </span>
              </div>

              <button type="submit" className="w-full h-12 mt-2 bg-lightgreen-adarkorange rounded-full flex items-center justify-center text-white font-medium font-roboto hover:opacity-90 transition-opacity">
                Создать аккаунт
              </button>

              <div className="text-center w-full mt-2 text-sm font-inter text-gray-500">
                Уже есть аккаунт? <Link to="/login" className="text-lightgreen-adarkgreen font-bold">Войти</Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f7fbf2] flex flex-col">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col pt-12 px-6 pb-6">
        
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-[#181d18] text-3xl font-normal font-roboto leading-9">
            Создать аккаунт
          </h1>
          <p className="text-gray-500 text-sm font-normal font-inter">
            Начните путь к здоровому образу жизни
          </p>
        </div>

        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col h-14 bg-[#e0e4db] rounded-t-md">
            <div className="flex-1 px-4 py-1 flex flex-col justify-center">
              <label className="text-gray-500 text-xs font-roboto tracking-wide mb-0.5">Имя</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Иван Иванов"
                className="w-full bg-transparent text-[#181d18] text-base font-roboto outline-none p-0"
              />
            </div>
            <div className="h-px bg-gray-400 w-full" />
          </div>

          <div className="flex flex-col h-14 bg-[#e0e4db] rounded-t-md">
            <div className="flex-1 px-4 py-1 flex flex-col justify-center">
              <label className="text-gray-500 text-xs font-roboto tracking-wide mb-0.5">Электронная почта</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="username@email.com"
                className="w-full bg-transparent text-[#181d18] text-base font-roboto outline-none p-0"
              />
            </div>
            <div className="h-px bg-gray-400 w-full" />
          </div>

          <div className="flex flex-col h-14 bg-[#e0e4db] rounded-t-md">
            <div className="flex-1 pl-4 pr-0 py-1 flex flex-col justify-center relative">
              <label className="text-gray-500 text-xs font-roboto tracking-wide mb-0.5">Пароль</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Придумайте пароль"
                className="w-full bg-transparent text-[#181d18] text-base font-roboto outline-none p-0 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
              >
                <Icon className="!relative !w-6 !h-6" />
              </button>
            </div>
            <div className="h-px bg-gray-400 w-full" />
          </div>

          <div className="flex flex-col h-14 bg-[#e0e4db] rounded-t-md">
            <div className="flex-1 pl-4 pr-0 py-1 flex flex-col justify-center relative">
              <label className="text-gray-500 text-xs font-roboto tracking-wide mb-0.5">Подтвердите пароль</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="Повторите пароль"
                className="w-full bg-transparent text-[#181d18] text-base font-roboto outline-none p-0 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
              >
                <Icon className="!relative !w-6 !h-6" />
              </button>
            </div>
            <div className="h-px bg-gray-400 w-full" />
          </div>

          <div className="flex items-center gap-3 mt-2">
            <button
              type="button"
              onClick={() => setIsAgreed(!isAgreed)}
              className={`w-5 h-5 rounded flex items-center justify-center border ${isAgreed ? "bg-lightgreen-adarkgreen border-lightgreen-adarkgreen" : "border-gray-400 bg-transparent"}`}
            >
              {isAgreed && <span className="text-white text-xs">✓</span>}
            </button>
            <span className="text-gray-500 text-xs font-inter">
              Я принимаю условия использования и политику конфиденциальности
            </span>
          </div>

          <button 
            type="submit" 
            className="w-full h-12 mt-4 bg-lightgreen-adarkorange rounded-full flex items-center justify-center text-white font-medium font-roboto hover:opacity-90 transition-opacity"
          >
            Создать аккаунт
          </button>

          <div className="text-center w-full mt-4 text-sm font-inter text-gray-500">
            Уже есть аккаунт? <Link to="/login" className="text-lightgreen-adarkgreen font-bold">Войти</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;