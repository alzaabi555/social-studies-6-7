import React, { useState } from 'react';
import { ArrowRight, CheckCircle, XCircle, Award, RefreshCw } from 'lucide-react';

const Unit2AssessmentG5 = ({ onBack }: { onBack: () => void }) => {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const questions = [
    { q: "أول عمل قام به الرسول ﷺ في المدينة:", opts: ["بناء المسجد", "المؤاخاة", "الصحيفة"], a: "بناء المسجد" },
    { q: "الصحابي العماني الذي كسر صنم 'باجر' هو:", opts: ["مازن بن غضوبة", "كعب بن برشة", "أبو صفرة"], a: "مازن بن غضوبة" },
    { q: "وثيقة نظمت العلاقة بين سكان المدينة:", opts: ["الدستور", "الصحيفة", "الرسالة"], a: "الصحيفة" },
    { q: "حمل رسالة النبي ﷺ إلى ملكي عمان:", opts: ["أبو بكر الصديق", "عمرو بن العاص", "خالد بن الوليد"], a: "عمرو بن العاص" },
  ];

  const handleAnswer = (opt: string) => {
    if (feedback) return;
    const isCorrect = opt === questions[qIndex].a;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      setFeedback(null);
      if (qIndex < questions.length - 1) setQIndex(i => i + 1);
      else setFinished(true);
    }, 1000);
  };

  if (finished) return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center font-tajawal text-right" dir="rtl">
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-sm w-full border-4 border-emerald-100">
        <Award size={64} className="mx-auto text-yellow-400 mb-4 animate-bounce" />
        <h2 className="text-2xl font-black text-emerald-900 mb-2">النتيجة النهائية</h2>
        <p className="text-5xl font-black text-emerald-600 mb-6">{score} / {questions.length}</p>
        <button onClick={onBack} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold">خروج</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-emerald-50 p-6 flex items-center justify-center font-tajawal text-right" dir="rtl">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg overflow-hidden border border-emerald-100">
        <div className="bg-emerald-600 p-6 flex justify-between items-center text-white">
          <span className="font-bold">سؤال {qIndex + 1}</span>
          <button onClick={onBack}><ArrowRight /></button>
        </div>
        <div className="p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6">{questions[qIndex].q}</h2>
          <div className="space-y-3">
            {questions[qIndex].opts.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className={`w-full p-4 rounded-xl border-2 font-bold text-right transition-all flex justify-between items-center
                  ${feedback === 'correct' && opt === questions[qIndex].a ? "bg-green-100 border-green-500 text-green-800" :
                    feedback === 'wrong' && opt !== questions[qIndex].a ? "opacity-50" :
                    feedback === 'wrong' && opt === questions[qIndex].a ? "bg-red-100 border-red-500" :
                    "bg-white border-slate-100 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"}
                `}
              >
                {opt}
                {feedback === 'correct' && opt === questions[qIndex].a && <CheckCircle className="text-green-600"/>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unit2AssessmentG5;