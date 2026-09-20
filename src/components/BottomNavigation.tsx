import React from 'react';
import { Home, BookOpen, FolderArchive, HelpCircle, User } from 'lucide-react';

export type TabType = 'home' | 'courses' | 'docs' | 'exams' | 'account';

interface BottomNavigationProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
  examBadgeCount?: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onChangeTab,
  examBadgeCount = 1,
}) => {
  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: number }[] = [
    {
      id: 'home',
      label: 'Trang chủ',
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: 'courses',
      label: 'Khóa học',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: 'docs',
      label: 'Tài liệu',
      icon: <FolderArchive className="w-5 h-5" />,
    },
    {
      id: 'exams',
      label: 'Đề thi',
      icon: <HelpCircle className="w-5 h-5" />,
      badge: examBadgeCount,
    },
    {
      id: 'account',
      label: 'Tài khoản',
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#fffdf2]/95 backdrop-blur-md border-t border-amber-200/90 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-amber-950 font-black'
                  : 'text-amber-900/60 hover:text-amber-950 font-medium'
              }`}
            >
              <div className="relative">
                <div className={`transition-transform duration-200 ${isActive ? 'scale-110 text-amber-900' : ''}`}>
                  {tab.icon}
                </div>
                {tab.badge && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 w-4 h-4 bg-gradient-to-tr from-amber-500 to-yellow-500 text-slate-950 font-black text-[9px] rounded-full flex items-center justify-center shadow-2xs">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className={`text-[11px] mt-1 transition-colors ${isActive ? 'text-amber-950 font-black' : 'text-amber-900/60'}`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-8 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
