import React, { useState } from 'react';
import { 
  ArrowRight, Sun, Wind, Droplet, RefreshCw, 
  MapPin, BatteryCharging, Leaf, Shield, 
  BarChart3, Info, CheckCircle, Zap 
} from 'lucide-react';

const NaturalResourcesLesson = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('intro');

  // 1. قسم المقدمة (صورة 185817)
  const IntroSection = () => (
    <div className="space-y-8 animate-fade-in">
      {/* أهداف الدرس */}
      <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <Leaf size={24} /> أهداف الدرس:
        </h3>
        <ul className="grid gap-3 text-amber-800 font-medium text-lg list-disc list-inside">
          <li>مفهوم الموارد الطبيعية وأنواعها.</li>
          <li>أهميتها الاقتصادية.</li>
          <li>الجهود الوطنية لاستدامتها في سلطنة عمان.</li>
        </ul>
      </div>

      {/* الرسم التوضيحي (محاكاة الصورة) */}
      <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative min-h-[300px]">
         <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-slate-700 font-bold text-sm shadow z-10">
           تأمل الصورة: ماذا يحتاج الإنسان لاستمرار حياته؟
         </div>
         
         {/* السماء */}
         <div className="absolute top-0 left-0 w-full h-[60%] bg-sky-200">
            <Sun className="absolute top-10 right-10 text-yellow-400 animate-spin-slow" size={64} fill="currentColor" />
         </div>
         {/* اليابسة */}
         <div className="absolute top-[60%] left-0 w-full h-[15%] bg-[#C2B280]">
            <div className="absolute bottom-2 left-20 text-green-700">
               <Leaf size={64} fill="currentColor" />
            </div>
         </div>
         {/* الماء */}
         <div className="absolute bottom-0 left-0 w-full h-[25%] bg-blue-400"></div>

         {/* العناصر التفاعلية */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded shadow text-sm font-bold">النبات</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded shadow text-sm font-bold">الماء</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded shadow text-sm font-bold">الشمس</span>
         </div>
      </div>

      {/* التعريف */}
      <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-100 text-center shadow-sm">
        <h3 className="font-bold text-amber-900 text-lg mb-2 flex items-center justify-center gap-2">
          <Info size={20} className="text-yellow-500" /> مفهوم الموارد الطبيعية:
        </h3>
        <p className="text-slate-700 text-lg font-medium">
          "هي الموارد التي أوجدها الله في الطبيعة لخدمة الإنسان، دون تدخل منه."
        </p>
      </div>
    </div>
  );

  // 2. أنواع الموارد (صورة 185828 + 185836)
  const TypesSection = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-black text-slate-800 mb-2">أنواع الموارد الطبيعية</h2>
        <p className="text-slate-500">تصنف حسب استمراريتها إلى نوعين (الشكل 10)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* الموارد المتجددة */}
        <div className="bg-green-50 p-6 rounded-3xl border-4 border-green-200 hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-green-900">1. الموارد المتجددة</h3>
            <RefreshCw size={32} className="text-green-600 group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <div className="bg-white p-4 rounded-xl border border-green-100 mb-6 text-sm text-slate-600 leading-relaxed shadow-sm">
            <strong>التعريف (ص 36):</strong><br/>
            "هي التي تتوفر باستمرار من خلال العمليات التي تحدث في أغلفة كوكب الأرض."
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-green-100/50 p-2 rounded-lg">
               <Sun size={20} className="text-yellow-500" /> <span className="font-bold text-green-800">طاقة الشمس</span>
            </div>
            <div className="flex items-center gap-3 bg-green-100/50 p-2 rounded-lg">
               <Wind size={20} className="text-blue-400" /> <span className="font-bold text-green-800">طاقة الرياح</span>
            </div>
            <div className="flex items-center gap-3 bg-green-100/50 p-2 rounded-lg">
               <Droplet size={20} className="text-blue-600" /> <span className="font-bold text-green-800">المياه</span>
            </div>
             <div className="flex items-center gap-3 bg-green-100/50 p-2 rounded-lg">
               <span className="text-xl">🐫</span> <span className="font-bold text-green-800">الحيوانات</span>
            </div>
          </div>
        </div>

        {/* الموارد غير المتجددة */}
        <div className="bg-slate-100 p-6 rounded-3xl border-4 border-slate-300 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-slate-800">2. الموارد غير المتجددة</h3>
            <BatteryCharging size={32} className="text-slate-600" />
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 text-sm text-slate-600 leading-relaxed shadow-sm">
            <strong>التعريف (ص 37):</strong><br/>
            "هي الموجودة بكميات محدودة في الأرض، وتنفد مع استهلاكها."
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-slate-200/50 p-2 rounded-lg">
               <span className="text-xl">🛢️</span> <span className="font-bold text-slate-800">النفط</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-200/50 p-2 rounded-lg">
               <span className="text-xl">🔥</span> <span className="font-bold text-slate-800">الغاز الطبيعي</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-200/50 p-2 rounded-lg">
               <span className="text-xl">⛏️</span> <span className="font-bold text-slate-800">المعادن</span>
            </div>
             <div className="flex items-center gap-3 bg-slate-200/50 p-2 rounded-lg">
               <span className="text-xl">⚫</span> <span className="font-bold text-slate-800">الفحم</span>
            </div>
          </div>
        </div>
      </div>

      {/* معلومة تهمك */}
      <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200 flex flex-col md:flex-row gap-4 items-start shadow-sm">
        <Info className="text-indigo-600 shrink-0 mt-1" />
        <div className="text-sm">
          <h4 className="font-bold text-indigo-900 mb-2 text-lg">معلومة تهمك (ص 37): سرعة التجدد</h4>
          <p className="text-indigo-800 mb-2">يوجد نوعان من الموارد المتجددة:</p>
          <ul className="space-y-2">
             <li className="flex items-center gap-2"><span className="bg-green-200 text-green-800 px-2 rounded text-xs font-bold">سريعة التجدد</span> مثل: المياه الجوفية، الثروة الحيوانية.</li>
             <li className="flex items-center gap-2"><span className="bg-orange-200 text-orange-800 px-2 rounded text-xs font-bold">بطيئة التجدد</span> تحتاج فترة زمنية طويلة، مثل: <strong className="text-indigo-900">التربة</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // 3. خريطة الثروات (صورة 185846)
  const MapSection = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const locations = [
      { id: 1, gov: "مسندم", res: "أسماك", type: "متجدد", color: "text-green-600", x: 75, y: 15, icon: "🐟" },
      { id: 2, gov: "شمال الباطنة", res: "نحاس (معادن)", type: "غير متجدد", color: "text-red-600", x: 68, y: 25, icon: "⛏️" },
      { id: 3, gov: "الظاهرة", res: "نفط وغاز", type: "غير متجدد", color: "text-red-600", x: 55, y: 35, icon: "🛢️" },
      { id: 4, gov: "ظفار", res: "طاقة الرياح", type: "متجدد", color: "text-green-600", x: 25, y: 80, icon: "💨" }
    ];

    return (
      <div className="flex flex-col lg:flex-row gap-8 animate-fade-in h-full">
        {/* الجدول */}
        <div className="lg:w-1/2">
           <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
             <div className="bg-indigo-600 text-white p-4 text-center font-bold">
               تأمل وأجب (نشاط ص 38)
             </div>
             <table className="w-full text-center text-sm">
               <thead className="bg-indigo-50 text-indigo-900 font-bold border-b border-indigo-100">
                 <tr>
                   <th className="p-3">المحافظة</th>
                   <th className="p-3">اسم المورد</th>
                   <th className="p-3">نوعه</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {locations.map((loc) => (
                   <tr key={loc.id} className={`transition-colors ${selected === loc.id ? "bg-indigo-50" : "hover:bg-slate-50"}`}>
                     <td className="p-3 font-bold text-slate-700">{loc.gov}</td>
                     <td className="p-3 text-slate-600">{loc.res}</td>
                     <td className={`p-3 font-bold ${selected === loc.id ? loc.color : "text-slate-400"}`}>
                       {selected === loc.id ? loc.type : "؟"}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
             <p className="text-center text-xs text-slate-400 p-2 bg-slate-50">اضغط على الرموز في الخريطة لإكمال الجدول</p>
           </div>
        </div>

        {/* الخريطة */}
        <div className="lg:w-1/2 relative bg-blue-50 rounded-3xl border-4 border-slate-200 h-96 shadow-inner overflow-hidden">
           <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-50">
              <path d="M85,5 L95,15 L90,40 L60,60 L30,90 L10,85 L20,70 L40,50 L50,30 L60,10 Z" fill="#d1fae5" stroke="#059669" />
           </svg>
           {locations.map((loc) => (
             <button
               key={loc.id}
               onClick={() => setSelected(loc.id)}
               className={`absolute w-10 h-10 bg-white rounded-full shadow-lg border-2 flex items-center justify-center text-lg hover:scale-125 transition-transform animate-bounce ${selected === loc.id ? "border-indigo-600 z-20 scale-125" : "border-slate-300"}`}
               style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
             >
               {loc.icon}
             </button>
           ))}
        </div>
      </div>
    );
  };

  // 4. الاستدامة وجهود عمان (صورة 185917 + 181045)
  const SustainabilitySection = () => {
    const [trees, setTrees] = useState(0);
    return (
      <div className="space-y-8 animate-fade-in">
        {/* تعريف الاستدامة */}
        <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 text-center shadow-sm relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-green-700 px-4 py-1 rounded-full text-sm font-bold shadow border border-green-100 flex items-center gap-2">
             <Leaf size={16}/> ما المقصود باستدامة الموارد؟
           </div>
           <p className="text-xl text-green-900 font-medium leading-relaxed mt-2">
             "هي استعمال الموارد الطبيعية بشكل متوازن للحفاظ عليها، وضمان استمراريه الحياة."
           </p>
        </div>

        {/* جهود السلطنة */}
        <div>
           <h3 className="text-center font-black text-slate-800 mb-6 text-xl">جهود سلطنة عمان في الاستدامة</h3>
           <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500 text-center">
                 <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-700 font-bold">1</div>
                 <h4 className="font-bold text-slate-800 mb-1">رؤية عمان 2040</h4>
                 <p className="text-xs text-slate-500">وضعت الاستدامة ضمن أولوياتها.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500 text-center">
                 <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-700 font-bold">2</div>
                 <h4 className="font-bold text-slate-800 mb-1">الاستفادة المثلى</h4>
                 <p className="text-xs text-slate-500">تقليل الاعتماد على غير المتجددة.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-500 text-center">
                 <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-red-700 font-bold">3</div>
                 <h4 className="font-bold text-slate-800 mb-1">سن القوانين</h4>
                 <p className="text-xs text-slate-500">للمحافظة على الموارد.</p>
              </div>
           </div>
        </div>

        {/* منجز عماني (طاقة الرياح) */}
        <div className="bg-[#0f4c3a] text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
           <Wind size={150} className="absolute -right-10 top-0 text-white opacity-5 animate-pulse" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-right">
                 <span className="bg-yellow-500 text-[#0f4c3a] px-3 py-1 rounded text-xs font-black mb-2 inline-block">منجز عماني (ص 41)</span>
                 <h3 className="text-2xl font-black mb-2">محطة ظفار لطاقة الرياح</h3>
                 <p className="text-emerald-100 text-sm max-w-lg leading-relaxed">
                    أحد أبرز مشاريع الطاقة المتجددة لتوليد الكهرباء في السلطنة.
                 </p>
              </div>
              <div className="flex gap-4 text-xs font-bold">
                 <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur">📅 الافتتاح: 2019م</div>
                 <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur">📍 الموقع: ظفار</div>
              </div>
           </div>
        </div>

        {/* مبادرة الأشجار */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-3xl text-center shadow-lg">
           <h3 className="text-2xl font-black mb-4">زراعة 10 ملايين شجرة 🌳</h3>
           <p className="mb-6 opacity-90">ساهم معنا في المبادرة.. اضغط لزراعة شجرة!</p>
           <button 
             onClick={() => setTrees(t => t + 1)}
             className="bg-white text-emerald-700 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
           >
             🌱 ازرع الآن
           </button>
           {trees > 0 && <div className="mt-4 font-bold text-xl animate-bounce">زرعت {trees} شجرة!</div>}
        </div>
      </div>
    );
  };

  // 5. الأهمية الاقتصادية (مضاف لتكامل الدرس)
  const EconomySection = () => (
     <div className="animate-fade-in text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-200">
        <h3 className="text-2xl font-black text-slate-800 mb-6">الأهمية الاقتصادية للموارد</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[{t:"توفير الغذاء", i:"🍞"}, {t:"توفير الطاقة", i:"⚡"}, {t:"مصدر للدخل", i:"💰"}, {t:"قيام الصناعة", i:"🏭"}].map((item, idx) => (
             <div key={idx} className="bg-slate-50 p-4 rounded-xl border hover:border-blue-400 transition-colors">
                <span className="text-3xl block mb-2">{item.i}</span>
                <span className="font-bold text-slate-700 text-sm">{item.t}</span>
             </div>
           ))}
        </div>
     </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold bg-white px-4 py-2 rounded-lg shadow-sm"><ArrowRight size={20}/> خروج</button>
          <h1 className="text-2xl font-black text-amber-700">الموارد الطبيعية 💎</h1>
        </div>

        {/* القائمة الجانبية (محاكاة للتصميم في الصور) */}
        <div className="flex flex-col md:flex-row gap-6">
           <div className="w-full md:w-64 bg-white p-4 rounded-2xl shadow-sm h-fit space-y-2">
              <button onClick={() => setActiveTab('intro')} className={`w-full text-right p-3 rounded-xl font-bold flex items-center gap-2 ${activeTab === 'intro' ? 'bg-amber-50 text-amber-700' : 'text-slate-500 hover:bg-slate-50'}`}><Leaf size={18}/> المقدمة</button>
              <button onClick={() => setActiveTab('types')} className={`w-full text-right p-3 rounded-xl font-bold flex items-center gap-2 ${activeTab === 'types' ? 'bg-green-50 text-green-700' : 'text-slate-500 hover:bg-slate-50'}`}><RefreshCw size={18}/> الأنواع (الزمن)</button>
              <button onClick={() => setActiveTab('map')} className={`w-full text-right p-3 rounded-xl font-bold flex items-center gap-2 ${activeTab === 'map' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50'}`}><MapPin size={18}/> خريطة الثروات</button>
              <button onClick={() => setActiveTab('economy')} className={`w-full text-right p-3 rounded-xl font-bold flex items-center gap-2 ${activeTab === 'economy' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50'}`}><BarChart3 size={18}/> الأهمية الاقتصادية</button>
              <button onClick={() => setActiveTab('sustain')} className={`w-full text-right p-3 rounded-xl font-bold flex items-center gap-2 ${activeTab === 'sustain' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'}`}><CheckCircle size={18}/> الاستدامة وجهود عمان</button>
           </div>

           <div className="flex-1">
              {activeTab === 'intro' && <IntroSection />}
              {activeTab === 'types' && <TypesSection />}
              {activeTab === 'map' && <MapSection />}
              {activeTab === 'economy' && <EconomySection />}
              {activeTab === 'sustain' && <SustainabilitySection />}
           </div>
        </div>
      </div>
    </div>
  );
};

export default NaturalResourcesLesson;