import React, { useState } from 'react';
import { X, MessageCircle, Phone, Send, CheckCircle2, User, MapPin } from 'lucide-react';
import { TEACHER_INFO } from '../data/mockData';

interface ZaloModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZaloModal: React.FC<ZaloModalProps> = ({ isOpen, onClose }) => {
  const [studentName, setStudentName] = useState('');
  const [question, setQuestion] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setQuestion('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0068ff] to-[#1a365d] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 fill-white" />
            <div>
              <h3 className="font-extrabold text-sm">
                Tư Vấn Zalo Cùng Cô Phượng
              </h3>
              <p className="text-[11px] text-blue-100">
                THCS Bắc Đông Quan • Thái Bình
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Teacher Info Card */}
          <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-2xl flex items-center gap-3">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#1a365d] to-amber-400 shrink-0 overflow-hidden">
              <img
                src={TEACHER_INFO.avatarUrl}
                alt={TEACHER_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div className="text-xs">
              <div className="font-extrabold text-slate-900">{TEACHER_INFO.name}</div>
              <div className="text-slate-500 line-clamp-1">{TEACHER_INFO.role}</div>
              <div className="text-blue-700 font-bold mt-0.5">
                Hotline / Zalo: <a href="tel:0817005477" className="underline">{TEACHER_INFO.hotline}</a>
              </div>
            </div>
          </div>

          {isSent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2 animate-bounce" />
              <h4 className="font-extrabold text-base text-slate-900">
                Đã Gửi Tin Nhắn!
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Cô Phượng sẽ phản hồi lại cho em qua Zalo sớm nhất nhé.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Họ tên học sinh / phụ huynh:
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ví dụ: Em Mai Chi - Lớp 9A"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Câu hỏi về bài tập hoặc lộ trình ôn thi:
                </label>
                <textarea
                  required
                  rows={3}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Em muốn hỏi về phương pháp giải đồ thị CO2 và nhận xét bài kiểm tra..."
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 bg-[#0068ff] hover:bg-blue-600 text-white font-extrabold text-xs py-2.5 rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi Câu Hỏi</span>
                </button>

                <a
                  href="tel:0817005477"
                  className="flex items-center justify-center gap-1 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi Ngay</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
