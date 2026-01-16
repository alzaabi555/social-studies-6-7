import React, { useState } from 'react';
import { ArrowRight, Building2, Shield, Heart, Scale, CheckCircle } from 'lucide-react';

const OmanInstitutionsLesson = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('institutions');

  // قسم سلة حقوق الطفل
  const ChildRightsBasket = () => {
    const [basket, setBasket] = useState<string[]>([]);
    const rights = [
      { id: 'edu', text: 'التعليم', icon: '📚' },
      { id: 'health', text: 'الرعاية الصحية', icon: '💉' },
      { id: 'play', text: 'اللعب', icon: '🪁' },
      { id: 'safe', text: 'الأمان', icon: '🛡️' },
      { id: 'name', text: 'الاسم والجنسية', icon: '🆔' }
    ];

    const add = (id: string) => !basket.includes(id) && setBasket([...basket, id]);

    return (
      <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-cyan-100">
        <h3 className="text-center font-black text-cyan-900 mb-6 text-xl">اجمع حقوق الطفل في السلة</h3>
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {rights.map((r) => (
            <button key={r.id} onClick={() => add(r.id)} disabled={basket.includes(r.id)} 
              className={`px-4 py-2 rounded-full border-2 font-bold transition-all ${basket.includes(r.id) ? "opacity-30 scale-95" : "bg-cyan-50 border-cyan-300 text-cyan-700 hover:scale-110"}`}>
              {r.icon} {r.text}
            </button>
          ))}
        </div>
        <div className="bg-cyan-50 rounded-2xl p-6 min-h-[120px] relative border-2 border-dashed border-cyan-300 flex flex-wrap gap-2 justify-center items-center">
          <div className="absolute -top-4 bg-white px-4 py-1 rounded-full text-sm font-bold text-cyan-600 shadow border border-cyan-100">سلتي ({basket.length}/5)</div>
          {basket.map(id => (
            <span key={id} className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold animate-bounce shadow flex items-center gap-1">
              <CheckCircle size={14}/> {rights.find(r => r.id === id)?.text}
            </span>
          ))}
          {basket.length === 5 && <div className="w-full text-center text-green-600 font-black mt-2">أحسنت! جميع الحقوق مكفولة ✅</div>}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cyan-50 p-6 font-tajawal text-right" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold bg-white px-4 py-2 rounded-lg shadow-sm"><ArrowRight size={20} /> خروج</button>
          <h1 className="text-2xl font-black text-cyan-800">الحقوق والمؤسسات</h1>
        </div>

        <div className="flex justify-center gap-4 bg-white p-2 rounded-xl shadow-sm w-fit mx-auto mb-6">
          <button onClick={() => setActiveTab('institutions')} className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'institutions' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-500'}`}>المؤسسات</button>
          <button onClick={() => setActiveTab('child')} className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'child' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-500'}`}>حقوق الطفل</button>
        </div>

        {activeTab === 'institutions' && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition-all border-b-4 border-amber-500">
              <Scale size={40} className="text-amber-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-slate-800">القضائية</h3>
              <p className="text-sm text-slate-500 mt-2">فصل المنازعات وحفظ الحقوق.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition-all border-b-4 border-blue-500">
              <Shield size={40} className="text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-slate-800">الأمنية</h3>
              <p className="text-sm text-slate-500 mt-2">حفظ الأمن والاستقرار.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition-all border-b-4 border-rose-500">
              <Building2 size={40} className="text-rose-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-slate-800">الخدمية</h3>
              <p className="text-sm text-slate-500 mt-2">توفير الصحة والتعليم.</p>
            </div>
          </div>
        )}

        {activeTab === 'child' && <ChildRightsBasket />}
      </div>
    </div>
  );
};

export default OmanInstitutionsLesson;