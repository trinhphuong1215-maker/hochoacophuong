import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface FloatingActionsProps {
  onOpenZalo: () => void;
  onCallHotline: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenZalo,
  onCallHotline,
}) => {
  return (
    <div className="fixed bottom-16 right-3.5 z-30 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Zalo Consultation Pill */}
      <button
        onClick={onOpenZalo}
        aria-label="Tư vấn Zalo với Cô Phượng"
        className="flex items-center gap-1.5 bg-[#0068ff] hover:bg-blue-600 text-white font-bold text-[12px] px-3.5 py-2 rounded-full shadow-lg shadow-blue-500/20 active:scale-95 transition-all border border-white/20"
      >
        <MessageCircle className="w-4 h-4 fill-white text-white" />
        <span>Tư Vấn Zalo</span>
      </button>

      {/* Hotline Call Button (Orange Circle) */}
      <button
        onClick={onCallHotline}
        aria-label="Gọi điện cho Cô Phượng"
        className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
