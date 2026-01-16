import React, { useState } from 'react';
import { ArrowRight, Building2, Users, FileText, Shield, MapPin } from 'lucide-react';

const IslamicStateLesson = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState("migration");

  // مكونات الأقسام الداخلية
  const MigrationSection = () => (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-emerald-100 text-center animate-fade-in">
       <h3 className="text-2xl font-black text-emerald-800 mb-4">من يثرب إلى المدينة</h3>
       <div className="flex items-center justify-center gap-8 mb-6">
         <div className="p-4 bg-slate-100 rounded-xl border-2 border-slate-200">
           <span className="block font-bold text-slate-600">يثرب</span>
           <span className="text-xs text-slate-400">(قبل الهجرة)</span>
         </div>
         <ArrowRight className="text-emerald-500 animate-pulse" size={32} />
         <div className="p-4 bg-emerald-100 rounded-xl border-2 border-emerald-500 shadow-md transform scale-110">
           <span className="block font-bold text-emerald-800">المدينة المنورة</span>
           <span className="text-xs text-emerald-600">(عاصمة الدولة)</span>
         </div>
       </div>
       <p className="text-slate-600 leading-relaxed">
         هاجر الرسول ﷺ من مكة إلى المدينة، وكان ذلك إيذاناً بقيام الدولة الإسلامية الأولى.
       </p>
    </div>
  );

  const MosqueSection = () => (
    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 animate-fade-in">
      <h3 className="text-2xl font-black text-emerald-900 mb-6 text-center">وظائف المسجد النبوي</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
          <div className="text-4xl mb-2">🛐</div>
          <h4 className="font-bold text-slate-800">دار للعبادة</h4>
        </div>
        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
          <div className="text-4xl mb-2">⚖️</div>
          <h4 className="font-bold text-slate-800">مقر للحكم</h4>
          <p className="text-xs text-slate-500 mt-1">إدارة شؤون الدولة</p>
        </div>
        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
          <div className="text-4xl mb-2">📚</div>
          <h4 className="font-bold text-slate-800">مدرسة للعلم</h4>
          <p className="text-xs text-slate-500 mt-1">تعليم الصحابة</p>
        </div>
      </div>
    </div>
  );

  const BrotherhoodSection = () => (
    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200 animate-fade-in text-center">
      <h3 className="text-2xl font-black text-blue-900 mb-4">المؤاخاة</h3>
      <div className="flex justify-center items-center gap-6 mb-4">
        <div className="bg-white px-6 py-3 rounded-full shadow text-blue-800 font-bold">المهاجرون</div>
        <div className="text-3xl">🤝</div>
        <div className="bg-white px-6 py-3 rounded-full shadow text-blue-800 font-bold">الأنصار</div>
      </div>
      <p className="text-blue-800">
        آخى الرسول ﷺ بينهم ليقوي الجبهة الداخلية ويقضي على العصبية القبلية.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 mb-6 font-bold">
          <ArrowRight size={20} /> القائمة الرئيسية
        </button>

        <h1 className="text-3xl font-black text-slate-800 mb-8">تأسيس الدولة الإسلامية</h1>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <button onClick={() => setActiveSection("migration")} className={`p-3 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${activeSection === "migration" ? "bg-emerald-600 text-white shadow-lg" : "bg-white text-slate-600"}`}>
            <MapPin /> الهجرة
          </button>
          <button onClick={() => setActiveSection("mosque")} className={`p-3 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${activeSection === "mosque" ? "bg-emerald-600 text-white shadow-lg" : "bg-white text-slate-600"}`}>
            <Building2 /> المسجد
          </button>
          <button onClick={() => setActiveSection("brotherhood")} className={`p-3 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${activeSection === "brotherhood" ? "bg-emerald-600 text-white shadow-lg" : "bg-white text-slate-600"}`}>
            <Users /> المؤاخاة
          </button>
          <button onClick={() => setActiveSection("constitution")} className={`p-3 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${activeSection === "constitution" ? "bg-emerald-600 text-white shadow-lg" : "bg-white text-slate-600"}`}>
            <FileText /> الصحيفة
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[300px]">
          {activeSection === "migration" && <MigrationSection />}
          {activeSection === "mosque" && <MosqueSection />}
          {activeSection === "brotherhood" && <BrotherhoodSection />}
          {activeSection === "constitution" && (
            <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200 animate-fade-in">
              <h3 className="text-2xl font-black text-amber-900 mb-4">وثيقة المدينة (الصحيفة)</h3>
              <p className="text-amber-800 leading-relaxed">
                أول دستور مدني في الإسلام، نظم العلاقة بين المسلمين (مهاجرين وأنصار) واليهود، وأقر مبدأ <strong>"المواطنة"</strong> وحرية العقيدة والدفاع المشترك عن المدينة.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IslamicStateLesson;