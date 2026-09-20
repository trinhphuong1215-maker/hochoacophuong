import { Course, CategoryItem, ChemistryDocument, Exam, SolubilityCell, ChemicalElement } from '../types';

export const CATEGORIES_DATA: CategoryItem[] = [
  { id: 'khtn-6', title: 'KHTN 6', icon: 'FlaskConical', count: '18 Chuyên đề', filterGrade: '6' },
  { id: 'khtn-7', title: 'KHTN 7', icon: 'Microscope', count: '24 Chuyên đề', filterGrade: '7' },
  { id: 'khtn-8', title: 'KHTN 8', icon: 'FlaskRound', count: '48 Bài giảng', filterGrade: '8' },
  { id: 'khtn-9', title: 'KHTN 9', icon: 'Atom', count: '52 Bài giảng', filterGrade: '9' },
  { id: 'sgk-khtn', title: 'SGK KHTN', icon: 'BookOpen', count: 'Kết nối & Cánh diều' },
  { id: 'sbt-khtn', title: 'SBT KHTN', icon: 'BookMarked', count: 'Bài tập nâng cao' },
  { id: 'thi-nghiem', title: 'Các Thí Nghiệm', icon: 'TestTubes', count: '35 Video mô phỏng' },
  { id: 'giai-tri', title: 'Giải trí khoa học', icon: 'Clapperboard', count: 'Hóa học vui & Đố vui' },
];

