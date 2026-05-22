import { useState, useMemo } from 'react';
import { StockItem, NewsItem } from '../../types/portfolio';



export const NewsFeed = ({ news, watchlist = [] }: { news: NewsItem[], watchlist?: StockItem[] }) => {
  const [filter, setFilter] = useState<string | null>(null);

  // Filtrování zpráv podle vybraného assetu
const filteredNews = useMemo(() => {
  if (!filter) return news;

  return news.filter(n => {
    // 1. Priorita: Přesná shoda tagu (nejspolehlivější)
    if (n.relatedSymbol === filter) return true;

    // 2. Sekundární: Hledání v nadpisu, ale POUZE jako celé slovo
    // To zabrání tomu, aby "W" matchovalo "Why", "Went" nebo "WDC"
    const regex = new RegExp(`\\b${filter}\\b`, 'i');
    return regex.test(n.headline);
  });
}, [news, filter]);

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      
      {/* 1. ASSET FILTER BAR - Brutalistický navigátor */}
      <div className="flex overflow-x-auto no-scrollbar border-b-2 border-black bg-white sticky top-0 z-20">
        <button 
          onClick={() => setFilter(null)}
          className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] border-r-2 border-black transition-colors ${!filter ? 'bg-black text-white' : 'hover:bg-zinc-100'}`}
        >
          ALL_INTEL
        </button>
        
        {watchlist.map(item => (
          <button
            key={item.symbol}
            onClick={() => setFilter(filter === item.symbol ? null : item.symbol)}
            className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] border-r-2 border-black transition-colors shrink-0 ${filter === item.symbol ? 'bg-black text-white' : 'hover:bg-zinc-100'}`}
          >
            ${item.symbol}
          </button>
        ))}
      </div>

      {/* 2. NEWS STREAM */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {filteredNews.length === 0 ? (
          <div className="p-20 text-center italic opacity-20 uppercase font-black tracking-widest text-2xl">
            — No_specific_intel_found —
          </div>
        ) : (
          <div className="divide-y-2 divide-black border-b-2 border-black">
            {filteredNews.map((n) => (
              <a 
                key={n.id} 
                href={n.url} 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white hover:bg-black group transition-all duration-200"
              >
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-4">
                    {/* ASSET TAG - Teď hned vím, k čemu zpráva patří */}
                    {n.relatedSymbol && (
                      <span className="bg-black text-white px-2 py-0.5 text-[9px] font-black group-hover:bg-white group-hover:text-black transition-colors uppercase">
                        ${n.relatedSymbol}
                      </span>
                    )}
                    
                    <span className="font-mono text-[9px] font-bold text-black/40 group-hover:text-white/40 uppercase tracking-[0.2em]">
                      {n.source}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-black/20 group-hover:text-white/20 uppercase tabular-nums">
                      {new Date(n.datetime * 1000).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter group-hover:text-white leading-[0.85] max-w-5xl">
                    {n.headline}
                  </h4>
                </div>
                
                <div className="flex items-center mt-6 md:mt-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity whitespace-nowrap">
                    READ_FULL_STORY [+]
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* 3. FOOTER INFO */}
        <div className="p-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-10">
            End of Intelligence Stream // {filteredNews.length} Reports
          </p>
        </div>
      </div>
    </div>
  );
};