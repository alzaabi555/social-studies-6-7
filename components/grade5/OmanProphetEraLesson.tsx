import React, { useState } from 'react';
import { ArrowRight, Star, Mail, CheckCircle, Ship, Swords, Moon, HelpCircle, MapPin, X } from 'lucide-react';

const OmanProphetEraLesson = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('mazin');

  // 1. قصة مازن (صورة 151907)
  const MazinStory = () => {
    const [step, setStep] = useState(0);
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100 text-center animate-fade-in max-w-4xl mx-auto">
        <h3 className="text-2xl font-black text-amber-800 mb-2">قصة إسلام أهل عمان</h3>
        <p className="text-amber-600 mb-8 font-medium">البداية كانت مع الصحابي مازن بن غضوبة من أهل سمائل</p>
        
        <div className="min-h-[300px] flex flex-col items-center justify-center">
          {step === 0 && (
             <div className="animate-slide-up w-full">
               <div className="text-6xl mb-4">🕌</div>
               <h4 className="text-xl font-bold text-emerald-800 mb-4">اللقاء بالنبي ﷺ</h4>
               <p className="text-slate-600 mb-6">وصل مازن إلى المدينة المنورة، وأعلن إسلامه، وطلب من النبي ﷺ أن يدعو لأهل عمان.</p>
               <div className="space-y-3 max-w-md mx-auto">
                 <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-emerald-900 font-bold shadow-sm">1. اللهم اهدهم</div>
                 <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-emerald-900 font-bold shadow-sm">2. وأطعمهم من جوع (الخصب)</div>
                 <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-emerald-900 font-bold shadow-sm">3. ولا تسلط عليهم عدواً من غيرهم (الأمن)</div>
               </div>
             </div>
          )}
          {step === 1 && (
             <div className="animate-slide-up">
               <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-4xl mb-4 mx-auto shadow-lg">✅</div>
               <h4 className="text-xl font-bold text-slate-800 mb-2">النتيجة</h4>
               <p className="text-slate-600 mb-6 text-lg">عاد مازن إلى عمان وبنى مسجد "المضمار" في سمائل، ليكون أول مسجد في عمان.</p>
               <button onClick={() => setStep(0)} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition-transform">
                 إعادة القصة
               </button>
             </div>
          )}
        </div>

        {step === 0 && (
           <button onClick={() => setStep(1)} className="mt-8 bg-green-600 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition-transform">
             النتيجة
           </button>
        )}
      </div>
    );
  };

  // 2. رسالة النبي (صورة 190327)
  const LetterSection = () => {
    return (
      <div className="animate-fade-in space-y-8 max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-black text-slate-800 mb-2">رسالة النبي ﷺ إلى مَلِكَي عُمان</h2>
          <p className="text-slate-500">أرسل النبي ﷺ الصحابي عمرو بن العاص برسالة إلى عبد وجيفر ابني الجلندى.</p>
        </div>

        {/* الخريطة */}
        <div className="relative bg-[#f0e6d2] rounded-3xl overflow-hidden border-4 border-[#d7ccc8] h-80 w-full shadow-md">
           {/* النقاط */}
           <div className="absolute top-[45%] left-[15%] flex flex-col items-center z-10">
             <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
             <span className="bg-white px-2 py-1 rounded text-[10px] font-bold shadow mt-1 text-slate-700">المدينة المنورة</span>
           </div>
           <div className="absolute top-[55%] left-[40%] flex flex-col items-center z-10">
             <div className="w-3 h-3 bg-slate-500 rounded-full border border-white"></div>
             <span className="bg-white px-2 py-1 rounded text-[10px] font-bold shadow mt-1 text-slate-500">اليمامة</span>
           </div>
           <div className="absolute top-[35%] right-[20%] flex flex-col items-center z-10">
             <div className="w-3 h-3 bg-slate-500 rounded-full border border-white"></div>
             <span className="bg-white px-2 py-1 rounded text-[10px] font-bold shadow mt-1 text-slate-500">توام (البريمي)</span>
           </div>
           <div className="absolute top-[30%] right-[10%] flex flex-col items-center z-10">
             <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow animate-pulse"></div>
             <span className="bg-white px-2 py-1 rounded text-xs font-black shadow mt-1 text-red-600 border border-red-100">صحار<br/>(العاصمة)</span>
           </div>

           {/* خط المسار */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none">
             <path d="M 180 160 Q 400 280 650 140 L 720 120" fill="none" stroke="#b45309" strokeWidth="3" strokeDasharray="8 4" className="animate-[dash_30s_linear_infinite]" />
           </svg>
           <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-amber-800 border border-amber-200 shadow-sm">خط سير عمرو بن العاص</div>
        </div>

        {/* صندوق الرسالة */}
        <div className="max-w-lg mx-auto bg-[#fdf6e3] border-[6px] border-[#5d4037] rounded-xl p-8 text-center shadow-xl">
           <h3 className="font-serif text-xl font-bold text-[#5d4037] mb-6">بسم الله الرحمن الرحيم</h3>
           <p className="font-serif text-[#5d4037] text-lg leading-loose mb-6">
             "من محمد رسول الله، إلى جيفر وعبد ابني الجلندى.. سلام على من اتبع الهدى، أما بعد: فإني أدعوكما بدعاية الإسلام، أسلما تسلما..."
           </p>
           <div className="bg-[#5d4037] text-[#fdf6e3] px-6 py-2 rounded text-sm font-bold inline-block shadow-md">النتيجة: دخلا في الإسلام طواعية</div>
        </div>

        {/* معلومة تهمك */}
        <div className="bg-indigo-50 border-r-4 border-indigo-500 p-4 rounded-lg flex items-start gap-3 shadow-sm">
           <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 mt-1"><Star size={20}/></div>
           <div>
             <h4 className="font-bold text-indigo-900 text-sm mb-1">معلومة تهمك (ص 61)</h4>
             <p className="text-indigo-800 text-xs leading-relaxed font-medium">ذهبت عدة وفود عمانية لرؤية الرسول ﷺ، ومنها الوفد الذي كان يرأسه الصحابي <span className="font-black">مُسْلِمَة بن هَزَّان الحُدَاني</span>.</p>
           </div>
        </div>
      </div>
    );
  };

  // 3. جوانب الحضارة (لعبة) - (صور 190539, 190551, 190603)
  const CivilizationGame = () => {
    const [mission, setMission] = useState<string | null>(null);
    const [gameState, setGameState] = useState('start'); 

    const resetGame = () => setGameState('start');

    return (
      <div className="animate-fade-in space-y-8 max-w-5xl mx-auto">
        <div className="text-center mb-6">
           <div className="flex items-center justify-center gap-2 mb-2">
             <h2 className="text-2xl font-black text-slate-800">جوانب الحضارة: استكشف بنفسك</h2>
             <span className="text-2xl">🕹️</span>
           </div>
           <p className="text-slate-500">اختر أحد المجالات لتجربة الحياة في عمان قديماً</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
           <button onClick={() => {setMission('political'); resetGame();}} className={`p-6 rounded-2xl border-b-4 transition-all flex flex-col items-center gap-3 ${mission === 'political' ? 'bg-red-500 border-red-700 text-white shadow-lg' : 'bg-white border-slate-200 hover:bg-red-50'}`}>
              <Swords size={32} />
              <span className="font-bold">المهمة السياسية: طرد الفرس</span>
           </button>
           <button onClick={() => {setMission('economic'); resetGame();}} className={`p-6 rounded-2xl border-b-4 transition-all flex flex-col items-center gap-3 ${mission === 'economic' ? 'bg-emerald-500 border-emerald-700 text-white shadow-lg' : 'bg-white border-slate-200 hover:bg-emerald-50'}`}>
              <Ship size={32} />
              <span className="font-bold">المهمة الاقتصادية: جمع الثروات</span>
           </button>
           <button onClick={() => {setMission('cultural'); resetGame();}} className={`p-6 rounded-2xl border-b-4 transition-all flex flex-col items-center gap-3 ${mission === 'cultural' ? 'bg-blue-500 border-blue-700 text-white shadow-lg' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>
              <Moon size={32} />
              <span className="font-bold">المهمة الثقافية: بناء المساجد</span>
           </button>
        </div>

        <div className="bg-[#fdfbf7] border-4 border-slate-100 rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center relative shadow-inner">
           {!mission && <p className="text-slate-400 font-bold text-xl">اختر مهمة للبدء...</p>}
           
           {/* المهمة السياسية (صورة 190539) */}
           {mission === 'political' && (
             <div className="text-center w-full animate-fade-in">
                <h3 className="text-2xl font-black text-red-900 mb-4">معركة تحرير عمان</h3>
                <p className="text-red-800 mb-8 max-w-md mx-auto">الفرس يحتلون ساحل الباطنة (صحار). ساعد عبد وجيفر في اتخاذ القرار!</p>
                
                <div className="relative w-full max-w-lg mx-auto h-64 bg-amber-100 rounded-2xl border-4 border-amber-300 mb-8 overflow-hidden flex items-center justify-center">
                   {gameState === 'start' ? (
                     <div className="flex justify-between w-full px-10">
                        <div className="text-center"><Swords size={48} className="text-slate-600"/><span className="block text-xs font-bold mt-1">جيش عمان</span></div>
                        <div className="text-center"><div className="text-4xl">🏰</div><span className="block text-xs font-bold mt-1">الفرس</span></div>
                     </div>
                   ) : (
                     <div className="text-center animate-scale-in">
                       <h4 className="text-3xl font-black text-green-600 mb-2">انتصار ساحق!</h4>
                       <p className="text-green-800 font-bold">تم طرد الفرس وتوحيد عمان.</p>
                     </div>
                   )}
                </div>

                {gameState === 'start' && (
                  <button onClick={() => setGameState('end')} className="bg-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 flex items-center gap-2 mx-auto">
                    <Swords size={20}/> هجوم وتحرير
                  </button>
                )}
             </div>
           )}

           {/* المهمة الاقتصادية (صورة 190551) */}
           {mission === 'economic' && (
             <div className="text-center w-full animate-fade-in">
                <h3 className="text-2xl font-black text-emerald-900 mb-4">ازدهار الاقتصاد</h3>
                <p className="text-emerald-700 mb-8">اضغط على الموارد لجمع الثروة وتنشيط الاقتصاد</p>
                
                <div className="flex justify-center gap-8 mb-8">
                   <button onClick={() => setGameState('collected')} className="w-32 h-32 bg-green-100 rounded-full border-4 border-green-300 flex flex-col items-center justify-center hover:scale-110 transition-transform shadow-lg group">
                      <span className="text-4xl mb-2 group-hover:scale-125 transition-transform">🌴</span>
                      <span className="font-bold text-green-800">زراعة</span>
                   </button>
                   <button onClick={() => setGameState('collected')} className="w-32 h-32 bg-blue-100 rounded-full border-4 border-blue-300 flex flex-col items-center justify-center hover:scale-110 transition-transform shadow-lg group">
                      <Ship size={40} className="text-blue-600 mb-2 group-hover:scale-125 transition-transform"/>
                      <span className="font-bold text-blue-800">تجارة بحرية</span>
                   </button>
                </div>

                <div className="bg-white px-8 py-4 rounded-2xl shadow-md border border-slate-200 inline-block">
                   <p className="text-xs text-slate-400 font-bold mb-1">خزينة الدولة</p>
                   <p className="text-3xl font-black text-slate-800 flex items-center gap-2">
                     {gameState === 'collected' ? "1,000" : "0"} <span className="text-yellow-500 text-xl">💰</span>
                   </p>
                </div>
             </div>
           )}

           {/* المهمة الثقافية (صورة 190603) */}
           {mission === 'cultural' && (
             <div className="text-center w-full animate-fade-in">
                <h3 className="text-2xl font-black text-blue-900 mb-4">نهضة بناء المساجد</h3>
                <p className="text-blue-700 mb-8">ساهم في نشر الإسلام ببناء المساجد في المدن العمانية</p>
                
                <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
                   <button onClick={() => setGameState('step1')} className={`p-6 rounded-2xl border-2 transition-all ${gameState === 'start' ? 'bg-white border-dashed border-slate-300' : 'bg-green-100 border-green-500 shadow-md'}`}>
                      <div className="text-3xl mb-2">{gameState === 'start' ? '🏗️' : '✅'}</div>
                      <span className="font-bold text-slate-700">مسجد المضمار (سمائل)</span>
                   </button>
                   <button onClick={() => setGameState('step2')} className={`p-6 rounded-2xl border-2 transition-all ${gameState !== 'step2' ? 'bg-white border-dashed border-slate-300' : 'bg-green-100 border-green-500 shadow-md'}`}>
                      <div className="text-3xl mb-2">{gameState !== 'step2' ? '🏗️' : '✅'}</div>
                      <span className="font-bold text-slate-700">مسجد الشواذنة (نزوى)</span>
                   </button>
                </div>

                {gameState === 'step2' && (
                  <div className="bg-blue-100 text-blue-900 px-6 py-2 rounded-xl font-bold inline-block animate-bounce">
                    ممتاز! أصبحت عمان منارة للعلم والإيمان.
                  </div>
                )}
             </div>
           )}
        </div>
      </div>
    );
  };

  // 4. المدن والشخصيات (صور 190616, 190634, 190644)
  const CitiesAndPeople = () => {
    const [gameType, setGameType] = useState('who');
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    const locations = [
      {id: 'sohar', x: 80, y: 25, type: 'sea', name: 'صحار'},
      {id: 'buraimi', x: 75, y: 18, type: 'land', name: 'توام (البريمي)'},
      {id: 'samail', x: 70, y: 38, type: 'land', name: 'سمائل'},
      {id: 'mirbat', x: 25, y: 80, type: 'sea', name: 'مرباط'}
    ];

    return (
      <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
        {/* لعبة من أنا (صورة 190616) */}
        <div className="bg-slate-800 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
           <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-400 border-2 border-yellow-500/50">
             <HelpCircle size={40} />
           </div>
           <h3 className="text-2xl font-bold text-yellow-400 mb-6">من أنا؟</h3>
           <div className="bg-slate-700/50 p-6 rounded-2xl max-w-2xl mx-auto border border-slate-600">
             <p className="text-lg leading-loose font-medium">"أنا صحابي جليل من أهل عمان.. عُرفت بالفصاحة والبيان والقدرة على الخطابة.. رويتُ الحديث عن النبي ﷺ.. فمن أكون؟"</p>
           </div>
           <div className="mt-8">
             <h2 className="text-4xl font-black text-yellow-500 drop-shadow-md">صُحار بن العباس العبدي</h2>
             <p className="text-slate-400 mt-2">صحابي ومفكر وخطيب عماني</p>
           </div>
        </div>

        {/* لعبة صنف المدن (صورة 190634, 190644) */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-xl font-black text-slate-800 flex items-center gap-2"><MapPin className="text-indigo-600"/> صنف المدن (تفاعلي)</h3>
             <div className="bg-indigo-50 px-4 py-1 rounded-lg text-indigo-700 font-bold text-sm">إغلاق النشاط</div>
           </div>
           <p className="text-center text-slate-500 mb-8">اضغط على الخيار الصحيح لكل مدينة</p>

           <div className="flex flex-col md:flex-row gap-8">
             {/* القائمة */}
             <div className="flex-1 space-y-3">
               {locations.map((loc) => (
                 <div key={loc.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-700">{loc.name}</span>
                    <div className="flex gap-2">
                       <button className="bg-white border px-3 py-1 rounded-full text-xs font-bold hover:bg-slate-100">⚓ ساحلية</button>
                       <button className="bg-white border px-3 py-1 rounded-full text-xs font-bold hover:bg-slate-100">Map داخلية</button>
                    </div>
                 </div>
               ))}
             </div>

             {/* الخريطة (صورة 190644) */}
             <div className="relative w-full md:w-1/2 bg-blue-50 rounded-2xl h-80 shadow-inner overflow-hidden border border-blue-100">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-60">
                   <path d="M85,5 L95,15 L90,40 L60,60 L30,90 L10,85 L20,70 L40,50 L50,30 L60,10 Z" fill="#ecfdf5" stroke="#10b981" strokeWidth="0.5" />
                </svg>
                {locations.map((loc) => (
                   <div 
                     key={loc.id}
                     onClick={() => setSelectedCity(loc.id)}
                     className="absolute w-8 h-8 bg-white rounded-full border-2 border-indigo-500 shadow-md flex items-center justify-center cursor-pointer hover:scale-125 transition-transform z-10"
                     style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                   >
                     {loc.type === 'sea' ? '⚓' : '🌴'}
                   </div>
                ))}
                {/* النافذة المنبثقة عند الضغط */}
                {selectedCity && (
                   <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-xl shadow-xl animate-slide-up z-20 flex justify-between items-center">
                      <span className="font-bold text-indigo-900">{locations.find(l => l.id === selectedCity)?.name}</span>
                      <button onClick={() => setSelectedCity(null)} className="text-slate-400 hover:text-red-500"><X size={16}/></button>
                   </div>
                )}
             </div>
           </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-6xl mx-auto flex gap-8">
        
        {/* Main Content Area */}
        <div className="flex-1">
           <div className="flex justify-between items-center mb-6 md:hidden">
              <button onClick={onBack} className="text-slate-500"><ArrowRight/></button>
              <h1 className="font-bold text-amber-800">عمان في عهد الرسول</h1>
           </div>
           {activeTab === 'mazin' && <MazinStory />}
           {activeTab === 'letter' && <LetterSection />}
           {activeTab === 'game' && <CivilizationGame />}
           {activeTab === 'cities' && <CitiesAndPeople />}
        </div>

        {/* Sidebar Menu (يمين الشاشة كما في الصور) */}
        <div className="w-64 hidden md:block">
           <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-6">
              <div className="p-4 border-b border-slate-50 flex items-center gap-2 text-slate-500 cursor-pointer hover:bg-slate-50 transition-colors" onClick={onBack}>
                 <ArrowRight size={16} />
                 <span className="text-sm font-bold">العودة للمكتبة</span>
              </div>
              <div className="p-4 bg-amber-50/50">
                 <h2 className="font-black text-amber-600 text-lg">عُمان والرسالة 📜</h2>
              </div>
              <div className="p-2 space-y-1">
                 <button onClick={() => setActiveTab('mazin')} className={`w-full text-right p-3 rounded-xl flex items-center gap-3 font-bold text-sm ${activeTab === 'mazin' ? 'bg-amber-100 text-amber-800' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <Star size={16}/> قصة مازن
                 </button>
                 <button onClick={() => setActiveTab('letter')} className={`w-full text-right p-3 rounded-xl flex items-center gap-3 font-bold text-sm ${activeTab === 'letter' ? 'bg-amber-100 text-amber-800' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <Mail size={16}/> رسالة النبي
                 </button>
                 <button onClick={() => setActiveTab('game')} className={`w-full text-right p-3 rounded-xl flex items-center gap-3 font-bold text-sm ${activeTab === 'game' ? 'bg-amber-100 text-amber-800' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <Ship size={16}/> جوانب الحضارة (لعبة)
                 </button>
                 <button onClick={() => setActiveTab('cities')} className={`w-full text-right p-3 rounded-xl flex items-center gap-3 font-bold text-sm ${activeTab === 'cities' ? 'bg-amber-100 text-amber-800' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <MapPin size={16}/> المدن والشخصيات
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OmanProphetEraLesson;