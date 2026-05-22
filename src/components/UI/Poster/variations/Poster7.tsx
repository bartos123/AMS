export const Poster = () => {
  const text = "ASSET MANAGEMENT SYSTEM";
  const letters = text.split("");
  
  // Vytvoříme 16 řádků
  const rowCount = 16;
  const rows = Array.from({ length: rowCount }, (_, i) => {
    // Výpočet pro gradaci (0 = úplně dole, 15 = úplně nahoře)
    // Používáme mocninu, aby se rozestup nahoře zvětšoval agresivněji
    const factor = (rowCount - 1 - i) / (rowCount - 1); 
    const spread = Math.pow(factor, 2.5) * 12; // 12vw je maximální rozptyl nahoře

    return {
      gap: `${spread}vw`,
      opacity: 1 - factor * 0.9, // Dole 100%, nahoře jen 10%
      fontSize: `${1.5 + (1 - factor) * 1.5}vw`, // Dole větší, nahoře menší a křehčí
    };
  });

  return (
    <section className="h-screen w-full bg-black text-white flex flex-col justify-end items-center overflow-hidden select-none p-0">
      
      {/* HLAVNÍ MATRICE (Pyramida) */}
      <div className="w-full flex flex-col items-center space-y-[-0.5vh] mb-[10vh]">
        {rows.map((row, idx) => (
          <div 
            key={idx}
            className="flex justify-center w-full transition-all duration-1000"
            style={{ opacity: row.opacity }}
          >
            {letters.map((char, charIdx) => (
              <span 
                key={charIdx}
                className="font-black uppercase italic leading-none inline-block whitespace-pre"
                style={{ 
                  margin: `0 ${row.gap}`,
                  fontSize: row.fontSize,
                  // Horní řádky se mírně rozostřují
                  filter: idx < 5 ? `blur(${5 - idx}px)` : 'none'
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* FRONZONIHO PATIČKA - Pevná linka, na které celá pyramida stojí */}
      <div className="w-full px-12 pb-12 flex justify-between items-baseline border-t-2 border-white pt-6 relative z-50 bg-black">
        <div className="font-mono text-[9px] tracking-[0.6em] uppercase font-bold">
          A.G. Fronzoni / Studio_Case / Milano_1979_2026
        </div>
        <div className="text-4xl font-black italic tracking-tighter">
          AMS_V2
        </div>
      </div>

      {/* DEKORATIVNÍ PRVEK - Vertikální osa protnutí */}
    </section>
  );
};