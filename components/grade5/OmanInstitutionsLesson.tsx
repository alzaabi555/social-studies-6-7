import React, { useState } from 'react';
import { ArrowRight, Shield, Scale, Heart, Baby, CheckCircle, Calendar, Globe, Star } from 'lucide-react';

const OmanInstitutionsLesson = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('human');

  // 1. حقوق الإنسان (صورة 152159)
  const HumanRightsSection = () => {
    const [showAnalysis, setShowAnalysis] = useState(false);
    return (
      <div className="space-y-6 animate-fade-in">
        {/* مقولة السلطان */}
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-8 text-center relative">
          <span className="absolute top-0 right-6 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow">حلل واستنتج</span>
          <p className="text-xl font-serif text-indigo-900 leading-loose italic mb-4">
            "فدعمنا للقضاء واستقلاليته واجب التزمنا به... فالكل سواسية أمام القانون."
          </p>
          <p className="text-sm text-indigo-600 font-bold mb-6">- من خطاب السلطان قابوس (طيب الله ثراه)</p>
          <button onClick={() => setShowAnalysis(!showAnalysis)} className="bg-white border-2 border-indigo-300 text-indigo-700 px-8 py-2 rounded-xl font-bold hover:bg-indigo-100 transition-colors">
            {showAnalysis ? "إخفاء التحليل" : "إظهار التحليل"}
          </button>
          {showAnalysis && (
             <div className="mt-4 bg-white p-4 rounded-xl shadow-sm text-indigo-800 font-bold animate-slide-up">
               تدل على أهمية العدالة والمساواة بين جميع أفراد المجتمع.
             </div>
          )}
        </div>

        {/* منجز عماني */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-r-8 border-orange-500 flex items-center gap-4">
           <div className="bg-orange-100 p-4 rounded-full text-orange-600"><Star/></div>
           <div>
             <h4 className="font-black text-slate-800 mb-1">منجز عماني (1995م)</h4>
             <p className="text-slate-600 text-sm">إنشاء الجمعية العمانية للأشخاص ذوي الإعاقة لرعاية حقوقهم.</p>
           </div>
        </div>

        {/* شخصية عمانية */}
        <div className="bg-teal-700 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
           <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl border-2 border-white/50">👳‍♂️</div>
           <div>
             <h3 className="text-yellow-400 font-bold mb-1">شخصية عمانية</h3>
             <h4 className="text-2xl font-black mb-2">الإمام سعيد بن عبدالله الرحيلي</h4>
             <p className="text-teal-100 leading-relaxed">وضع منظومة قيمية لحقوق الإنسان مستمدة من الشريعة، اعتنى فيها بحق المساواة والحرية.</p>
           </div>
        </div>
      </div>
    );
  };

  // 2. حقوق الطفل (صورة 152207)
  const ChildRightsSection = () => {
    const [basket, setBasket] = useState<string[]>([]);
    const rights = [
      { id: '1', text: 'الاسم والجنسية', icon: '🆔' },
      { id: '2', text: 'الأمان', icon: '🛡️' },
      { id: '3', text: 'اللعب والترفيه', icon: '🪁' },
      { id: '4', text: 'التعليم', icon: '📚' },
      { id: '5', text: 'الرعاية الصحية', icon: '💉' }
    ];

    const add = (id: string) => !basket.includes(id) && setBasket([...basket, id]);

    return (
      <div className="space-y-8 animate-fade-in">
        <div className="bg-slate-100 p-4 rounded-xl text-center text-slate-600 font-serif">
          ﴿يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ...﴾
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-cyan-100 text-center">
          <h3 className="font-black text-slate-800 mb-6">اجمع حقوق الطفل في السلة</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {rights.map(r => (
              <button key={r.id} onClick={() => add(r.id)} disabled={basket.includes(r.id)} className={`px-4 py-2 rounded-full border-2 font-bold transition-all ${basket.includes(r.id) ? 'opacity-30 scale-95' : 'bg-cyan-50 border-cyan-300 text-cyan-700 hover:scale-110'}`}>
                {r.icon} {r.text}
              </button>
            ))}
          </div>
          
          <div className="bg-cyan-50 rounded-3xl p-6 min-h-[150px] border-2 border-dashed border-cyan-400 relative flex flex-wrap justify-center items-center gap-2">
            <span className="absolute -top-4 bg-white px-4 py-1 rounded-full text-cyan-600 font-bold shadow border border-cyan-100">سلتي ({basket.length}/5)</span>
            {basket.map(id => (
              <div key={id} className="bg-green-500 text-white px-4 py-2 rounded-xl font-bold shadow-md animate-bounce flex items-center gap-2">
                <CheckCircle size={16}/> {rights.find(r => r.id === id)?.text}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
           <div className="bg-purple-50 p-4 rounded-xl border-r-4 border-purple-500">
             <h4 className="font-bold text-purple-900">ذوي الإعاقة</h4>
             <p className="text-sm text-purple-700">تمتع الطفل من ذوي الإعاقة برعاية آمنة وحياة كريمة.</p>
           </div>
           <div className="bg-red-50 p-4 rounded-xl border-r-4 border-red-500">
             <h4 className="font-bold text-red-900">الحماية</h4>
             <p className="text-sm text-red-700">حماية الطفل من أداء الأعمال الخطرة.</p>
           </div>
        </div>
      </div>
    );
  };

  // 3. حقوق المرأة (صورة 152214)
  const WomenRightsSection = () => (
    <div className="animate-fade-in space-y-8">
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="bg-white/20 p-4 rounded-full inline-block mb-4 animate-pulse"><Calendar size={48}/></div>
        <h3 className="text-4xl font-black mb-2">17 أكتوبر</h3>
        <p className="text-2xl font-medium mb-6">يوم المرأة العمانية</p>
        <span className="bg-white/20 px-6 py-2 rounded-full font-bold">احتفاءً وتكريماً لها في كل عام</span>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2 text-slate-800">
           <Globe className="text-blue-600"/>
           <h4 className="font-bold text-lg">اتفاقية (سيداو)</h4>
        </div>
        <p className="text-slate-600 leading-relaxed">
          انضمت سلطنة عمان إلى اتفاقية <strong>القضاء على جميع أشكال التمييز ضد المرأة</strong> (CEDAW)، مما يؤكد حرصها على تمكين المرأة في التعليم والعمل والمجتمع.
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
        <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2"><Star size={18}/> اقرأ واستمتع:</h4>
        <div className="bg-white p-4 rounded-xl text-slate-700 text-sm leading-relaxed shadow-sm">
          "عبدالله بن أم مكتوم، صحابي جليل فقد بصره وهو صبي، لكن ذلك لم يمنعه من الإنجاز. كان يؤذن مع بلال، واستخلفه النبي على المدينة."
          <br/>
          <span className="text-amber-700 font-bold block mt-2">الدرس: الإعاقة ليست عائقاً أمام الإنجاز.</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cyan-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold"><ArrowRight size={20}/> خروج</button>
          <h1 className="text-2xl font-black text-cyan-800">الحقوق والمؤسسات</h1>
        </div>

        <div className="bg-white p-2 rounded-xl shadow-sm w-fit mx-auto flex gap-2 overflow-x-auto">
          <button onClick={() => setActiveTab('human')} className={`px-6 py-2 rounded-lg font-bold whitespace-nowrap transition-all ${activeTab === 'human' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-500 hover:bg-slate-50'}`}>حقوق الإنسان</button>
          <button onClick={() => setActiveTab('child')} className={`px-6 py-2 rounded-lg font-bold whitespace-nowrap transition-all ${activeTab === 'child' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-500 hover:bg-slate-50'}`}>حقوق الطفل</button>
          <button onClick={() => setActiveTab('women')} className={`px-6 py-2 rounded-lg font-bold whitespace-nowrap transition-all ${activeTab === 'women' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-500 hover:bg-slate-50'}`}>حقوق المرأة</button>
        </div>

        {activeTab === 'human' && <HumanRightsSection />}
        {activeTab === 'child' && <ChildRightsSection />}
        {activeTab === 'women' && <WomenRightsSection />}
      </div>
    </div>
  );
};

export default OmanInstitutionsLesson;