export const COURSES_DATA: Course[] = [
  {
    id: 'hoa-8-toan-dien',
    title: 'Trọn Bộ Hóa Học 8 Toàn Diện: Lấy Gốc & Nâng Cao Chuyên Sâu Cùng Cô Phượng',
    subtitle: 'Xây dựng nền tảng vững chắc từ nguyên tử, phân tử đến phản ứng hóa học',
    description: 'Chương trình bám sát SGK Kết Nối Tri Thức & Cánh Diều, bổ sung 300 câu hỏi bài tập tự luận và trắc nghiệm có lời giải chi tiết.',
    category: 'BỨT PHÁ ĐIỂM SỐ HÓA HỌC 8',
    grade: '8',
    badge: 'Khóa Trọng Tâm Lớp 8',
    badgeColor: 'bg-[#1a365d] text-white',
    statsText: '48 Bài Giảng',
    statsIcon: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    isFree: true,
    rating: 4.98,
    totalReviews: 842,
    enrolledStudents: 3250,
    totalLessons: 48,
    totalHours: '32 Giờ học',
    chapters: [
      {
        chapterId: 'c1',
        chapterTitle: 'Chương 1: Chất - Nguyên Tử - Phân Tử',
        lessons: [
          { id: 'l1', title: 'Bài 1: Chất là gì? Phân biệt chất tinh khiết và hỗn hợp', duration: '28:15', type: 'video', isFree: true, completed: true },
          { id: 'l2', title: 'Bài 2: Cấu tạo nguyên tử (Proton, Electron, Neutron)', duration: '35:20', type: 'video', isFree: true },
          { id: 'l3', title: 'Bài 3: Nguyên tố hóa học & Bảng tuần hoàn cơ bản', duration: '42:10', type: 'video', isFree: true },
          { id: 'l4', title: 'Thực hành trắc nghiệm: Cấu tạo nguyên tử (25 câu)', duration: '20:00', type: 'quiz', isFree: true }
        ]
      },
      {
        chapterId: 'c2',
        chapterTitle: 'Chương 2: Phản Ứng Hóa Học & Định Luật Bảo Toàn',
        lessons: [
          { id: 'l5', title: 'Bài 4: Bản chất của phản ứng hóa học', duration: '31:40', type: 'video', isFree: true },
          { id: 'l6', title: 'Bài 5: Định luật bảo toàn khối lượng - Tuyệt chiêu giải nhanh', duration: '45:00', type: 'video', isFree: true },
          { id: 'l7', title: 'Bài 6: Cân bằng phương trình hóa học bách chiến bách thắng', duration: '50:12', type: 'video', isFree: true }
        ]
      },
      {
        chapterId: 'c3',
        chapterTitle: 'Chương 3: Mol & Tính Toán Hóa Học Cơ Bản',
        lessons: [
          { id: 'l8', title: 'Bài 7: Khái niệm Mol, khối lượng mol và thể tích mol chất khí', duration: '38:00', type: 'video', isFree: true },
          { id: 'l9', title: 'Bài 8: Tỉ khối của chất khí & ứng dụng thực tiễn', duration: '29:45', type: 'video', isFree: true },
          { id: 'l10', title: 'Bài 9: Nồng độ dung dịch (C% và CM) - Dạng bài then chốt', duration: '48:30', type: 'video', isFree: true }
        ]
      }
    ]
  },
  {
    id: 'on-thi-vao-10',
    title: 'Master Khóa Ôn Thi Tuyển Sinh Vào 10 – Đột Phá Điểm 9, 10 Môn Hóa',
    subtitle: 'Chiến lược tổng ôn và luyện đề thực chiến chuẩn đề Sở Giáo Dục',
    description: 'Quét sạch 100% dạng bài Axit, Kim Loại và Hóa hữu cơ. Tổng hợp 45 bộ đề thi chính thức vào THPT công lập có giải chi tiết.',
    category: 'CHINH PHỤC KỲ THI VÀO 10',
    grade: '9',
    badge: 'Ôn Luyện Cấp Tốc',
    badgeColor: 'bg-[#c53030] text-white',
    statsText: '60 Giờ Video',
    statsIcon: 'clock',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    isFree: true,
    rating: 5.0,
    totalReviews: 1210,
    enrolledStudents: 5120,
    totalLessons: 64,
    totalHours: '60 Giờ học',
    chapters: [
      {
        chapterId: 'c10_1',
        chapterTitle: 'Chuyên Đề 1: Axit Vô Cơ (HCl, H2SO4) & Kim Loại',
        lessons: [
          { id: 'l10_1', title: 'Bài 1: Tính chất hóa học của Axit mạnh & dãy hoạt động hóa học', duration: '46:30', type: 'video', isFree: true },
          { id: 'l10_2', title: 'Bài 2: Phương pháp bảo toàn Electron và Mol H+ trong phản ứng', duration: '52:15', type: 'video', isFree: true },
          { id: 'l10_3', title: 'Đề luyện tập số 1: Bài toán Kim loại + Axit (Có lời giải Cô Phượng)', duration: '45:00', type: 'quiz', isFree: true }
        ]
      },
      {
        chapterId: 'c10_2',
        chapterTitle: 'Chuyên Đề 2: Muối & Phản Ứng Trao Đổi Trong Dung Dịch',
        lessons: [
          { id: 'l10_4', title: 'Bài 3: Điều kiện xảy ra phản ứng trao đổi (Kết tủa - Khí - Nước)', duration: '40:10', type: 'video', isFree: true },
          { id: 'l10_5', title: 'Bài 4: Bảng tính tan bỏ túi & nhận biết các chất vô cơ', duration: '35:20', type: 'video', isFree: true }
        ]
      },
      {
        chapterId: 'c10_3',
        chapterTitle: 'Chuyên Đề 3: Luyện Đề Thực Chiến Vào Lớp 10 THPT',
        lessons: [
          { id: 'l10_6', title: 'Giải đề thi chính thức vào 10 Thái Bình các năm gần nhất', duration: '65:00', type: 'video', isFree: true },
          { id: 'l10_7', title: 'Bộ 15 đề dự đoán ma trận cấu trúc mới 2025-2026', duration: '60:00', type: 'doc', isFree: true }
        ]
      }
    ]
  },
  {
    id: 'boi-duong-hsg',
    title: 'Chuyên Đề Nâng Cao Bồi Dưỡng HSG Tỉnh & Chuyên Hóa THCS',
    subtitle: 'Phương pháp độc quyền: đồ thị hóa, bảo toàn mol & electron',
    description: 'Đào sâu bài toán hỗn hợp phức tạp, phương pháp đại số hóa và kỹ thuật giải đồ thị dung dịch Kiềm phản ứng CO2.',
    category: 'BỒI DƯỠNG HỌC SINH GIỎI & THI CHUYÊN',
    grade: 'HSG',
    badge: 'HSG Cấp Tỉnh & Chuyên',
    badgeColor: 'bg-[#d97706] text-white',
    secondaryBadge: 'KẾT TỦA TINH THỂ',
    statsText: '75 Chuyên Đề',
    statsIcon: 'book',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    isFree: true,
    rating: 4.95,
    totalReviews: 620,
    enrolledStudents: 1890,
    totalLessons: 75,
    totalHours: '55 Giờ học',
    chapters: [
      {
        chapterId: 'chsg_1',
        chapterTitle: 'Phần 1: Kỹ Thuật Giải Toán Hỗn Hợp Bằng Đồ Thị & Bảo Toàn',
        lessons: [
          { id: 'lhsg_1', title: 'Chuyên đề 1: Đồ thị sục khí CO2 hoặc SO2 vào dung dịch Ba(OH)2, Ca(OH)2', duration: '54:20', type: 'video', isFree: true },
          { id: 'lhsg_2', title: 'Chuyên đề 2: Muối Al3+, Zn2+ tác dụng dung dịch kiềm tạo kết tủa rồi tan', duration: '58:40', type: 'video', isFree: true },
          { id: 'lhsg_3', title: 'Tuyệt kỹ đặt ẩn phụ và giải hệ phương trình bảo toàn nguyên tố', duration: '47:15', type: 'video', isFree: true }
        ]
      },
      {
        chapterId: 'chsg_2',
        chapterTitle: 'Phần 2: Tinh Thể Ngậm Nước & Độ Tan Kết Tinh',
        lessons: [
          { id: 'lhsg_4', title: 'Chuyên đề 3: Bài toán hạ nhiệt độ tách tinh thể ngậm nước (CuSO4.5H2O, FeSO4.7H2O)', duration: '51:00', type: 'video', isFree: true },
          { id: 'lhsg_5', title: 'Đề thi HSG Hóa học lớp 9 tỉnh Thái Bình & Hà Nam', duration: '60:00', type: 'quiz', isFree: true }
        ]
      }
    ]
  },
  {
    id: 'ky-nang-giai-nhanh',
    title: 'Bí Quyết 30 Giây Xử Lý Mọi Bài Toán Vô Cơ Khó – THCS Bắc Đông Quan',
    subtitle: 'Đột phá tư duy trắc nghiệm, tiết kiệm tối đa thời gian làm bài',
    description: 'Công thức tính nhanh lượng kết tủa, thể tích khí, bảo toàn nguyên tố giúp làm trắc nghiệm chuẩn xác không cần máy tính.',
    category: 'KỸ NĂNG & PHƯƠNG PHÁP GIẢI NHANH',
    grade: 'Mẹo thi',
    badge: 'Mẹo Thi 30 Giây',
    badgeColor: 'bg-[#0f766e] text-white',
    statsText: '36 Tuyệt Kỹ',
    statsIcon: 'zap',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    isFree: true,
    rating: 4.99,
    totalReviews: 954,
    enrolledStudents: 4100,
    totalLessons: 36,
    totalHours: '25 Giờ học',
    chapters: [
      {
        chapterId: 'cfast_1',
        chapterTitle: 'Mẹo Bấm Máy & Công Thức Tính Nhanh',
        lessons: [
          { id: 'lfast_1', title: 'Tuyệt kỹ 1: Tính nhanh khối lượng muối khi Kim loại + HCl, H2SO4 loãng', duration: '22:15', type: 'video', isFree: true },
          { id: 'lfast_2', title: 'Tuyệt kỹ 2: Công thức 5 giây tìm số mol kết tủa CaCO3 khi sục CO2 vào nước vôi trong', duration: '18:40', type: 'video', isFree: true },
          { id: 'lfast_3', title: 'Tuyệt kỹ 3: Quy đổi hỗn hợp oxit sắt (Fe, FeO, Fe2O3, Fe3O4)', duration: '32:10', type: 'video', isFree: true }
        ]
      }
    ]
  }
];

