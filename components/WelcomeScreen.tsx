
import React from 'react';
import { GraduationCap, Library, Globe, Star, BookOpen, Layers, FileQuestion } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectGrade: (grade: 5 | 6 | 7) => void;
  onOpenQuestionBank: () => void; // New prop
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectGrade, onOpenQuestionBank }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-hidden font-tajawal text-right flex flex-col items-center justify-center p-6" dir="rtl">
      
      {/* Background Gradients/Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        
        {/* Logo & Header Area */}
        <div className="mb-12 text-center animate-fade-in">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 mb-6 rotate-3 hover:rotate-6 transition-transform duration-500">
                <Library size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                الحقيبة التفاعلية
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 font-medium">
                للدراسات الاجتماعية
            </p>
        </div>

        {/* Grade Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-slide-up mb-8">
            {/* Grade 7 Card */}
            <button onClick={() => onSelectGrade(7)} className="group relative h-56 rounded-3xl overflow-hidden text-right p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 bg-[#1e293b] border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="bg-indigo-500/20 w-14 h-14 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300"><GraduationCap size={28} /></div>
                    <div>
                        <h2 className="text-2xl font-black text-white mb-2">الصف السابع</h2>
                        <p className="text-slate-400 text-xs line-clamp-2">الطقس، الدولة العباسية، المؤسسات.</p>
                    </div>
                </div>
            </button>

            {/* Grade 6 Card */}
            <button onClick={() => onSelectGrade(6)} className="group relative h-56 rounded-3xl overflow-hidden text-right p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 bg-[#1e293b] border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="bg-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300"><Star size={28} /></div>
                    <div>
                        <h2 className="text-2xl font-black text-white mb-2">الصف السادس</h2>
                        <p className="text-slate-400 text-xs line-clamp-2">السكان، الدولة الأموية، المجتمع المدني.</p>
                    </div>
                </div>
            </button>

            {/* Grade 5 Card */}
            <button onClick={() => onSelectGrade(5)} className="group relative h-56 rounded-3xl overflow-hidden text-right p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 bg-[#1e293b] border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="bg-amber-500/20 w-14 h-14 rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300"><Globe size={28} /></div>
                    <div>
                        <h2 className="text-2xl font-black text-white mb-2">الصف الخامس</h2>
                        <p className="text-slate-400 text-xs line-clamp-2">الموارد، عصر النبوة، المواطنة.</p>
                    </div>
                </div>
            </button>
        </div>

        {/* Question Bank Button */}
        <button 
            onClick={onOpenQuestionBank}
            className="w-full max-w-md mx-auto bg-gradient-to-r from-rose-600 to-pink-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-rose-500/40 transform hover:scale-105 transition-all flex items-center justify-center gap-4 animate-slide-up"
        >
            <div className="bg-white/20 p-2 rounded-xl"><FileQuestion size={24}/></div>
            <div className="text-right">
                <h3 className="font-black text-lg">بنك الأسئلة الشامل</h3>
                <p className="text-xs text-rose-100">آلاف الأسئلة لجميع الصفوف والدروس</p>
            </div>
        </button>

      </div>
    </div>
  );
};

export default WelcomeScreen;
