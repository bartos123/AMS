import { ViewID, NavProps } from '../../types/portfolio';

export const MainNavigation = ({ activeView, onViewChange }: NavProps) => (
  <nav className=" p-4 md:p-8 flex flex-col md:flex-row justify-between items-end md:items-start z-[100] pointer-events-none">
    <div className="hidden md:block" />

    <div className="grid grid-cols-3 bg-black gap-[1px] border-[1px] border-black w-full md:w-auto pointer-events-auto">
      {(['DASHBOARD', 'PORTFOLIO', 'INTEL'] as ViewID[]).map((id) => (
        <button
          key={id}
          onClick={() => onViewChange(id)}
          style={{
            fontSize: 'clamp(10px, 0.6vw, 26px)',
            paddingTop: 'clamp(8px, 0.4vw, 18px)',
            paddingBottom: 'clamp(8px, 0.4vw, 18px)',
            paddingLeft: 'clamp(16px, 2vw, 48px)',
            paddingRight: 'clamp(16px, 2vw, 48px)',
          }}
          className={`
            font-black uppercase transition-all tracking-[0.2em] relative
            ${activeView === id ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'}
          `}
        >
          <span style={{ marginRight: '-0.2em' }}>
            {id === 'INTEL' ? 'NEWS' : id}
          </span>
        </button>
      ))}
    </div>
  </nav>
);