import React, { useState, useEffect } from 'react';
import { ArrowRight, Droplet, Mountain, RefreshCw } from 'lucide-react';

const EarthSpheresLesson2 = ({ onBack }: { onBack: () => void }) => {
  const [step, setStep] = useState(0);

  // محاكاة تفاعل الماء والصخر
  useEffect(() => {
    if (step > 0 && step < 100) {
      const timer = setTimeout(() => setStep(s => s + 2), 50);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="bg-white px-4 py-2 rounded-lg text-slate-500 hover:text-green-600 shadow-sm flex gap-2"><ArrowRight/> خروج</button>
        <h1 className="text-2xl font-black text-green-700">علاقة الأغلفة (2)</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">مثال تطبيقي: تفاعل الغلاف المائي والصخري</h2>
        
        <div className="relative h-64 bg-sky-100 rounded-2xl overflow-hidden border-4 border-slate-200 mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* الصخر */}
            <div className="w-64 h-40 bg-stone-700 rounded-lg absolute bottom-0 transition-all duration-75" 
                 style={{ clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, ${100 - step}% 100%, ${100 - step}% 30%, 0% 30%)` }}>
            </div>
            {/* الماء */}
            <div className="w-full h-24 bg-blue-500/60 absolute bottom-0 flex items-center justify-center text-white font-bold animate-pulse">
               أمواج البحر 🌊
            </div>
          </div>
          {step > 50 && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-xl text-stone-800 font-bold shadow-lg animate-bounce">
              تكون كهف بحري! 🕳️
            </div>
          )}
        </div>

        <button onClick={() => setStep(1)} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 flex items-center gap-2 mx-auto">
          <RefreshCw size={20}/> ابدأ المحاكاة
        </button>
      </div>
    </div>
  );
};

export default EarthSpheresLesson2;