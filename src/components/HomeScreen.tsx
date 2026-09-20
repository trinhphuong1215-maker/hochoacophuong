import React, { useState } from 'react';
import { 
  FlaskConical, 
  Microscope, 
  Atom, 
  BookOpen, 
  BookMarked, 
  TestTubes, 
  Clapperboard, 
  ChevronRight, 
  CheckCircle2, 
  Play, 
  Clock, 
  Zap, 
  Award, 
  Download, 
  FileText, 
  Video, 
  ShieldCheck, 
  GraduationCap, 
  User, 
  MapPin, 
  Phone,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Course } from '../types';
import { COURSES_DATA, TEACHER_INFO } from '../data/mockData';

interface HomeScreenProps {
  onSelectCourse: (course: Course) => void;
  onNavigateTab: (tab: 'home' | 'courses' | 'docs' | 'exams' | 'account') => void;
  onOpenZalo: () => void;
  onDownloadSampleExam: () => void;
  onOpenSolubilityTable: () => void;
  onFilterCategory?: (category: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectCourse,
  onNavigateTab,
  onOpenZalo,
  onDownloadSampleExam,
  onOpenSolubilityTable,
  onFilterCategory,
}) => {
  // Carousel active slide tracking for each of the 4 sections
  const [activeSlide, setActiveSlide] = useState<{ [key: string]: number }>({
    'hoa-8-toan-dien': 0,
    'on-thi-vao-10': 0,
    'boi-duong-hsg': 0,
    'ky-nang-giai-nhanh': 0,
  });

  const categories = [
    { id: 'khtn-6', name: 'KHTN 6', icon: <FlaskConical className="w-5 h-5 text-amber-700" />, tab: 'courses', filter: '6' },
    { id: 'khtn-7', name: 'KHTN 7', icon: <Microscope className="w-5 h-5 text-amber-700" />, tab: 'courses', filter: '7' },
    { id: 'khtn-8', name: 'KHTN 8', icon: <FlaskConical className="w-5 h-5 text-amber-700" />, tab: 'courses', filter: '8' },
    { id: 'khtn-9', name: 'KHTN 9', icon: <Atom className="w-5 h-5 text-amber-700" />, tab: 'courses', filter: '9' },
    { id: 'sgk-khtn', name: 'SGK KHTN', icon: <BookOpen className="w-5 h-5 text-amber-700" />, tab: 'docs', filter: 'SGK' },
    { id: 'sbt-khtn', name: 'SBT KHTN', icon: <BookMarked className="w-5 h-5 text-amber-700" />, tab: 'docs', filter: 'SBT' },
    { id: 'thi-nghiem', name: 'Các Thí Nghiệm', icon: <TestTubes className="w-5 h-5 text-amber-700" />, tab: 'courses', filter: 'Thí nghiệm' },
    { id: 'giai-tri', name: 'Giải trí khoa học', icon: <Clapperboard className="w-5 h-5 text-amber-700" />, tab: 'courses', filter: 'Vui' },
  ];

  const handleCategoryClick = (cat: typeof categories[0]) => {
    if (cat.tab === 'docs') {
      onNavigateTab('docs');
    } else {
      if (onFilterCategory) {
        onFilterCategory(cat.filter);
      }
      onNavigateTab('courses');
    }
  };

  return (
    <div className="pb-28 max-w-6xl mx-auto">
      {/* 1. DANH MỤC KHÓA HỌC Card */}
      <section className="px-4 pt-4 pb-2">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-amber-200/80">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-amber-700" />
              <h2 className="text-[15px] sm:text-base font-black text-amber-950 tracking-wide uppercase">
                DANH MỤC KHÓA HỌC & CHUYÊN ĐỀ
              </h2>
            </div>
            <span className="text-[11px] font-black text-amber-900 bg-amber-100 border border-amber-300/80 px-2.5 py-0.5 rounded-full shadow-2xs">
              8 Chuyên mục
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className="flex flex-col items-center justify-center text-center p-3 rounded-xl bg-gradient-to-b from-[#fffef8] to-[#fffbeb] hover:from-[#fef9c3]/70 hover:to-[#fef08a]/60 transition-all border border-amber-200/80 group shadow-2xs hover:shadow-xs active:scale-[0.98]"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100/90 border border-amber-200/80 flex items-center justify-center shrink-0 mb-1.5 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-xs font-black text-amber-950 group-hover:text-amber-800 transition-colors line-clamp-1">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Hero Welcome Card with Teacher Logo */}
      <section className="px-4 py-2">
        <div className="bg-gradient-to-br from-[#fffbeb] via-[#fef9c3]/70 to-[#fef08a]/40 rounded-2xl p-6 sm:p-8 text-center shadow-xs border border-amber-300/80 relative overflow-hidden">
          {/* Subtle background ambient tint */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-200/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />

          {/* Teacher Brand Logo Emblem */}
          <div className="flex flex-col items-center mb-3 relative z-10">
            <div className="relative group cursor-pointer" onClick={() => onNavigateTab('account')}>
              {/* Outer decorative ring border */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-md">
                <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={TEACHER_INFO.avatarUrl}
                    alt={TEACHER_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Chemistry flask icon badge */}
              <div 
                className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-amber-500 to-yellow-500 text-slate-950 p-1.5 rounded-full border-2 border-white shadow-sm flex items-center justify-center" 
                title="Giáo viên Hóa học THCS"
              >
                <FlaskConical className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Teacher Crest Tag */}
            <div className="mt-2.5 flex items-center gap-1.5 bg-white/95 px-4 py-1.5 rounded-full border border-amber-300/90 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="text-[13px] font-black text-amber-950 tracking-wide">
                {TEACHER_INFO.name}
              </span>
              <span className="text-xs text-amber-800 font-bold">• THCS Bắc Đông Quan</span>
            </div>
          </div>

          <h1 className="text-lg sm:text-2xl font-black text-amber-950 leading-snug tracking-tight mb-2 relative z-10 max-w-2xl mx-auto">
            HÓA HỌC CÔ PHƯỢNG – ĐỒNG HÀNH BỨT PHÁ ĐIỂM SỐ CÙNG HỌC SINH
          </h1>
          <p className="text-xs sm:text-sm text-amber-900/80 font-medium leading-relaxed max-w-xl mx-auto relative z-10">
            Hệ thống bài giảng trực quan, sơ đồ tư duy thực chiến và ngân hàng đề thi Hóa học THCS hàng đầu – học dễ hiểu, nhớ cực lâu, tự tin đạt điểm 9-10.
          </p>

          <div className="mt-4 flex flex-wrap justify-center items-center gap-2.5 relative z-10">
            <button
              onClick={() => onNavigateTab('courses')}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black text-xs px-5 py-2 rounded-full shadow-xs flex items-center gap-1.5 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>Khám Phá Khóa Học</span>
            </button>
            <button
              onClick={onOpenSolubilityTable}
              className="bg-white/90 hover:bg-white text-amber-950 font-black text-xs px-4 py-2 rounded-full border border-amber-300 shadow-2xs flex items-center gap-1.5 transition-all"
            >
              <TestTubes className="w-3.5 h-3.5 text-amber-700" />
              <span>Bảng Tính Tan Tương Tác</span>
            </button>
            <button
              onClick={onDownloadSampleExam}
              className="bg-white/90 hover:bg-white text-amber-950 font-black text-xs px-4 py-2 rounded-full border border-amber-300 shadow-2xs flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-amber-700" />
              <span>Tải Đề Thi Mẫu 10</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Featured Courses 2x2 Grid on Medium/Large Screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-2">
        {/* Section 1: Hóa 8 */}
        <div className="flex flex-col justify-between">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h2 className="text-[15px] font-black text-amber-950 uppercase tracking-tight">
                BỨT PHÁ <span className="text-amber-600">ĐIỂM SỐ HÓA HỌC 8</span>
              </h2>
              <p className="text-[12px] text-amber-900/70 line-clamp-1 mt-0.5">
                Xây dựng nền tảng vững chắc từ nguyên tử, phân tử và phản ứng hóa học
              </p>
            </div>
            <button 
              onClick={() => onNavigateTab('courses')}
              className="w-7 h-7 rounded-full border border-amber-300 flex items-center justify-center text-amber-700 bg-amber-50 hover:bg-amber-100 shrink-0 mt-0.5 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {renderCourseCard(COURSES_DATA[0], activeSlide['hoa-8-toan-dien'], (idx) => 
            setActiveSlide(prev => ({ ...prev, 'hoa-8-toan-dien': idx }))
          )}
        </div>

        {/* Section 2: Ôn thi vào 10 */}
        <div className="flex flex-col justify-between">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h2 className="text-[15px] font-black text-amber-950 uppercase tracking-tight">
                CHINH PHỤC <span className="text-amber-600">KỲ THI VÀO 10</span>
              </h2>
              <p className="text-[12px] text-amber-900/70 line-clamp-1 mt-0.5">
                Chiến lược tổng ôn và luyện đề thực chiến chuẩn cấu trúc Sở GD&ĐT
              </p>
            </div>
            <button 
              onClick={() => onNavigateTab('courses')}
              className="w-7 h-7 rounded-full border border-amber-300 flex items-center justify-center text-amber-700 bg-amber-50 hover:bg-amber-100 shrink-0 mt-0.5 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {renderCourseCard(COURSES_DATA[1], activeSlide['on-thi-vao-10'], (idx) => 
            setActiveSlide(prev => ({ ...prev, 'on-thi-vao-10': idx }))
          )}
        </div>

        {/* Section 3: Bồi dưỡng HSG & Chuyên */}
        <div className="flex flex-col justify-between">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h2 className="text-[15px] font-black text-amber-950 uppercase tracking-tight">
                BỒI DƯỠNG <span className="text-amber-600">HỌC SINH GIỎI & THI CHUYÊN</span>
              </h2>
              <p className="text-[12px] text-amber-900/70 line-clamp-1 mt-0.5">
                Phương pháp độc quyền: đồ thị hóa, bảo toàn mol & electron, tinh thể
              </p>
            </div>
            <button 
              onClick={() => onNavigateTab('courses')}
              className="w-7 h-7 rounded-full border border-amber-300 flex items-center justify-center text-amber-700 bg-amber-50 hover:bg-amber-100 shrink-0 mt-0.5 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {renderCourseCard(COURSES_DATA[2], activeSlide['boi-duong-hsg'], (idx) => 
            setActiveSlide(prev => ({ ...prev, 'boi-duong-hsg': idx }))
          )}
        </div>

        {/* Section 4: Kỹ năng & Phương pháp giải nhanh */}
        <div className="flex flex-col justify-between">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h2 className="text-[15px] font-black text-amber-950 uppercase tracking-tight">
                KỸ NĂNG & <span className="text-amber-600">PHƯƠNG PHÁP GIẢI NHANH</span>
              </h2>
              <p className="text-[12px] text-amber-900/70 line-clamp-1 mt-0.5">
                Đột phá tư duy trắc nghiệm, bấm máy casio, tuyệt kỹ 30 giây
              </p>
            </div>
            <button 
              onClick={() => onNavigateTab('courses')}
              className="w-7 h-7 rounded-full border border-amber-300 flex items-center justify-center text-amber-700 bg-amber-50 hover:bg-amber-100 shrink-0 mt-0.5 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {renderCourseCard(COURSES_DATA[3], activeSlide['ky-nang-giai-nhanh'], (idx) => 
            setActiveSlide(prev => ({ ...prev, 'ky-nang-giai-nhanh': idx }))
          )}
        </div>
      </div>

      {/* 7. Section: CHỨNG NHẬN & THÔNG TIN BỒI DƯỠNG */}
      <section className="px-4 py-3">
        <div className="bg-gradient-to-br from-[#fffbeb]/90 via-[#fefce8] to-white rounded-2xl p-5 sm:p-6 shadow-xs border border-amber-200/80">
          <div className="flex items-center gap-2 mb-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            <h3 className="text-[15px] font-black text-amber-950 uppercase tracking-wide">
              CHỨNG NHẬN & THÔNG TIN BỒI DƯỠNG
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8">
              <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed mb-3">
                Giáo viên: <strong className="text-amber-950 font-black">{TEACHER_INFO.name}</strong>, {TEACHER_INFO.role} trường {TEACHER_INFO.school}. Với hơn 12 năm kinh nghiệm giảng dạy và luyện thi HSG, Cô Phượng luôn tận tâm, nhiệt huyết và truyền cảm hứng yêu thích môn Hóa học cho các em học sinh.
              </p>
              <p className="text-xs text-amber-900/70">
                ⭐ Tỉ lệ học sinh đạt điểm 9+ môn Hóa học vào THPT công lập đạt trên 94%.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-wrap md:flex-col gap-2">
              <button
                onClick={onDownloadSampleExam}
                className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-amber-100/60 border border-amber-300/80 text-xs font-black text-amber-950 transition-colors shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-amber-700" />
                <span>Tải Đề Thi Mẫu</span>
              </button>

              <button
                onClick={onOpenSolubilityTable}
                className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-amber-100/60 border border-amber-300/80 text-xs font-black text-amber-950 transition-colors shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Ebook Bảng Tính Tan</span>
              </button>

              <button
                onClick={() => onSelectCourse(COURSES_DATA[0])}
                className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 text-xs font-black transition-colors shadow-2xs"
              >
                <Video className="w-3.5 h-3.5 fill-slate-950" />
                <span>Xem Video Học Thử</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer Section (Warm Amber Dark) */}
      <footer className="mt-4 bg-gradient-to-b from-[#3b210c] via-[#2c1809] to-[#1a0d05] text-amber-100 px-6 pt-8 pb-10 rounded-t-3xl shadow-inner border-t border-amber-400/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              <h4 className="text-[16px] font-black tracking-tight text-white">
                HÓA HỌC CÔ PHƯỢNG
              </h4>
            </div>
            <p className="text-xs text-amber-200/90 leading-relaxed">
              Bồi dưỡng đam mê - Vững vàng kiến thức Hóa học bậc THCS & Luyện thi vào lớp 10 chuyên. Hệ thống học tập trực tuyến đồng hành cùng học sinh trường THCS Bắc Đông Quan và cả nước.
            </p>
          </div>

          <div className="space-y-2.5 text-xs text-amber-100">
            <h5 className="font-black text-amber-300 text-xs uppercase tracking-wider mb-2">Thông Tin Liên Hệ</h5>
            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong className="text-white">Giáo viên:</strong> Cô Trịnh Thị Phượng – Giáo viên KHTN</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong className="text-white">Đơn vị:</strong> Trường THCS Bắc Đông Quan, Đông Hưng, Thái Bình</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong className="text-white">Hotline / Zalo:</strong> <a href="tel:0817005477" className="text-amber-300 font-black hover:underline">0817.005.477</a></span>
            </div>
          </div>

          <div>
            <h5 className="font-black text-amber-300 text-xs uppercase tracking-wider mb-2">Hỗ Trợ Nhanh</h5>
            <p className="text-xs text-amber-200/80 mb-3">
              Cần tài liệu ôn thi chuyên, giải đáp bài tập hóa học khó hoặc tư vấn phương pháp học, hãy kết nối trực tiếp với Cô qua Zalo.
            </p>
            <button
              onClick={onOpenZalo}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Nhắn Tin Zalo Cùng Cô</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-amber-900/60 text-xs text-amber-300/70 text-center leading-relaxed">
          © Bản quyền thuộc về Cô Trịnh Thị Phượng, THCS Bắc Đông Quan. Chuẩn tri thức KHTN GDPT 2018.
        </div>
      </footer>
    </div>
  );

  // Helper renderer for Course Card exactly like the screenshot
  function renderCourseCard(
    course: Course, 
    currentSlide: number, 
    onSetSlide: (index: number) => void
  ) {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-amber-200/80 hover:border-amber-300 transition-all">
        {/* Course Thumbnail with Overlays */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <img
            src={course.imageUrl}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />

          {/* Top Badge: "Khóa Trọng Tâm Lớp 8", "Ôn Luyện Cấp Tốc", etc. */}
          <div className="absolute top-2.5 left-2.5">
            <span className={`${course.badgeColor} text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md backdrop-blur-xs`}>
              {course.badge}
            </span>
          </div>

          {/* Secondary Badge if present (e.g. HSG Chuyên "KẾT TỦA TINH THỂ") */}
          {course.secondaryBadge && (
            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
              <span className="bg-black/75 text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-amber-400/40">
                {course.secondaryBadge}
              </span>
              <span className="text-base" role="img" aria-label="Trophy">🥇</span>
            </div>
          )}

          {/* Bottom Right Overlay (e.g. "48 Bài Giảng", "60 Giờ Video") */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            {course.statsIcon === 'video' && <Video className="w-3.5 h-3.5 text-amber-300" />}
            {course.statsIcon === 'clock' && <Clock className="w-3.5 h-3.5 text-amber-300" />}
            {course.statsIcon === 'book' && <BookOpen className="w-3.5 h-3.5 text-amber-300" />}
            {course.statsIcon === 'zap' && <Zap className="w-3.5 h-3.5 text-amber-300" />}
            <span>{course.statsText}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="font-black text-amber-950 text-[15px] leading-snug line-clamp-2 mb-1.5">
            {course.title}
          </h3>

          <p className="text-[12px] text-amber-950/70 font-medium leading-relaxed line-clamp-2 mb-3">
            {course.description}
          </p>

          {/* Bottom Bar: Free badge + "Vào Học Ngay" button */}
          <div className="flex items-center justify-between pt-2.5 border-t border-amber-100">
            <div className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
              <span className="text-[12px] font-black tracking-tight">
                Miễn Phí 100%
              </span>
            </div>

            <button
              onClick={() => onSelectCourse(course)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 active:scale-95 text-slate-950 font-black text-[12px] px-4 py-2 rounded-full shadow-xs hover:shadow-sm transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>Vào Học Ngay</span>
            </button>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 pb-3">
          {[0, 1, 2, 3, 4].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => onSetSlide(dotIndex)}
              className={`transition-all rounded-full ${
                currentSlide === dotIndex
                  ? 'w-4 h-1.5 bg-amber-500'
                  : 'w-1.5 h-1.5 bg-amber-200 hover:bg-amber-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
};