export const TEACHER_INFO = {
  name: 'Cô Trịnh Thị Phượng',
  avatarUrl: 'https://i.postimg.cc/tgRf4pZL/Capture.jpg',
  role: 'Giáo viên bộ môn Khoa học tự nhiên (Phụ trách phân môn Hóa học)',
  school: 'Trường THCS Bắc Đông Quan, huyện Đông Hưng, tỉnh Thái Bình',
  hotline: '0817.005.477',
  zalo: '0817005477',
  email: 'trinhphuong1215@gmail.com',
  bio: 'Hơn 15 năm kinh nghiệm bồi dưỡng học sinh giỏi Hóa học THCS, luyện thi tuyển sinh vào lớp 10 chuyên và THPT công lập. Tận tâm, nhiệt huyết với phương châm giảng dạy: Học dễ hiểu – Nhớ cực lâu – Bứt phá điểm 9, 10.',
  achievements: [
    'Giáo viên dạy giỏi cấp Tỉnh, huyện Đông Hưng',
    'Bồi dưỡng hàng chục giải Nhất, Nhì, Ba HSG môn Hóa học THCS cấp Huyện và cấp Tỉnh',
    'Hơn 95% học sinh đỗ nguyện vọng 1 vào các trường THPT trọng điểm và trường Chuyên Thái Bình'
  ]
};

