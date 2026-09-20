import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNavigation, TabType } from './components/BottomNavigation';
import { FloatingActions } from './components/FloatingActions';
import { HomeScreen } from './components/HomeScreen';
import { CoursesScreen } from './components/CoursesScreen';
import { DocumentsScreen } from './components/DocumentsScreen';
import { ExamsScreen } from './components/ExamsScreen';
import { AccountScreen } from './components/AccountScreen';
import { CourseLearningModal } from './components/CourseLearningModal';
import { SearchModal } from './components/SearchModal';
import { CartModal } from './components/CartModal';
import { ZaloModal } from './components/ZaloModal';
import { Course } from './types';
import { COURSES_DATA } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isZaloOpen, setIsZaloOpen] = useState<boolean>(false);
  const [courseFilterGrade, setCourseFilterGrade] = useState<string>('all');
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>(COURSES_DATA);
  const [cartCount, setCartCount] = useState<number>(0);
  const [isPhoneFrame, setIsPhoneFrame] = useState<boolean>(false);
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCategorySelect = (filterVal: string) => {
    setCourseFilterGrade(filterVal);
    setActiveTab('courses');
  };

  const handleDownloadSampleExam = () => {
    setDownloadNotification('Đang tải bộ đề thi tuyển sinh vào 10 chuẩn cấu trúc THCS Bắc Đông Quan...');
    setTimeout(() => {
      setDownloadNotification(null);
    }, 3500);
  };

  const handleOpenSolubilityTable = () => {
    setActiveTab('docs');
  };

  const handleCallHotline = () => {
    window.location.href = 'tel:0817005477';
  };

  const handleEnrollAll = () => {
    setCartCount(0);
  };

  return (
    <div className={`min-h-screen bg-[#fefce8]/70 flex flex-col items-center justify-start ${isPhoneFrame ? 'py-4 sm:py-8' : ''}`}>
      {/* App Container Wrapper - Spacious on Desktop / Tablet */}
      <div
        className={`w-full bg-[#fffdf2] min-h-screen flex flex-col relative transition-all duration-300 ${
          isPhoneFrame
            ? 'max-w-[430px] rounded-[36px] shadow-2xl border-[6px] border-amber-950 overflow-hidden ring-1 ring-amber-400/30'
            : 'max-w-6xl mx-auto shadow-sm border-x border-amber-200/60'
        }`}
      >
        {/* Phone Frame Status Bar Notch Simulation (only when isPhoneFrame is true) */}
        {isPhoneFrame && (
          <div className="bg-amber-950 text-amber-100 px-6 py-2 flex items-center justify-between text-[11px] font-semibold select-none shrink-0 z-50">
            <span>09:41</span>
            <div className="w-20 h-4 bg-black rounded-full mx-auto -mt-1" />
            <div className="flex items-center gap-1.5 text-xs">
              <span>5G</span>
              <span className="text-[10px]">100%</span>
            </div>
          </div>
        )}

        {/* Fixed Header */}
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenProfile={() => setActiveTab('account')}
          cartCount={cartCount}
          isPhoneFrame={isPhoneFrame}
          onToggleFrame={() => setIsPhoneFrame(!isPhoneFrame)}
        />

        {/* Global Download / Notice Toast */}
        {downloadNotification && (
          <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 px-4 py-2.5 rounded-full shadow-lg text-xs font-extrabold flex items-center gap-2 border border-white/40 animate-fadeIn">
            <span>📥</span>
            <span>{downloadNotification}</span>
          </div>
        )}

        {/* Main Screen Views */}
        <main className="flex-1 w-full overflow-y-auto">
          {activeTab === 'home' && (
            <HomeScreen
              onSelectCourse={handleSelectCourse}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onOpenZalo={() => setIsZaloOpen(true)}
              onDownloadSampleExam={handleDownloadSampleExam}
              onOpenSolubilityTable={handleOpenSolubilityTable}
              onFilterCategory={handleCategorySelect}
            />
          )}

          {activeTab === 'courses' && (
            <CoursesScreen
              onSelectCourse={handleSelectCourse}
              initialFilter={courseFilterGrade}
            />
          )}

          {activeTab === 'docs' && <DocumentsScreen />}

          {activeTab === 'exams' && <ExamsScreen />}

          {activeTab === 'account' && (
            <AccountScreen
              onOpenZalo={() => setIsZaloOpen(true)}
              onCallHotline={handleCallHotline}
              onNavigateTab={(tab) => setActiveTab(tab)}
            />
          )}
        </main>

        {/* Floating Action Buttons (Zalo & Hotline) */}
        <FloatingActions
          onOpenZalo={() => setIsZaloOpen(true)}
          onCallHotline={handleCallHotline}
        />

        {/* Fixed Bottom Navigation */}
        <BottomNavigation
          activeTab={activeTab}
          onChangeTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          examBadgeCount={1}
        />
      </div>

      {/* Course Video Player & Learning Modal */}
      {selectedCourse && (
        <CourseLearningModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onOpenZalo={() => setIsZaloOpen(true)}
        />
      )}

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleSelectCourse}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          setIsSearchOpen(false);
        }}
      />

      {/* Cart / Registration Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        enrolledCourses={enrolledCourses}
        onEnrollAll={handleEnrollAll}
        onSelectCourse={handleSelectCourse}
      />

      {/* Zalo Consultation Modal */}
      <ZaloModal
        isOpen={isZaloOpen}
        onClose={() => setIsZaloOpen(false)}
      />
    </div>
  );
}
