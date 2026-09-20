import React, { useState } from 'react';
import { Course, Lesson } from '../types';
import { 
  X, 
  Play, 
  Pause, 
  CheckCircle2, 
  Circle, 
  Volume2, 
  Maximize2, 
  BookOpen, 
  FileText, 
  Sparkles, 
  ChevronRight,
  MessageCircle,
  Share2,
  ThumbsUp
} from 'lucide-react';

interface CourseLearningModalProps {
  course: Course;
  onClose: () => void;
  onOpenZalo: () => void;
}

export const CourseLearningModal: React.FC<CourseLearningModalProps> = ({
  course,
  onClose,
  onOpenZalo,
}) => {
  // Find first lesson as default
  const defaultLesson = course.chapters[0]?.lessons[0] || {
    id: 'l-default',
    title: course.title,
    duration: '35:00',
    type: 'video' as const,
  };

  const [activeLesson, setActiveLesson] = useState<Lesson>(defaultLesson);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['l1']);
  const [activeTab, setActiveTab] = useState<'syllabus' | 'notes' | 'exercises'>('syllabus');
  const [likeCount, setLikeCount] = useState<number>(142);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const toggleComplete = (lessonId: string) => {
    setCompletedLessonIds((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikeCount((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4">
      <div className="bg-white w-full sm:max-w-4xl lg:max-w-5xl h-[92vh] sm:h-[88vh] rounded-t-3xl sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-slideUp">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 px-4 py-3 flex items-center justify-between shrink-0 border-b border-amber-300/60">
          <div className="flex items-center gap-2 overflow-hidden pr-2">
            <span className="text-lg" role="img" aria-label="Flask">🧪</span>
            <div className="truncate">
              <h2 className="text-xs font-black text-amber-950 uppercase tracking-wide">
                Đang Học: {course.badge}
              </h2>
              <p className="text-xs font-black text-slate-950 truncate">
                {course.title}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center shrink-0 text-slate-950 font-bold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Simulator */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 group">
          <img
            src={course.imageUrl}
            alt={activeLesson.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 filter brightness-90"
          />

          {/* Central Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-14 h-14 rounded-full bg-[#1a365d]/90 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all border border-amber-400/40"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
          </button>

          {/* Lesson Title Overlay */}
          <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
            <span className="truncate">{activeLesson.title}</span>
            <span className="font-mono ml-2 text-amber-300">{activeLesson.duration}</span>
          </div>

          {/* Video Controls Bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-2">
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <Volume2 className="w-4 h-4 text-slate-300" />
              <span className="text-[10px] font-mono text-slate-300">12:45 / {activeLesson.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-amber-300 font-bold">1080p HD</span>
              <Maximize2 className="w-4 h-4 text-slate-300" />
            </div>
          </div>
        </div>

        {/* Action bar under video */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 font-bold transition-colors ${
                hasLiked ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{likeCount}</span>
            </button>
            <button
              onClick={onOpenZalo}
              className="flex items-center gap-1 font-bold text-blue-700 hover:text-blue-800"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hỏi Cô Phượng</span>
            </button>
          </div>
          <button
            onClick={() => toggleComplete(activeLesson.id)}
            className={`flex items-center gap-1.5 font-bold px-3 py-1 rounded-full text-xs transition-all ${
              completedLessonIds.includes(activeLesson.id)
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{completedLessonIds.includes(activeLesson.id) ? 'Đã học xong' : 'Đánh dấu đã học'}</span>
          </button>
        </div>

        {/* Tabs switcher: Giáo trình / Ghi chú lý thuyết / Bài tập trắc nghiệm */}
        <div className="flex border-b border-amber-200 bg-white text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
              activeTab === 'syllabus'
                ? 'border-amber-500 text-amber-950 font-black'
                : 'border-transparent text-amber-900/60 hover:text-amber-950'
            }`}
          >
            Giáo Trình Bài Học
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
              activeTab === 'notes'
                ? 'border-amber-500 text-amber-950 font-black'
                : 'border-transparent text-amber-900/60 hover:text-amber-950'
            }`}
          >
            Tóm Tắt Trọng Tâm
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
              activeTab === 'exercises'
                ? 'border-amber-500 text-amber-950 font-black'
                : 'border-transparent text-amber-900/60 hover:text-amber-950'
            }`}
          >
            Bài Tập Về Nhà
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              {course.chapters.map((chapter) => (
                <div key={chapter.chapterId} className="bg-amber-50/40 rounded-2xl p-3.5 border border-amber-200/80">
                  <h4 className="text-xs font-black text-amber-950 mb-2">
                    {chapter.chapterTitle}
                  </h4>
                  <div className="space-y-1.5">
                    {chapter.lessons.map((lesson) => {
                      const isActive = activeLesson.id === lesson.id;
                      const isDone = completedLessonIds.includes(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson)}
                          className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                            isActive
                              ? 'bg-amber-500 text-slate-950 font-black shadow-xs ring-1 ring-yellow-400'
                              : 'bg-white hover:bg-amber-100/60 text-slate-800 border border-amber-200/60'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isDone ? (
                              <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-600'}`} />
                            ) : (
                              <Circle className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                            )}
                            <span className="line-clamp-1">{lesson.title}</span>
                          </div>
                          <span className={`text-[10px] font-mono shrink-0 ml-2 ${isActive ? 'text-slate-950' : 'text-amber-900/60'}`}>
                            {lesson.duration}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-3 text-xs leading-relaxed text-slate-700">
              <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-extrabold mb-1">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Lời Nhắn Của Cô Phượng Cho Bài Này:</span>
                </div>
                <p className="text-amber-950">
                  Học sinh chú ý ghi chép cẩn thận các phương trình phản ứng sinh khí hoặc kết tủa đặc trưng. Khi làm bài toán hóa học, luôn nhớ quy đổi số liệu đề bài sang số mol (n = m/M hoặc n = V/22.4) trước tiên!
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                <h5 className="font-extrabold text-[#1a365d] mb-1.5">Công Thức Cần Nằm Lòng:</h5>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Khối lượng chất tan: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono font-bold text-slate-800">m = n * M (gam)</code></li>
                  <li>Thể tích khí ở đktc: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono font-bold text-slate-800">V = n * 22,4 (lít)</code></li>
                  <li>Nồng độ phần trăm: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono font-bold text-slate-800">C% = (m_ct / m_dd) * 100%</code></li>
                  <li>Nồng độ mol: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono font-bold text-slate-800">CM = n / V (mol/lít)</code></li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'exercises' && (
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl">
                <h5 className="font-extrabold text-blue-900 mb-1">Phiếu Bài Tập Củng Cố Kiến Thức</h5>
                <p className="text-blue-800 mb-3">
                  Gồm 15 câu trắc nghiệm tự luyện và 2 bài toán tự luận bám sát đề thi tuyển sinh THCS Bắc Đông Quan.
                </p>
                <button
                  onClick={() => alert('Đang tải phiếu bài tập PDF về máy...')}
                  className="bg-[#1a365d] text-white font-bold px-3.5 py-1.5 rounded-xl hover:bg-blue-900 transition-colors"
                >
                  Tải Phiếu Bài Tập (.PDF)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