export const DOCUMENTS_DATA: ChemistryDocument[] = [
  {
    id: 'doc-bang-tinh-tan',
    title: 'Ebook Bảng Tính Tan Hóa Học Đầy Đủ & Dấu Hiệu Nhận Biết Kết Tủa',
    category: 'Bảng tra cứu',
    grade: 'THCS 8-9',
    fileType: 'PDF',
    size: '2.4 MB',
    downloads: 14820,
    description: 'Bao gồm màu sắc đặc trưng của kết tủa (BaSO4 trắng, Cu(OH)2 xanh lam, Fe(OH)3 nâu đỏ...), các chất khí và phản ứng ion thu gọn.',
    isPopular: true
  },
  {
    id: 'doc-so-tay-hoa-thcs',
    title: 'Sổ Tay Công Thức & Chuỗi Phản Ứng Hóa Học THCS (KHTN 8, 9)',
    category: 'Chuyên đề',
    grade: 'Lớp 8, 9',
    fileType: 'PDF',
    size: '4.8 MB',
    downloads: 21300,
    description: 'Hệ thống hóa toàn bộ công thức tính toán: Mol, nồng độ %, nồng độ mol, hiệu suất, độ tan và sơ đồ chuyển hóa chất vô cơ.',
    isPopular: true
  },
  {
    id: 'doc-de-thi-mau-10',
    title: 'Tổng Hợp 30 Bộ Đề Thi Tuyển Sinh Vào Lớp 10 THPT Môn Hóa (Có Đáp Án)',
    category: 'Đề thi',
    grade: 'Lớp 9',
    fileType: 'PDF',
    size: '8.2 MB',
    downloads: 32600,
    description: 'Đề thi chuẩn cấu trúc tuyển sinh Sở GD&ĐT Thái Bình, Hà Nội, Hải Phòng, Nam Định kèm hướng dẫn giải chi tiết từng câu.',
    isPopular: true
  },
  {
    id: 'doc-sgk-khtn-8',
    title: 'Tóm Tắt Lý Thuyết SGK KHTN 8 (Bộ Sách Kết Nối Tri Thức & Cánh Diều)',
    category: 'SGK',
    grade: 'Lớp 8',
    fileType: 'PDF',
    size: '5.1 MB',
    downloads: 9400,
    description: 'Tổng kết ngắn gọn, sơ đồ tư duy Mindmap mỗi bài học, dễ ôn tập trước các kỳ thi giữa kỳ và cuối kỳ.'
  },
  {
    id: 'doc-hsg-hoa-9',
    title: 'Tuyển Tập Đề Thi Học Sinh Giỏi Hóa Học Lớp 9 Cấp Tỉnh Qua Các Năm',
    category: 'Chuyên đề',
    grade: 'HSG',
    fileType: 'PDF',
    size: '6.5 MB',
    downloads: 8750,
    description: 'Bài toán kim loại hỗn hợp, đồ thị CO2, độ tan và tinh thể ngậm nước bồi dưỡng đội tuyển HSG THCS.'
  }
];

