import React, { useState } from 'react';
import { ArrowRight, Building2, Users, FileText, Shield, MapPin, Star } from 'lucide-react';

const IslamicStateLesson = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('foundation');

  // 1. التأسيس والهجرة (مطابق لصورة 151825)
  const FoundationSection = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
          <Star size={20} className="text-emerald-600"/> أهداف الدرس:
        </h3>
        <ul className="list-disc list-inside text-emerald-800 text-sm space-y-1">
          <li>تتبع هجرة الرسول ﷺ إلى المدينة.</li>
          <li>استنتاج أهمية الأعمال التأسيسية.</li>
          <li>التعرف على وثيقة المدينة.</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center">
        <h2 className="text-2xl font-black text-slate-800 mb-6">من يثرب إلى المدينة</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 w-40">
            <span className="block text-3xl mb-2">🏘️</span>
            <h4 className="font-bold text-slate-600">يثرب</h4>
            <span className="text-xs text-slate-400">قبل الهجرة</span>
          </div>
          
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 animate-pulse">
               <ArrowRight size={18} className="rotate-180"/> هجرة الرسول ﷺ
            </div>
          </div>

          <div className="bg-emerald-100 p-6 rounded-2xl border-2 border-emerald-500 w-40 transform scale-110 shadow-xl">
            <span className="block text-3xl mb-2">🕌</span>
            <h4 className="font-black text-emerald-900">المدينة المنورة</h4>
            <span className="text-xs text-emerald-700 font-bold">عاصمة الدولة</span>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. بناء المسجد (مطابق لصورة 151832)
  const MosqueSection = () => (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center animate-fade-in">
      <h2 className="text-2xl font-black text-slate-800 mb-2">أولاً: بناء المسجد النبوي</h2>
      <p className="text-slate-500 mb-8">أول عمل قام به الرسول، وتعددت مهامه لتشمل:</p>
      
      <div className="relative h-80 bg-[#f0e6d2] rounded-2xl border-4 border-[#8d6e63] shadow-inner p-6 flex items-center justify-center">
        {/* تصميم المسجد التفاعلي كما في الصورة */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
          <div className="bg-white/90 p-4 rounded-xl border-2 border-indigo-200 shadow-md flex flex-col items-center justify-center h-32 hover:scale-105 transition-transform">
            <span className="text-3xl text-indigo-600 mb-2">⚖️</span>
            <span className="font-black text-indigo-900">مقر للحكم</span>
            <span className="text-[10px] text-slate-500 mt-1">إدارة شؤون الدولة</span>
          </div>
          
          <div className="bg-white/90 p-4 rounded-xl border-2 border-emerald-200 shadow-md flex flex-col items-center justify-center h-32 hover:scale-105 transition-transform col-span-1 row-span-2">
            <span className="text-4xl text-emerald-600 mb-4">☪️</span>
            <span className="font-black text-emerald-900 text-lg">دار للعبادة</span>
          </div>

          <div className="bg-white/90 p-4 rounded-xl border-2 border-blue-200 shadow-md flex flex-col items-center justify-center h-32 hover:scale-105 transition-transform">
            <span className="text-3xl text-blue-600 mb-2">📚</span>
            <span className="font-black text-blue-900">مدرسة للعلم</span>
          </div>
        </div>
        
        {/* الصفة */}
        <div className="absolute bottom-4 bg-amber-100 px-6 py-2 rounded-lg border border-amber-300 text-amber-900 font-bold text-sm shadow-sm">
          🏠 مأوى للفقراء (الصحابة أهل الصفة)
        </div>
      </div>
    </div>
  );

  // 3. المؤاخاة (مطابق لصورة 151840)
  const BrotherhoodSection = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-black text-slate-800 mb-2">ثانياً: المؤاخاة</h2>
        <p className="text-slate-500">بين المهاجرين والأنصار</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200 text-center">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">🕋</div>
          <h3 className="text-xl font-black text-blue-900">المهاجرون</h3>
          <p className="text-sm text-blue-700 mt-2">أهل مكة الذين تركوا ديارهم نصرة لله.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-3xl border border-green-200 text-center">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">🌴</div>
          <h3 className="text-xl font-black text-green-900">الأنصار</h3>
          <p className="text-sm text-green-700 mt-2">أهل المدينة الذين نصروا الرسول واستقبلوه.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-yellow-400 text-center">
        <h3 className="font-bold text-slate-800 mb-4 text-lg">الهدف من المؤاخاة:</h3>
        <div className="flex justify-center gap-2 text-2xl mb-4">💛 🤝 💛</div>
        <p className="text-slate-700 font-medium">
          تقوية الروابط، ليصبحوا <span className="text-yellow-600 font-black">كالجـسد الواحـد</span>، وتختفي العصبيات القبلية.
        </p>
      </div>
    </div>
  );

  // 4. الصحيفة (مطابق لصورة 151847)
  const ConstitutionSection = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-black text-slate-800">ثالثاً: الصحيفة (وثيقة المدينة)</h2>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4"><FileText size={40} className="text-yellow-600"/></div>
        <h3 className="font-bold text-yellow-900 mb-2">ما هي الصحيفة؟</h3>
        <p className="bg-white p-4 rounded-xl shadow-sm text-slate-700 leading-relaxed font-medium">
          "وثيقة وضعها الرسول ﷺ لتنظيم العلاقة بين جميع سكان المدينة، وتحديد حقوقهم وواجباتهم."
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100">
        <h3 className="text-center font-bold text-slate-700 mb-6">أطراف الصحيفة:</h3>
        <div className="flex justify-center gap-4">
          {[{t:"المهاجرون", i:"🕋"}, {t:"الأنصار", i:"🌴"}, {t:"اليهود", i:"🕍"}].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-xl w-28 text-center border border-slate-200">
              <span className="block text-2xl mb-2">{item.i}</span>
              <span className="font-bold text-slate-800 text-sm">{item.t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-indigo-50 p-3 rounded-lg text-indigo-900 font-bold text-sm text-center">⚖️ العدل والمساواة بين الجميع</div>
        <div className="bg-green-50 p-3 rounded-lg text-green-900 font-bold text-sm text-center">💚 حرية العقيدة</div>
        <div className="bg-red-50 p-3 rounded-lg text-red-900 font-bold text-sm text-center">🛡️ الدفاع المشترك ضد أي عدوان</div>
      </div>
    </div>
  );

  // 5. حماية الدولة (مطابق لصورة 151857)
  const DefenseSection = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
        <h3 className="font-black text-red-900 mb-2 flex items-center gap-2"><Shield size={20}/> تكوين الجيش:</h3>
        <p className="text-slate-600 text-sm">عمل الرسول على تكوين جيش قوي وتدريب الصحابة وإرسال السرايا.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800 text-white p-6 rounded-2xl relative overflow-hidden">
          <span className="bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-1 rounded">معلومة تهمك</span>
          <h3 className="text-xl font-bold text-yellow-400 mt-2">غزوة بدر الكبرى (2هـ)</h3>
          <p className="text-slate-300 text-sm mt-1">أول غزوة في الإسلام.</p>
        </div>
        <div className="bg-slate-800 text-white p-6 rounded-2xl relative overflow-hidden">
          <span className="bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-1 rounded">معلومة تهمك</span>
          <h3 className="text-xl font-bold text-yellow-400 mt-2">غزوة تبوك (9هـ)</h3>
          <p className="text-slate-300 text-sm mt-1">آخر غزوة قادها الرسول.</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-3xl p-8 text-center border-2 border-blue-100">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"><MapPin size={32}/></div>
        <h3 className="font-black text-blue-900 text-xl mb-2">الفتوحات الإسلامية</h3>
        <div className="bg-white p-4 rounded-xl shadow-sm text-blue-800 font-medium text-sm">
          "هي المعارك التي خاضها المسلمون لنشر الإسلام خارج شبه الجزيرة العربية."
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold"><ArrowRight size={20}/> خروج</button>
          <h1 className="text-2xl font-black text-slate-800">الدولة الإسلامية 🕌</h1>
        </div>

        {/* Navigation */}
        <div className="flex bg-white p-2 rounded-xl shadow-sm mb-8 overflow-x-auto gap-2">
          {['foundation', 'mosque', 'brotherhood', 'constitution', 'defense'].map(id => (
            <button 
              key={id} 
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${activeTab === id ? 'bg-emerald-600 text-white shadow' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              {id === 'foundation' ? 'التأسيس' : id === 'mosque' ? 'المسجد' : id === 'brotherhood' ? 'المؤاخاة' : id === 'constitution' ? 'الصحيفة' : 'الحماية'}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'foundation' && <FoundationSection />}
        {activeTab === 'mosque' && <MosqueSection />}
        {activeTab === 'brotherhood' && <BrotherhoodSection />}
        {activeTab === 'constitution' && <ConstitutionSection />}
        {activeTab === 'defense' && <DefenseSection />}
      </div>
    </div>
  );
};

export default IslamicStateLesson;