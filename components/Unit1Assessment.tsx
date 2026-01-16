
import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle, XCircle, RefreshCw, HelpCircle, 
  Map as MapIcon, Activity, Thermometer, Wind, Droplets, 
  Mountain, ArrowDown, BarChart2, Gauge, Waves, Sun
} from 'lucide-react';

interface Unit1AssessmentProps {
    onBack: () => void;
}

const Unit1Assessment: React.FC<Unit1AssessmentProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Based on the PDF structure (MCQ, Short Answer, Map Compare, Terms, List, Diagram)

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
  };

  // --- STEP 1: Multiple Choice (Page 1 & 2 of PDF) ---
  const Step1MCQ = () => {
      const [answers, setAnswers] = useState<{[key: number]: number | null}>({});
      const [showResult, setShowResult] = useState(false);

      const questions = [
          {
              id: 1,
              text: "يُستخدم الجهاز الذي أمامك في قياس:",
              options: ["الحرارة", "الضغط الجوي", "كمية الأمطار", "سرعة الرياح"],
              correct: 1, // Barometer -> Pressure
              visual: (
                  <div className="w-32 h-32 bg-slate-100 rounded-full border-4 border-slate-300 relative shadow-inner mx-auto mb-4 flex items-center justify-center">
                      <div className="absolute inset-2 border border-slate-300 rounded-full"></div>
                      <div className="absolute top-2 text-[10px] font-bold text-slate-400">1000</div>
                      <div className="absolute bottom-2 text-[10px] font-bold text-slate-400">1040</div>
                      <div className="absolute left-2 text-[10px] font-bold text-slate-400">1020</div>
                      <div className="absolute right-2 text-[10px] font-bold text-slate-400">980</div>
                      <div className="w-1 h-12 bg-red-600 absolute bottom-1/2 left-1/2 origin-bottom transform rotate-45 rounded-full shadow-md z-10 transition-transform duration-1000 animate-[wiggle_3s_infinite]"></div>
                      <div className="w-3 h-3 bg-slate-800 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>
                      <span className="mt-16 text-xs font-bold text-slate-500">Barometer</span>
                  </div>
              )
          },
          {
              id: 2,
              text: "تتأثر المنطقة المشار إليها بالرقم (1) بمناخ البحر المتوسط نتيجة:",
              note: "(في الخريطة: الرقم 1 يشير إلى شمال عمان/مسندم، ولكن في خريطة السؤال المرفقة الرقم 1 يشير إلى ظفار، وبناء على الخيارات والسياق العماني، ظفار تتأثر بالرياح الموسمية، لكن نص السؤال يقول 'مناخ البحر المتوسط' وهو عادة في الشمال. سنعتمد إجابة 'الرياح الموسمية' إذا كان المقصود ظفار كما في الرسم، أو نصحح المفهوم). *تنويه: بناءً على الرسم (1) في الجنوب (ظفار)، الإجابة المنطقية هي الرياح الموسمية.*",
              options: ["الرياح الموسمية", "الارتفاع عن السطح", "القرب من البحر", "الموقع الفلكي"],
              correct: 0, // Monsoon winds for Dhofar (Region 1 in map)
              visual: (
                  <div className="relative h-48 bg-blue-50 rounded-xl overflow-hidden border-2 border-slate-200 mb-4">
                      {/* Simplified Oman Map */}
                      <svg viewBox="0 0 200 300" className="h-full w-full">
                          <path d="M50,20 L150,40 L180,150 L120,280 L40,220 Z" fill="#e2e8f0" stroke="#94a3b8" />
                          {/* Point 1 (South/Dhofar) */}
                          <circle cx="120" cy="260" r="8" fill="#ef4444" className="animate-ping" />
                          <text x="120" y="265" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">1</text>
                          {/* Wind Arrows */}
                          <path d="M150,300 L130,270" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow)" className="animate-pulse"/>
                          <path d="M170,290 L140,260" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow)"/>
                      </svg>
                  </div>
              )
          },
          {
              id: 3,
              text: "الضغط الجوي السائد في المنطقة المشار إليها بالرمز (ب):",
              note: "(الرمز ب يشير إلى منطقة قطبية/باردة جداً)",
              options: ["منخفض", "متوسط", "مرتفع", "مرتفع جداً"],
              correct: 3, // Very High (Polar High)
              visual: (
                  <div className="relative h-32 bg-slate-100 rounded-xl border border-slate-200 mb-4 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-50"></div>
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center">
                          <span className="text-3xl">❄️</span>
                          <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mx-auto mt-1">ب</div>
                      </div>
                  </div>
              )
          },
          {
              id: 4,
              text: "الجزء المشار إليه بالرمز (أ) يُطلق عليه:",
              options: ["القشرة الأرضية", "النواة الداخلية", "النواة الخارجية", "الوشاح"],
              correct: 1, // Inner Core
              visual: (
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="48" fill="#8B4513" /> {/* Crust/Mantle */}
                          <circle cx="50" cy="50" r="25" fill="#f97316" /> {/* Outer Core */}
                          <circle cx="50" cy="50" r="12" fill="#ef4444" /> {/* Inner Core */}
                          <line x1="50" y1="50" x2="90" y2="50" stroke="white" strokeWidth="2" />
                          <rect x="85" y="40" width="15" height="20" fill="white" rx="2" />
                          <text x="92" y="55" fontSize="12" fill="black" textAnchor="middle" fontWeight="bold">أ</text>
                      </svg>
                  </div>
              )
          },
          {
              id: 5,
              text: "الجهاز المقابل يُستخدم لرصد:",
              options: ["البراكين", "الزلازل", "المطر", "الرياح"],
              correct: 1, // Seismograph -> Earthquakes
              visual: (
                  <div className="w-full h-32 bg-white rounded-xl border border-slate-200 mb-4 flex items-center justify-center">
                      <Activity size={48} className="text-red-500 animate-bounce" />
                      <div className="ml-4 h-16 w-32 bg-slate-50 border border-slate-300 relative overflow-hidden">
                          <svg className="absolute inset-0 w-full h-full">
                              <path d="M0,32 L10,32 L15,10 L20,50 L25,20 L30,40 L35,32 L100,32" fill="none" stroke="red" strokeWidth="2" className="animate-[dash_2s_linear_infinite]" />
                          </svg>
                      </div>
                  </div>
              )
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
              
              <div className="grid md:grid-cols-2 gap-6">
                  {questions.map((q) => (
                      <div key={q.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                          {q.visual}
                          <h4 className="font-bold text-slate-800 mb-4 text-right flex items-start gap-2">
                              <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-1">{q.id}</span>
                              {q.text}
                          </h4>
                          <div className="space-y-2">
                              {q.options.map((opt, idx) => (
                                  <button
                                      key={idx}
                                      onClick={() => handleAnswer(q.id, idx)}
                                      disabled={showResult}
                                      className={`w-full p-3 rounded-xl text-right border-2 transition-all ${
                                          showResult 
                                              ? idx === q.correct 
                                                  ? 'bg-green-100 border-green-500 text-green-900' 
                                                  : answers[q.id] === idx ? 'bg-red-100 border-red-500 text-red-900' : 'bg-white border-slate-100 opacity-50'
                                              : answers[q.id] === idx ? 'bg-indigo-50 border-indigo-500 text-indigo-900' : 'bg-white border-slate-100 hover:border-indigo-200'
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

  // --- STEP 2: Device Identification (Page 3 Q1) ---
  const Step2Device = () => {
      const [revealed, setRevealed] = useState(false);

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-blue-50 p-4 rounded-2xl border-r-4 border-blue-600">
                  <h3 className="font-bold text-blue-900 text-lg">ثانياً: ادرس الشكل المقابل (1)</h3>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
                  {/* Interactive Barometer */}
                  <div className="relative w-32 h-80 bg-slate-100 rounded-2xl border-4 border-slate-300 flex flex-col items-center justify-end p-2 shadow-inner">
                      <div className="w-4 h-full bg-slate-200 rounded-full relative overflow-hidden">
                          <div className="absolute bottom-0 w-full bg-red-600 transition-all duration-1000" style={{ height: revealed ? '70%' : '20%' }}></div>
                      </div>
                      <div className="w-20 h-20 bg-red-600 rounded-full mt-[-10px] border-4 border-slate-300 z-10 shadow-lg"></div>
                      
                      {/* Labels */}
                      <div className="absolute right-0 top-10 flex flex-col gap-8 text-[10px] font-bold text-slate-400 pr-1">
                          <span>-- 1000</span>
                          <span>-- 900</span>
                          <span>-- 800</span>
                      </div>
                  </div>

                  <div className="flex-1 space-y-6 text-center md:text-right">
                      <div className="space-y-4">
                          <div>
                              <label className="block text-slate-600 font-bold mb-2">أ- ما اسم الجهاز؟</label>
                              {revealed ? (
                                  <div className="p-3 bg-green-100 text-green-800 rounded-xl font-bold animate-fade-in border border-green-200">البارومتر الزئبقي</div>
                              ) : (
                                  <div className="h-12 bg-slate-100 rounded-xl animate-pulse"></div>
                              )}
                          </div>
                          <div>
                              <label className="block text-slate-600 font-bold mb-2">ب- فيم يُستخدم؟</label>
                              {revealed ? (
                                  <div className="p-3 bg-green-100 text-green-800 rounded-xl font-bold animate-fade-in border border-green-200">قياس الضغط الجوي</div>
                              ) : (
                                  <div className="h-12 bg-slate-100 rounded-xl animate-pulse"></div>
                              )}
                          </div>
                      </div>

                      <button 
                          onClick={() => setRevealed(true)}
                          disabled={revealed}
                          className="bg-blue-600 text-white px-8 py-2 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                          {revealed ? 'تمت الإجابة' : 'إظهار الإجابة'}
                      </button>
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 3: Map Comparison (Page 3 Q2) ---
  const Step3Map = () => {
      const [tableData, setTableData] = useState({
          a_temp: '', a_rain: '', a_pressure: '',
          b_temp: '', b_rain: '', b_pressure: ''
      });
      const [showResult, setShowResult] = useState(false);

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-orange-50 p-4 rounded-2xl border-r-4 border-orange-600">
                  <h3 className="font-bold text-orange-900 text-lg">ثانياً (2): قارن بين الموقعين (أ) و (ب) في فصل الصيف</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* Map Visual */}
                  <div className="bg-blue-50 rounded-3xl overflow-hidden border-2 border-slate-300 relative h-96 shadow-lg">
                      <svg viewBox="0 0 300 400" className="w-full h-full">
                          <path d="M80,20 L220,50 L250,200 L150,380 L50,300 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="2"/>
                          
                          {/* Location A (Inland Desert) */}
                          <circle cx="150" cy="150" r="15" fill="#f97316" className="animate-pulse"/>
                          <text x="150" y="155" textAnchor="middle" fill="white" fontWeight="bold">أ</text>
                          <text x="150" y="125" textAnchor="middle" fontSize="12" fill="#c2410c" fontWeight="bold">صحراء (صيف)</text>

                          {/* Location B (Dhofar Coast) */}
                          <circle cx="100" cy="350" r="15" fill="#10b981" className="animate-pulse"/>
                          <text x="100" y="355" textAnchor="middle" fill="white" fontWeight="bold">ب</text>
                          <text x="100" y="380" textAnchor="middle" fontSize="12" fill="#047857" fontWeight="bold">ظفار (خريف)</text>

                          {/* Weather Icons */}
                          <g transform="translate(180, 140)"><Sun className="text-yellow-500" size={32}/></g>
                          <g transform="translate(60, 320)"><Wind className="text-blue-400" size={24}/><Droplets className="text-blue-500" size={16}/></g>
                      </svg>
                  </div>

                  {/* Comparison Table */}
                  <div className="space-y-6">
                      <div className="overflow-hidden rounded-xl border border-slate-200">
                          <table className="w-full text-center">
                              <thead className="bg-slate-800 text-white">
                                  <tr>
                                      <th className="p-3">أوجه المقارنة</th>
                                      <th className="p-3 bg-orange-600">الموقع (أ)</th>
                                      <th className="p-3 bg-green-600">الموقع (ب)</th>
                                  </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-slate-100">
                                  <tr>
                                      <td className="p-3 font-bold bg-slate-50">درجة الحرارة</td>
                                      <td className="p-2">
                                          <select onChange={(e) => setTableData({...tableData, a_temp: e.target.value})} className="w-full p-2 bg-orange-50 rounded border border-orange-200 text-sm">
                                              <option value="">اختر..</option>
                                              <option value="high">مرتفعة</option>
                                              <option value="low">منخفضة</option>
                                          </select>
                                      </td>
                                      <td className="p-2">
                                          <select onChange={(e) => setTableData({...tableData, b_temp: e.target.value})} className="w-full p-2 bg-green-50 rounded border border-green-200 text-sm">
                                              <option value="">اختر..</option>
                                              <option value="moderate">معتدلة</option>
                                              <option value="high">مرتفعة</option>
                                          </select>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="p-3 font-bold bg-slate-50">كمية الأمطار</td>
                                      <td className="p-2">
                                          <select onChange={(e) => setTableData({...tableData, a_rain: e.target.value})} className="w-full p-2 bg-orange-50 rounded border border-orange-200 text-sm">
                                              <option value="">اختر..</option>
                                              <option value="rare">نادرة / جفاف</option>
                                              <option value="heavy">غزيرة</option>
                                          </select>
                                      </td>
                                      <td className="p-2">
                                          <select onChange={(e) => setTableData({...tableData, b_rain: e.target.value})} className="w-full p-2 bg-green-50 rounded border border-green-200 text-sm">
                                              <option value="">اختر..</option>
                                              <option value="seasonal">موسمية (خريف)</option>
                                              <option value="none">منعدمة</option>
                                          </select>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="p-3 font-bold bg-slate-50">الضغط الجوي</td>
                                      <td className="p-2">
                                          <select onChange={(e) => setTableData({...tableData, a_pressure: e.target.value})} className="w-full p-2 bg-orange-50 rounded border border-orange-200 text-sm">
                                              <option value="">اختر..</option>
                                              <option value="low">منخفض (حراري)</option>
                                              <option value="high">مرتفع</option>
                                          </select>
                                      </td>
                                      <td className="p-2">
                                          <select onChange={(e) => setTableData({...tableData, b_pressure: e.target.value})} className="w-full p-2 bg-green-50 rounded border border-green-200 text-sm">
                                              <option value="">اختر..</option>
                                              <option value="high">مرتفع (نسبياً)</option>
                                              <option value="low">منخفض</option>
                                          </select>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                          <h4 className="font-bold text-indigo-900 mb-2">ب- ما النتيجة المترتبة على تعرض المنطقة (ب) للرياح الموسمية؟</h4>
                          <button onClick={() => setShowResult(!showResult)} className="text-indigo-600 text-sm font-bold underline">
                              {showResult ? 'إخفاء الإجابة' : 'اضغط للإجابة'}
                          </button>
                          {showResult && (
                              <p className="mt-2 text-indigo-800 text-sm bg-white p-2 rounded animate-fade-in">
                                  سقوط الأمطار الموسمية (الرذاذ)، اعتدال درجات الحرارة، واخضرار الأرض (موسم الخريف).
                              </p>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 4: Recall & Reasoning (Page 3 Q3 + Page 4 Q5) ---
  const Step4Recall = () => {
      const [revealed, setRevealed] = useState<number[]>([]);

      const items = [
          { id: 1, q: "جهود سلطنة عمان للتقليل من أثر التغير المناخي", a: "إنشاء المحميات الطبيعية، استزراع أشجار القرم، استخدام الطاقة المتجددة (الشمسية والرياح)." },
          { id: 2, q: "خصائص الإقليم شبه الصحراوي", a: "يتميز بقلة الأمطار، ارتفاع الحرارة صيفاً، البرودة شتاءً، ونباتات شوكية تتحمل الجفاف." },
          { id: 3, q: "العوامل التي تسهم في نقل الفتات الصخري", a: "الرياح، المياه الجارية (السيول والأنهار)، الأمواج، والجليد." },
          { id: 4, q: "طرق تساعد على التجوية الكيميائية", a: "الأكسدة (تفاعل الأكسجين مع المعادن)، والكربنة (تفاعل ثاني أكسيد الكربون مع الماء)." },
          { id: 5, q: "الأشكال الناتجة عن البراكين", a: "الجبال البركانية، الهضاب البركانية، والجزُر البركانية." }
      ];

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-teal-50 p-4 rounded-2xl border-r-4 border-teal-600">
                  <h3 className="font-bold text-teal-900 text-lg">ثالثاً وخامساً: أجب عما يأتي (اذكر/عدد)</h3>
              </div>

              <div className="grid gap-4">
                  {items.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                          <button 
                              onClick={() => setRevealed(prev => prev.includes(item.id) ? prev : [...prev, item.id])}
                              className="w-full text-right p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center"
                          >
                              <span className="flex items-center gap-2"><HelpCircle size={18} className="text-teal-500"/> {item.q}</span>
                              <span className="text-slate-400 text-sm">{revealed.includes(item.id) ? '▲' : '▼'}</span>
                          </button>
                          {revealed.includes(item.id) && (
                              <div className="p-4 bg-teal-50 text-teal-900 text-sm border-t border-teal-100 animate-slide-up leading-relaxed font-medium">
                                  {item.a}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- STEP 5: Terminology (Page 4 Q4) ---
  const Step5Terms = () => {
      const [matches, setMatches] = useState<{[key: number]: boolean}>({});

      const terms = [
          { id: 1, text: "تفتيت الصخور دون تغير في التركيب المعدني", term: "التجوية الميكانيكية" },
          { id: 2, text: "تفاعل الأكسجين مع المعادن المكونة للصخر", term: "الأكسدة" },
          { id: 3, text: "منحدر صخري شديد الانحدار يتكون على الساحل", term: "الجرف البحري" },
          { id: 4, text: "هزات سريعة تصيب أجزاء من القشرة الأرضية", term: "الزلازل" }
      ];

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-purple-50 p-4 rounded-2xl border-r-4 border-purple-600">
                  <h3 className="font-bold text-purple-900 text-lg">رابعاً: اكتب المصطلح المناسب</h3>
              </div>

              <div className="grid gap-4">
                  {terms.map((item) => (
                      <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                          <p className="font-bold text-slate-700 flex-1">{item.text}</p>
                          {matches[item.id] ? (
                              <div className="bg-purple-100 text-purple-800 px-6 py-2 rounded-lg font-black animate-scale-in">
                                  {item.term}
                              </div>
                          ) : (
                              <button 
                                  onClick={() => setMatches({...matches, [item.id]: true})}
                                  className="bg-slate-100 text-slate-500 px-6 py-2 rounded-lg font-bold hover:bg-purple-50 hover:text-purple-600 transition-colors"
                              >
                                  كشف المصطلح
                              </button>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- STEP 6: Diagram Completion (Page 5) ---
  const Step6Diagram = () => {
      const [filled, setFilled] = useState<{[key: string]: string}>({});
      
      const fillBox = (key: string, value: string) => {
          setFilled(prev => ({...prev, [key]: value}));
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-green-50 p-4 rounded-2xl border-r-4 border-green-600">
                  <h3 className="font-bold text-green-900 text-lg">سادساً: أكمل المخطط (العوامل التي تسهم في تشكيل سطح الأرض)</h3>
              </div>

              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-200 max-w-3xl mx-auto overflow-auto">
                  <div className="flex flex-col items-center gap-8 min-w-[600px]">
                      {/* Root */}
                      <div className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                          العوامل التي تُسهم في تشكيل سطح الأرض
                      </div>

                      {/* Level 2 */}
                      <div className="flex gap-20 w-full justify-center relative">
                          {/* Lines */}
                          <div className="absolute top-[-32px] left-1/2 w-0.5 h-8 bg-slate-300"></div>
                          <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-300"></div>
                          <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-slate-300"></div>
                          <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-slate-300"></div>

                          {/* External Processes */}
                          <div className="flex flex-col items-center gap-4 w-1/2">
                              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow">العمليات الخارجية</div>
                              <div className="flex gap-4">
                                  <div onClick={() => fillBox('weathering', 'التجوية')} className={`cursor-pointer w-24 h-12 rounded-lg border-2 border-dashed flex items-center justify-center font-bold text-sm transition-colors ${filled['weathering'] ? 'bg-green-100 border-green-500 text-green-800' : 'bg-slate-50 border-slate-300 text-slate-400'}`}>
                                      {filled['weathering'] || 'اضغط هنا'}
                                  </div>
                                  <div onClick={() => fillBox('erosion', 'التعرية')} className={`cursor-pointer w-24 h-12 rounded-lg border-2 border-dashed flex items-center justify-center font-bold text-sm transition-colors ${filled['erosion'] ? 'bg-green-100 border-green-500 text-green-800' : 'bg-slate-50 border-slate-300 text-slate-400'}`}>
                                      {filled['erosion'] || 'اضغط هنا'}
                                  </div>
                              </div>
                          </div>

                          {/* Internal Processes */}
                          <div className="flex flex-col items-center gap-4 w-1/2">
                              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow">العمليات الداخلية</div>
                              <div className="flex gap-8 w-full justify-center">
                                  {/* Rapid */}
                                  <div className="flex flex-col items-center gap-2">
                                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold text-sm">السريعة</div>
                                      <div className="flex gap-2">
                                          <div className="bg-white border border-blue-200 px-2 py-1 rounded text-sm font-bold shadow-sm">البراكين</div>
                                          <div onClick={() => fillBox('quakes', 'الزلازل')} className={`cursor-pointer w-20 h-8 rounded border-2 border-dashed flex items-center justify-center font-bold text-xs transition-colors ${filled['quakes'] ? 'bg-blue-100 border-blue-500 text-blue-800' : 'bg-slate-50 border-slate-300 text-slate-400'}`}>
                                              {filled['quakes'] || '؟'}
                                          </div>
                                      </div>
                                  </div>
                                  {/* Slow */}
                                  <div className="flex flex-col items-center gap-2">
                                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold text-sm">البطيئة</div>
                                      <div className="flex gap-2">
                                          <div className="bg-white border border-blue-200 px-2 py-1 rounded text-sm font-bold shadow-sm">الالتواءات</div>
                                          <div onClick={() => fillBox('faults', 'الانكسارات')} className={`cursor-pointer w-20 h-8 rounded border-2 border-dashed flex items-center justify-center font-bold text-xs transition-colors ${filled['faults'] ? 'bg-blue-100 border-blue-500 text-blue-800' : 'bg-slate-50 border-slate-300 text-slate-400'}`}>
                                              {filled['faults'] || '؟'}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
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
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الأولى - مطابق للكتاب)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            {currentStep === 1 && <Step1MCQ />}
            {currentStep === 2 && <Step2Device />}
            {currentStep === 3 && <Step3Map />}
            {currentStep === 4 && <Step4Recall />}
            {currentStep === 5 && <Step5Terms />}
            {currentStep === 6 && <Step6Diagram />}

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

export default Unit1Assessment;
