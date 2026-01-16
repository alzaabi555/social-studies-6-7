
import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle, XCircle, RefreshCw, HelpCircle, 
  Gavel, Users, BookOpen, Building2, Smartphone, Heart, 
  Coins, Baby, Library, Send, MousePointerClick
} from 'lucide-react';

interface Unit3AssessmentProps {
    onBack: () => void;
}

const Unit3Assessment: React.FC<Unit3AssessmentProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
  };

  // --- STEP 1: Multiple Choice (Page 1) ---
  const Step1MCQ = () => {
      const [answers, setAnswers] = useState<{[key: number]: number | null}>({});
      const [showResult, setShowResult] = useState(false);

      const questions = [
          {
              id: 1,
              text: "السلطة المسؤولة عن حل النزاعات، وضمان تطبيق القوانين وحماية الحقوق:",
              options: ["التنفيذية", "التشريعية", "القضائية", "الإعلامية"],
              correct: 2, // Judiciary
              icon: <Gavel size={32} className="text-rose-600"/>
          },
          {
              id: 2,
              text: "المجلسان اللذان يتكون منهما مجلس عُمان هما:",
              options: ["مجلس الدولة ومجلس الشورى", "مجلس الشورى ومجلس الوزراء", "مجلس الدولة والمجلس الأعلى للقضاء", "مجلس الدولة ومجلس الوزراء"],
              correct: 0, // State & Shura
              icon: <Users size={32} className="text-yellow-600"/>
          },
          {
              id: 3,
              text: "عدد أبواب النظام الأساسي للدولة:",
              options: ["5", "6", "7", "8"],
              correct: 2, // 7 Doors
              icon: <BookOpen size={32} className="text-teal-600"/>
          },
          {
              id: 4,
              text: "المبدأ الذي يُمثل حماية التراث الوطني:",
              options: ["السياسي", "الثقافي", "الاقتصادي", "الاجتماعي"],
              correct: 1, // Cultural
              icon: <Library size={32} className="text-indigo-600"/>
          }
      ];

      const handleAnswer = (qId: number, idx: number) => {
          setAnswers(prev => ({...prev, [qId]: idx}));
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-indigo-50 p-4 rounded-2xl border-r-4 border-indigo-600">
                  <h3 className="font-bold text-indigo-900 text-lg">أولاً: اختر الإجابة الصحيحة</h3>
              </div>
              
              <div className="grid gap-6">
                  {questions.map((q) => (
                      <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                          <div className="flex items-start gap-4 mb-4">
                              <div className="bg-slate-100 p-3 rounded-full">{q.icon}</div>
                              <h4 className="font-bold text-slate-800 text-lg leading-relaxed">{q.text}</h4>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                              {q.options.map((opt, idx) => (
                                  <button
                                      key={idx}
                                      onClick={() => handleAnswer(q.id, idx)}
                                      disabled={showResult}
                                      className={`p-3 rounded-xl text-right border-2 font-medium transition-all ${
                                          showResult 
                                              ? idx === q.correct 
                                                  ? 'bg-green-100 border-green-500 text-green-900' 
                                                  : answers[q.id] === idx ? 'bg-red-100 border-red-500 text-red-900' : 'bg-white border-slate-100 opacity-50'
                                              : answers[q.id] === idx ? 'bg-indigo-50 border-indigo-500 text-indigo-900' : 'bg-white border-slate-200 hover:border-indigo-300'
                                      }`}
                                  >
                                      {opt}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>

              <div className="flex justify-center mt-8">
                  {!showResult ? (
                      <button onClick={() => setShowResult(true)} className="bg-indigo-600 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                          تحقق من الإجابات
                      </button>
                  ) : (
                      <div className="text-center animate-fade-in">
                          <p className="text-lg font-bold text-slate-700 mb-4">النتيجة: {Object.keys(answers).filter(k => answers[parseInt(k)] === questions.find(q => q.id === parseInt(k))?.correct).length} / {questions.length}</p>
                          <button onClick={nextStep} className="bg-green-600 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 flex items-center gap-2 mx-auto">
                              التالي <ArrowRight className="rotate-180" size={20}/>
                          </button>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- STEP 2: Tajawob Platform (Page 1) ---
  const Step2Tajawob = () => {
      const [showGoal, setShowGoal] = useState(false);

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-blue-50 p-4 rounded-2xl border-r-4 border-blue-600">
                  <h3 className="font-bold text-blue-900 text-lg">ثانياً: ما الهدف من إطلاق سلطنة عمان للمنصة الواضحة أمامك؟</h3>
              </div>

              <div className="flex flex-col items-center justify-center bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  {/* Simulated App Interface */}
                  <div 
                    onClick={() => setShowGoal(true)}
                    className="relative w-64 h-[450px] bg-slate-800 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform group"
                  >
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                      
                      {/* Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center justify-center text-white p-6">
                          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                              <span className="text-blue-600 font-black text-3xl">تجاوب</span>
                          </div>
                          <h2 className="text-2xl font-black mb-2">TAJAWOB</h2>
                          <p className="text-sm opacity-80 text-center mb-8">معاً لخدمات حكومية أفضل</p>
                          
                          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-sm shadow-md animate-pulse">
                              اضغط لمعرفة الهدف
                          </button>
                      </div>

                      {/* Reflection/Glare */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                  </div>

                  {showGoal && (
                      <div className="mt-8 bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 text-center max-w-lg animate-scale-in">
                          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                              <Send size={24} />
                          </div>
                          <h4 className="font-bold text-blue-900 mb-2">الهدف من المنصة:</h4>
                          <p className="text-slate-700 font-medium leading-relaxed">
                              تحسين جودة الخدمات الحكومية، وتعزيز التواصل والمشاركة المجتمعية من خلال استقبال الملاحظات والمقترحات والشكاوى من المواطنين والمقيمين.
                          </p>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- STEP 3: Definitions (Page 2) ---
  const Step3Definitions = () => {
      const [revealed, setRevealed] = useState<{[key: number]: boolean}>({});

      const terms = [
          { id: 1, term: "النظام الأساسي للدولة", def: "الوثيقة الرسمية التي تحدد شكل الدولة ونظام الحكم فيها، وتبين الحقوق والواجبات، وتنظم السلطات." },
          { id: 2, term: "السلطة التنفيذية", def: "السلطة المسؤولة عن تنفيذ السياسات العامة للدولة، وتتمثل في مجلس الوزراء والوزارات والهيئات." },
          { id: 3, term: "الهيكل التنظيمي للدولة", def: "النظام الذي يوضح توزيع السلطات والمهام والعلاقات بين مؤسسات الدولة المختلفة (التشريعية، التنفيذية، القضائية)." }
      ];

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-purple-50 p-4 rounded-2xl border-r-4 border-purple-600">
                  <h3 className="font-bold text-purple-900 text-lg">ثالثاً: اكتب التعريف المناسب أمام المصطلحات</h3>
              </div>

              <div className="grid gap-4">
                  {terms.map((item) => (
                      <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group">
                          <div className="flex items-center justify-between mb-4">
                              <h4 className="font-black text-lg text-slate-800 flex items-center gap-2">
                                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 text-sm">{item.id}</div>
                                  {item.term}
                              </h4>
                              <button 
                                  onClick={() => setRevealed(prev => ({...prev, [item.id]: !prev[item.id]}))}
                                  className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${revealed[item.id] ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                              >
                                  {revealed[item.id] ? 'إخفاء' : 'كشف التعريف'}
                              </button>
                          </div>
                          
                          <div className={`overflow-hidden transition-all duration-500 ${revealed[item.id] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="bg-purple-50 p-4 rounded-xl text-purple-900 font-medium leading-relaxed border border-purple-100">
                                  {item.def}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- STEP 4: Charity Scheme (Page 2) ---
  const Step4Scheme = () => {
      const [work, setWork] = useState('');
      const [effect, setEffect] = useState('');
      const [showAns, setShowAns] = useState(false);

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-green-50 p-4 rounded-2xl border-r-4 border-green-600">
                  <h3 className="font-bold text-green-900 text-lg">رابعاً: ادرس الشعار ثم أكمل المخطط</h3>
              </div>

              <div className="flex flex-col items-center gap-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  {/* Logo Simulation */}
                  <div className="w-48 h-48 bg-white rounded-full shadow-lg border-4 border-green-600 flex flex-col items-center justify-center p-4 text-center animate-pulse-slow">
                      <Heart size={40} className="text-green-600 mb-2 fill-green-100"/>
                      <h4 className="font-black text-green-800 text-sm">الهيئة العمانية للأعمال الخيرية</h4>
                      <p className="text-[10px] text-green-600 mt-1">Oman Charitable Organization</p>
                  </div>

                  {/* Flow Chart */}
                  <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
                      
                      {/* Box 1: Work */}
                      <div className="flex flex-col items-center">
                          <div className="h-10 w-0.5 bg-slate-300 mb-2"></div>
                          <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 w-full text-center hover:shadow-md transition-shadow">
                              <h5 className="font-bold text-green-900 mb-3">عمل واحد تقوم به:</h5>
                              {showAns ? (
                                  <p className="text-green-700 font-bold animate-fade-in">تقديم المساعدات للمحتاجين / إغاثة المتضررين</p>
                              ) : (
                                  <div className="h-8 bg-slate-200 rounded animate-pulse w-3/4 mx-auto"></div>
                              )}
                          </div>
                      </div>

                      {/* Box 2: Effect */}
                      <div className="flex flex-col items-center">
                          <div className="h-10 w-0.5 bg-slate-300 mb-2"></div>
                          <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 w-full text-center hover:shadow-md transition-shadow">
                              <h5 className="font-bold text-blue-900 mb-3">أثر واحد لهذا العمل:</h5>
                              {showAns ? (
                                  <p className="text-blue-700 font-bold animate-fade-in">تعزيز التكافل الاجتماعي / نشر المحبة</p>
                              ) : (
                                  <div className="h-8 bg-slate-200 rounded animate-pulse w-3/4 mx-auto"></div>
                              )}
                          </div>
                      </div>
                  </div>

                  <button 
                      onClick={() => setShowAns(!showAns)}
                      className="mt-4 bg-slate-800 text-white px-8 py-2 rounded-full font-bold shadow-lg hover:bg-slate-700"
                  >
                      {showAns ? 'إخفاء الإجابة' : 'إظهار الإجابة النموذجية'}
                  </button>
              </div>
          </div>
      );
  };

  // --- STEP 5: Classification (Page 2) ---
  const Step5Classification = () => {
      const [matches, setMatches] = useState<{[key: number]: string}>({});

      const items = [
          { id: 1, type: 'economic', icon: <div className="text-6xl mb-2">📈</div>, label: 'رسم بياني/نقود', hint: 'يرتبط بالمال والتنمية' },
          { id: 2, type: 'social', icon: <div className="text-6xl mb-2">👨‍👩‍👧‍👦</div>, label: 'أسرة عمانية', hint: 'يرتبط بالمجتمع والأسرة' },
          { id: 3, type: 'cultural', icon: <div className="text-6xl mb-2">📚</div>, label: 'كتب ومخطوطات', hint: 'يرتبط بالعلم والتراث' },
      ];

      const handleClassify = (id: number, type: string) => {
          setMatches(prev => ({...prev, [id]: type}));
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-orange-50 p-4 rounded-2xl border-r-4 border-orange-600">
                  <h3 className="font-bold text-orange-900 text-lg">خامساً: صنف الصور حسب نوع المبادئ الموجهة لسياسة الدولة</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {items.map((item) => (
                      <div key={item.id} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:scale-105 transition-transform">
                          <div className="bg-slate-50 w-full h-40 rounded-2xl flex flex-col items-center justify-center mb-4 border-2 border-dashed border-slate-200">
                              {item.icon}
                              <span className="text-xs text-slate-400 font-bold">{item.label}</span>
                          </div>
                          
                          {matches[item.id] ? (
                              <div className={`px-6 py-2 rounded-xl font-black text-white shadow-md animate-scale-in ${
                                  matches[item.id] === 'economic' ? 'bg-green-500' : 
                                  matches[item.id] === 'social' ? 'bg-blue-500' : 'bg-purple-500'
                              }`}>
                                  {matches[item.id] === 'economic' ? 'المبدأ الاقتصادي' : 
                                   matches[item.id] === 'social' ? 'المبدأ الاجتماعي' : 'المبدأ الثقافي'}
                              </div>
                          ) : (
                              <div className="flex flex-col gap-2 w-full">
                                  <button onClick={() => handleClassify(item.id, 'economic')} className="bg-green-50 text-green-700 hover:bg-green-100 py-2 rounded-lg font-bold text-sm transition-colors">اقتصادي</button>
                                  <button onClick={() => handleClassify(item.id, 'social')} className="bg-blue-50 text-blue-700 hover:bg-blue-100 py-2 rounded-lg font-bold text-sm transition-colors">اجتماعي</button>
                                  <button onClick={() => handleClassify(item.id, 'cultural')} className="bg-purple-50 text-purple-700 hover:bg-purple-100 py-2 rounded-lg font-bold text-sm transition-colors">ثقافي</button>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثالثة - مطابق للكتاب)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            {currentStep === 1 && <Step1MCQ />}
            {currentStep === 2 && <Step2Tajawob />}
            {currentStep === 3 && <Step3Definitions />}
            {currentStep === 4 && <Step4Scheme />}
            {currentStep === 5 && <Step5Classification />}

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button 
                    onClick={prevStep} 
                    disabled={currentStep === 1}
                    className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-300 transition-colors"
                >
                    السابق
                </button>
                {currentStep < totalSteps ? (
                    <button 
                        onClick={nextStep} 
                        className="px-8 py-2 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-transform hover:scale-105"
                    >
                        التالي
                    </button>
                ) : (
                    <button 
                        onClick={onBack} 
                        className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg flex items-center gap-2 animate-pulse"
                    >
                        <RefreshCw size={20}/> إنهاء
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Unit3Assessment;
