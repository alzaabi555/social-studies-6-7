import React, { useState, useEffect } from 'react';
// تصحيح المسار: الخروج خطوتين للوراء للوصول للمجلد الرئيسي
import { QuizQuestion, Lesson } from '../../types';
import { getQuestions } from '../../data/questionBank';
import { CheckCircle, XCircle, Clock, Trophy, LogOut, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
    lesson: Lesson;
    grade: number;
    onExit: () => void;
}

const QuestionBankSession: React.FC<Props> = ({ lesson, grade, onExit }) => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState<{[key: number]: number}>({}); // qId -> optionIndex
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [time, setTime] = useState(0);

    // Load Questions directly from the Dictionary using the Lesson ID
    useEffect(() => {
        // جلب الأسئلة مباشرة من البنك باستخدام معرف الدرس
        const lessonQuestions = getQuestions(lesson.id);
        
        if (lessonQuestions.length === 0) {
            console.warn(`No questions found for lesson ID: ${lesson.id}`);
        }
        
        setQuestions(lessonQuestions);
    }, [lesson.id]);

    // Timer
    useEffect(() => {
        if (!isSubmitted && questions.length > 0) {
            const timer = setInterval(() => setTime(t => t + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [isSubmitted, questions.length]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleSelect = (optionIdx: number) => {
        if (isSubmitted) return;
        setAnswers(prev => ({...prev, [questions[currentIdx].id]: optionIdx}));
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correctIndex) score++;
        });
        return score;
    };

    if (questions.length === 0) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-10 text-center font-tajawal text-right" dir="rtl">
            <h2 className="text-2xl font-bold text-slate-600 mb-4">عذراً، لم يتم إضافة أسئلة لهذا الدرس بعد.</h2>
            <button onClick={onExit} className="bg-indigo-600 text-white px-6 py-2 rounded-xl">العودة</button>
        </div>
    );

    // --- RESULTS VIEW (شاشة النتائج) ---
    if (isSubmitted) {
        const score = calculateScore();
        const percentage = (score / questions.length) * 100;
        
        return (
            <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center font-tajawal text-right" dir="rtl">
                <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8 border-t-8 border-indigo-600 animate-scale-in">
                    <div className="text-center mb-8">
                        <div className="inline-block p-4 bg-indigo-50 rounded-full mb-4">
                            <Trophy size={64} className="text-yellow-500" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-800 mb-2">نتيجة الاختبار</h2>
                        <p className="text-slate-500">{lesson.title} - الصف {grade}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <span className="block text-slate-400 text-sm font-bold">الدرجة</span>
                            <span className={`text-3xl font-black ${percentage >= 50 ? 'text-green-600' : 'text-red-600'}`}>{score}/{questions.length}</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <span className="block text-slate-400 text-sm font-bold">النسبة</span>
                            <span className="text-3xl font-black text-indigo-600">{percentage.toFixed(0)}%</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <span className="block text-slate-400 text-sm font-bold">الوقت</span>
                            <span className="text-3xl font-black text-slate-700">{formatTime(time)}</span>
                        </div>
                    </div>

                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2 mb-8 custom-scrollbar">
                        <h3 className="font-bold text-slate-800">مراجعة الإجابات:</h3>
                        {questions.map((q, idx) => (
                            <div key={q.id} className="p-4 rounded-xl border border-slate-200 text-sm">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-slate-700">س{idx+1}: {q.question}</span>
                                    {answers[q.id] === q.correctIndex ? <CheckCircle size={16} className="text-green-500"/> : <XCircle size={16} className="text-red-500"/>}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className={`px-2 py-1 rounded ${answers[q.id] === q.correctIndex ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        إجابتك: {q.options[answers[q.id]] || 'لم تجب'}
                                    </span>
                                    {answers[q.id] !== q.correctIndex && (
                                        <span className="px-2 py-1 rounded bg-green-50 text-green-800 border border-green-200">
                                            الصحيح: {q.options[q.correctIndex]}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button onClick={onExit} className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                            خروج
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // --- QUIZ VIEW (شاشة الاختبار) ---
    const q = questions[currentIdx];
    const progress = ((currentIdx + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-tajawal text-right" dir="rtl">
            {/* Header */}
            <header className="bg-white p-4 shadow-sm flex justify-between items-center px-6">
                <button onClick={onExit} className="text-slate-400 hover:text-red-500 flex items-center gap-1 font-bold text-sm">
                    <LogOut size={18}/> خروج
                </button>
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-slate-800">{lesson.title}</h2>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full mt-1">الصف {grade}</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 font-mono font-bold bg-indigo-50 px-3 py-1 rounded-lg">
                    <Clock size={18}/> {formatTime(time)}
                </div>
            </header>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-2">
                <div className="bg-indigo-600 h-2 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Question Area */}
            <main className="flex-1 max-w-3xl mx-auto w-full p-6 flex flex-col justify-center">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 min-h-[400px] flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-lg text-sm">سؤال {currentIdx + 1} من {questions.length}</span>
                        <span className="text-xs text-slate-400 font-bold">اختر الإجابة الصحيحة</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                        {q.question}
                    </h3>

                    <div className="grid gap-4 flex-1 content-start">
                        {q.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSelect(idx)}
                                className={`w-full p-4 rounded-xl border-2 text-right font-medium text-lg transition-all flex justify-between items-center ${
                                    answers[q.id] === idx 
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md ring-1 ring-indigo-600' 
                                    : 'border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-slate-50'
                                }`}
                            >
                                <span>{opt}</span>
                                {answers[q.id] === idx && <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>}
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer Navigation */}
            <footer className="bg-white p-4 border-t border-slate-200">
                <div className="max-w-3xl mx-auto flex justify-between">
                    <button 
                        onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                        disabled={currentIdx === 0}
                        className="px-6 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 flex items-center gap-2"
                    >
                        <ArrowRight size={20}/> السابق
                    </button>

                    {currentIdx === questions.length - 1 ? (
                        <button 
                            onClick={() => setIsSubmitted(true)}
                            className="px-8 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-500/30 transition-all flex items-center gap-2"
                        >
                            <CheckCircle size={20}/> إنهاء الاختبار
                        </button>
                    ) : (
                        <button 
                            onClick={() => setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1))}
                            className="px-8 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center gap-2"
                        >
                            التالي <ArrowLeft size={20}/>
                        </button>
                    )}
                </div>
            </footer>
        </div>
    );
};

export default QuestionBankSession;
