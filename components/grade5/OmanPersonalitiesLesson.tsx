import React, { useState } from 'react';
import { ArrowRight, User, BookOpen, MessageCircle, Star, HelpCircle, Check, X } from 'lucide-react';

const OmanPersonalitiesLesson = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("puzzle");

  // 1. لغز الدرس
  const PuzzleSection = () => {
    const [revealed, setRevealed] = useState([false, false, false, false, false]);
    const questions = [
      {q: "من كان كلامه صحيحاً يوصف بأنه؟", a: "صادق", letter: "ص"},
      {q: "إذا كتم الإنسان غضبه يوصف بأنه؟", a: "حليم", letter: "ح"},
      {q: "من يعطى شيئاً فيحتفظ به يسمى؟", a: "أمين", letter: "أ"},
      {q: "من يُتهم بشيء ثم يظهر أنه غير مذنب؟", a: "بريء", letter: "ب"},
      {q: "يجب على الصغير أن ... الكبير؟", a: "يوقر", letter: "ي"}
    ];
    const isComplete = revealed.every(Boolean);

    const handleReveal = (index) => {
      const newRevealed = [...revealed];
      newRevealed[index] = true;
      setRevealed(newRevealed);
    };

    return (
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-indigo-100 max-w-2xl mx-auto animate-fade-in">
        <h3 className="text-2xl font-black text-indigo-900 mb-6 text-center">لغز الكلمة السرية 🔐</h3>
        <div className="space-y-3">
          {questions.map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg">
              <div className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">{index + 1}</div>
              <p className="flex-1 text-sm text-slate-700">{item.q}</p>
              <button 
                onClick={() => handleReveal(index)}
                className={`px-4 py-1 rounded text-sm font-bold ${revealed[index] ? "bg-green-100 text-green-700" : "bg-white border border-indigo-200 text-indigo-600"}`}
              >
                {revealed[index] ? item.a : "كشف"}
              </button>
              <div className={`w-10 h-10 rounded flex items-center justify-center font-black text-xl transition-all ${revealed[index] ? "bg-indigo-600 text-white" : "bg-slate-200 text-transparent"}`}>
                {item.letter}
              </div>
            </div>
          ))}
        </div>
        {isComplete && (
          <div className="mt-6 text-center animate-bounce bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <p className="text-slate-500 text-sm">الكلمة السرية هي:</p>
            <h2 className="text-4xl font-black text-indigo-800 mt-2">صـحـابـي</h2>
          </div>
        )}
      </div>
    );
  };

  // 2. شخصيات خالدة
  const ProfilesSection = () => {
    const [selectedId, setSelectedId] = useState(null);
    const profiles = [
      {id: 1, name: "كعب بن برشة الطاحي", role: "مستشار الملكين", color: "bg-emerald-500", desc: "استشاره ملكا عمان (عبد وجيفر) في رسالة النبي ﷺ، فنصحهما بالخير وتصديق الرسالة."},
      {id: 2, name: "أبو صفرة العتكي", role: "القائد الشجاع", color: "bg-blue-600", desc: "وفد على الرسول ﷺ وأسلم، وشارك بشجاعة في الفتوحات الإسلامية."},
      {id: 3, name: "سلمة بن عياذ الأزدي", role: "الداعية المخلص", color: "bg-orange-500", desc: "طلب من النبي ﷺ أن يدعو لقومه بالألفة، فاستجاب الله دعاءه."},
      {id: 4, name: "صالح بن المتوكل", role: "الرفيق الوفي", color: "bg-rose-500", desc: "كان رفيق الدرب للصحابي مازن بن غضوبة في رحلته للمدينة المنورة."}
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            onClick={() => setSelectedId(selectedId === profile.id ? null : profile.id)}
            className={`cursor-pointer rounded-2xl p-6 border-2 transition-all ${selectedId === profile.id ? "bg-white border-indigo-500 shadow-lg scale-105" : "bg-white border-slate-200 hover:border-indigo-200"}`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${profile.color}`}>
                {profile.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{profile.name}</h4>
                <p className="text-xs text-slate-500">{profile.role}</p>
              </div>
            </div>
            {selectedId === profile.id && (
              <p className="mt-4 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg leading-relaxed animate-fade-in">
                {profile.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-indigo-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-6">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold bg-white px-4 py-2 rounded-lg shadow-sm">
            <ArrowRight size={20} /> خروج
          </button>
          <h1 className="text-2xl font-black text-indigo-900">شخصيات عمانية 👥</h1>
        </div>

        {/* Navigation */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm mb-8 overflow-x-auto">
          <button onClick={() => setActiveTab("puzzle")} className={`flex-1 px-4 py-2 rounded-lg font-bold whitespace-nowrap ${activeTab === "puzzle" ? "bg-indigo-100 text-indigo-700" : "text-slate-500"}`}>
            لغز الدرس
          </button>
          <button onClick={() => setActiveTab("profiles")} className={`flex-1 px-4 py-2 rounded-lg font-bold whitespace-nowrap ${activeTab === "profiles" ? "bg-indigo-100 text-indigo-700" : "text-slate-500"}`}>
            شخصيات خالدة
          </button>
          <button onClick={() => setActiveTab("story")} className={`flex-1 px-4 py-2 rounded-lg font-bold whitespace-nowrap ${activeTab === "story" ? "bg-indigo-100 text-indigo-700" : "text-slate-500"}`}>
            قصة سويد
          </button>
        </div>

        {activeTab === "puzzle" && <PuzzleSection />}
        {activeTab === "profiles" && <ProfilesSection />}
        {activeTab === "story" && (
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-indigo-600 text-center animate-fade-in">
            <h3 className="text-2xl font-black text-slate-800 mb-4">قصة وفد سويد بن الحارث</h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              حاورهم الرسول ﷺ فأعجب بمنطقهم وحكمتهم، وقال عنهم:
              <br />
              <span className="text-indigo-600 font-black block mt-2 text-xl">"حكماء علماء كادوا من فقههم أن يكونوا أنبياء"</span>
            </p>
            <div className="bg-indigo-50 p-4 rounded-xl text-indigo-900 font-medium text-sm">
              أقرهم الرسول على 5 خصال حميدة كانت فيهم، منها: الشكر عند الرخاء، والصبر عند البلاء.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OmanPersonalitiesLesson;