import { useMemo } from 'react';
import Matrix from './Matrix';
import { DashboardData } from '../../types/portfolio';

const Dashboard = ({
  stats,
  celkovyZisk,
  ziskProcento,
  watchlist,
  matrixData,
  hovered,
  setHovered,
  chart
}: DashboardData) => {
  const activeAsset = chart.find(a => a.symbol === hovered);

  const processedMatrixData = useMemo(() => {
    if (!matrixData || matrixData.length === 0) return [];

    const mainAssets = matrixData.filter(a => a.percentage >= 5);
    const lowExposureAssets = matrixData.filter(a => a.percentage < 5);

    if (lowExposureAssets.length === 0) {
      return [...mainAssets].sort((a, b) => b.percentage - a.percentage);
    }

    const combinedPercentage = lowExposureAssets.reduce((sum, a) => sum + a.percentage, 0);

    const finalData = [
      ...mainAssets,
      { symbol: '+', percentage: combinedPercentage }
    ];

    return finalData.sort((a, b) => b.percentage - a.percentage);
  }, [matrixData]);

  return (
    <div className="col-span-full grid grid-cols-1 lg:grid-cols-4 border-2 border-black bg-black gap-0.5 mb-12">
      
      {/* LEVÝ PANEL */}
      <div className="p-8 flex flex-col justify-center bg-white">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-2">
          Portfolio Capital
        </div>
        <div className="text-6xl font-black text-black tracking-tighter leading-none mb-4">
          ${stats.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-2 py-1 text-[10px] font-black text-white uppercase bg-black`}>
            {celkovyZisk >= 0 ? 'Profit' : 'Loss'}
          </div>
          <div className="text-sm font-black text-black uppercase tracking-widest">
            {celkovyZisk !== 0 && `${celkovyZisk > 0 ? '▲' : '▼'} ${ziskProcento.toFixed(2)}%`}
          </div>
        </div>
      </div>
        
      {/* PRAVÝ PANEL: MATRIX */}
      <div className="lg:col-span-3 flex flex-col bg-black gap-0.5">
        <div className="flex-1 bg-white">
          {watchlist.length > 0 ? (
            /* FIX: Místo surových matrixData posíláme do mřížky zpracovaná a sloučená data */
            <Matrix assets={processedMatrixData} onHoverChange={setHovered} />
          ) : (
            <div className="h-full flex items-center justify-center p-20 text-black/20 font-black uppercase tracking-widest">
              No Data for Matrix
            </div>
          )}
        </div>

        {/* LEGENDA POD MATRIXEM */}
        <div className="py-4 pl-4 font-mono text-[12px] uppercase tracking-[0.2em] text-black bg-white border-t border-black/10">
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="opacity-50 text-[10px] mb-1">Active Asset</span>
              <span className="font-bold">
                {hovered ? (
                  hovered === '+' ? (
                    <span className="text-red-600">
                      Diversified Others: {chart.filter(a => a.percentage < 5).map(a => `${a.symbol} (${a.percentage.toFixed(1)}%)`).join(', ')}
                    </span>
                  ) : hovered
                ) : '\u00A0'}
              </span>
            </div>

            {hovered && hovered !== '+' && activeAsset && (
              <>
                <div className="flex flex-col">
                  <span className="opacity-50 text-[10px] mb-1">Price</span>
                  <span className="font-bold">${activeAsset.price.toFixed(2)}</span>
                </div>

                <div className="flex flex-col">
                  <span className="opacity-50 text-[10px] mb-1">Position Value</span>
                  <span className="font-bold">${(activeAsset.price * (watchlist.find(a => a.symbol === hovered)?.shares || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex flex-col">
                  <span className="opacity-50 text-[10px] mb-1">Day Delta</span>
                  <span className="font-bold">{activeAsset.delta.toFixed(2)}%</span>
                </div>
                <div className="flex flex-col">
                  <span className="opacity-50 text-[10px] mb-1">Profit</span>
                  <span className="font-bold">{activeAsset.yield.toFixed(2)}%</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;