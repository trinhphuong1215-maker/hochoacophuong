import React, { useState } from 'react';
import { X, ShoppingCart, CheckCircle2, Play, Trash2, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/mockData';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  enrolledCourses: Course[];
  onEnrollAll: () => void;
  onSelectCourse: (course: Course) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  enrolledCourses,
  onEnrollAll,
  onSelectCourse,
}) => {
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleActivateAll = () => {
    onEnrollAll();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 p-4 flex items-center justify-between border-b border-amber-300/60">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-slate-950" />
            <h3 className="font-black text-sm">
              Đăng Ký Khóa Học Miễn Phí (Cô Phượng)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-slate-950 font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
          {success ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2 animate-bounce" />
              <h4 className="font-extrabold text-base text-slate-900">
                Đăng Ký Thành Công!
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Toàn bộ tài liệu và video bài giảng đã được mở khóa cho em.
              </p>
            </div>
          ) : (
            <>
              <p className="text-xs text-amber-950/80 font-medium">
                Chương trình đồng hành vì học sinh trường THCS Bắc Đông Quan và cộng đồng học sinh cả nước: <strong>Miễn phí 100% học phí</strong>.
              </p>

              <div className="space-y-2">
                {COURSES_DATA.map((course) => (
                  <div
                    key={course.id}
                    className="p-3 bg-amber-50/50 rounded-2xl border border-amber-200/80 flex items-center justify-between"
                  >
                    <div className="pr-2">
                      <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300/60">
                        {course.badge}
                      </span>
                      <h4 className="font-black text-xs text-amber-950 mt-1 line-clamp-1">
                        {course.title}
                      </h4>
                      <span className="text-[11px] font-black text-emerald-700">
                        0 đ (Miễn phí 100%)
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onSelectCourse(course);
                        onClose();
                      }}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full shrink-0 flex items-center gap-1 shadow-2xs"
                    >
                      <Play className="w-3 h-3 fill-slate-950" />
                      <span>Học ngay</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-amber-900/60 font-medium">Tổng thanh toán:</div>
                  <div className="text-lg font-black text-emerald-700">0 VNĐ</div>
                </div>

                <button
                  onClick={handleActivateAll}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 active:scale-95 text-white font-black text-xs px-5 py-2.5 rounded-full shadow-xs transition-all flex items-center gap-1.5"
                >
                  <span>Kích Hoạt Tất Cả</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
