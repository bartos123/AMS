import { DigitalClock } from "../../Clock";

export const Poster = ({ isMarketOpen }: any) => (
  <section className="h-screen w-full flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-1000 select-none overflow-hidden">
    
    {/* VRCHNÍ ČÁST: Čistý prostor a čas jako souřadnice */}
    <div className="flex justify-between items-start">
      <div className="font-mono text-[9px] font-bold tracking-widest text-right">
        <DigitalClock />
      </div>
    </div>

    {/* STŘED: FRONZONIHO GRAFICKÝ KONSTRUKT */}
    <div className="relative flex-1 flex items-center justify-center">
      {/* Vertikální 1px linka - dělí obraz na "před" a "po" */}
      
      <div className="w-full relative z-10">
        <h1 className="text-[16vw] font-black uppercase italic leading-[0.7] tracking-[-0.06em]">
          <span className="block -translate-x-4">Asset</span>
          <span className="block text-right translate-x-8">Management</span>
          <span className="block translate-x-[-10vw]">System</span>
        </h1>
      </div>
    </div>

    {/* SPODNÍ ČÁST: Status jako geometrický kód */}
    <div className="flex justify-between items-end">
      <div className="font-mono text-[9px] uppercase tracking-[0.5em] opacity-20 max-w-[200px]">
        Design_Inquiry_001 / <br /> Reduction_of_Meaning
      </div>
      
      <div className="flex items-center gap-8">
        <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em]">
          {isMarketOpen ? 'Market_Active' : 'Market_Suspended'}
        </span>
        {/* Místo tečky použijeme velký černý čtverec nebo prázdný rám */}
        <div className={`w-12 h-12 transition-all duration-1000 ${isMarketOpen ? 'bg-black' : 'border-4 border-black'}`} />
      </div>
    </div>
    
  </section>
);