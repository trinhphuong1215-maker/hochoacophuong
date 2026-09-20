import React from 'react';
import { Search, ShoppingCart, User, Smartphone, Monitor } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenProfile: () => void;
  cartCount: number;
  isPhoneFrame: boolean;
  onToggleFrame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenCart,
  onOpenProfile,
  cartCount,
  isPhoneFrame,
  onToggleFrame,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fffdf2]/95 backdrop-blur-sm border-b border-amber-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-500 p-0.5 shadow-sm flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-xl select-none" role="img" aria-label="Flask">🧪</span>
            </div>
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-amber-950 text-base sm:text-lg tracking-tight">HÓA HỌC CÔ PHƯỢNG</span>
            </div>
            <p className="text-[11px] font-black text-amber-700 tracking-wide uppercase">
              THCS Bắc Đông Quan • Đông Hưng, Thái Bình
            </p>
          </div>
        </div>

        {/* Desktop Quick Search Input Bar */}
        <div
          onClick={onOpenSearch}
          className="hidden md:flex flex-1 max-w-md items-center gap-2 bg-amber-100/60 hover:bg-amber-100/90 border border-amber-300/70 rounded-full px-4 py-2 text-xs text-amber-950/80 cursor-pointer transition-all shadow-2xs group"
        >
          <Search className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
          <span className="truncate">Tìm bài giảng, phản ứng, đề thi vào 10...</span>
          <span className="ml-auto text-[10px] bg-white px-2 py-0.5 rounded-full border border-amber-200 font-mono text-amber-900 font-bold">
            Ctrl K
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Frame Toggle (visible on wide screens) */}
          <button
            onClick={onToggleFrame}
            title={isPhoneFrame ? 'Chuyển sang xem toàn màn hình' : 'Chuyển sang khung điện thoại'}
            className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100/70 hover:bg-amber-200/70 border border-amber-300/60 px-3 py-1.5 rounded-full transition-colors"
          >
            {isPhoneFrame ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-amber-800" />
                <span>Giao diện rộng</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                <span>Khung điện thoại</span>
              </>
            )}
          </button>

          {/* Search Button for Mobile */}
          <button
            onClick={onOpenSearch}
            aria-label="Tìm kiếm khóa học"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-amber-900 hover:text-amber-950 hover:bg-amber-100/70 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Giỏ hàng khóa học"
            className="w-9 h-9 relative flex items-center justify-center rounded-full text-amber-900 hover:text-amber-950 hover:bg-amber-100/70 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute 1 top-1.5 right-1 min-w-[17px] h-[17px] px-1 bg-amber-500 text-slate-950 font-black text-[10px] rounded-full flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          </button>

          {/* User Profile Button */}
          <button
            onClick={onOpenProfile}
            aria-label="Tài khoản cá nhân"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-500 text-slate-950 hover:from-amber-500 hover:to-yellow-600 transition-colors shadow-xs"
          >
            <User className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
