import React, { useState } from 'react';
import { Search, X, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { COURSES_DATA, DOCUMENTS_DATA, SAMPLE_EXAMS } from '../data/mockData';
import { Course } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
  onNavigateTab: (tab: 'home' | 'courses' | 'docs' | 'exams' | 'account') => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
  onNavigateTab,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchingCourses = COURSES_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  const matchingDocs = DOCUMENTS_DATA.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-12 px-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
        {/* Search input bar */}
        <div className="p-3.5 border-b border-slate-100 flex items-center gap-2">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm bài giảng Hóa 8, đề thi vào 10, bảng tính tan..."
            className="flex-1 text-sm bg-transparent border-none outline-hidden text-slate-800 placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-1"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search results */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-4 text-xs">
          {query.trim() === '' ? (
            <div>
              <p className="font-black text-amber-950/70 uppercase text-[11px] mb-2.5">
                Gợi ý tìm kiếm phổ biến
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Hóa học 8 trọn bộ', 'Ôn thi vào 10', 'Bảng tính tan', 'Oxit bazơ', 'Đề thi thử THCS Bắc Đông Quan'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold px-3 py-1.5 rounded-full transition-colors border border-amber-300/60"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Courses results */}
              <div>
                <p className="font-black text-amber-950 uppercase text-[11px] mb-2">
                  Khóa học liên quan ({matchingCourses.length})
                </p>
                {matchingCourses.length > 0 ? (
                  <div className="space-y-2">
                    {matchingCourses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCourse(c);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-2xl bg-amber-50/50 hover:bg-amber-100/70 border border-amber-200/60 transition-colors flex items-center justify-between group"
                      >
                        <div className="pr-2">
                          <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300/70">
                            {c.badge}
                          </span>
                          <h4 className="font-black text-amber-950 text-xs mt-1 group-hover:text-amber-900">
                            {c.title}
                          </h4>
                        </div>
                        <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-amber-900/50 italic">Không có khóa học nào khớp từ khóa</p>
                )}
              </div>

              {/* Documents results */}
              <div>
                <p className="font-black text-amber-950 uppercase text-[11px] mb-2">
                  Tài liệu & Đề cương ({matchingDocs.length})
                </p>
                {matchingDocs.length > 0 ? (
                  <div className="space-y-2">
                    {matchingDocs.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => {
                          onNavigateTab('docs');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-2xl bg-amber-50/50 hover:bg-amber-100/70 border border-amber-200/60 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300/60">
                            {d.category}
                          </span>
                          <h4 className="font-black text-amber-950 text-xs mt-1">
                            {d.title}
                          </h4>
                        </div>
                        <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-amber-900/50 italic">Không có tài liệu nào khớp từ khóa</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