export const SAMPLE_EXAMS: Exam[] = [
  {
    id: 'exam-tb-2025',
    title: 'Đề Khảo Sát Ôn Thi Vào Lớp 10 Môn Hóa - Đề Số 01 (THCS Bắc Đông Quan)',
    grade: 'Lớp 9',
    category: 'Thi vào 10',
    timeMinutes: 45,
    totalQuestions: 10,
    year: '2025',
    author: 'Cô Trịnh Thị Phượng',
    school: 'THCS Bắc Đông Quan',
    questions: [
      {
        id: 1,
        question: 'Dãy các chất nào sau đây đều tác dụng được với dung dịch axit clohiđric (HCl)?',
        options: [
          'A. Fe, CuO, NaOH, CaCO3',
          'B. Cu, Al2O3, Ba(OH)2, Na2SO4',
          'C. Ag, Fe2O3, KOH, BaCl2',
          'D. Fe, Cu, MgO, Na2CO3'
        ],
        correctIndex: 0,
        explanation: 'Fe đứng trước H trong dãy hoạt động nên tác dụng với HCl. CuO là oxit bazơ, NaOH là bazơ, CaCO3 sinh khí CO2 đều tác dụng với HCl. Cu và Ag đứng sau H nên không tác dụng với dung dịch HCl.',
        hint: 'Nhớ lại dãy hoạt động hóa học của kim loại và tính chất chung của oxit bazơ, bazơ, muối cacbonat.'
      },
      {
        id: 2,
        question: 'Để nhận biết 3 dung dịch không màu mất nhãn: HCl, H2SO4, NaOH, ta chỉ cần dùng thêm thuốc thử duy nhất là:',
        options: [
          'A. Dung dịch AgNO3',
          'B. Quỳ tím và dung dịch BaCl2',
          'C. Quỳ tím',
          'D. Dung dịch Ba(OH)2'
        ],
        correctIndex: 3,
        explanation: 'Dùng Ba(OH)2: Với HCl phản ứng không hiện tượng (hoặc dùng quỳ tím trước), nhưng thuốc thử duy nhất Ba(OH)2 tác dụng với H2SO4 tạo kết tủa trắng BaSO4; Ba(OH)2 không tác dụng với NaOH. Dùng nhiệt kế thử tỏa nhiệt hoặc nhận biết qua mẫu thử tiếp theo.',
        hint: 'Dung dịch chứa Ba2+ tạo kết tủa trắng đặc trưng với ion sunfat (SO4 2-).'
      },
      {
        id: 3,
        question: 'Khi cho 5,6 gam sắt (Fe) phản ứng hoàn toàn với dung dịch axit sunfuric loãng (H2SO4), thể tích khí hiđro (H2) thu được ở đktc là bao nhiêu? (Cho Fe = 56, H = 1)',
        options: [
          'A. 1,12 lít',
          'B. 2,24 lít',
          'C. 3,36 lít',
          'D. 4,48 lít'
        ],
        correctIndex: 1,
        explanation: 'Phương trình phản ứng: Fe + H2SO4 -> FeSO4 + H2. Số mol Fe = 5,6 / 56 = 0,1 mol. Theo PTHH, n(H2) = n(Fe) = 0,1 mol. V(H2) = 0,1 * 22,4 = 2,24 lít.',
        hint: 'Tính số mol của Fe rồi dựa vào tỉ lệ 1:1 trong phương trình phản ứng.'
      },
      {
        id: 4,
        question: 'Dung dịch làm quỳ tím chuyển sang màu xanh là:',
        options: [
          'A. Dung dịch NaCl',
          'B. Dung dịch H2SO4',
          'C. Dung dịch Ba(OH)2',
          'D. Dung dịch CuSO4'
        ],
        correctIndex: 2,
        explanation: 'Dung dịch bazơ kiềm tan như Ba(OH)2, NaOH, KOH làm quỳ tím chuyển màu xanh. Axit làm quỳ tím hóa đỏ. Muối trung hòa như NaCl không đổi màu quỳ tím.',
        hint: 'Bazơ tan (kiềm) làm quỳ tím đổi màu xanh.'
      },
      {
        id: 5,
        question: 'Chất nào sau đây là oxit lưỡng tính?',
        options: [
          'A. Na2O',
          'B. SO2',
          'C. Al2O3',
          'D. CaO'
        ],
        correctIndex: 2,
        explanation: 'Al2O3 (nhôm oxit) và ZnO (kẽm oxit) là các oxit lưỡng tính, vừa tác dụng được với dung dịch axit, vừa tác dụng được với dung dịch bazơ kiềm tạo muối aluminat và kẽmat.',
        hint: 'Oxit của kim loại Nhôm (Al) hoặc Kẽm (Zn).'
      },
      {
        id: 6,
        question: 'Hòa tan hoàn toàn 8 gam đồng(II) oxit (CuO) vào một lượng vừa đủ dung dịch axit clohiđric. Khối lượng muối CuCl2 thu được là: (Cho Cu = 64, O = 16, Cl = 35.5)',
        options: [
          'A. 13,5 gam',
          'B. 9,8 gam',
          'C. 27,0 gam',
          'D. 6,75 gam'
        ],
        correctIndex: 0,
        explanation: 'CuO + 2HCl -> CuCl2 + H2O. M(CuO) = 80 g/mol => n(CuO) = 8 / 80 = 0,1 mol. Theo PTHH: n(CuCl2) = n(CuO) = 0,1 mol. M(CuCl2) = 64 + 71 = 135 g/mol => m(CuCl2) = 0,1 * 135 = 13,5 gam.',
        hint: 'Viết PTHH CuO + 2HCl -> CuCl2 + H2O và bảo toàn nguyên tố Cu.'
      },
      {
        id: 7,
        question: 'Chất khí nào sau đây gây ra hiện tượng mưa axit chủ yếu?',
        options: [
          'A. Khí N2 và O2',
          'B. Khí SO2 và NO2',
          'C. Khí CO và H2',
          'D. Khí CH4'
        ],
        correctIndex: 1,
        explanation: 'Khí SO2 (lưu huỳnh đioxit) và oxit nitơ (NOx, NO2) từ khí thải công nghiệp hòa tan trong nước mưa tạo axit sunfurơ, axit sunfuric và axit nitric gây hiện tượng mưa axit.',
        hint: 'Các oxit phi kim từ khói đốt than và xăng dầu.'
      },
      {
        id: 8,
        question: 'Cặp chất nào sau đây có thể cùng tồn tại trong một dung dịch (không phản ứng với nhau)?',
        options: [
          'A. BaCl2 và Na2SO4',
          'B. NaOH và HCl',
          'C. KCl và NaNO3',
          'D. AgNO3 và NaCl'
        ],
        correctIndex: 2,
        explanation: 'KCl và NaNO3 khi hòa tan cùng nhau không tạo thành chất kết tủa, chất bay hơi hay chất điện li yếu (nước), do đó không xảy ra phản ứng trao đổi ion, cùng tồn tại được.',
        hint: 'Điều kiện xảy ra phản ứng trao đổi trong dung dịch là phải có kết tủa, khí hoặc chất điện li yếu.'
      },
      {
        id: 9,
        question: 'Khi sục từ từ khí CO2 đến dư vào dung dịch Ca(OH)2 (nước vôi trong), hiện tượng quan sát được là:',
        options: [
          'A. Xuất hiện kết tủa trắng, sau đó kết tủa tan dần tạo dung dịch trong suốt',
          'B. Xuất hiện kết tủa trắng và kết tủa không thay đổi',
          'C. Dung dịch vẫn trong suốt không có hiện tượng gì',
          'D. Có bọt khí thoát ra mãnh liệt'
        ],
        correctIndex: 0,
        explanation: 'Ban đầu: CO2 + Ca(OH)2 -> CaCO3 (kết tủa trắng) + H2O. Sau đó CO2 dư: CO2 + CaCO3 + H2O -> Ca(HCO3)2 (muối tan), kết tủa tan hoàn toàn tạo dung dịch trong suốt.',
        hint: 'CaCO3 tạo thành sẽ tác dụng tiếp với CO2 dư và nước.'
      },
      {
        id: 10,
        question: 'Kim loại nào sau đây dẫn điện và dẫn nhiệt tốt nhất?',
        options: [
          'A. Đồng (Cu)',
          'B. Nhôm (Al)',
          'C. Vàng (Au)',
          'D. Bạc (Ag)'
        ],
        correctIndex: 3,
        explanation: 'Thứ tự dẫn điện, dẫn nhiệt giảm dần của các kim loại: Bạc (Ag) > Đồng (Cu) > Vàng (Au) > Nhôm (Al) > Sắt (Fe). Bạc là kim loại dẫn điện tốt nhất.',
        hint: 'Ký hiệu hóa học là Ag.'
      }
    ]
  }
];

