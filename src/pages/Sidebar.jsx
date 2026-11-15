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
      className={`self-stretch bg-lightgreen-alightgreen inline-flex flex-col justify-start items-start overflow-hidden transition-all duration-300 ease-in-out shrink-0 ${
        isOpen ? 'w-56 px-5' : 'w-16 px-2'
      }`}
    >
      <div className="self-stretch h-28 relative flex items-center">
        <button
          type="button"
          onClick={onToggle}
          aria-label={isOpen ? 'Скрыть меню' : 'Показать меню'}
          className="w-12 h-12 flex justify-center items-center rounded-2xl text-lightgreen-adarkgreen hover:bg-black/5 transition-colors"
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

      <div className="self-stretch flex flex-col justify-start items-start gap-3 mt-4">
        <nav className="self-stretch flex flex-col justify-start items-start overflow-hidden w-full">
          {menuItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              title={!isOpen ? label : undefined}
              className={({ isActive }) =>
                `self-stretch h-10 inline-flex items-center overflow-hidden text-lightgreen-adarkgreen text-sm hover:bg-black/5 rounded-lg transition-all duration-300 ${
                  isActive ? 'font-medium bg-black/5' : 'font-normal'
                } ${isOpen ? 'justify-start px-3' : 'justify-center px-0'}`
              }
            >
              {isOpen ? (
                <span className="truncate">{label}</span>
              ) : (
                <span className="font-semibold">{label.charAt(0)}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}