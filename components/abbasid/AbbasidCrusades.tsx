import React, { useState, useRef, useEffect } from 'react';
import { Shield, Map, Play, RefreshCw, FileText, Flame, Droplets } from 'lucide-react';

const AbbasidCrusades: React.FC = () => {
  // State for UI
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  // State for Simulation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const requestRef = useRef<number>();
  const mapImageRef = useRef<HTMLImageElement | null>(null);

  // ==========================================
  // Game Logic (Battle of Hattin Engine)
  // ==========================================
  const gameState = useRef({
      state: 'WAITING', 
      timer: 0,
      // جيش صلاح الدين (السهم الأخضر)
      muslims: { x: 400, y: 600, color: '#15803d', label: 'جيش صلاح الدين', speed: 2.5, size: 20, emoji: '🦅', health: 100 },
      // جيش الصليبيين (السهم الأحمر)
      crusaders: { x: 100, y: 320, color: '#b91c1c', label: 'الجيش الصليبي', speed: 1.5, size: 20, emoji: '🛡️', health: 100 },
      // موقع المعركة (قرون حطين)
      battlePoint: { x: 300, y: 320 } 
  });

  useEffect(() => {
      const img = new Image();
      img.src = '/map_hattin.png'; // الصورة الموجودة في public
      img.onload = () => {
          mapImageRef.current = img;
          setMapLoaded(true);
          draw();
      };
      return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, []);

  const animate = () => {
      update();
      draw();
      if (gameState.current.state !== 'ENDED_STOP') requestRef.current = requestAnimationFrame(animate);
  };

  const update = () => {
      const state = gameState.current;
      const { muslims, crusaders, battlePoint } = state;

      if (state.state === 'APPROACH') {
          moveTowards(muslims, battlePoint, muslims.speed);
          moveTowards(crusaders, battlePoint, crusaders.speed);
          
          if (getDistance(muslims, battlePoint) < 30 && getDistance(crusaders, battlePoint) < 60) {
              state.state = 'FIGHTING';
          }
      } else if (state.state === 'FIGHTING') {
          state.timer++;
          // تطويق
          muslims.x = battlePoint.x + Math.cos(state.timer * 0.1) * 25;
          muslims.y = battlePoint.y + Math.sin(state.timer * 0.1) * 25;
          crusaders.x = battlePoint.x + (Math.random() - 0.5) * 5;
          crusaders.y = battlePoint.y + (Math.random() - 0.5) * 5;

          if (state.timer % 3 === 0) crusaders.health -= 2; // ينهارون بسرعة
          if (state.timer % 20 === 0) muslims.health -= 0.5;

          if (crusaders.health <= 0) state.state = 'VICTORY';
      }
  };

  const moveTowards = (e: any, t: any, s: number) => {
      const dx = t.x - e.x; const dy = t.y - e.y;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist > 5) { e.x += Math.cos(angle) * s; e.y += Math.sin(angle) * s; }
  };

  const getDistance = (e1: any, e2: any) => Math.sqrt(Math.pow(e1.x-e2.x, 2) + Math.pow(e1.y-e2.y, 2));

  const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas || !canvas.getContext('2d')) return;
      const ctx = canvas.getContext('2d')!;
      const state = gameState.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mapImageRef.current) {
          // رسم الخريطة لتناسب الكانفاس (contain)
          ctx.drawImage(mapImageRef.current, 0, 0, canvas.width, canvas.height);
      } else {
          ctx.fillStyle = '#f1f5f9'; ctx.fillRect(0,0, canvas.width, canvas.height);
      }

      const drawEntity = (e: any) => {
          if (e.health <= 0 && state.state !== 'VICTORY') return;
          
          // Health Bar
          if (state.state === 'FIGHTING') {
              ctx.fillStyle = "red"; ctx.fillRect(e.x - 15, e.y - 30, 30, 4);
              ctx.fillStyle = "#22c55e"; ctx.fillRect(e.x - 15, e.y - 30, 30 * (e.health / 100), 4);
          }

          ctx.shadowColor = 'rgba(0,0,0,0.3)'; ctx.shadowBlur = 5;
          ctx.fillStyle = e.color; ctx.beginPath(); ctx.arc(e.x, e.y, e.size, 0, Math.PI*2); ctx.fill();
          ctx.shadowBlur = 0;
          ctx.font = `${e.size}px Arial`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(e.emoji, e.x, e.y);
      };

      if (state.crusaders.health > 0) drawEntity(state.crusaders);
      drawEntity(state.muslims);

      if (state.state === 'FIGHTING') {
          ctx.font = "24px Arial"; ctx.fillText("🔥", state.battlePoint.x, state.battlePoint.y - 20);
      }

      if (state.state === 'VICTORY') {
          ctx.fillStyle = "rgba(20, 83, 45, 0.9)"; ctx.fillRect(0,0, canvas.width, canvas.height);
          ctx.fillStyle = "#fff"; ctx.font = "bold 30px Tajawal"; ctx.textAlign = "center"; 
          ctx.fillText("انتصر المسلمون!", canvas.width/2, canvas.height/2);
          if (requestRef.current) cancelAnimationFrame(requestRef.current);
          setIsSimulating(false);
          state.state = 'ENDED_STOP';
      }
  };

  const handleStart = () => {
      if (!mapLoaded) return;
      gameState.current.state = 'APPROACH';
      gameState.current.muslims.x = 400; gameState.current.muslims.y = 600; gameState.current.muslims.health = 100;
      gameState.current.crusaders.x = 100; gameState.current.crusaders.y = 320; gameState.current.crusaders.health = 100;
      gameState.current.timer = 0;
      setIsSimulating(true);
      animate();
  };

  return (
    <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
        
        {/* مقدمة الدرس */}
        <div className="bg-red-50 border-r-4 border-red-600 p-6 rounded-2xl shadow-sm">
             <h3 className="text-xl font-black text-red-900 mb-2 flex items-center gap-2">
                 <Shield className="fill-red-900/20" /> الحملات الصليبية ومعركة حطين (الشكل 3)
             </h3>
             <p className="text-red-800 leading-relaxed font-medium text-sm">
                 استمرت الحملات الصليبية فترة طويلة بهدف السيطرة على الأراضي المقدسة. 
                 بذل المسلمون جهوداً كبيرة بقيادة <strong>صلاح الدين الأيوبي</strong> وتوجت بانتصار <strong>حطين (583هـ)</strong> وتحرير القدس.
             </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            
            {/* المحاكاة (Canvas) */}
            <div className="bg-white p-2 rounded-[2rem] shadow-xl border border-slate-200 relative overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-slate-100">
                    <h4 className="font-bold text-slate-700 flex items-center gap-2 text-sm">
                        <Map size={16} className="text-blue-500"/> محاكاة التحركات العسكرية
                    </h4>
                    <div className="flex gap-2">
                         {!isSimulating ? (
                            <button onClick={handleStart} disabled={!mapLoaded} className="px-4 py-1.5 rounded-full flex items-center gap-2 font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 transition-colors disabled:opacity-50">
                                <Play size={12}/> تشغيل
                            </button>
                         ) : (
                            <button onClick={handleStart} className="px-4 py-1.5 rounded-full flex items-center gap-2 font-bold text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                                <RefreshCw size={12}/> إعادة
                            </button>
                         )}
                    </div>
                </div>

                <div className="relative w-full h-[400px] bg-slate-100 rounded-xl overflow-hidden mt-2">
                    <canvas 
                        ref={canvasRef}
                        width={400} 
                        height={600}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* تحليل النص (صفحة 76) */}
            <div className="flex flex-col gap-4">
                <button 
                    onClick={() => setShowAnalysis(!showAnalysis)}
                    className="bg-slate-800 text-white p-5 rounded-2xl shadow-lg flex items-center justify-between hover:bg-slate-700 transition-all active:scale-95 group"
                >
                    <span className="font-bold flex items-center gap-3">
                        <FileText className="text-yellow-400 group-hover:scale-110 transition-transform" /> 
                        تحليل نص المعركة (ص 76)
                    </span>
                    <span className={`transition-transform duration-300 ${showAnalysis ? 'rotate-180' : ''}`}>▼</span>
                </button>

                {showAnalysis && (
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm animate-in slide-in-from-top-2 duration-300 text-sm leading-relaxed text-slate-700">
                        <h4 className="font-black text-red-800 mb-4 flex items-center gap-2">
                            <Flame size={18} className="text-orange-500"/> عبقرية صلاح الدين العسكرية:
                        </h4>
                        
                        <div className="space-y-3">
                            <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-xl">
                                <Droplets className="text-blue-500 shrink-0 mt-1" size={16}/>
                                <div>
                                    <strong className="block text-blue-900 text-xs">السيطرة على الماء</strong>
                                    <p className="text-xs text-blue-800">تمركز الجيش الإسلامي بين الصليبيين وبحيرة طبرية، فمنعهم من الوصول للماء.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start p-3 bg-orange-50 rounded-xl">
                                <Flame className="text-orange-500 shrink-0 mt-1" size={16}/>
                                <div>
                                    <strong className="block text-orange-900 text-xs">سلاح النار والدخان</strong>
                                    <p className="text-xs text-orange-800">أشعل المسلمون النار في الأعشاب اليابسة، فاجتمع على العدو: العطش، وحر الشمس، وحر النار، والدخان.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-slate-50 rounded-xl border-r-4 border-slate-400 italic text-slate-600 text-xs font-serif">
                            "ونتيجة لذلك تعذر عليهم الصمود طويلاً، وسقطت الخيول والفرسان، وكان موقفهم في غاية الحرج."
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default AbbasidCrusades;