// Interactive Periodic Table main elements
export const PERIODIC_ELEMENTS: ChemicalElement[] = [
  { number: 1, symbol: 'H', name: 'Hiđro', atomicMass: 1, valences: 'I', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 2, symbol: 'He', name: 'Heli', atomicMass: 4, valences: '0', category: 'Khí hiếm', color: 'bg-indigo-50 text-indigo-800 border-indigo-300' },
  { number: 3, symbol: 'Li', name: 'Liti', atomicMass: 7, valences: 'I', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 6, symbol: 'C', name: 'Cacbon', atomicMass: 12, valences: 'II, IV', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 7, symbol: 'N', name: 'Nitơ', atomicMass: 14, valences: 'I, II, III, IV, V', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 8, symbol: 'O', name: 'Oxi', atomicMass: 16, valences: 'II', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 9, symbol: 'F', name: 'Flo', atomicMass: 19, valences: 'I', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 11, symbol: 'Na', name: 'Natri', atomicMass: 23, valences: 'I', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 12, symbol: 'Mg', name: 'Magie', atomicMass: 24, valences: 'II', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 13, symbol: 'Al', name: 'Nhôm', atomicMass: 27, valences: 'III', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 14, symbol: 'Si', name: 'Silic', atomicMass: 28, valences: 'IV', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 15, symbol: 'P', name: 'Photpho', atomicMass: 31, valences: 'III, V', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 16, symbol: 'S', name: 'Lưu huỳnh', atomicMass: 32, valences: 'II, IV, VI', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 17, symbol: 'Cl', name: 'Clo', atomicMass: 35.5, valences: 'I, III, V, VII', category: 'Phi kim', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  { number: 19, symbol: 'K', name: 'Kali', atomicMass: 39, valences: 'I', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 20, symbol: 'Ca', name: 'Canxi', atomicMass: 40, valences: 'II', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 26, symbol: 'Fe', name: 'Sắt', atomicMass: 56, valences: 'II, III', category: 'Kim loại', color: 'bg-amber-50 text-amber-900 border-amber-300' },
  { number: 29, symbol: 'Cu', name: 'Đồng', atomicMass: 64, valences: 'I, II', category: 'Kim loại', color: 'bg-amber-50 text-amber-900 border-amber-300' },
  { number: 30, symbol: 'Zn', name: 'Kẽm', atomicMass: 65, valences: 'II', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 47, symbol: 'Ag', name: 'Bạc', atomicMass: 108, valences: 'I', category: 'Kim loại', color: 'bg-slate-100 text-slate-800 border-slate-300' },
  { number: 56, symbol: 'Ba', name: 'Bari', atomicMass: 137, valences: 'II', category: 'Kim loại', color: 'bg-blue-50 text-blue-800 border-blue-300' },
  { number: 82, symbol: 'Pb', name: 'Chì', atomicMass: 207, valences: 'II, IV', category: 'Kim loại', color: 'bg-slate-100 text-slate-800 border-slate-300' }
];

// Interactive Solubility Matrix (Bảng Tính Tan Hóa Học THCS)
export const SOLUBILITY_CATIONS = ['H+', 'Na+', 'K+', 'NH4+', 'Ba2+', 'Ca2+', 'Mg2+', 'Al3+', 'Zn2+', 'Fe2+', 'Fe3+', 'Cu2+', 'Ag+', 'Pb2+'];
export const SOLUBILITY_ANIONS = ['OH-', 'Cl-', 'NO3-', 'SO4 2-', 'CO3 2-', 'SO3 2-', 'S 2-', 'PO4 3-'];

export const SOLUBILITY_DATABASE: Record<string, SolubilityCell> = {
  'H+_OH-': { cation: 'H+', anion: 'OH-', status: 'T', formula: 'H2O', precipitateNote: 'Nước (H2O) chất điện li yếu' },
  'H+_Cl-': { cation: 'H+', anion: 'Cl-', status: 'T', formula: 'HCl', precipitateNote: 'Dung dịch axit clohiđric' },
  'H+_NO3-': { cation: 'H+', anion: 'NO3-', status: 'T', formula: 'HNO3', precipitateNote: 'Dung dịch axit nitric' },
  'H+_SO4 2-': { cation: 'H+', anion: 'SO4 2-', status: 'T', formula: 'H2SO4', precipitateNote: 'Dung dịch axit sunfuric' },
  'H+_CO3 2-': { cation: 'H+', anion: 'CO3 2-', status: 'B', formula: 'H2CO3', precipitateNote: 'Kém bền, phân hủy thành H2O + CO2 bay lên' },
  
  'Na+_OH-': { cation: 'Na+', anion: 'OH-', status: 'T', formula: 'NaOH', precipitateNote: 'Dung dịch kiềm tan hoàn toàn' },
  'Na+_Cl-': { cation: 'Na+', anion: 'Cl-', status: 'T', formula: 'NaCl', precipitateNote: 'Muối ăn tan tốt' },
  'Na+_NO3-': { cation: 'Na+', anion: 'NO3-', status: 'T', formula: 'NaNO3', precipitateNote: 'Tan hoàn toàn' },
  'Na+_SO4 2-': { cation: 'Na+', anion: 'SO4 2-', status: 'T', formula: 'Na2SO4', precipitateNote: 'Tan hoàn toàn' },
  'Na+_CO3 2-': { cation: 'Na+', anion: 'CO3 2-', status: 'T', formula: 'Na2CO3', precipitateNote: 'Tan hoàn toàn' },

  'Ba2+_OH-': { cation: 'Ba2+', anion: 'OH-', status: 'T', formula: 'Ba(OH)2', precipitateNote: 'Bazơ kiềm tan mạnh' },
  'Ba2+_Cl-': { cation: 'Ba2+', anion: 'Cl-', status: 'T', formula: 'BaCl2', precipitateNote: 'Muối tan tốt' },
  'Ba2+_SO4 2-': { cation: 'Ba2+', anion: 'SO4 2-', status: 'K', formula: 'BaSO4', color: 'Trắng', precipitateNote: 'Kết tủa trắng bền, không tan trong axit mạnh (dấu hiệu nhận biết SO4 2-)' },
  'Ba2+_CO3 2-': { cation: 'Ba2+', anion: 'CO3 2-', status: 'K', formula: 'BaCO3', color: 'Trắng', precipitateNote: 'Kết tủa trắng, tan trong axit sinh khí CO2' },

  'Ca2+_OH-': { cation: 'Ca2+', anion: 'OH-', status: 'I', formula: 'Ca(OH)2', precipitateNote: 'Nước vôi trong, ít tan trong nước' },
  'Ca2+_SO4 2-': { cation: 'Ca2+', anion: 'SO4 2-', status: 'I', formula: 'CaSO4', color: 'Trắng', precipitateNote: 'Thạch cao, ít tan' },
  'Ca2+_CO3 2-': { cation: 'Ca2+', anion: 'CO3 2-', status: 'K', formula: 'CaCO3', color: 'Trắng', precipitateNote: 'Đá vôi, kết tủa trắng đặc trưng' },

  'Cu2+_OH-': { cation: 'Cu2+', anion: 'OH-', status: 'K', formula: 'Cu(OH)2', color: 'Xanh lam', precipitateNote: 'Kết tủa màu xanh lam đặc trưng của Cu2+' },
  'Cu2+_Cl-': { cation: 'Cu2+', anion: 'Cl-', status: 'T', formula: 'CuCl2', precipitateNote: 'Tan, dung dịch màu xanh' },
  'Cu2+_SO4 2-': { cation: 'Cu2+', anion: 'SO4 2-', status: 'T', formula: 'CuSO4', precipitateNote: 'Tan tốt, dung dịch màu xanh lam' },
  'Cu2+_S 2-': { cation: 'Cu2+', anion: 'S 2-', status: 'K', formula: 'CuS', color: 'Đen', precipitateNote: 'Kết tủa đen, không tan trong axit loãng' },

  'Fe2+_OH-': { cation: 'Fe2+', anion: 'OH-', status: 'K', formula: 'Fe(OH)2', color: 'Trắng xanh', precipitateNote: 'Kết tủa trắng xanh, để ngoài không khí chuyển dần sang nâu đỏ Fe(OH)3' },
  'Fe3+_OH-': { cation: 'Fe3+', anion: 'OH-', status: 'K', formula: 'Fe(OH)3', color: 'Nâu đỏ', precipitateNote: 'Kết tủa màu nâu đỏ đặc trưng của ion Fe3+' },

  'Ag+_Cl-': { cation: 'Ag+', anion: 'Cl-', status: 'K', formula: 'AgCl', color: 'Trắng', precipitateNote: 'Kết tủa trắng vón, không tan trong axit nitric HNO3 (dấu hiệu nhận biết ion Cl-)' },
  'Ag+_SO4 2-': { cation: 'Ag+', anion: 'SO4 2-', status: 'I', formula: 'Ag2SO4', color: 'Trắng', precipitateNote: 'Ít tan' },
  
  'Al3+_OH-': { cation: 'Al3+', anion: 'OH-', status: 'K', formula: 'Al(OH)3', color: 'Trắng keo', precipitateNote: 'Kết tủa keo trắng, tan được trong kiềm dư (tính chất lưỡng tính)' }
};
