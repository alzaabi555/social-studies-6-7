import React from 'react';
import { GraduationCap, Library, Globe, Star, FileQuestion, User, School, Phone, ChevronLeft, BookOpen } from 'lucide-react';

// --- 1. المكون الفرعي (GradeCard) يجب أن يكون هنا في الأعلى ---
interface GradeCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  onClick: () => void;
}

const GradeCard: React.FC<GradeCardProps> = ({ title, desc, icon, color, bgColor, borderColor, onClick }) => (
  <button 
    onClick={onClick}
    className={`group relative overflow-hidden rounded-3xl p-6 text-right border border-slate-700 bg-[#1e293b] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${borderColor}`}
  >
    <div className={`absolute top-0 left-0 w-24 h-24 ${bgColor} rounded-full blur-2xl -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700`}></div>
    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
      <div className="flex justify-between items-start">
        <div className={`w-14 h-14 rounded-2xl ${bgColor} border border-white/5 flex items-center justify-center ${color} shadow-lg`}>
          {icon}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-black text-white mb-2">{title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </button>
);

// --- 2. المكون الرئيسي (WelcomeScreen) ---
interface WelcomeScreenProps {
  onSelectGrade: (grade: 5 | 6 | 7) => void;
  onOpenQuestionBank: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectGrade, onOpenQuestionBank }) => {
  return (
    // استخدمنا كود اللون #020617 مباشرة لضمان عدم ظهور شاشة بيضاء
    <div className="min-h-screen w-full bg-[#020617] relative overflow-hidden font-tajawal text-right flex flex-col" dir="rtl">
      
      {/* الخلفية */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f4f4f 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col flex-grow items-center justify-center">
        
        {/* العنوان */}
        <div className="text-center mb-16 space-y-6 max-w-3xl">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative w-28 h-28 bg-[#1e293b] border border-slate-700 rounded-3xl flex items-center justify-center shadow-2xl">
              <Library size={56} className="text-indigo-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
              الحقيبة التفاعلية
            </h1>
            <div className="flex items-center justify-center gap-3 text-indigo-200 text-xl font-medium bg-indigo-900/30 py-2 px-6 rounded-full border border-indigo-500/20 w-fit mx-auto backdrop-blur-sm">
              <Globe size={20} />
              <span>للدراسات الاجتماعية</span>
            </div>
          </div>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
          
          <GradeCard 
            title="الصف السابع" 
            desc="الغلاف الجوي، الدولة العباسية، المواطنة" 
            icon={<GraduationCap size={32} />} 
            color="text-purple-400" 
            bgColor="bg-purple-500/10" 
            borderColor="hover:border-purple-500/50" 
            onClick={() => onSelectGrade(7)} 
          />

          <GradeCard 
            title="الصف السادس" 
            desc="السكان، الدولة الأموية، المجتمع المدني" 
            icon={<Star size={32} />} 
            color="text-emerald-400" 
            bgColor="bg-emerald-500/10" 
            borderColor="hover:border-emerald-500/50" 
            onClick={() => onSelectGrade(6)} 
          />

          <GradeCard 
            title="الصف الخامس" 
            desc="الموارد الطبيعية، تاريخ عمان، الحقوق" 
            icon={<Globe size={32} />} 
            color="text-amber-400" 
            bgColor="bg-amber-500/10" 
            borderColor="hover:border-amber-500/50" 
            onClick={() => onSelectGrade(5)} 
          />
        </div>

        {/* زر بنك الأسئلة */}
        <button 
          onClick={onOpenQuestionBank}
          className="group relative w-full max-w-xl bg-[#1e293b] border border-slate-700 p-1 rounded-2xl overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="relative flex items-center justify-between p-5 rounded-xl bg-[#1e293b]/50 backdrop-blur-sm">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <FileQuestion size={28} />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold text-white mb-1">بنك الأسئلة الشامل</h3>
                <p className="text-slate-400 text-sm">اختبارات شاملة ومراجعات لجميع الوحدات</p>
              </div>
            </div>
            <div className="bg-slate-800 p-3 rounded-full text-slate-400 group-hover:bg-rose-500 group-hover:text-white transition-all">
              <ChevronLeft size={24} />
            </div>
          </div>
        </button>

      </div>

      {/* الفوتر */}
      <footer className="relative z-10 w-full border-t border-slate-800 bg-[#020617]/90 backdrop-blur-md py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-400">
          
          <div className="flex items-center gap-2 text-indigo-300 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            <User size={16} />
            <span>إعداد: أ. محمد درويش الزعابي</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <School size={16} />
              <span>مدرسة الإبداع للبنين</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="font-mono dir-ltr">98344555</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default WelcomeScreen;
