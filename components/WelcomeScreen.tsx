import React from 'react';
import { GraduationCap, Library, Globe, BookOpen, FileQuestion, Phone, User, School, ArrowLeft } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectGrade: (grade: 5 | 6 | 7) => void;
  onOpenQuestionBank: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectGrade, onOpenQuestionBank }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-tajawal text-right flex flex-col" dir="rtl">
      
      {/* منطقة العنوان */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-slate-800 p-6 rounded-3xl mb-8 shadow-lg border border-slate-700">
          <Library size={64} className="text-indigo-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
            الحقيبة التفاعلية
          </h1>
          <p className="text-slate-400 text-xl">للدراسات الاجتماعية</p>
        </div>

        {/* أزرار الصفوف */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          
          {/* الصف السابع */}
          <button 
            onClick={() => onSelectGrade(7)}
            className="bg-slate-800 hover:bg-slate-700 p-8 rounded-2xl border border-slate-700 transition-all hover:-translate-y-1 shadow-md group"
          >
            <div className="bg-purple-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
              <GraduationCap size={32} className="text-purple-300 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">الصف السابع</h2>
            <p className="text-slate-400 text-sm">الغلاف الجوي، الدولة العباسية</p>
          </button>

          {/* الصف السادس */}
          <button 
            onClick={() => onSelectGrade(6)}
            className="bg-slate-800 hover:bg-slate-700 p-8 rounded-2xl border border-slate-700 transition-all hover:-translate-y-1 shadow-md group"
          >
            <div className="bg-emerald-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
              <BookOpen size={32} className="text-emerald-300 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">الصف السادس</h2>
            <p className="text-slate-400 text-sm">السكان، الدولة الأموية</p>
          </button>

          {/* الصف الخامس */}
          <button 
            onClick={() => onSelectGrade(5)}
            className="bg-slate-800 hover:bg-slate-700 p-8 rounded-2xl border border-slate-700 transition-all hover:-translate-y-1 shadow-md group"
          >
            <div className="bg-amber-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
              <Globe size={32} className="text-amber-300 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">الصف الخامس</h2>
            <p className="text-slate-400 text-sm">الأرض والموارد، تاريخ عمان</p>
          </button>
        </div>

        {/* زر بنك الأسئلة */}
        <button 
          onClick={onOpenQuestionBank}
          className="w-full max-w-md bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-indigo-900/20"
        >
          <FileQuestion size={24} />
          <span>الدخول لبنك الأسئلة الشامل</span>
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* الفوتر */}
      <footer className="bg-slate-950 p-6 border-t border-slate-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>إعداد: أ. محمد درويش الزعابي</span>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <School size={16} />
              <span>مدرسة الإبداع للبنين</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="dir-ltr">98344555</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default WelcomeScreen;