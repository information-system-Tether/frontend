import { useState } from "react";
import { useMediaQuery } from "./useMediaQuery";
import activeIndicator from "../assets/active-indicator.svg";
import { Icon } from "../assets/Icon";
import image from "../assets/image.svg";
import logotype from "../assets/logotype.svg";
import humanIcon from "../assets/human.svg"; 

const initialFormValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [showPassword, setShowPassword] = useState(false);
  
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
      <main
        className="flex min-h-screen items-start relative bg-[#f7fbf2]"
        data-m3-mode="green-LT"
        data-shape-mode="baseline"
      >
        <section
          className="flex flex-col w-[640px] items-start gap-10 p-16 relative self-stretch bg-lightgreen-alightgreen"
          aria-labelledby="brand-heading"
        >
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <img
              className="relative w-[130px] h-auto"
              alt="Tether"
              src={logotype}
            />
          </div>
          <h1 className="relative self-stretch font-m3-headline-large text-[32px] font-normal text-lightgreen-adarkgreen">
            Здоровые привычки — в одном ритме с вами
          </h1>
          <p className="relative self-stretch font-inter text-[18px] font-normal text-lightgreen-adarkgreen tracking-[0] leading-[26.1px]">
            Питание, вода, тренировки и вес собираются в понятную картину каждого
            дня.
          </p>
        </section>
        <section
          className="min-h-[960px] items-center justify-center flex-1 grow flex flex-col p-10 relative"
          aria-labelledby="login-heading"
        >
          <div className="w-[480px] items-start gap-8 flex-[0_0_auto] bg-[#f1f5ec] rounded-[var(--shape-corner-large)] overflow-hidden flex flex-col p-10 relative">
            <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h2
                id="login-heading"
                className="relative self-stretch font-m3-headline-large text-[32px] font-normal text-m3-schemes-on-surface-duplicate"
              >
                С возвращением
              </h2>
              <p className="relative self-stretch font-inter text-[15px] font-normal text-m3-schemes-on-surface-variant-duplicate tracking-[0] leading-[21.8px]">
                Войдите, чтобы продолжить заботиться о себе
              </p>
            </header>
            <form
              className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col h-14 items-start relative self-stretch w-full rounded-[4px_4px_0px_0px]">
                <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow bg-[#e0e4db] rounded-[4px_4px_0px_0px]">
                  <div className="flex items-start gap-1 px-4 py-1 relative flex-1 self-stretch w-full grow rounded-[4px_4px_0px_0px]">
                    <div className="flex flex-col h-12 items-start justify-center px-0 py-1 relative flex-1 grow">
                      <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <label
                          htmlFor="email-desktop"
                          className="relative flex-1 mt-[-1.00px] font-m3-body-small text-[#424940]"
                        >
                          Электронная почта
                        </label>
                      </div>
                      <input
                        id="email-desktop"
                        name="email"
                        className="relative self-stretch w-full border-[none] [background:none] mt-[-1.00px] font-m3-body-large text-[#181d18] p-0"
                        placeholder="username@email.com"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt=""
                  src={activeIndicator}
                />
              </div>
              <div className="flex flex-col h-14 items-start relative self-stretch w-full rounded-[4px_4px_0px_0px]">
                <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow bg-[#e0e4db] rounded-[4px_4px_0px_0px]">
                  <div className="items-start gap-1 pl-4 pr-0 py-1 flex-1 grow rounded-[4px_4px_0px_0px] flex relative self-stretch w-full">
                    <div className="flex flex-col h-12 items-start justify-center px-0 py-1 relative flex-1 grow">
                      <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <label
                          htmlFor="password-desktop"
                          className="relative w-fit mt-[-1.00px] font-m3-body-small text-[#424940] whitespace-nowrap"
                        >
                          Пароль
                        </label>
                      </div>
                      <input
                        id="password-desktop"
                        name="password"
                        className="relative self-stretch w-full border-[none] [background:none] mt-[-1.00px] font-m3-body-large text-[#181d18] p-0"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                        value={formValues.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                      />
                    </div>
                    <div className="flex w-12 h-12 items-center justify-center relative">
                      <div className="w-10 flex flex-col items-center justify-center relative rounded-[100px] overflow-hidden">
                        <button
                          className="h-10 items-center justify-center flex relative self-stretch w-full"
                          type="button"
                          aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                          aria-pressed={showPassword}
                          onClick={() => setShowPassword((visible) => !visible)}
                        >
                          <Icon className="!relative !w-6 !h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt=""
                  src={image}
                />
              </div>
              <div className="flex h-12 items-center justify-center relative self-stretch w-full">
                <button
                  className="flex-1 grow bg-lightgreen-adarkorange flex flex-col items-center justify-center relative rounded-[100px] overflow-hidden"
                  type="submit"
                >
                  <span className="items-center justify-center gap-2 px-4 py-2.5 flex-[0_0_auto] flex relative self-stretch w-full">
                    <span className="relative flex items-center w-fit mt-[-1.00px] font-m3-label-large text-white whitespace-nowrap">
                      Войти
                    </span>
                  </span>
                </button>
              </div>
              <a
                className="relative self-stretch font-inter font-semibold text-lightgreen-adarkgreen text-sm text-center tracking-[0] leading-[normal]"
                href="/register"
              >
                Зарегистрироваться
              </a>
            </form>
            <a
              className="relative self-stretch font-inter font-normal text-lightgreen-adarkgreen text-sm text-center tracking-[0] leading-[normal]"
              href="/forgot-password"
            >
              Забыли пароль?
            </a>
          </div>
        </section>
      </main>
    );
  }

    return (
    <div className="w-full min-h-screen bg-[#f7fbf2] flex items-center justify-center">
      <div className="w-full max-w-md min-h-screen bg-[#f7fbf2] flex flex-col overflow-hidden relative">
        
        <div className="self-stretch flex-1 flex flex-col justify-start items-start overflow-hidden">
          
          <div className="self-stretch px-6 pt-16 flex flex-col justify-start items-center gap-11 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center gap-3 overflow-hidden">
              <div className="flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-16 h-16 bg-lightgreen-alightgreen rounded-2xl inline-flex justify-center items-center overflow-hidden">
                  <img src={humanIcon} alt="Tether" className="w-8 h-8" />
                </div>
                <div className="justify-start text-[#181d18] text-3xl font-normal font-roboto leading-10">Tether</div>
              </div>
              <div className="justify-start text-gray-500 text-sm font-normal font-inter">Умный трекер питания и здоровья</div>
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
              <div className="self-stretch h-14 rounded-t-md flex flex-col justify-start items-start">
                <div className="self-stretch flex-1 bg-[#e0e4db] rounded-t-md flex flex-col justify-start items-start">
                  <div className="self-stretch flex-1 px-4 py-1 rounded-t-md inline-flex justify-start items-start">
                    <div className="flex-1 h-12 py-1 inline-flex flex-col justify-center items-start">
                      <div className="self-stretch inline-flex justify-start items-center">
                        <div className="flex-1 justify-start text-gray-500 text-[11px] font-normal font-roboto tracking-wide">Электронная почта</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-center">
                        <input
                          type="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                          placeholder="username@email.com"
                          className="w-full bg-transparent text-[#181d18] text-base font-normal font-roboto leading-6 tracking-wide outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-gray-400" />
              </div>
              
              <div className="self-stretch h-14 rounded-t-md flex flex-col justify-start items-start">
                <div className="self-stretch flex-1 bg-[#e0e4db] rounded-t-md flex flex-col justify-start items-start">
                  <div className="self-stretch flex-1 pl-4 py-1 rounded-t-md inline-flex justify-start items-start">
                    <div className="flex-1 h-12 py-1 inline-flex flex-col justify-center items-start">
                      <div className="w-8 inline-flex justify-start items-center">
                        <div className="justify-start text-gray-500 text-[11px] font-normal font-roboto tracking-wide">Пароль</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-center">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formValues.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="w-full bg-transparent text-[#181d18] text-base font-normal font-roboto leading-6 tracking-wide outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center">
                      <button
                        className="w-10 h-10 rounded-full inline-flex flex-col justify-center items-center overflow-hidden"
                        type="button"
                        onClick={() => setShowPassword((visible) => !visible)}
                      >
                        <Icon className="!relative !w-6 !h-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-gray-400" />
              </div>
              
              <div className="self-stretch h-12 inline-flex justify-center items-center mt-2">
                <button
                  className="flex-1 h-full bg-lightgreen-adarkorange rounded-[100px] inline-flex flex-col justify-center items-center overflow-hidden"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <div className="self-stretch px-4 py-2.5 inline-flex justify-center items-center gap-2">
                    <div className="justify-center text-white text-sm font-medium font-roboto leading-5 tracking-tight">Войти</div>
                  </div>
                </button>
              </div>
              
              <a href="/register" className="self-stretch text-center justify-start text-lightgreen-adarkgreen text-sm font-semibold font-inter mt-2">
                Зарегистрироваться
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;