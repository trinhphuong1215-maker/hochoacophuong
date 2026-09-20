import React, { useState } from 'react';
import { 
  FolderArchive, 
  Table, 
  Download, 
  FileText, 
  Check, 
  Info, 
  Sparkles, 
  Search,
  BookOpen,
  Atom,
  Eye
} from 'lucide-react';
import { DOCUMENTS_DATA, SOLUBILITY_CATIONS, SOLUBILITY_ANIONS, SOLUBILITY_DATABASE, PERIODIC_ELEMENTS } from '../data/mockData';
import { SolubilityCell, ChemicalElement } from '../types';

export const DocumentsScreen: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'solubility' | 'periodic' | 'ebooks'>('solubility');
  const [selectedCation, setSelectedCation] = useState<string>('Ba2+');
  const [selectedAnion, setSelectedAnion] = useState<string>('SO4 2-');
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(PERIODIC_ELEMENTS[14]); // Fe
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  // Helper to get solubility status
  const getSolubility = (cat: string, an: string): SolubilityCell => {
    const key = `${cat}_${an}`;
    if (SOLUBILITY_DATABASE[key]) {
      return SOLUBILITY_DATABASE[key];
    }
    // General rules fallback
    if (cat === 'Na+' || cat === 'K+' || cat === 'NH4+' || an === 'NO3-') {
      return { cation: cat, anion: an, status: 'T', formula: `${cat}${an}`, precipitateNote: 'Tất cả muối Na+, K+, NH4+, NO3- đều tan tốt trong nước' };
    }
    if (an === 'Cl-') {
      if (cat === 'Ag+') return { cation: cat, anion: an, status: 'K', color: 'Trắng', formula: 'AgCl', precipitateNote: 'Kết tủa trắng vón, không tan trong axit' };
      if (cat === 'Pb2+') return { cation: cat, anion: an, status: 'I', color: 'Trắng', formula: 'PbCl2', precipitateNote: 'Ít tan trong nước lạnh, tan nhiều trong nước nóng' };
      return { cation: cat, anion: an, status: 'T', formula: `${cat}Cl`, precipitateNote: 'Muối Clorua hầu hết tan (trừ AgCl, PbCl2)' };
    }
    if (an === 'SO4 2-') {
      if (cat === 'Ba2+') return { cation: cat, anion: an, status: 'K', color: 'Trắng', formula: 'BaSO4', precipitateNote: 'Kết tủa trắng không tan trong axit mạnh' };
      if (cat === 'Pb2+') return { cation: cat, anion: an, status: 'K', color: 'Trắng', formula: 'PbSO4', precipitateNote: 'Kết tủa trắng' };
      if (cat === 'Ca2+' || cat === 'Ag+') return { cation: cat, anion: an, status: 'I', color: 'Trắng', formula: `${cat}SO4`, precipitateNote: 'Ít tan' };
      return { cation: cat, anion: an, status: 'T', formula: `${cat}SO4`, precipitateNote: 'Hầu hết muối sunfat tan (trừ BaSO4, PbSO4)' };
    }
    if (an === 'OH-') {
      if (cat === 'Na+' || cat === 'K+' || cat === 'Ba2+') return { cation: cat, anion: an, status: 'T', formula: `${cat}OH`, precipitateNote: 'Bazơ kiềm tan tốt' };
      if (cat === 'Ca2+') return { cation: cat, anion: an, status: 'I', formula: 'Ca(OH)2', precipitateNote: 'Nước vôi trong, ít tan' };
      if (cat === 'Cu2+') return { cation: cat, anion: an, status: 'K', color: 'Xanh lam', formula: 'Cu(OH)2', precipitateNote: 'Kết tủa xanh lam' };
      if (cat === 'Fe2+') return { cation: cat, anion: an, status: 'K', color: 'Trắng xanh', formula: 'Fe(OH)2', precipitateNote: 'Kết tủa trắng xanh hóa nâu đỏ trong không khí' };
      if (cat === 'Fe3+') return { cation: cat, anion: an, status: 'K', color: 'Nâu đỏ', formula: 'Fe(OH)3', precipitateNote: 'Kết tủa nâu đỏ' };
      if (cat === 'Al3+') return { cation: cat, anion: an, status: 'K', color: 'Trắng keo', formula: 'Al(OH)3', precipitateNote: 'Kết tủa keo trắng lưỡng tính, tan trong kiềm dư' };
      return { cation: cat, anion: an, status: 'K', formula: `${cat}(OH)`, precipitateNote: 'Bazơ không tan trong nước' };
    }
    if (an === 'CO3 2-') {
      if (cat === 'H+') return { cation: cat, anion: an, status: 'B', formula: 'H2CO3', precipitateNote: 'Kém bền, phân hủy thành CO2 bay lên và H2O' };
      if (cat === 'Na+' || cat === 'K+' || cat === 'NH4+') return { cation: cat, anion: an, status: 'T', formula: `Na2CO3`, precipitateNote: 'Muối cacbonat kim loại kiềm tan' };
      return { cation: cat, anion: an, status: 'K', color: 'Trắng', formula: `${cat}CO3`, precipitateNote: 'Hầu hết muối cacbonat không tan, tác dụng axit sủi bọt khí CO2' };
    }
    return { cation: cat, anion: an, status: 'K', formula: `${cat}${an}`, precipitateNote: 'Muối khó tan hoặc kết tủa' };
  };

  const currentSelectionSolubility = getSolubility(selectedCation, selectedAnion);

  const handleDownload = (docTitle: string) => {
    setDownloadSuccessMessage(`Đã tạo liên kết tải về: "${docTitle}". Đang chuẩn bị tệp PDF...`);
    setTimeout(() => {
      setDownloadSuccessMessage(null);
    }, 4000);
  };

  return (
    <div className="pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight">
          KHO TÀI LIỆU & BẢNG TRA CỨU HÓA HỌC
        </h1>
        <p className="text-xs sm:text-sm text-amber-900/70 mt-1">
          Bảng tính tan tương tác, bảng tuần hoàn và hệ thống đề cương tài liệu chuẩn THCS
        </p>
      </div>

      {/* Sub-tab switcher */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-amber-100/80 border border-amber-200/80 rounded-xl mb-4 text-xs font-bold shadow-2xs max-w-md">
        <button
          onClick={() => setActiveSubTab('solubility')}
          className={`py-2 px-2 rounded-lg text-center transition-all ${
            activeSubTab === 'solubility'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-xs'
              : 'text-amber-900/70 hover:text-amber-950 font-bold'
          }`}
        >
          Bảng Tính Tan
        </button>
        <button
          onClick={() => setActiveSubTab('periodic')}
          className={`py-2 px-2 rounded-lg text-center transition-all ${
            activeSubTab === 'periodic'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-xs'
              : 'text-amber-900/70 hover:text-amber-950 font-bold'
          }`}
        >
          Bảng Tuần Hoàn
        </button>
        <button
          onClick={() => setActiveSubTab('ebooks')}
          className={`py-2 px-2 rounded-lg text-center transition-all ${
            activeSubTab === 'ebooks'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-xs'
              : 'text-amber-900/70 hover:text-amber-950 font-bold'
          }`}
        >
          Sách & Ebook
        </button>
      </div>

      {/* Download Alert Notification */}
      {downloadSuccessMessage && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center gap-2.5 text-xs text-emerald-900 animate-fadeIn font-bold shadow-2xs">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{downloadSuccessMessage}</span>
        </div>
      )}

      {/* 1. BẢNG TÍNH TAN TƯƠNG TÁC */}
      {activeSubTab === 'solubility' && (
        <div className="space-y-4">
          {/* Quick Inspector Result Card */}
          <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-700 text-white p-5 rounded-2xl shadow-sm border border-amber-300/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-yellow-200 uppercase tracking-wider">
                Kết Quả Tra Cứu Tính Tan
              </span>
              <span className="text-xs bg-black/30 px-3 py-1 rounded-full font-mono text-amber-200 font-bold">
                {selectedCation} + {selectedAnion}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 my-1">
              <div className="text-3xl font-black font-mono text-white">
                {currentSelectionSolubility.formula}
              </div>
              <div className="text-sm font-bold">
                {currentSelectionSolubility.status === 'T' && <span className="text-emerald-300 bg-emerald-950/70 px-3 py-1 rounded-md font-black">Tan tốt trong nước</span>}
                {currentSelectionSolubility.status === 'K' && <span className="text-yellow-200 bg-rose-950/70 px-3 py-1 rounded-md font-black">Không tan (Kết tủa)</span>}
                {currentSelectionSolubility.status === 'I' && <span className="text-amber-200 bg-amber-950/70 px-3 py-1 rounded-md font-black">Ít tan</span>}
                {currentSelectionSolubility.status === 'B' && <span className="text-purple-200 bg-purple-950/70 px-3 py-1 rounded-md font-black">Bị bay hơi / phân hủy</span>}
              </div>
            </div>

            {currentSelectionSolubility.color && (
              <p className="text-xs sm:text-sm text-yellow-200 mt-1 font-semibold">
                Màu sắc kết tủa: <span className="underline decoration-yellow-300 font-bold">{currentSelectionSolubility.color}</span>
              </p>
            )}

            <p className="text-xs text-amber-100 mt-2.5 bg-black/25 p-3 rounded-xl border border-white/10 leading-relaxed">
              💡 {currentSelectionSolubility.precipitateNote || 'Phản ứng ion trao đổi thường gặp trong chương trình Hóa THCS.'}
            </p>
          </div>

          {/* Interactive Matrix Selector */}
          <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cations Column */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-black text-amber-950 uppercase">
                    1. Chọn Kim loại / Cation (Dương)
                  </h3>
                  <span className="text-[10px] text-amber-900/60 font-medium">Chạm để chọn</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SOLUBILITY_CATIONS.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCation(cat)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                        selectedCation === cat
                          ? 'bg-amber-500 text-slate-950 font-black shadow-xs scale-105 ring-2 ring-yellow-300'
                          : 'bg-amber-50/60 text-amber-950 hover:bg-amber-100 border border-amber-200/60'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Anions Column */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-black text-amber-950 uppercase">
                    2. Chọn Gốc Axit / Anion (Âm)
                  </h3>
                  <span className="text-[10px] text-amber-900/60 font-medium">Chạm để chọn</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SOLUBILITY_ANIONS.map((an) => (
                    <button
                      key={an}
                      onClick={() => setSelectedAnion(an)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                        selectedAnion === an
                          ? 'bg-rose-500 text-white font-black shadow-xs scale-105 ring-2 ring-rose-300'
                          : 'bg-amber-50/60 text-amber-950 hover:bg-amber-100 border border-amber-200/60'
                      }`}
                    >
                      {an}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Note Legend */}
            <div className="mt-5 pt-3.5 border-t border-amber-100 flex flex-wrap items-center gap-4 text-xs text-amber-950/80">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span><strong>T</strong>: Tan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span><strong>K</strong>: Kết tủa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span><strong>I</strong>: Ít tan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span><strong>B</strong>: Bay hơi</span>
              </div>
            </div>
          </div>

          {/* Quick tips from Cô Phượng */}
          <div className="bg-amber-50/80 border border-amber-300/80 p-5 rounded-2xl shadow-2xs">
            <h4 className="text-xs sm:text-sm font-black text-amber-950 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Mẹo Nhớ Nhanh Bảng Tính Tan Của Cô Phượng:</span>
            </h4>
            <ul className="text-xs sm:text-sm text-amber-950 space-y-1.5 pl-4 list-disc leading-relaxed">
              <li>Tất cả muối chứa <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">Na+</code>, <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">K+</code>, <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">NH4+</code> và gốc <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">NO3-</code> đều <strong>TAN 100%</strong>.</li>
              <li>Hầu hết muối gốc <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">Cl-</code> đều tan, chỉ có <strong>AgCl (kết tủa trắng)</strong> và <strong>PbCl2 (ít tan)</strong>.</li>
              <li>Muối gốc <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">SO4 2-</code> hầu hết tan, trừ <strong>BaSO4, PbSO4 (kết tủa trắng)</strong>; CaSO4 và Ag2SO4 ít tan.</li>
              <li>Hầu hết muối <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">CO3 2-</code>, <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">SO3 2-</code>, <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">PO4 3-</code> đều <strong>KẾT TỦA</strong> (trừ Na, K, NH4).</li>
            </ul>
          </div>
        </div>
      )}

      {/* 2. BẢNG TUẦN HOÀN TƯƠNG TÁC */}
      {activeSubTab === 'periodic' && (
        <div className="space-y-4">
          {/* Element Inspector */}
          {selectedElement && (
            <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 font-mono ${selectedElement.color}`}>
                  <span className="text-[11px] text-slate-500 font-bold">{selectedElement.number}</span>
                  <span className="text-2xl font-black leading-none">{selectedElement.symbol}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-amber-950">{selectedElement.name}</h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full">
                      {selectedElement.category}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-amber-900/70 mt-1 space-x-4">
                    <span>Nguyên tử khối: <strong className="text-slate-900">{selectedElement.atomicMass}</strong></span>
                    <span>Hóa trị: <strong className="text-amber-800 font-black">{selectedElement.valences}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Elements Grid */}
          <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs">
            <h3 className="text-xs sm:text-sm font-black text-amber-950 uppercase mb-3">
              Các Nguyên Tố Hóa Học Thường Gặp (THCS)
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5">
              {PERIODIC_ELEMENTS.map((elem) => {
                const isSelected = selectedElement?.symbol === elem.symbol;
                return (
                  <button
                    key={elem.symbol}
                    onClick={() => setSelectedElement(elem)}
                    className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                      isSelected
                        ? 'border-amber-500 ring-2 ring-yellow-400/60 shadow-xs scale-105'
                        : 'border-slate-200 hover:border-amber-300'
                    } ${elem.color}`}
                  >
                    <span className="text-[10px] opacity-70 font-mono">{elem.number}</span>
                    <span className="text-base font-black font-mono">{elem.symbol}</span>
                    <span className="text-[11px] truncate max-w-full font-medium">{elem.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{elem.atomicMass}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. SÁCH & EBOOK DOWNLOADS */}
      {activeSubTab === 'ebooks' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOCUMENTS_DATA.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full border border-amber-300/80">
                    {doc.category} • {doc.grade}
                  </span>
                  <span className="text-[11px] font-medium text-amber-900/60">
                    {doc.size}
                  </span>
                </div>

                <h3 className="text-sm font-black text-amber-950 leading-snug mb-1">
                  {doc.title}
                </h3>

                <p className="text-xs text-amber-950/70 font-medium leading-relaxed mb-3">
                  {doc.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-amber-100">
                <span className="text-[11px] text-amber-900/60 font-medium">
                  {doc.downloads.toLocaleString('vi-VN')} lượt tải
                </span>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 text-slate-950 text-xs font-black px-4 py-2 rounded-full transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải Về Ngay</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
