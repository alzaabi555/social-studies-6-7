import React, { useState } from 'react';
import { ArrowRight, Heart, Shield, Scale, User } from 'lucide-react';

const OmanRightsDutiesLesson = ({ onBack }: { onBack: () => void }) => {
  const [flipped, setFlipped] = useState<string | null>(null);

  // بطاقات الحقوق والواجبات (Flip Cards)
  const ConceptCard = ({ id, title, icon: Icon, color, desc, backColor }: any) => (
    <div onClick={() => setFlipped(flipped === id ? null : id)} className="perspective-1000 h-64 cursor-pointer group">
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped === id ? 'rotate-y-180' : ''}`}>
        {/* الوجه الأمامي */}
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 border-b-8 ${color} group-hover:-translate-y-2 transition-transform`}>
          <div className={`p-4 rounded-full mb-4 ${color.replace('border-', 'bg-').replace('500', '100')} ${color.replace('border-', 'text-').replace('500', '600')}`}>
            <Icon size={48} />
          </div>
          <h3 className="text-2xl font-black text-slate-800">{title}</h3>
          <p className="text-xs text-slate-400 mt-2">اضغط للتعريف</p>
        </div>
        {/* الوجه الخلفي */}
        <div className={`absolute w-full h-full backface-hidden ${backColor} text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 rotate-y-180 text-center`}>
          <p className="text-lg font-bold leading-loose">{desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-teal-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold bg-white px-4 py-2 rounded-lg shadow-sm"><ArrowRight size={20} /> خروج</button>
          <h1 className="text-2xl font-black text-teal-800">الحقوق والواجبات ⚖️</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ConceptCard 
            id="rights" title="الحقـوق" icon={Heart} color="border-blue-500" backColor="bg-blue-600"
            desc='هي الأشياء التي "يستحقها" المواطن من الدولة والمجتمع وفق القانون.' 
          />
          <ConceptCard 
            id="duties" title="الواجبـات" icon={Shield} color="border-rose-500" backColor="bg-rose-600"
            desc='هي الأفعال التي "يلتزم" المواطن بالقيام بها تجاه الوطن.' 
          />
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-teal-100">
          <div className="flex items-center gap-3 mb-4 text-teal-800">
            <Scale size={32} />
            <h3 className="text-xl font-black">قصة العدالة (الإمام أحمد بن سعيد)</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4 text-lg">
            عندما اشتكى قصاب من قائد عسكري أخذ اللحم ولم يدفع ثمنه، غضب الإمام أحمد بن سعيد وأنصف القصاب، مؤكداً مبدأ:
          </p>
          <div className="bg-teal-50 p-4 rounded-xl text-center font-black text-teal-900 border border-teal-200 text-lg">
            "لا أحد فوق القانون في عمان، والعدل أساس الملك."
          </div>
        </div>
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