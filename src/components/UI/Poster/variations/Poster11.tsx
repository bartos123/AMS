import { DigitalClock } from "../../Clock";

export const Poster = ({ isMarketOpen }: any) => {
  // Definujeme text, který budeme opakovat
  const text = "asset management system";

  return (
    <section className="h-screen w-full bg-black text-white p-0 flex flex-col justify-between overflow-hidden animate-in fade-in duration-1000 select-none">
      
      {/* HLAVNÍ PLOCHA S RYTMEM */}
      <div className="flex-1 flex flex-col justify-start pt-12 px-8">
        
        {/* Horní řady: Extrémně roztažené, tvořící texturu */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="w-full flex justify-between uppercase font-black text-[2vw] opacity-100 leading-none mb-[4vh]"
            style={{ letterSpacing: '2vw' }}
          >
            {text.split('').map((char, idx) => (
              <span key={idx} className={char === ' ' ? 'w-[2vw]' : ''}>{char}</span>
            ))}
          </div>
        ))}

        {/* Spodní řady: Postupné utahování a centrování (jako na plakátu) */}
        <div className="mt-auto mb-20 flex flex-col items-center gap-4">
          <div className="uppercase font-black text-[3vw] tracking-[1.5vw] opacity-100">
            asset management system
          </div>
          <div className="uppercase font-black text-[4vw] tracking-[0.5vw] opacity-100">
            asset management system
          </div>
          <div className="uppercase font-black text-[5vw] tracking-normal leading-none">
            asset management system
          </div>
        </div>
      </div>

      {/* FOOTER: Čistá linka (Fronzoniho "Fine Print") */}
      <div className="w-full border-t border-white/20 p-4 flex justify-between items-center font-mono text-[9px] tracking-[0.3em] uppercase">
        <div className="flex gap-8">
          <span>A.G. Fronzoni / Studio Case</span>
          <span className="opacity-40">AMS_System_Identity_Ref_1979_2026</span>
        </div>
        
        <div className="flex gap-12 items-center">
          <div className="flex items-center gap-3">
             <div className={`w-2 h-2 ${isMarketOpen ? 'bg-white' : 'border border-white/50'}`} />
             <span>{isMarketOpen ? 'Market_Open' : 'Market_Closed'}</span>
          </div>
          <DigitalClock />
        </div>
      </div>

    </section>
  );
};