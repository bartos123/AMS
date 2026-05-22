export const Poster = () => {
  // Snížili jsme maximální tracking z 8vw na 4vw, aby se text vešel na plochu
  const lines = [
    { tracking: '4vw', opacity: 0.1 },
    { tracking: '3.5vw', opacity: 0.2 },
    { tracking: '3vw', opacity: 0.3 },
    { tracking: '2.5vw', opacity: 0.4 },
    { tracking: '2vw', opacity: 0.5 },
    { tracking: '1.5vw', opacity: 0.7 },
    { tracking: '1vw', opacity: 0.8 },
    { tracking: '0.5vw', opacity: 1 },
    { tracking: '0.1vw', opacity: 1 },
    { tracking: '0vw', opacity: 1 },
  ];

  return (
    <section className="h-screen w-full bg-black text-white flex flex-col justify-center overflow-hidden select-none">
      <div className="w-full flex flex-col items-center space-y-[2.5vh]">
        {lines.map((line, idx) => (
          <div 
            key={idx}
            className="w-full flex justify-center whitespace-nowrap font-black uppercase italic leading-none transition-all duration-1000"
            style={{ 
              // Důležité: letter-spacing aplikujeme tak, aby text zůstal vycentrovaný
              letterSpacing: line.tracking,
              opacity: line.opacity,
              fontSize: '2.2vw', // O něco menší písmo pro delší text
              paddingLeft: line.tracking // Kompenzace posledního písmene pro dokonalý střed
            }}
          >
            Asset Management System
          </div>
        ))}
      </div>

      {/* Patička jako u Fronzoniho - Arte e Scienza 1979 */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end border-t border-white/5 pt-4">
        <div className="font-mono text-[8px] tracking-[0.4em] uppercase opacity-40">
          A.G. Fronzoni / AMS_2026 / Milano
        </div>
        <div className="font-mono text-[8px] tracking-[0.4em] uppercase opacity-20">
          Sheet_00_Identity
        </div>
      </div>
    </section>
  );
};