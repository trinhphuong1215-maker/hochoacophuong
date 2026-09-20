import React from 'react';
import { 
  User, 
  Award, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  FileText, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { TEACHER_INFO } from '../data/mockData';

interface AccountScreenProps {
  onOpenZalo: () => void;
  onCallHotline: () => void;
  onNavigateTab: (tab: 'home' | 'courses' | 'docs' | 'exams' | 'account') => void;
}

export const AccountScreen: React.FC<AccountScreenProps> = ({
  onOpenZalo,
  onCallHotline,
  onNavigateTab,
}) => {
  return (
    <div className="pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Profile & Learning Progress (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Student Profile Card */}
          <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-700 text-white p-6 rounded-3xl shadow-sm border border-amber-300/40">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-full bg-white/20 p-1 border border-white/30 shrink-0">
                <div className="w-full h-full rounded-full bg-yellow-300 flex items-center justify-center text-amber-950 font-black text-2xl shadow-inner">
                  MC
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-black text-white">Em Mai Chi</h2>
                  <span className="text-[11px] bg-yellow-300 text-amber-950 font-black px-2.5 py-0.5 rounded-full shadow-2xs">
                    Học viên 9A
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-amber-100 mt-0.5 font-medium">
                  Trường THCS Bắc Đông Quan, Thái Bình
                </p>
                <p className="text-xs text-yellow-200 font-bold mt-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-yellow-200" />
                  <span>Mục tiêu: Đỗ Chuyên Hóa THPT Chuyên Thái Bình (Điểm 9+)</span>
                </p>
              </div>
            </div>

            {/* Quick Stats Matrix */}
            <div className="grid grid-cols-3 gap-3 bg-black/20 rounded-2xl p-4 border border-white/10 text-center">
              <div>
                <div className="text-xl font-black text-yellow-300">48</div>
                <div className="text-xs text-amber-100 mt-0.5">Bài đã học</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-xl font-black text-emerald-300">9.6</div>
                <div className="text-xs text-amber-100 mt-0.5">Điểm TB thi thử</div>
              </div>
              <div>
                <div className="text-xl font-black text-amber-200">42h</div>
                <div className="text-xs text-amber-100 mt-0.5">Thời gian học</div>
              </div>
            </div>
          </div>

          {/* Learning Path Status */}
          <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs">
            <h3 className="text-xs sm:text-sm font-black text-amber-950 uppercase mb-3 flex items-center justify-between">
              <span>Tiến Độ Lộ Trình Luyện Thi Vào 10</span>
              <span className="text-emerald-700 font-black">78% Hoàn thành</span>
            </h3>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-amber-100 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full w-[78%]" />
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-2 border-b border-amber-100">
                <div className="flex items-center gap-2.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Phần 1: Oxit – Axit – Bazơ – Muối</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Đã vững</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-amber-100">
                <div className="flex items-center gap-2.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Phần 2: Kim loại & Dãy hoạt động hóa học</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Đã vững</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2.5 text-slate-800">
                  <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Phần 3: Bài toán đồ thị CO2 & Tuyệt kỹ 30 giây</span>
                </div>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">Đang luyện</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Teacher Support & Quick Links (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Teacher Direct Support & Consultation */}
          <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-yellow-500 shrink-0">
                <img
                  src={TEACHER_INFO.avatarUrl}
                  alt={TEACHER_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-black text-amber-950 uppercase">
                    {TEACHER_INFO.name}
                  </h3>
                </div>
                <p className="text-xs text-amber-900/70 mt-0.5 font-medium">
                  Giáo viên Hóa học • THCS Bắc Đông Quan
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed mb-4">
              Cô luôn sẵn sàng đồng hành, giải đáp thắc mắc bài tập Hóa khó và tư vấn lộ trình chinh phục điểm 9-10 thi vào 10 cho các em học sinh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={onOpenZalo}
                className="flex items-center justify-center gap-2 bg-[#0068ff] hover:bg-blue-600 text-white text-xs font-black py-2.5 px-3 rounded-xl transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Zalo Cô Phượng</span>
              </button>

              <button
                onClick={onCallHotline}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 text-xs font-black py-2.5 px-3 rounded-xl transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi 0817.005.477</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl border border-amber-200/80 shadow-xs divide-y divide-amber-100 text-xs sm:text-sm">
            <button
              onClick={() => onNavigateTab('exams')}
              className="w-full flex items-center justify-between p-4 hover:bg-amber-50/60 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-amber-950">Lịch sử làm bài thi thử & bảng điểm</span>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-500" />
            </button>

            <button
              onClick={() => onNavigateTab('docs')}
              className="w-full flex items-center justify-between p-4 hover:bg-amber-50/60 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-amber-950">Tài liệu đã lưu & Bảng tính tan offline</span>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-500" />
            </button>

            <div className="p-4 text-xs text-amber-900/60 text-center font-medium">
              Ứng dụng Hóa Học Cô Phượng v2.4 • THCS Bắc Đông Quan, Thái Bình
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
