
import React, { useState } from 'react';
import { UNIT_2_ASSESSMENT_QUESTIONS } from '../constants';
import { CheckCircle, XCircle, RefreshCcw, ArrowRight, Award, AlertCircle, HelpCircle, PenTool, Ship, Map } from 'lucide-react';

interface Unit2AssessmentProps {
    onBack: () => void;
}

const Unit2Assessment: React.FC<Unit2AssessmentProps> = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
      if (activeStep < totalSteps) setActiveStep(prev => prev + 1);
  };

  const prevStep = () => {
      if (activeStep > 1) setActiveStep(prev => prev - 1);
  };

  // --- Step 1: Multiple Choice (Page 1 of PDF) ---
  const Question1 = () => {
      const [answers, setAnswers] = useState<{[key: number]: number}>({});
      const [showResult, setShowResult] = useState(false);

      const handleSelect = (qId: number, idx: number) => {
          if (!showResult) setAnswers(prev => ({...prev, [qId]: idx}));
      };

      const score = UNIT_2_ASSESSMENT_QUESTIONS.reduce((acc, q) => answers[q.id] === q.correctIndex ? acc + 1 : acc, 0);

      return (
          <div className="space-y-6 animate-fade-in">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600">
                  <h3 className="text-xl font-bold text-purple-900">أولاً: اختر الإجابة الصحيحة</h3>
              </div>
              
              <div className="space-y-6">
                  {UNIT_2_ASSESSMENT_QUESTIONS.map((q, idx) => (
                      <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                          <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-3">
                              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center">{idx + 1}</span>
                              {q.question}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3 pr-12">
                              {q.options.map((opt, i) => (
                                  <button
                                      key={i}
                                      onClick={() => handleSelect(q.id, i)}
                                      className={`p-3 rounded-lg border-2 text-right transition-all ${
                                          showResult 
                                              ? i === q.correctIndex 
                                                  ? 'bg-green-100 border-green-500 text-green-800' 
                                                  : answers[q.id] === i ? 'bg-red-100 border-red-500 text-red-800' : 'opacity-50'
                                              : answers[q.id] === i ? 'bg-purple-50 border-purple-500 text-purple-900' : 'hover:bg-slate-50 border-slate-200'
                                      }`}
                                  >
                                      {opt}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>

              <div className="text-center mt-6">
                  {!showResult ? (
                      <button onClick={() => setShowResult(true)} disabled={Object.keys(answers).length < 3} className="bg-purple-600 text-white px-8 py-2 rounded-full font-bold shadow-lg hover:bg-purple-700 disabled:opacity-50">
                          تأكيد الإجابات
                      </button>
                  ) : (
                      <div className="font-bold text-xl text-purple-800">
                          النتيجة: {score} / 3
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- Step 2: Short Answers & Reasoning (Page 1 & 2 of PDF) ---
  const Question2 = () => {
      const [revealed, setRevealed] = useState<{[key: string]: boolean}>({});

      const toggle = (key: string) => setRevealed(prev => ({...prev, [key]: !prev[key]}));

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600">
                  <h3 className="text-xl font-bold text-purple-900">ثانياً: أجب عن الأسئلة الآتية (تذكر وعلل)</h3>
              </div>

              {/* 1. Recall Factors */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <HelpCircle className="text-purple-500"/>
                      1. اذكر العوامل التي أدت إلى إضعاف الإمامة الثانية؟
                  </h4>
                  {revealed['weakness'] ? (
                      <div className="bg-red-50 p-4 rounded-xl text-red-900 font-medium animate-fade-in list-disc list-inside">
                          <p>- الفتن الداخلية والخلافات القبلية.</p>
                          <p>- التدخلات الخارجية (الحملات العباسية).</p>
                      </div>
                  ) : (
                      <button onClick={() => toggle('weakness')} className="text-purple-600 font-bold hover:underline text-sm">عرض الإجابة النموذجية</button>
                  )}
              </div>

              {/* 2. Mosques */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <HelpCircle className="text-purple-500"/>
                      2. اذكر المساجد التي اشتهرت بالتدريس في عمان في عصر الإمامة الثانية؟
                  </h4>
                  {revealed['mosques'] ? (
                      <div className="bg-green-50 p-4 rounded-xl text-green-900 font-medium animate-fade-in">
                          جامع نزوى (العقر) - جامع صحار - جامع بهلاء.
                      </div>
                  ) : (
                      <button onClick={() => toggle('mosques')} className="text-purple-600 font-bold hover:underline text-sm">عرض الإجابة النموذجية</button>
                  )}
              </div>

              {/* 3. Reasoning Agriculture */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <HelpCircle className="text-purple-500"/>
                      3. علل: ازدهار الزراعة في عمان في عصر الإمامة الثانية؟
                  </h4>
                  {revealed['agri'] ? (
                      <div className="bg-blue-50 p-4 rounded-xl text-blue-900 font-medium animate-fade-in">
                          بسبب اهتمام الأئمة والعمانيين بصيانة الأفلاج، وحفر أفلاج جديدة، وتنوع المحاصيل الزراعية، والاستقرار الأمني.
                      </div>
                  ) : (
                      <button onClick={() => toggle('agri')} className="text-purple-600 font-bold hover:underline text-sm">عرض الإجابة النموذجية</button>
                  )}
              </div>
          </div>
      );
  };

  // --- Step 3: Classification & Map (Page 2 of PDF) ---
  const Question3 = () => {
      // Classification State
      const [items, setItems] = useState([
          { id: 1, text: 'نشاط حركة الترجمة والتأليف', correct: 'cultural' },
          { id: 2, text: 'ظهور صناعات كالنسيج وتكرير السكر', correct: 'economic' },
          { id: 3, text: 'إنشاء المدارس النظامية', correct: 'urban' }, // "Establishment" = Urban/Construction context usually, though implies culture.
      ]);
      const [classified, setClassified] = useState<{[key: number]: string}>({});

      const handleClassify = (id: number, cat: string) => setClassified(prev => ({...prev, [id]: cat}));

      // Map State
      const [mapPoint, setMapPoint] = useState<string | null>(null);

      return (
          <div className="space-y-8 animate-slide-up">
              
              {/* Classification */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                  <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600 mb-6">
                      <h3 className="text-xl font-bold text-purple-900">ثالثاً: صنف الإنجازات (ثقافي، اقتصادي، عمراني)</h3>
                  </div>
                  
                  <div className="space-y-4">
                      {items.map(item => (
                          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-b">
                              <p className="font-bold text-slate-700 flex-1">{item.text}</p>
                              <div className="flex gap-2">
                                  <button onClick={() => handleClassify(item.id, 'cultural')} className={`px-3 py-1 rounded text-sm font-bold border transition-colors ${classified[item.id] === 'cultural' ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'}`}>ثقافي</button>
                                  <button onClick={() => handleClassify(item.id, 'economic')} className={`px-3 py-1 rounded text-sm font-bold border transition-colors ${classified[item.id] === 'economic' ? 'bg-green-500 text-white' : 'bg-white text-slate-500'}`}>اقتصادي</button>
                                  <button onClick={() => handleClassify(item.id, 'urban')} className={`px-3 py-1 rounded text-sm font-bold border transition-colors ${classified[item.id] === 'urban' ? 'bg-orange-500 text-white' : 'bg-white text-slate-500'}`}>عمراني</button>
                              </div>
                              {classified[item.id] && (
                                  <span className={`text-xl ${classified[item.id] === item.correct ? 'text-green-500' : 'text-red-500'}`}>
                                      {classified[item.id] === item.correct ? '✓' : '✗'}
                                  </span>
                              )}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Map Skills */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                  <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600 mb-6">
                      <h3 className="text-xl font-bold text-blue-900">رابعاً: الخريطة (حملة سقطرى ونقل النارنج)</h3>
                  </div>

                  <div className="relative h-80 bg-[#e0f2fe] rounded-xl overflow-hidden border-2 border-slate-300">
                      {/* Simple Map Visualization */}
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Landmasses (Approx) */}
                          <path d="M200,10 L250,50 L240,80 L200,90 L150,50 Z" fill="#d1fae5" stroke="#059669" /> {/* Arabia/Oman */}
                          <circle cx="200" cy="180" r="10" fill="#fcd34d" stroke="#d97706" className="cursor-pointer hover:fill-orange-400" onClick={() => setMapPoint('socotra')} />
                          <text x="200" y="195" fontSize="8" textAnchor="middle" fontWeight="bold">سقطرى</text>
                          
                          <circle cx="120" cy="40" r="5" fill="#fca5a5" stroke="#b91c1c" className="cursor-pointer hover:fill-red-400" onClick={() => setMapPoint('baghdad')} />
                          <text x="120" y="30" fontSize="8" textAnchor="middle" fontWeight="bold">بغداد (2)</text>

                          <circle cx="240" cy="70" r="5" fill="#ef4444" />
                          <text x="250" y="70" fontSize="8" fontWeight="bold">صحار</text>

                          {/* Fleet Path Animation */}
                          {mapPoint === 'socotra' && (
                              <path d="M240,70 Q300,130 200,180" stroke="blue" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-[dash_2s_linear_infinite]" />
                          )}
                          {/* Naranj Path */}
                          {mapPoint === 'baghdad' && (
                              <path d="M240,70 L120,40" stroke="orange" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                          )}
                      </svg>
                      
                      <div className="absolute top-4 left-4 bg-white/90 p-2 rounded shadow text-xs">
                          <p>1. اضغط على <strong>سقطرى</strong> لرسم خط سير الأسطول.</p>
                          <p>2. اضغط على <strong>الرقم 2 (بغداد)</strong> لتحديد الدولة التي نقل إليها النارنج.</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- Step 4: Political Analysis (Page 3 of PDF) ---
  const Question4 = () => {
      const [activeCard, setActiveCard] = useState<number | null>(null);

      const cards = [
          { id: 1, title: 'أسباب النجدة', content: 'الاستجابة لاستغاثة أهل سقطرى (الزهراء السقطرية) والنخوة الإسلامية والواجب الديني والوطني.' },
          { id: 2, title: 'القدرات العسكرية', content: 'امتلاك أسطول بحري قوي (بوارج)، جيش منظم، وخبرة في القتال البحري.' },
          { id: 3, title: 'نتائج التحرير', content: 'طرد الأحباش/النصارى، إعادة الأمن والاستقرار للجزيرة، وتأكيد سيادة عمان البحرية.' },
          { id: 4, title: 'إبراز التفوق حالياً', content: 'الاهتمام بالتاريخ البحري، إنشاء المتاحف، المشاركة في الفعاليات البحرية العالمية (سفينة شباب عمان)، وتطوير القوات البحرية السلطانية.' }
      ];

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-orange-100 p-4 rounded-xl border-r-4 border-orange-600">
                  <h3 className="text-xl font-bold text-orange-900">رابعاً: في ضوء دراستك للدور السياسي لعمان (تحليل)</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  {cards.map((card) => (
                      <div 
                          key={card.id}
                          onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                          className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${activeCard === card.id ? 'bg-orange-600 text-white border-orange-600 shadow-xl scale-105' : 'bg-white border-slate-200 hover:border-orange-300'}`}
                      >
                          <div className="flex justify-between items-center mb-2">
                              <h4 className="font-bold text-lg">{card.title}</h4>
                              <div className={`p-2 rounded-full ${activeCard === card.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                                  {activeCard === card.id ? <ArrowRight size={20}/> : <PenTool size={20} className="text-slate-400"/>}
                              </div>
                          </div>
                          
                          {activeCard === card.id ? (
                              <p className="text-sm font-medium leading-relaxed animate-fade-in">{card.content}</p>
                          ) : (
                              <p className="text-xs text-slate-400">اضغط للإجابة</p>
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
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-purple-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl font-black text-purple-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثانية)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-purple-600 h-full transition-all duration-500 ease-out" style={{ width: `${(activeStep / totalSteps) * 100}%` }}></div>
            </div>

            {activeStep === 1 && <Question1 />}
            {activeStep === 2 && <Question2 />}
            {activeStep === 3 && <Question3 />}
            {activeStep === 4 && <Question4 />}

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button 
                    onClick={prevStep} 
                    disabled={activeStep === 1}
                    className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-300 transition-colors"
                >
                    السابق
                </button>
                {activeStep < totalSteps ? (
                    <button 
                        onClick={nextStep} 
                        className="px-8 py-2 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-700 shadow-lg transition-transform hover:scale-105"
                    >
                        التالي
                    </button>
                ) : (
                    <button 
                        onClick={onBack} 
                        className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg flex items-center gap-2 animate-pulse"
                    >
                        <Award size={20}/> إنهاء
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Unit2Assessment;
