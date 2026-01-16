import React, { useState } from 'react';
import { 
  ArrowRight, Sun, Globe, Menu, MessageCircle, 
  HelpCircle, Check, X, Star, RefreshCw, Award 
} from 'lucide-react';

// === 1. البيانات الثابتة (الأسئلة) ===
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "ما هو الكوكب الذي نعيش عليه ويعرف بالكوكب المائي؟",
    options: ["المريخ", "الأرض", "الزهرة"],
    correctIndex: 1
  },
  {
    id: 2,
    question: "أقرب الكواكب إلى الشمس هو:",
    options: ["عطارد", "نبتون", "زحل"],
    correctIndex: 0
  },
  {
    id: 3,
    question: "كم عدد كواكب المجموعة الشمسية؟",
    options: ["7 كواكب", "8 كواكب", "9 كواكب"],
    correctIndex: 1
  }
];

// === 2. المكونات الفرعية (Sub-Components) ===

// أ. قسم الحوار (صفحة 17)
const DialogueSection = () => (
  <div className="bg-white rounded-3xl p-6 shadow-lg border-r-8 border-purple-400 mb-8 flex flex-col md:flex-row items-center gap-6 animate-fade-in">
    <div className="md:w-1/4 flex justify-center">
      <div className="relative w-40 h-40 flex items-center justify-center bg-purple-100 rounded-full">
         <span className="text-6xl">👩‍👧</span>
      </div>
    </div>
    <div className="md:w-3/4 space-y-4">
      <h3 className="font-black text-purple-900 mb-2">حوار استهلالي (كما ورد في الكتاب ص١٧)</h3>
      <div className="bg-purple-50 p-4 rounded-2xl rounded-tr-none border border-purple-100 relative">
        <span className="absolute -top-3 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">الأم</span>
        <p className="text-slate-700 font-medium mt-2">"ماذا تشاهدين يا فجر؟ أراكِ تقفين عند النافذة منذ فترة."</p>
      </div>
      <div className="bg-amber-50 p-4 rounded-2xl rounded-tl-none border border-amber-100 relative mr-8">
        <span className="absolute -top-3 left-4 bg-amber-600 text-white text-xs px-2 py-1 rounded">فجر</span>
        <p className="text-slate-700 font-medium mt-2">"أتأمل الشمس يا أمي، هل هي قريبة منا؟ وهل نحن الكوكب الوحيد الموجود في هذا الكون؟"</p>
      </div>
    </div>
  </div>
);

// ب. محاكاة النظام الشمسي (صفحة 18)
const SolarSystemViz = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const planets = [
    { id: 'mercury', name: 'عطارد', color: 'bg-stone-400', size: 15, orbit: 140, speed: 4, desc: 'أقرب الكواكب للشمس.' },
    { id: 'venus', name: 'الزهرة', color: 'bg-orange-300', size: 25, orbit: 200, speed: 6, desc: 'ألمع الكواكب في سماء الليل.' },
    { id: 'earth', name: 'الأرض', color: 'bg-blue-500', size: 28, orbit: 280, speed: 8, desc: 'الكوكب المائي (الحياة).' },
    { id: 'mars', name: 'المريخ', color: 'bg-red-500', size: 22, orbit: 360, speed: 10, desc: 'الكوكب الأحمر.' },
    { id: 'jupiter', name: 'المشتري', color: 'bg-orange-100', size: 50, orbit: 460, speed: 14, desc: 'أضخم الكواكب.' },
    { id: 'saturn', name: 'زحل', color: 'bg-yellow-200', size: 45, orbit: 580, speed: 18, desc: 'يتميز بحلقاته الجميلة.' },
  ];

  return (
    <div className="bg-slate-900 rounded-3xl p-4 mb-8 overflow-hidden relative min-h-[600px] flex items-center justify-center shadow-2xl border-4 border-slate-700">
      {/* خلفية النجوم */}
      <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      
      {/* الشمس */}
      <div className="absolute w-24 h-24 bg-yellow-500 rounded-full shadow-[0_0_80px_rgba(253,224,71,0.6)] z-10 flex items-center justify-center animate-pulse">
        <span className="text-white font-black text-sm">الشمس</span>
      </div>

      {/* الكواكب والمدارات */}
      {planets.map((planet) => (
        <div 
          key={planet.id}
          className="absolute rounded-full border border-white/10 flex items-center justify-center pointer-events-none"
          style={{ width: planet.orbit, height: planet.orbit }}
        >
          <div className="w-full h-full animate-spin" style={{ animationDuration: `${planet.speed}s` }}>
            <div 
              onClick={() => setSelectedPlanet(planet.id)}
              className={`absolute top-1/2 -right-[${planet.size/2}px] -translate-y-1/2 translate-x-1/2 ${planet.color} rounded-full shadow-lg pointer-events-auto cursor-pointer hover:scale-150 transition-transform z-20`}
              style={{ width: planet.size, height: planet.size }}
            />
          </div>
        </div>
      ))}

      {/* نافذة المعلومات */}
      {selectedPlanet && (
        <div className="absolute bottom-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-2xl z-30 text-center animate-slide-up w-64">
          <h3 className="font-black text-indigo-900 text-lg mb-1">
            {planets.find(p => p.id === selectedPlanet)?.name}
          </h3>
          <p className="text-slate-700 text-sm mb-3">
            {planets.find(p => p.id === selectedPlanet)?.desc}
          </p>
          <button onClick={() => setSelectedPlanet(null)} className="text-xs font-bold text-red-500 hover:text-red-700">إغلاق</button>
        </div>
      )}
    </div>
  );
};

