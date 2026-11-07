import { useState } from "react";
import activeIndicator from "../assets/active-indicator.svg";
import { Icon } from "../assets/Icon";
import image from "../assets/image.svg";
import logotype from "../assets/logotype.svg";

const initialFormValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [showPassword, setShowPassword] = useState(false);

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
                        htmlFor="email"
                        className="relative flex-1 mt-[-1.00px] font-m3-body-small text-[#424940]"
                      >
                        Электронная почта
                      </label>
                    </div>
                    <input
                      id="email"
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
                        htmlFor="password"
                        className="relative w-fit mt-[-1.00px] font-m3-body-small text-[#424940] whitespace-nowrap"
                      >
                        Пароль
                      </label>
                    </div>
                    <input
                      id="password"
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
                        aria-label={
                          showPassword ? "Скрыть пароль" : "Показать пароль"
                        }
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
};

export default LoginPage;