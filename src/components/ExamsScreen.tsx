import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Clock, 
  Award, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  BookOpen,
  Send,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_EXAMS } from '../data/mockData';
import { ExamQuestion } from '../types';

export const ExamsScreen: React.FC = () => {
  const currentExam = SAMPLE_EXAMS[0];
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: number }>({});
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(45 * 60);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeftSeconds]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let correct = 0;
    currentExam.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowExplanation(true);
    const score = calculateScore();
    if (score >= 8) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setCurrentQuestionIdx(0);
    setIsSubmitted(false);
    setShowExplanation(false);
    setTimeLeftSeconds(45 * 60);
  };

  const currentQ: ExamQuestion = currentExam.questions[currentQuestionIdx];
  const totalQuestions = currentExam.questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const score = isSubmitted ? calculateScore() : 0;
  const scoreOutOf10 = ((score / totalQuestions) * 10).toFixed(1);

  return (
    <div className="pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      {/* Header Info */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-black text-amber-900 bg-amber-100 px-3 py-0.5 rounded-full border border-amber-300/80 shadow-2xs">
            {currentExam.school} • {currentExam.author}
          </span>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-amber-950 bg-white px-3 py-1 rounded-lg border border-amber-200/90 shadow-2xs">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className={timeLeftSeconds < 300 ? 'text-red-600 animate-pulse font-black' : ''}>
              {formatTime(timeLeftSeconds)}
            </span>
          </div>
        </div>

        <h1 className="text-lg sm:text-2xl font-black text-amber-950 leading-snug">
          {currentExam.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Question Area (8 cols on lg) */}
        <div className="lg:col-span-8">
          {/* Active Question Card */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-200/80 shadow-xs mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-amber-950 bg-amber-100 border border-amber-300/80 px-3 py-1 rounded-lg">
                Câu {currentQuestionIdx + 1} / {totalQuestions}
              </span>
              {isSubmitted && (
                <span className="text-xs sm:text-sm font-bold">
                  {userAnswers[currentQ.id] === currentQ.correctIndex ? (
                    <span className="text-emerald-600 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Chính xác (+1.0 đ)
                    </span>
                  ) : (
                    <span className="text-red-500 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Chưa đúng
                    </span>
                  )}
                </span>
              )}
            </div>

            <h3 className="text-sm sm:text-base font-black text-slate-900 mb-4 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-2.5 mb-5">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                const isThisOptionCorrect = isSubmitted && currentQ.correctIndex === optIdx;
                const isThisOptionWrong = isSubmitted && isSelected && currentQ.correctIndex !== optIdx;

                let optionClass = 'border-amber-200/70 hover:border-amber-300 bg-amber-50/20 text-slate-800';
                if (isSubmitted) {
                  if (isThisOptionCorrect) {
                    optionClass = 'border-emerald-500 bg-emerald-50/80 text-emerald-900 font-bold';
                  } else if (isThisOptionWrong) {
                    optionClass = 'border-red-400 bg-red-50/80 text-red-900 line-through';
                  }
                } else if (isSelected) {
                  optionClass = 'border-amber-500 bg-amber-100/70 text-amber-950 font-bold ring-1 ring-amber-400';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${optionClass}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs ${
                        isSelected ? 'bg-amber-500 border-amber-500 text-slate-950 font-black' : 'border-amber-300 text-amber-900'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </div>
                    <span className="leading-snug pt-0.5">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Explanation if submitted */}
            {isSubmitted && (
              <div className="bg-amber-50/90 border border-amber-300 p-4 sm:p-5 rounded-xl text-xs sm:text-sm text-amber-950 leading-relaxed space-y-1.5 animate-fadeIn mb-4">
                <div className="flex items-center gap-1.5 font-black text-amber-950">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Lời Giải Chi Tiết Của Cô Phượng:</span>
                </div>
                <p className="text-amber-950/80 pl-5 leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-amber-100">
              <button
                onClick={() => setCurrentQuestionIdx((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIdx === 0}
                className="flex items-center gap-1.5 text-xs font-bold text-amber-950 disabled:opacity-30 hover:bg-amber-100 py-2.5 px-4 rounded-xl bg-amber-50 border border-amber-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              {!isSubmitted ? (
                currentQuestionIdx === totalQuestions - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-rose-500 via-rose-600 to-amber-600 hover:from-rose-600 text-white text-xs font-black px-5 py-2.5 rounded-full shadow-xs active:scale-95 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Nộp Bài Chấm Điểm</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestionIdx((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    className="flex items-center gap-1 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 py-2.5 px-5 rounded-xl shadow-2xs transition-all"
                  >
                    <span>Câu sau</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )
              ) : (
                <button
                  onClick={() => setCurrentQuestionIdx((prev) => Math.min(totalQuestions - 1, prev + 1))}
                  disabled={currentQuestionIdx === totalQuestions - 1}
                  className="flex items-center gap-1 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 py-2.5 px-5 rounded-xl disabled:opacity-30 transition-all"
                >
                  <span>Xem câu tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar: Palette, Score, Actions (4 cols on lg) */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-20">
          {/* Result Banner when submitted */}
          {isSubmitted && (
            <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-700 text-white p-5 rounded-2xl shadow-sm text-center border border-amber-300/40">
              <div className="w-14 h-14 rounded-full bg-yellow-300 text-amber-950 font-black text-2xl flex items-center justify-center mx-auto mb-2 shadow-md">
                {scoreOutOf10}
              </div>
              <h2 className="text-base font-black mb-1 text-white">
                {score >= 8 ? 'Xuất Sắc! Bứt Phá Điểm Số! 🎉' : 'Đã Hoàn Thành Bài Thi! Cố Lên Em! 💪'}
              </h2>
              <p className="text-xs text-amber-100 mb-3">
                Em làm đúng {score}/{totalQuestions} câu hỏi. Xem lời giải chi tiết của Cô Phượng để rút kinh nghiệm nhé!
              </p>
              <div className="flex justify-center gap-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Làm Lại Đề Này</span>
                </button>
              </div>
            </div>
          )}

          {/* Question Selector Palette */}
          <div className="bg-white p-4 rounded-2xl border border-amber-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-amber-950">
                Danh Sách Câu Hỏi ({answeredCount}/{totalQuestions})
              </span>
              {!isSubmitted && (
                <span className="text-[11px] text-amber-900/60 font-medium">Nhấn để chọn</span>
              )}
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
              {currentExam.questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCurrent = currentQuestionIdx === idx;
                const isCorrect = isSubmitted && userAnswers[q.id] === q.correctIndex;
                const isWrong = isSubmitted && isAnswered && userAnswers[q.id] !== q.correctIndex;

                let btnColor = 'bg-amber-50/60 text-amber-900/70 border border-amber-200/50 hover:bg-amber-100';
                if (isSubmitted) {
                  if (isCorrect) btnColor = 'bg-emerald-500 text-white font-bold';
                  else if (isWrong) btnColor = 'bg-red-500 text-white font-bold';
                  else btnColor = 'bg-amber-100/70 text-amber-800';
                } else if (isCurrent) {
                  btnColor = 'bg-amber-500 text-slate-950 font-black ring-2 ring-yellow-300 shadow-2xs';
                } else if (isAnswered) {
                  btnColor = 'bg-amber-200 text-amber-950 font-black border border-amber-300';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIdx(idx)}
                    className={`h-9 rounded-xl text-xs transition-all flex items-center justify-center ${btnColor}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {!isSubmitted && (
              <div className="mt-4 pt-3 border-t border-amber-100 flex flex-col gap-2">
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-rose-500 via-rose-600 to-amber-600 hover:from-rose-600 text-white text-xs font-black py-2.5 rounded-xl shadow-xs active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Nộp Bài Thi Ngay</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
