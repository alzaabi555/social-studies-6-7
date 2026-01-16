import React, { useState } from 'react';
import { RefreshCw, Zap, ArrowRight, MapPin, CheckCircle, BatteryCharging, Droplets, Sun, Wind } from 'lucide-react';

const NaturalResourcesLesson = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("types");
  const [selectedMapPoint, setSelectedMapPoint] = useState<string | null>(null);

  const mapPoints = [
    { id: "musandam", name: "مسندم", resource: "ثروة سمكية 🐟", type: "متجدد", top: "10%", left: "80%" },
    { id: "batinah", name: "شمال الباطنة", resource: "نحاس (معادن) ⛏️", type: "غير متجدد", top: "20%", left: "75%" },
    { id: "dhahirah", name: "الظاهرة", resource: "نفط وغاز 🛢️", type: "غير متجدد", top: "25%", left: "60%" },
    { id: "dhofar", name: "ظفار", resource: "اللبان / الرياح 💨", type: "متجدد", top: "85%", left: "20%" },
  ];

  return (
    <div className="p-6 animate-fade-in space-y-8 font-tajawal text-right" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 font-bold bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
          <ArrowRight size={20} /> خروج
        </button>
        <h1 className="text-2xl font-black text-amber-700">الموارد الطبيعية</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-lg mx-auto mb-8">
        <button onClick={() => setActiveTab("types")} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === "types" ? "bg-white shadow text-amber-700" : "text-slate-500"}`}>أنواع الموارد</button>
        <button onClick={() => setActiveTab("map")} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === "map" ? "bg-white shadow text-blue-700" : "text-slate-500"}`}>خريطة الثروات</button>
      </div>

      {/* Content: Types */}
      {activeTab === "types" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4 text-green-800">
              <RefreshCw size={32} />
              <h3 className="text-xl font-black">1. موارد متجددة</h3>
            </div>
            <p className="text-slate-700 mb-4">تتجدد باستمرار ولا تنفد.</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-2 rounded shadow-sm flex items-center gap-2 text-sm"><Sun className="text-yellow-500" size={16}/> الطاقة الشمسية</div>
              <div className="bg-white p-2 rounded shadow-sm flex items-center gap-2 text-sm"><Wind className="text-blue-400" size={16}/> الرياح</div>
              <div className="bg-white p-2 rounded shadow-sm flex items-center gap-2 text-sm"><Droplets className="text-blue-600" size={16}/> المياه</div>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-2xl border-2 border-slate-300 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4 text-slate-800">
              <BatteryCharging size={32} />
              <h3 className="text-xl font-black">2. موارد غير متجددة</h3>
            </div>
            <p className="text-slate-700 mb-4">تنفد بالاستهلاك وتحتاج ملايين السنين لتتكون.</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-2 rounded shadow-sm flex items-center gap-2 text-sm">🛢️ النفط والغاز</div>
              <div className="bg-white p-2 rounded shadow-sm flex items-center gap-2 text-sm">⛏️ المعادن</div>
            </div>
          </div>
        </div>
      )}

      {/* Content: Map */}
      {activeTab === "map" && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Area */}
          <div className="relative w-full lg:w-1/2 bg-blue-50 rounded-3xl border-4 border-slate-200 h-96 shadow-inner overflow-hidden">
             {/* Simple SVG Oman Map Placeholder */}
             <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-50">
                <path d="M85,5 L95,15 L90,40 L60,60 L30,90 L10,85 L20,70 L40,50 L50,30 L60,10 Z" fill="#d1fae5" stroke="#059669" />
             </svg>
             
             {mapPoints.map((point) => (
               <button
                 key={point.id}
                 onClick={() => setSelectedMapPoint(point.id)}
                 className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-2 border-amber-500 flex items-center justify-center hover:scale-125 transition-transform animate-bounce"
                 style={{ top: point.top, left: point.left }}
               >
                 <MapPin size={16} className="text-amber-600" />
               </button>
             ))}
          </div>

          {/* Info Area */}
          <div className="flex-1">
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
               <h3 className="font-bold text-slate-800 mb-4">بيانات الموارد (اضغط على الخريطة):</h3>
               {selectedMapPoint ? (
                 <div className="animate-fade-in space-y-4">
                   {(() => {
                     const data = mapPoints.find(p => p.id === selectedMapPoint);
                     return (
                       <>
                         <div className="text-2xl font-black text-indigo-900">{data?.name}</div>
                         <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                           <span className="block text-sm text-slate-500 mb-1">المورد الرئيسي:</span>
                           <span className="font-bold text-lg text-amber-800">{data?.resource}</span>
                         </div>
                         <div className={`p-2 rounded-lg text-center font-bold text-white ${data?.type === 'متجدد' ? 'bg-green-500' : 'bg-red-500'}`}>
                           {data?.type}
                         </div>
                       </>
                     );
                   })()}
                 </div>
               ) : (
                 <p className="text-slate-400 text-center py-10">بانتظار اختيارك...</p>
               )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NaturalResourcesLesson;