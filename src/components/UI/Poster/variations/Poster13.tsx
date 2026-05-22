import { DigitalClock } from "../../Clock";

  export const Poster = ({isMarketOpen, watchlistCount }: any) => (
    <section className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 animate-in fade-in zoom-in-95 duration-700">
      <h1 className="text-[12vw] font-black uppercase italic leading-[0.8] tracking-tighter select-none">
        Asset<br />Management<br />System
      </h1>
      <div className="mt-12 flex justify-between items-end border-t-2 border-black pt-4">
        <div className="max-w-md font-mono text-[10px] uppercase leading-relaxed opacity-40">
          BUILD: Verze 2.0 <br />
          {watchlistCount} aktiv v evidenci
        </div>
        <div className="text-right font-mono text-xs font-bold uppercase">
          <DigitalClock />{isMarketOpen ? 'Live Market' : 'Market Closed'}
        </div>
      </div>
    </section>
  );