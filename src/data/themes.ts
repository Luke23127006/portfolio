export const themes = {
  // --- 1. MINIMALIST (Mặc định - Phong cách Apple/Linear) ---
  // Phù hợp nhất cho Bento Grid: Sạch, thoáng, tập trung vào nội dung.
  light: {
    name: "Light",

    // --- 1. Backgrounds ---
    "--color-bg-primary": "#ffffff",       // Trắng tinh khôi cho nền chính
    "--color-bg-secondary": "#f4f4f5",     // Xám rất nhẹ (Zinc 100) cho các ô Bento
    "--color-bg-tertiary": "#e4e4e7",      // Xám đậm hơn chút cho các thẻ phụ
    "--color-bg-input": "#ffffff",
    "--color-bg-switch": "#e4e4e7",

    // --- 2. Typography ---
    "--color-text-main": "#18181b",        // Đen gần tuyệt đối (Zinc 900) - Dễ đọc hơn đen 100%
    "--color-text-muted": "#71717a",       // Xám trung tính (Zinc 500)
    "--color-text-inverse": "#ffffff",     // Chữ trắng trên nền đen

    // --- 3. Actions & Accents ---
    "--color-accent": "#18181b",     // Accent là màu đen (Minimalist style không dùng màu lòe loẹt)
    "--color-accent-hover": "#3f3f46",     // Hover chuyển xám đậm
    "--color-accent-light": "#d4d4d8",
    "--color-accent-dark": "#000000",
    "--color-accent-glow": "rgba(0, 0, 0, 0.05)", // Glow bóng mờ đen nhẹ
    "--color-accent-ring": "#18181b",

    // --- 4. Borders & Lines ---
    "--color-border": "#d4d4d8",     // Viền rõ hơn để tạo contrast (Zinc 300)
    "--radius": "24px",              // QUAN TRỌNG: Bo góc lớn đặc trưng của Bento Grid

    // --- 5. Status Indicators ---
    "--color-status-success": "#10b981",   // Emerald 500
    "--color-status-error": "#ef4444",
    "--color-status-warning": "#f59e0b",
    "--color-status-info": "#3b82f6",

    // --- 6. Charts (Dùng cho GitHub contributions hoặc biểu đồ kỹ năng) ---
    "--color-chart-1": "#18181b",
    "--color-chart-2": "#52525b",
    "--color-chart-3": "#a1a1aa",
    "--color-chart-4": "#d4d4d8",
    "--color-chart-5": "#f4f4f5",

    // --- 7. Sidebar/Nav ---
    "--color-sidebar-bg": "#ffffff",
    "--color-sidebar-fg": "#18181b",
    "--color-sidebar-primary": "#18181b",
    "--color-sidebar-primary-fg": "#ffffff",
    "--color-sidebar-accent": "#f4f4f5",
    "--color-sidebar-accent-fg": "#18181b",
    "--color-sidebar-border": "#f4f4f5",
    "--color-sidebar-ring": "#18181b",

    // --- 8. Specifics ---
    "--font-display": "'Inter', sans-serif",
    
    // Buttons
    "--color-btn-secondary-bg": "#f4f4f5",
    "--color-btn-secondary-hover": "#e4e4e7",
    "--color-btn-secondary-text": "#18181b",
    
    "--color-btn-destructive-bg": "#ef4444",
    "--color-btn-destructive-hover": "#dc2626",
    "--color-btn-destructive-text": "#ffffff",
    
    "--color-btn-ghost-hover-bg": "rgba(0, 0, 0, 0.05)",
  },

  // --- 2. MIDNIGHT (Dark Mode - Phong cách Developer) ---
  // Độ tương phản cao, nền đen sâu, chữ trắng nổi bật.
  dark: {
    name: "Dark",

    // --- 1. Backgrounds ---
    "--color-bg-primary": "#09090b",       // Đen sâu (Zinc 950)
    "--color-bg-secondary": "#18181b",     // Xám than (Zinc 900) cho ô Bento
    "--color-bg-tertiary": "#27272a",      // Zinc 800
    "--color-bg-input": "#18181b",
    "--color-bg-switch": "#27272a",

    // --- 2. Typography ---
    "--color-text-main": "#fafafa",        // Trắng ngà (Zinc 50)
    "--color-text-muted": "#a1a1aa",       // Xám sáng (Zinc 400)
    "--color-text-inverse": "#09090b",     // Chữ đen trên nền trắng

    // --- 3. Actions & Accents ---
    "--color-accent": "#fafafa",     // Accent là màu Trắng (High Contrast)
    "--color-accent-hover": "#d4d4d8",     // Hover xám
    "--color-accent-light": "#52525b",
    "--color-accent-dark": "#ffffff",
    "--color-accent-glow": "rgba(255, 255, 255, 0.1)", // Glow trắng mờ
    "--color-accent-ring": "#fafafa",

    // --- 4. Borders & Lines ---
    "--color-border": "#3f3f46",     // Viền sáng hơn để tạo contrast (Zinc 700)
    "--radius": "24px",              // Giữ nguyên bo góc để đồng bộ layout

    // --- 5. Status Indicators ---
    "--color-status-success": "#34d399",   // Emerald 400 (Sáng hơn để nổi trên nền tối)
    "--color-status-error": "#f87171",
    "--color-status-warning": "#fbbf24",
    "--color-status-info": "#60a5fa",

    // --- 6. Charts ---
    "--color-chart-1": "#fafafa",
    "--color-chart-2": "#d4d4d8",
    "--color-chart-3": "#a1a1aa",
    "--color-chart-4": "#52525b",
    "--color-chart-5": "#27272a",

    // --- 7. Sidebar ---
    "--color-sidebar-bg": "#09090b",
    "--color-sidebar-fg": "#fafafa",
    "--color-sidebar-primary": "#fafafa",
    "--color-sidebar-primary-fg": "#09090b",
    "--color-sidebar-accent": "#18181b",
    "--color-sidebar-accent-fg": "#fafafa",
    "--color-sidebar-border": "#27272a",
    "--color-sidebar-ring": "#fafafa",

    // --- 8. Specifics ---
    "--font-display": "'Inter', sans-serif",

    // Buttons
    "--color-btn-secondary-bg": "#27272a",
    "--color-btn-secondary-hover": "#3f3f46",
    "--color-btn-secondary-text": "#fafafa",

    "--color-btn-destructive-bg": "#7f1d1d", // Đỏ đậm hơn cho dark mode
    "--color-btn-destructive-hover": "#991b1b",
    "--color-btn-destructive-text": "#ffffff",

    "--color-btn-ghost-hover-bg": "rgba(255, 255, 255, 0.1)",
  }
} as const;

export type ThemeKey = keyof typeof themes;