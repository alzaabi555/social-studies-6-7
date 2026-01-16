import React, { useState } from 'react';
import { ArrowRight, Heart, Shield, Scale, User, CheckCircle, Lock, Users } from 'lucide-react';

const OmanRightsDutiesLesson = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('concepts');

  // 1. قسم المفاهيم (بطاقات القلب والدرع)
  const ConceptsSection = () => {
    const [flipped, setFlipped] = useState<string | null>(null);
    return (
      <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
        <div onClick={() => setFlipped(flipped === 'rights' ? null : 'rights')} className="perspective-1000 h-64 cursor-pointer group">
          <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped === 'rights' ? 'rotate-y-180' : ''}`}>
            <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 border-b-8 border-blue-500">
              <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600"><Heart size={48} /></div>
              <h3 className="text-2xl font-black text-blue-900">الحقـوق</h3>
              <p className="text-xs text-slate-400 mt-2">اضغط للتعريف</p>
            </div>
            <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 rotate-y-180 text-center">
              <p className="text-lg font-bold leading-loose">"هي الأشياء التي <span className="text-yellow-300">يستحقها</span> المواطن من الدولة والمجتمع."</p>
            </div>
          </div>
        </div>
        <div onClick={() => setFlipped(flipped === 'duties' ? null : 'duties')} className="perspective-1000 h-64 cursor-pointer group">
          <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped === 'duties' ? 'rotate-y-180' : ''}`}>
            <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 border-b-8 border-rose-500">
              <div className="bg-rose-100 p-4 rounded-full mb-4 text-rose-600"><Shield size={48} /></div>
              <h3 className="text-2xl font-black text-rose-900">الواجبـات</h3>
              <p className="text-xs text-slate-400 mt-2">اضغط للتعريف</p>
            </div>
            <div className="absolute w-full h-full backface-hidden bg-rose-600 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 rotate-y-180 text-center">
              <p className="text-lg font-bold leading-loose">"هي الأفعال التي <span className="text-yellow-300">يلتزم</span> المواطن بالقيام بها تجاه الوطن."</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 2. قسم محاكاة الواجبات (الشكل الدائري - صورة 152113)
  const DutiesSimulation = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const duties = [
      { id: 'religion', label: 'طاعة الله ورسوله', icon: '☪️', x: '50%', y: '10%' },
      { id: 'country', label: 'الدفاع عن الوطن', icon: '🛡️', x: '85%', y: '30%' },
      { id: 'sultan', label: 'طاعة السلطان', icon: '👑', x: '85%', y: '70%' },
      { id: 'laws', label: 'احترام القوانين', icon: '⚖️', x: '15%', y: '70%' },
      { id: 'env', label: 'حماية البيئة', icon: '🌳', x: '15%', y: '30%' },
    ];

    return (
      <div className="flex flex-col items-center animate-fade-in">
        <h3 className="text-xl font-bold text-slate-800 mb-8 text-center">واجبات المواطن (محاكاة تفاعلية)</h3>
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-rose-100 shadow-inner bg-slate-50">
          {/* المركز: المواطن */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full shadow-xl border-4 border-rose-500 flex flex-col items-center justify-center z-20">
            <User size={40} className="text-rose-600 mb-1" />
            <span className="font-black text-rose-900 text-sm">المواطن</span>
          </div>
          
          {/* الفروع */}
          {duties.map((duty) => (
            <button
              key={duty.id}
              onClick={() => setSelected(duty.id)}
              className={`absolute w-20 h-20 rounded-full flex flex-col items-center justify-center p-1 text-center shadow-lg transition-all duration-300 z-20 hover:scale-110 ${selected === duty.id ? 'bg-rose-600 text-white scale-110 ring-4 ring-rose-200' : 'bg-white text-slate-700 border-2 border-slate-100'}`}
              style={{ top: duty.y, left: duty.x, transform: 'translate(-50%, -50%)' }}
            >
              <span className="text-xl mb-1">{duty.icon}</span>
              <span className="text-[9px] font-bold leading-tight">{duty.label}</span>
            </button>
          ))}
          
          {/* خطوط التوصيل */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {duties.map((d, i) => (
              <line key={i} x1="50%" y1="50%" x2={d.x} y2={d.y} stroke="#fb7185" strokeWidth="2" strokeDasharray="5,5" />
            ))}
          </svg>
        </div>
        <div className="mt-8 bg-rose-50 p-4 rounded-xl text-center w-full max-w-md border border-rose-200 min-h-[80px] flex items-center justify-center">
            {selected ? (
                <p className="text-rose-900 font-bold animate-fade-in">
                    {selected === 'country' && "الذود عن الوطن وحماية مكتسباته واجب مقدس."}
                    {selected === 'sultan' && "طاعة ولي الأمر واجبة لضمان استقرار الدولة."}
                    {selected === 'laws' && "الالتزام بالأنظمة يحفظ حقوق الجميع."}
                    {selected === 'env' && "المحافظة على الممتلكات العامة والبيئة مسؤولية الجميع."}
                    {selected === 'religion' && "التمسك بالقيم الإسلامية هو أساس المواطنة الصالحة."}
                </p>
            ) : (
                <p className="text-slate-400">اضغط على الدوائر لاستكشاف الواجبات</p>
            )}
        </div>
      </div>
    );
  };

  // 3. قسم الأهمية (صورة 152120)
  const ImportanceSection = () => (
    <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
      <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-indigo-500 hover:-translate-y-2 transition-transform">
        <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-indigo-600"><Scale size={32} /></div>
        <h3 className="font-bold text-lg text-slate-800 text-center mb-2">تحقيق العدالة</h3>
        <p className="text-slate-600 text-sm text-center">تضمن حصول كل فرد على حقه دون تمييز.</p>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-green-500 hover:-translate-y-2 transition-transform">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-green-600"><CheckCircle size={32} /></div>
        <h3 className="font-bold text-lg text-slate-800 text-center mb-2">النظام والاستقرار</h3>
        <p className="text-slate-600 text-sm text-center">تحدد القواعد التي يلتزم بها الجميع فيعم النظام.</p>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-orange-500 hover:-translate-y-2 transition-transform">
        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-orange-600"><Users size={32} /></div>
        <h3 className="font-bold text-lg text-slate-800 text-center mb-2">التكافل الاجتماعي</h3>
        <p className="text-slate-600 text-sm text-center">تقوي الروابط بين أفراد المجتمع من خلال أداء الواجبات.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-teal-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold bg-white px-4 py-2 rounded-lg shadow-sm"><ArrowRight size={20} /> خروج</button>
          <h1 className="text-2xl font-black text-teal-800">الحقوق والواجبات</h1>
        </div>

        {/* Navigation */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm mb-6 overflow-x-auto">
          <button onClick={() => setActiveTab('concepts')} className={`flex-1 px-4 py-2 rounded-lg font-bold whitespace-nowrap ${activeTab === 'concepts' ? 'bg-teal-100 text-teal-800' : 'text-slate-500'}`}>المفاهيم</button>
          <button onClick={() => setActiveTab('duties')} className={`flex-1 px-4 py-2 rounded-lg font-bold whitespace-nowrap ${activeTab === 'duties' ? 'bg-teal-100 text-teal-800' : 'text-slate-500'}`}>الواجبات (تفاعلي)</button>
          <button onClick={() => setActiveTab('importance')} className={`flex-1 px-4 py-2 rounded-lg font-bold whitespace-nowrap ${activeTab === 'importance' ? 'bg-teal-100 text-teal-800' : 'text-slate-500'}`}>الأهمية</button>
          <button onClick={() => setActiveTab('story')} className={`flex-1 px-4 py-2 rounded-lg font-bold whitespace-nowrap ${activeTab === 'story' ? 'bg-teal-100 text-teal-800' : 'text-slate-500'}`}>قصة العدالة</button>
        </div>

        {activeTab === 'concepts' && <ConceptsSection />}
        {activeTab === 'duties' && <DutiesSimulation />}
        {activeTab === 'importance' && <ImportanceSection />}
        {activeTab === 'story' && (
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-teal-100 animate-fade-in">
            <div className="flex items-center gap-3 mb-4 text-teal-800">
              <Scale size={32} />
              <h3 className="text-xl font-black">قصة العدالة (الإمام أحمد بن سعيد)</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              قصة تاريخية تبرز أهمية العدالة: حينما اشتكى قصاب من قائد عسكري أخذ اللحم ولم يدفع ثمنه. 
              علم الإمام أحمد بن سعيد بالقصة، فغضب للظلم واستدعى القائد وأنصف القصاب.
            </p>
            <div className="bg-teal-50 p-4 rounded-xl text-center font-black text-teal-900 border border-teal-200 text-lg">
              "لا أحد فوق القانون في عمان، والعدل أساس الملك."
            </div>
          </div>
        )}
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default OmanRightsDutiesLesson;