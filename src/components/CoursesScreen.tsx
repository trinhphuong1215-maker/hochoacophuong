import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/mockData';
import { 
  Play, 
  Search, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Video, 
  Zap, 
  Star, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Check 
} from 'lucide-react';

interface CoursesScreenProps {
  onSelectCourse: (course: Course) => void;
  initialFilter?: string;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({
  onSelectCourse,
  initialFilter = 'all',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Tất cả' },
    { id: '8', label: 'Hóa 8 (KHTN 8)' },
    { id: '9', label: 'Hóa 9 (KHTN 9)' },
    { id: 'on-thi', label: 'Ôn Thi Vào 10' },
    { id: 'hsg', label: 'Bồi Dưỡng HSG' },
    { id: 'meo', label: 'Tuyệt Kỹ 30 Giây' },
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    // Filter by grade / category
    let matchesCategory = true;
    if (activeFilter === '8') matchesCategory = course.grade === '8';
    else if (activeFilter === '9') matchesCategory = course.grade === '9';
    else if (activeFilter === 'on-thi') matchesCategory = course.id === 'on-thi-vao-10';
    else if (activeFilter === 'hsg') matchesCategory = course.grade === 'HSG';
    else if (activeFilter === 'meo') matchesCategory = course.grade === 'Mẹo thi';

    // Search query
    const matchesSearch =
      searchQuery.trim() === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (courseId: string) => {
    setExpandedCourseId((prev) => (prev === courseId ? null : courseId));
  };

  return (
    <div className="pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      {/* Page Title */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight">
          HỆ THỐNG KHÓA HỌC HÓA HỌC THCS
        </h1>
        <p className="text-xs sm:text-sm text-amber-900/70 mt-1">
          Giáo trình bám sát đổi mới GDPT 2018 – Đầy đủ bộ sách Cánh Diều & Kết Nối Tri Thức
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-3.5">
        <Search className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm tên bài giảng, oxit, kim loại, đề thi..."
          className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl text-xs sm:text-sm border border-amber-200/90 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 shadow-2xs placeholder:text-slate-400 text-slate-900"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-amber-600 hover:text-amber-800"
          >
            Xóa
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-4">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap transition-all ${
              activeFilter === tab.id
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-xs'
                : 'bg-white text-amber-950 hover:bg-amber-100/60 border border-amber-200/90'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Course List: 2 columns on tablet / desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCourses.map((course) => {
          const isExpanded = expandedCourseId === course.id;

          return (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs border border-amber-200/80 hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              {/* Thumbnail with overlay badges */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* Badge top-left */}
                <div className="absolute top-2.5 left-2.5">
                  <span className={`${course.badgeColor} text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md`}>
                    {course.badge}
                  </span>
                </div>

                {/* Stats badge bottom-right */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  {course.statsIcon === 'video' && <Video className="w-3.5 h-3.5 text-amber-300" />}
                  {course.statsIcon === 'clock' && <Clock className="w-3.5 h-3.5 text-amber-300" />}
                  {course.statsIcon === 'book' && <BookOpen className="w-3.5 h-3.5 text-amber-300" />}
                  {course.statsIcon === 'zap' && <Zap className="w-3.5 h-3.5 text-amber-300" />}
                  <span>{course.statsText}</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1.5 text-[11px] text-slate-500">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold ml-1 text-slate-700">{course.rating}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.enrolledStudents.toLocaleString('vi-VN')} học viên</span>
                  </div>
                  <span>•</span>
                  <span>{course.totalHours}</span>
                </div>

                <h3 className="font-black text-amber-950 text-base leading-snug mb-1.5">
                  {course.title}
                </h3>

                <p className="text-xs text-amber-950/70 font-medium leading-relaxed mb-3">
                  {course.description}
                </p>

                {/* Collapsible Syllabus preview */}
                <div className="mb-3">
                  <button
                    onClick={() => toggleExpand(course.id)}
                    className="flex items-center justify-between w-full py-2 px-3 bg-amber-50/70 hover:bg-amber-100/70 rounded-xl text-xs font-bold text-amber-950 transition-colors border border-amber-200/60"
                  >
                    <span>Lộ trình chi tiết ({course.chapters.length} chương - {course.totalLessons} bài học)</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-800" /> : <ChevronDown className="w-4 h-4 text-amber-800" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 space-y-2.5 p-3 bg-amber-50/40 rounded-xl border border-amber-200/70">
                      {course.chapters.map((chapter) => (
                        <div key={chapter.chapterId} className="border-b border-amber-200/60 pb-2 last:border-b-0 last:pb-0">
                          <h4 className="text-xs font-black text-amber-950 mb-1.5">
                            {chapter.chapterTitle}
                          </h4>
                          <div className="space-y-1 pl-2">
                            {chapter.lessons.map((lesson) => (
                              <div key={lesson.id} className="flex items-center justify-between text-[11px] text-slate-700 py-0.5">
                                <div className="flex items-center gap-1.5">
                                  {lesson.completed ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                  ) : (
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                  )}
                                  <span className="line-clamp-1">{lesson.title}</span>
                                </div>
                                <span className="text-[10px] text-slate-400 shrink-0 ml-2">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-2.5 border-t border-amber-100">
                  <div className="flex items-center gap-1 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    <span className="text-xs font-black tracking-tight">Miễn Phí 100%</span>
                  </div>

                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 active:scale-95 text-slate-950 font-black text-xs px-4 py-2 rounded-full shadow-xs hover:shadow-sm transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Vào Học Ngay</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredCourses.length === 0 && (
          <div className="md:col-span-2 bg-white rounded-2xl p-8 text-center border border-amber-200/80">
            <BookOpen className="w-10 h-10 text-amber-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-amber-950">Không tìm thấy khóa học phù hợp</p>
            <p className="text-xs text-amber-900/60 mt-1">Vui lòng thử từ khóa khác hoặc chọn tất cả danh mục</p>
          </div>
        )}
      </div>
    </div>
  );
};
