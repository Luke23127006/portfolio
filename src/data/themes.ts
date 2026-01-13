export const themes = {
  // --- 1. MINIMALIST (Mặc định - Phong cách Apple/Linear) ---
  // Phù hợp nhất cho Bento Grid: Sạch, thoáng, tập trung vào nội dung.
  light: {
    name: "Minimalist",

    // --- 1. Backgrounds ---
    "--bg-primary": "#ffffff",       // Trắng tinh khôi cho nền chính
    "--bg-secondary": "#f4f4f5",     // Xám rất nhẹ (Zinc 100) cho các ô Bento
    "--bg-tertiary": "#e4e4e7",      // Xám đậm hơn chút cho các thẻ phụ
    "--bg-input": "#ffffff",
    "--bg-switch": "#e4e4e7",

    // --- 2. Typography ---
    "--text-main": "#18181b",        // Đen gần tuyệt đối (Zinc 900) - Dễ đọc hơn đen 100%
    "--text-muted": "#71717a",       // Xám trung tính (Zinc 500)
    "--text-inverse": "#ffffff",     // Chữ trắng trên nền đen

    // --- 3. Actions & Accents ---
    "--accent-color": "#18181b",     // Accent là màu đen (Minimalist style không dùng màu lòe loẹt)
    "--accent-hover": "#3f3f46",     // Hover chuyển xám đậm
    "--accent-light": "#d4d4d8",
    "--accent-dark": "#000000",
    "--accent-glow": "rgba(0, 0, 0, 0.05)", // Glow bóng mờ đen nhẹ
    "--accent-ring": "#18181b",

    // --- 4. Borders & Lines ---
    "--border-color": "#f4f4f5",     // Viền cực nhạt, gần như hòa vào nền (Clean look)
    "--radius": "24px",              // QUAN TRỌNG: Bo góc lớn đặc trưng của Bento Grid

    // --- 5. Status Indicators ---
    "--status-success": "#10b981",   // Emerald 500
    "--status-error": "#ef4444",
    "--status-warning": "#f59e0b",
    "--status-info": "#3b82f6",

    // --- 6. Charts (Dùng cho GitHub contributions hoặc biểu đồ kỹ năng) ---
    "--chart-1": "#18181b",
    "--chart-2": "#52525b",
    "--chart-3": "#a1a1aa",
    "--chart-4": "#d4d4d8",
    "--chart-5": "#f4f4f5",

    // --- 7. Sidebar/Nav ---
    "--sidebar-bg": "#ffffff",
    "--sidebar-fg": "#18181b",
    "--sidebar-primary": "#18181b",
    "--sidebar-primary-fg": "#ffffff",
    "--sidebar-accent": "#f4f4f5",
    "--sidebar-accent-fg": "#18181b",
    "--sidebar-border": "#f4f4f5",
    "--sidebar-ring": "#18181b",

    // --- 8. Specifics ---
    "--font-display": "'Inter', sans-serif",
    
    // Buttons
    "--btn-secondary-bg": "#f4f4f5",
    "--btn-secondary-hover": "#e4e4e7",
    "--btn-secondary-text": "#18181b",
    
    "--btn-destructive-bg": "#ef4444",
    "--btn-destructive-hover": "#dc2626",
    "--btn-destructive-text": "#ffffff",
    
    "--btn-ghost-hover-bg": "rgba(0, 0, 0, 0.05)",
  },

  // --- 2. MIDNIGHT (Dark Mode - Phong cách Developer) ---
  // Độ tương phản cao, nền đen sâu, chữ trắng nổi bật.
  dark: {
    name: "Midnight",

    // --- 1. Backgrounds ---
    "--bg-primary": "#09090b",       // Đen sâu (Zinc 950)
    "--bg-secondary": "#18181b",     // Xám than (Zinc 900) cho ô Bento
    "--bg-tertiary": "#27272a",      // Zinc 800
    "--bg-input": "#18181b",
    "--bg-switch": "#27272a",

    // --- 2. Typography ---
    "--text-main": "#fafafa",        // Trắng ngà (Zinc 50)
    "--text-muted": "#a1a1aa",       // Xám sáng (Zinc 400)
    "--text-inverse": "#09090b",     // Chữ đen trên nền trắng

    // --- 3. Actions & Accents ---
    "--accent-color": "#fafafa",     // Accent là màu Trắng (High Contrast)
    "--accent-hover": "#d4d4d8",     // Hover xám
    "--accent-light": "#52525b",
    "--accent-dark": "#ffffff",
    "--accent-glow": "rgba(255, 255, 255, 0.1)", // Glow trắng mờ
    "--accent-ring": "#fafafa",

    // --- 4. Borders & Lines ---
    "--border-color": "#27272a",     // Viền tối màu (Zinc 800)
    "--radius": "24px",              // Giữ nguyên bo góc để đồng bộ layout

    // --- 5. Status Indicators ---
    "--status-success": "#34d399",   // Emerald 400 (Sáng hơn để nổi trên nền tối)
    "--status-error": "#f87171",
    "--status-warning": "#fbbf24",
    "--status-info": "#60a5fa",

    // --- 6. Charts ---
    "--chart-1": "#fafafa",
    "--chart-2": "#d4d4d8",
    "--chart-3": "#a1a1aa",
    "--chart-4": "#52525b",
    "--chart-5": "#27272a",

    // --- 7. Sidebar ---
    "--sidebar-bg": "#09090b",
    "--sidebar-fg": "#fafafa",
    "--sidebar-primary": "#fafafa",
    "--sidebar-primary-fg": "#09090b",
    "--sidebar-accent": "#18181b",
    "--sidebar-accent-fg": "#fafafa",
    "--sidebar-border": "#27272a",
    "--sidebar-ring": "#fafafa",

    // --- 8. Specifics ---
    "--font-display": "'Inter', sans-serif",

    // Buttons
    "--btn-secondary-bg": "#27272a",
    "--btn-secondary-hover": "#3f3f46",
    "--btn-secondary-text": "#fafafa",

    "--btn-destructive-bg": "#7f1d1d", // Đỏ đậm hơn cho dark mode
    "--btn-destructive-hover": "#991b1b",
    "--btn-destructive-text": "#ffffff",

    "--btn-ghost-hover-bg": "rgba(255, 255, 255, 0.1)",
  },

  // --- 3. NEO-POP (Bonus - Phong cách cá tính) ---
  // Kết hợp Bento với màu sắc và viền đậm, dành cho lúc muốn "phá cách".
  neo: {
    name: "Neo Pop",

    // --- 1. Backgrounds ---
    "--bg-primary": "#fffdf0",       // Màu kem/vàng nhạt (Cream)
    "--bg-secondary": "#ffffff",     // Trắng cho ô Bento
    "--bg-tertiary": "#a5f3fc",      // Cyan nhạt trang trí
    "--bg-input": "#ffffff",
    "--bg-switch": "#000000",

    // --- 2. Typography ---
    "--text-main": "#000000",        // Đen tuyệt đối
    "--text-muted": "#4b5563",
    "--text-inverse": "#ffffff",

    // --- 3. Actions & Accents ---
    "--accent-color": "#ff6b6b",     // Đỏ cam rực rỡ
    "--accent-hover": "#fa5252",
    "--accent-light": "#ff8787",
    "--accent-dark": "#c92a2a",
    "--accent-glow": "rgba(0, 0, 0, 0)", // Không glow, dùng hard shadow
    "--accent-ring": "#000000",

    // --- 4. Borders & Lines ---
    "--border-color": "#000000",     // Viền đen đậm (Đặc trưng Neo-Brutalism)
    "--radius": "12px",              // Bo góc ít hơn, cảm giác cứng cáp hơn

    // --- 5. Status Indicators ---
    "--status-success": "#22c55e",
    "--status-error": "#ef4444",
    "--status-warning": "#f59e0b",
    "--status-info": "#3b82f6",

    // --- 6. Charts ---
    "--chart-1": "#ff6b6b",
    "--chart-2": "#ffa94d",
    "--chart-3": "#ffd43b",
    "--chart-4": "#69db7c",
    "--chart-5": "#38d9a9",

    // --- 7. Sidebar ---
    "--sidebar-bg": "#fffdf0",
    "--sidebar-fg": "#000000",
    "--sidebar-primary": "#ff6b6b",
    "--sidebar-primary-fg": "#000000",
    "--sidebar-accent": "#ffe066",   // Vàng
    "--sidebar-accent-fg": "#000000",
    "--sidebar-border": "#000000",
    "--sidebar-ring": "#000000",

    // --- 8. Specifics ---
    "--font-display": "'Space Grotesk', sans-serif", // Font cá tính hơn nếu có

    // Buttons
    "--btn-secondary-bg": "#ffffff", // Nền trắng
    "--btn-secondary-hover": "#ffe066", // Hover ra màu vàng
    "--btn-secondary-text": "#000000",

    "--btn-destructive-bg": "#ff6b6b",
    "--btn-destructive-hover": "#fa5252",
    "--btn-destructive-text": "#000000",

    "--btn-ghost-hover-bg": "rgba(0, 0, 0, 0.1)",
  },
} as const;

export type ThemeKey = keyof typeof themes;