// ج. نشاط الجدول التفاعلي (صفحة 19)
const ActivityTable = () => {
  const [status, setStatus] = useState<('correct' | 'wrong' | null)[]>([null, null, null, null]);
  const answers = ['عطارد', 'المشتري', 'الأرض', 'زحل'];

  const checkAnswer = (idx: number, val: string) => {
    const newStatus = [...status];
    if (val === answers[idx]) newStatus[idx] = 'correct';
    else if (val !== '') newStatus[idx] = 'wrong';
    else newStatus[idx] = null;
    setStatus(newStatus);
  };

  return (
    <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-200 mb-8">
      <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
        <MessageCircle /> تأمل وأجب (نشاط صفحة ١٩)
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-center bg-white rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-amber-200 text-amber-900">
            <tr>
              <th className="p-4">العبارة</th>
              <th className="p-4">الإجابة</th>
              <th className="p-4">التحقق</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-50">
            {[
              { q: 'الكوكب الأقرب إلى الشمس', opts: ['الأرض', 'عطارد', 'نبتون'] },
              { q: 'الكوكب الأكبر حجماً', opts: ['المشتري', 'زحل', 'الشمس'] },
              { q: 'الكوكب الثالث في الترتيب', opts: ['الزهرة', 'الأرض', 'المريخ'] },
              { q: 'الكوكب ذو الحلقات', opts: ['أورانوس', 'زحل', 'نبتون'] }
            ].map((row, idx) => (
              <tr key={idx}>
                <td className="p-4 text-slate-700 font-bold text-right">{row.q}</td>
                <td className="p-4">
                  <select onChange={(e) => checkAnswer(idx, e.target.value)} className="bg-slate-50 border-2 border-slate-200 rounded-lg p-2 w-full outline-none">
                    <option value="">اختر...</option>
                    {row.opts.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </td>
                <td className="p-4">
                  {status[idx] === 'correct' && <Check className="mx-auto text-green-500 animate-bounce" />}
                  {status[idx] === 'wrong' && <X className="mx-auto text-red-500 animate-pulse" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// د. مكون الاختبار الداخلي
const InternalQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === QUIZ_QUESTIONS[currentQ].correctIndex) setScore(s => s + 1);
    if (currentQ < QUIZ_QUESTIONS.length - 1) setCurrentQ(c => c + 1);
    else setFinished(true);
  };

  if (finished) return (
    <div className="text-center bg-white p-8 rounded-3xl shadow-lg border-t-8 border-indigo-500">
      <Award size={64} className="mx-auto text-yellow-400 mb-4" />
      <h3 className="text-2xl font-black text-indigo-900">نتيجتك: {score} من {QUIZ_QUESTIONS.length}</h3>
      <button onClick={() => {setFinished(false); setCurrentQ(0); setScore(0);}} className="mt-4 bg-slate-100 px-6 py-2 rounded-lg font-bold text-slate-600 flex items-center gap-2 mx-auto">
        <RefreshCw size={16}/> إعادة
      </button>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <span className="font-bold text-slate-500">سؤال {currentQ + 1}</span>
        <span className="text-indigo-600 font-black">{score} نقاط</span>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-6">{QUIZ_QUESTIONS[currentQ].question}</h3>
      <div className="space-y-3">
        {QUIZ_QUESTIONS[currentQ].options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleAnswer(i)}
            className="w-full text-right p-4 rounded-xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all font-bold text-slate-700"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

// === 3. المكون الرئيسي للدرس ===
const EarthSpheresLesson1 = ({ onBack }: { onBack: () => void }) => {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal" dir="rtl">
      {/* Sidebar */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 px-3 py-2 rounded-lg w-full mb-4 font-bold text-sm">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">أغلفة كوكب الأرض 🌍</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {[
            { id: 'intro', label: 'الحوار الافتتاحي', icon: MessageCircle },
            { id: 'system', label: 'المجموعة الشمسية', icon: Sun },
            { id: 'activity', label: 'نشاط (تأمل وأجب)', icon: HelpCircle },
            { id: 'quiz', label: 'الاختبار', icon: Check }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => {setActiveSection(item.id); setMobileMenuOpen(false);}} 
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === item.id ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <item.icon size={20}/> {item.label}
            </button>
          ))}
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">الدرس الأول</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
           {activeSection === 'intro' && <DialogueSection />}
           {activeSection === 'system' && <SolarSystemViz />}
           {activeSection === 'activity' && <ActivityTable />}
           {activeSection === 'quiz' && <InternalQuiz />}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson1;