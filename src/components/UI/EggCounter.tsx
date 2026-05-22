interface EggProps {
  eggs: number;
  setEggs: (val: number) => void;
  onClose: () => void;
}

export const EggProtocol = ({ eggs, setEggs, onClose }: EggProps) => {
  const updateEggs = (delta: number) => {
    const next = Math.max(0, eggs + delta);
    setEggs(next);
    localStorage.setItem('eggs', next.toString());
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
      {/* Brutalistický box s tvrdým stínem */}
      <div className="bg-white border-4 border-black p-8 md:p-12 max-w-sm w-full text-center relative shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 font-black hover:scale-125 transition-transform"
        >
          [X]
        </button>

        <div className="text-8xl mb-6">🥚</div>
        <h2 className="text-3xl font-black uppercase italic mb-2 tracking-tighter">Egg_Protocol</h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-12">Authorized_Personnel_Only</p>
        
        <div className="text-7xl font-black mb-12 tracking-tighter">{eggs}</div>
        
        <div className="flex bg-black gap-0.5 border-2 border-black">
          <button 
            onClick={() => updateEggs(1)}
            className="flex-1 bg-white py-6 font-black text-xs uppercase hover:bg-black hover:text-white transition-colors"
          >
            Add_Unit
          </button>
          <button 
            onClick={() => updateEggs(-1)}
            className="px-10 bg-white py-6 font-black text-xl hover:bg-black hover:text-white transition-colors"
          >
            -
          </button>
        </div>

        <p className="mt-8 text-[9px] text-black/30 uppercase font-bold italic tracking-tighter">
          Tento čítač je přísně tajný a slouží k evidenci systémových vajec.
        </p>
      </div>
    </div>
  );
};