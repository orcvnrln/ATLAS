# SENIOR FRONTEND DEVELOPER PROMPT - ATLAS PLATFORM

Sən senior frontend developer kimi "ATLAS" (Advanced Trading & Liquidity Analysis System) adlı institusional səviyyəli ticarət platformasının frontend strukturunu və arxitekturasını sıfırdan yaratmalısan.

## 🎯 LAYİHƏ HAQQINDA

ATLAS - pərakəndə treyderlər üçün institusional səviyyəli Smart Money və Order Flow analizini təmin edən, AI-əsaslanan vahid ticarət platformasıdır.

**Əsas Xüsusiyyətlər:**

*   Multi-asset trading (Crypto, FX, Stocks, Commodities)
*   Real-time qrafik və order flow analizi
*   AI-powered siqnallar və "Jarvis" səsli köməkçi
*   Backtest və risk idarəetmə alətləri
*   Fərdiləşdirilə bilən dashboard
*   Dark mode, Bloomberg-inspired dizayn
*   Professional trader üçün data-heavy interfeys

## 📦 TEXNOLOGIYA STEKİ

**Core:**

*   **Framework:** React 18.3+ (with TypeScript)
*   **Build Tool:** Vite
*   **Routing:** React Router v6

**State Management:**

*   **UI/Client State:** Zustand
*   **Server State/Caching:** TanStack Query / React Query
*   **Atomic State (Optional):** Jotai or Recoil for highly dynamic, isolated state.

**UI/Styling:**

*   **CSS Framework:** Tailwind CSS 3+
*   **Component Library:** shadcn/ui + Radix UI (for unstyled, accessible components)
*   **Animations:** Framer Motion
*   **Variant Management:** class-variance-authority (cva)

**Data Visualization:**

*   **Main Trading Chart:** Lightweight Charts (from TradingView)
*   **Dashboard Charts:** Recharts
*   **Complex Visuals:** D3.js (if necessary)

**Real-time Communication:**

*   **WebSocket Client:** Socket.IO Client

**Forms & Validation:**

*   **Form Handling:** React Hook Form
*   **Schema Validation:** Zod

**Testing:**

*   **Unit/Integration:** Vitest
*   **E2E:** Playwright

**Code Quality & Tooling:**

*   **Language:** TypeScript (strict mode)
*   **Linting:** ESLint
*   **Formatting:** Prettier
*   **Git Hooks:** Husky

## 📁 PROYEKT STRUKTURU

Aşağıdakı feature-based hybrid strukturu tətbiq et:

```
atlas-platform/
├── public/
│   ├── icons/
│   └── images/
├── src/
│   ├── app/                    # App-level config, routing, and providers
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers.tsx       # (e.g., ThemeProvider, QueryClientProvider)
│   │
│   ├── pages/                  # Route-level components (lazy-loaded)
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   ├── dashboard/
│   │   │   └── DashboardPage.tsx
│   │   ├── trading/
│   │   │   ├── ChartWorkbenchPage.tsx
│   │   │   ├── PaperTradingPage.tsx
│   │   │   └── LiveTradingPage.tsx
│   │   ├── analysis/
│   │   │   ├── BacktestingPage.tsx
│   │   │   ├── RiskAnalysisPage.tsx
│   │   │   └── PortfolioPage.tsx
│   │   ├── tools/
│   │   │   ├── StyleBuilderPage.tsx
│   │   │   ├── PlaybookPage.tsx
│   │   │   ├── ScannerPage.tsx
│   │   │   └── StrategyExportPage.tsx
│   │   ├── ai/
│   │   │   ├── OraclePage.tsx
│   │   │   ├── JarvisPage.tsx
│   │   │   └── SignalsPage.tsx
│   │   ├── macro/
│   │   │   ├── MacroDashboardPage.tsx
│   │   │   ├── FedTrackerPage.tsx
│   │   │   └── CapitalFlowsPage.tsx
│   │   ├── settings/
│   │   │   └── SettingsPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── features/               # Self-contained feature modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── api/
│   │   │   └── types.ts
│   │   ├── trading-chart/
│   │   │   ├── components/
│   │   │   │   ├── TradingChart/
│   │   │   │   ├── OrderPanel/
│   │   │   │   ├── PositionManager/
│   │   │   │   └── OrderFlow/
│   │   │   ├── hooks/
│   │   │   ├── stores/
│   │   │   ├── api/
│   │   │   └── types.ts
│   │   ├── backtest/
│   │   ├── risk-management/
│   │   ├── ai-oracle/
│   │   ├── jarvis-voice/
│   │   ├── macro-analysis/
│   │   └── portfolio/
│   │
│   ├── shared/                 # Shared resources across all features
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components (Button, Input, Card, etc.)
│   │   │   ├── layout/
│   │   │   │   ├── AppLayout.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── charts/           # Reusable chart components
│   │   │   ├── forms/            # Reusable form components
│   │   │   └── feedback/         # (e.g., Toasts, Skeletons, Spinners)
│   │   ├── hooks/
│   │   │   ├── useWebSocket.ts
│   │   │   ├── useMediaQuery.ts
│   │   │   └── useLocalStorage.ts
│   │   ├── utils/
│   │   │   ├── formatters.ts     # (e.g., formatCurrency, formatDate)
│   │   │   ├── calculations.ts
│   │   │   └── validators.ts
│   │   ├── constants/
│   │   │   ├── routes.ts
│   │   │   ├── api-endpoints.ts
│   │   │   └── config.ts
│   │   ├── types/
│   │   │   ├── common.ts
│   │   │   └── api.ts
│   │   └── api/
│   │       ├── apiClient.ts      # (Axios instance with interceptors)
│   │       └── queryKeys.ts      # (Keys for TanStack Query)
│   │
│   ├── stores/                 # Global Zustand stores
│   │   ├── authStore.ts
│   │   ├── themeStore.ts
│   │   ├── settingsStore.ts
│   │   └── websocketStore.ts
│   │
│   ├── styles/
│   │   ├── globals.css         # (Tailwind base layers, custom global styles)
│   │   └── themes.css          # (CSS variables for theming)
│   │
│   ├── main.tsx                # App entry point
│   └── vite-env.d.ts
│
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🗺️ SƏHIFƏLƏR VƏ ROUTING STRUKTURU

**Route Hierarxiyası:**

```typescript
// Public Routes
/login
/register
/forgot-password

