export const Poster = () => {
  const text = "ASSET MANAGEMENT SYSTEM";
  const letters = text.split("");

  // Definice řad - od totálního chaosu k řádu
  const rows = [
    { gap: "6vw", opacity: 0.1, scale: 1.1, blur: "2px" },
    { gap: "5vw", opacity: 0.2, scale: 1.05, blur: "1px" },
    { gap: "4.5vw", opacity: 0.3, scale: 1, blur: "0px" },
    { gap: "3.5vw", opacity: 0.5, scale: 1, blur: "0px" },
    { gap: "2vw", opacity: 0.7, scale: 1, blur: "0px" },
    { gap: "1vw", opacity: 0.9, scale: 1, blur: "0px" },
    { gap: "0.2vw", opacity: 1, scale: 1, blur: "0px" },
    { gap: "0.05vw", opacity: 1, scale: 1, blur: "0px" },
  ];

  return (
    <section className="h-screen w-full bg-black text-white flex flex-col justify-center items-center overflow-hidden select-none p-4">
      <div className="flex flex-col items-center w-full space-y-[1.5vh]">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex}
            className="flex justify-center w-full transition-all duration-1000 ease-in-out"
            style={{ 
              opacity: row.opacity,
              filter: `blur(${row.blur})`,
              transform: `scale(${row.scale})`
            }}
          >
            {letters.map((char, charIndex) => (
              <span 
                key={charIndex}
                className="font-black uppercase italic leading-none inline-block text-[2.5vw]"
                style={{ 
                  // Každé písmeno má svůj vlastní prostor
                  margin: `0 ${row.gap}`,
                  // Drobná asymetrie pro pocit "ruční" sazby
                  transform: rowIndex < 3 ? `translateY(${(charIndex % 2) * 5}px)` : 'none'
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Technická signatura v duchu Fronzoniho plakátů */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-baseline border-t border-white/10 pt-4">
        <div className="font-mono text-[7px] tracking-[0.5em] uppercase opacity-40">
          A.G. Fronzoni / AMS Context / 2026
        </div>
        <div className="font-mono text-[14px] font-black italic tracking-tighter">
          SHEET_00
        </div>
      </div>
    </section>
  );
};