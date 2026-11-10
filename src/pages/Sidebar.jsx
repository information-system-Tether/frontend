import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/home', label: 'Главная' },
  { to: '/food-diary', label: 'Дневник питания' },
  { to: '/workouts', label: 'Тренировки' },
  { to: '/water', label: 'Вода' },
  { to: '/weight', label: 'Вес' },
  { to: '/profile', label: 'Профиль' },
];

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <div
      className={`self-stretch max-w-96 min-w-56 px-5 pt-4 pb-5 bg-lightgreen-alightgreen inline-flex flex-col justify-start items-start overflow-hidden transition-all duration-200 ${
        isOpen ? 'w-56' : 'w-16'
      }`}
    >
      <div className="self-stretch h-28 relative">
        <button
          type="button"
          onClick={onToggle}
          aria-label={isOpen ? 'Скрыть меню' : 'Показать меню'}
          className="size-14 left-0 top-0 absolute inline-flex justify-center items-center rounded-2xl text-lightgreen-adarkgreen hover:bg-black/5"
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
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <nav className="self-stretch flex flex-col justify-start items-start overflow-hidden">
          {menuItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              title={!isOpen ? label : undefined}
              className={({ isActive }) =>
                `self-stretch h-10 inline-flex justify-start items-center overflow-hidden text-lightgreen-adarkgreen text-sm font-['Inter'] hover:bg-black/5 rounded-lg ${
                  isActive ? 'font-medium' : 'font-normal'
                } ${isOpen ? 'pl-5' : 'justify-center px-0'}`
              }
            >
              {isOpen ? label : label.charAt(0)}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}