import React, { useState } from 'react';
import { ArrowRight, CheckCircle, XCircle, Award, RefreshCw } from 'lucide-react';

const Unit1AssessmentG5 = ({ onBack }: { onBack: () => void }) => {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const questions = [
    { q: "ما هو الكوكب الأقرب للشمس؟", opts: ["الأرض", "عطارد", "نبتون"], a: "عطارد" },
    { q: "أي الأغلفة يشمل جميع الكائنات الحية؟", opts: ["الصخري", "الجوي", "الحيوي"], a: "الحيوي" },
    { q: "النفط يعتبر من الموارد:", opts: ["المتجددة", "غير المتجددة", "الدائمة"], a: "غير المتجددة" },
    { q: "تتكون الكهوف البحرية بفعل:", opts: ["الرياح", "الأمواج", "الإنسان"], a: "الأمواج" },
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
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center font-tajawal text-right" dir="rtl">
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-sm w-full">
        <Award size={64} className="mx-auto text-yellow-400 mb-4 animate-bounce" />
        <h2 className="text-2xl font-black text-indigo-900 mb-2">النتيجة النهائية</h2>
        <p className="text-5xl font-black text-indigo-600 mb-6">{score} / {questions.length}</p>
        <div className="flex gap-2">
          <button onClick={() => { setQIndex(0); setScore(0); setFinished(false); }} className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2"><RefreshCw size={18}/> إعادة</button>
          <button onClick={onBack} className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold">خروج</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center font-tajawal text-right" dir="rtl">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">
        <div className="bg-indigo-600 p-6 flex justify-between items-center text-white">
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
                    "bg-white border-slate-100 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"}
                `}
              >
                {opt}
                {feedback === 'correct' && opt === questions[qIndex].a && <CheckCircle className="text-green-600"/>}
                {feedback === 'wrong' && opt !== questions[qIndex].a && opt !== questions[qIndex].a && <XCircle className="text-red-500"/>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unit1AssessmentG5;