// Protected Routes (Authentication required)
/
  ├── /dashboard                    # Main dashboard
  │
  ├── /trading
  │   ├── /chart-workbench         # Main trading interface
  │   ├── /paper-trading           # Virtual trading
  │   └── /live-trading            # Real trading
  │
  ├── /analysis
  │   ├── /backtest                # Backtest engine
  │   ├── /risk                    # Risk management panel
  │   └── /portfolio               # Portfolio analytics
  │
  ├── /tools
  │   ├── /style-builder           # Create custom trading style
  │   ├── /playbook                # Trading playbook
  │   ├── /scanner                 # Market scanner
  │   └── /export                  # Strategy export
  │
  ├── /ai
  │   ├── /oracle                  # AI analytics hub
  │   ├── /jarvis                  # Voice assistant interface
  │   └── /signals                 # AI signals dashboard
  │
  ├── /macro
  │   ├── /dashboard               # Macro overview
  │   ├── /fed-tracker             # Fed policy analysis
  │   └── /capital-flows           # Global money flows
  │
  └── /settings                    # User settings
```

**Routing Tələbləri:**

1.  **Route Protection:** Create a `<ProtectedRoute />` component that checks for authentication and redirects to `/login` if the user is not authenticated.
2.  **Lazy Loading:** All page components inside `src/pages/` must be lazy-loaded using `React.lazy()` to enable code-splitting by route.
3.  **Nested Layouts:** The main `AppLayout` will contain the `Sidebar` and `Header`. Some sections like `/trading` might have their own nested layouts if needed.
4.  **Deep Linking:** Use URL query parameters to manage state where appropriate (e.g., `/trading/chart-workbench?symbol=BTCUSD&timeframe=1H`), allowing users to share specific views.
5.  **404 Handling:** Implement a custom `NotFoundPage.tsx` for unmatched routes.

## 🧩 KOMPONENT ARXİTEKTURASI (ATOMIC DESIGN)

**Atoms (`shared/components/ui/`):**
These are the base UI building blocks, primarily from `shadcn/ui`.
*   `Button`, `Input`, `Select`, `Checkbox`, `RadioGroup`
*   `Badge`, `Avatar`, `Tooltip`, `Popover`
*   `Card`, `Separator`, `Skeleton`
*   `Alert`, `Toast`

**Molecules (`shared/components/`):**
Simple, reusable components composed of atoms.
*   `MetricCard` (Icon + Label + Value + Change %)
*   `ChartLegend` (Toggles for chart series)
*   `OrderBookRow` (Price + Size + Visual Bar)
*   `PositionCard` (A summary of an open position)

**Organisms (`features/*/components/`):**
Complex components that form distinct sections of an interface.
*   `TradingChart` (The full chart component with toolbars and controls)
*   `OrderPanel` (The complete order entry form with risk calculation)
*   `RiskDashboard` (A grid of multiple risk metric widgets)
*   `BacktestResults` (A combination of charts and tables showing backtest output)

**Templates (`shared/components/layout/` & page components):**
Page-level layouts that structure organisms.
*   `AppLayout` (The main shell with sidebar and header)
*   `DashboardGrid` (A customizable grid layout for widgets)
*   `TradingTemplate` (The multi-panel layout for the chart workbench)

**Pages (`pages/`):**
The actual route components that assemble templates and organisms.

## 🎨 DİZAYN SİSTEMİ TƏLƏBLƏRİ

**Rəng Palitrası (`tailwind.config.js`):**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Background Hierarchy
        background: {
          DEFAULT: '#0f172a',  // slate-900 (Primary background)
          secondary: '#1e293b', // slate-800 (Cards, modals)
          elevated: '#334155',  // slate-700 (Hover, elevated elements)
        },

        // Foreground (Text) Hierarchy
        foreground: {
          DEFAULT: '#f1f5f9',  // slate-100 (Primary text)
          secondary: '#cbd5e1', // slate-300 (Secondary text)
          muted: '#94a3b8',    // slate-400 (Muted, hint text)
        },

        // Accent Colors
        primary: { // For branding and primary actions
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        destructive: { // For destructive actions
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },

        // Trading-Specific Colors
        bullish: '#10b981',   // green-500
        bearish: '#ef4444',    // red-500
        neutral: '#6b7280',   // gray-500

        border: '#334155', // slate-700
        input: '#334155', // slate-700
        ring: '#3b82f6', // blue-500 for focus rings
      },
    },
  },
};
```

**Typography:**
*   **Heading Font:** 'Inter' (variable font)
*   **Body Font:** 'Inter'
*   **Monospace Font (for numbers/code):** 'JetBrains Mono' or 'Roboto Mono'

**Spacing System:**
*   Use Tailwind's default 4px base spacing scale (`gap-4` = 16px, `p-6` = 24px).

**Border Radius:**
*   `sm`: 4px
*   `md`: 8px
*   `lg`: 12px

## 📊 STATE MANAGEMENT PLAN

**Zustand (Global Client State):**
Use for state that needs to be shared across the application but isn't fetched from the server.
*   `authStore.ts`: Manages user object, authentication status, tokens.
*   `themeStore.ts`: Manages the current theme ('dark'/'light').
*   `settingsStore.ts`: Manages user-specific preferences (e.g., notification settings, layout choices).
*   `websocketStore.ts`: Manages the WebSocket connection status.

**TanStack Query / React Query (Server State):**
The default choice for any data fetched from an API. It handles caching, re-fetching, and optimistic updates automatically.
*   **Queries (`use...`):**
    *   `useMarketData(symbol, timeframe)`
    *   `useOrderFlow(symbol)`
    *   `useBacktestResults(strategyId)`
    *   `useRiskMetrics()`
*   **Mutations (`use...`):**
    *   `usePlaceOrder()`
    *   `useClosePosition()`
    *   `useUpdateStrategy()`

## ⚡ PERFORMANCE REQUİREMENTS

*   **Initial Load (LCP):** < 2.5 seconds
*   **Chart Render Time:** < 100ms for 1000+ candlesticks
*   **Route Change (TBT):** < 200ms
*   **WebSocket Update Latency:** UI should reflect updates in < 50ms
*   **Lighthouse Score:** 90+ across Performance, Accessibility, and Best Practices.

**Optimization Strategies:**
*   Code splitting by route (`React.lazy()`).
*   Component-level lazy loading for heavy components.
*   Memoization (`useMemo`, `React.memo`) for expensive calculations and components.
*   Virtualization for long lists (e.g., order book, trade history) using `@tanstack/react-virtual`.
*   Asset optimization (WebP for images, SVGs for icons).
*   Use a bundle analyzer (`rollup-plugin-visualizer`) to monitor bundle size.

## 🧪 TESTING STRATEGİYASI

*   **Unit Tests (Vitest):** Focus on pure functions (utils), custom hooks, and store logic. Aim for >80% coverage on this critical logic.
*   **Integration Tests (Vitest + React Testing Library):** Test feature workflows, interactions between components, and API mocking.
*   **E2E Tests (Playwright):** Test critical user journeys from end-to-end.
    1.  Login -> Dashboard -> Open Chart
    2.  Create a Backtest -> View Results
    3.  Place a Paper Trade -> Monitor Position
    4.  Change a setting -> Verify it persists

## 🔧 DEVELOPER SETUP

*   **TypeScript:** `tsconfig.json` should have `strict: true` enabled. Configure path aliases (`@/*` for `src/*`).
*   **ESLint/Prettier:** Configure to enforce a consistent code style. Use plugins for React hooks, import order, and accessibility.
*   **Git Hooks (Husky):**
    *   **pre-commit:** Run linting and formatting.
    *   **pre-push:** Run type-checking (`tsc --noEmit`) and unit tests.

## 🎯 İLK MVP ÜÇÜN PRİORİTET SƏHIFƏLƏR

1.  **Login/Register**
2.  **Dashboard** (main overview)
3.  **Chart Workbench** (core trading interface)
4.  **Backtest Page** (basic version)
5.  **Settings**

Bu prompt-u Windsurf-a ver və senior frontend developer kimi layihəni strukturlaşdırsın. Hər addımı sənə izah etsin və best practice-lərə əməl etsin.
