import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Layout
import AppLayout from '@/shared/components/layout/AppLayout';

// Page Components (Lazy Loaded)
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'));
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));
const ChartWorkbenchPage = lazy(() => import('@/pages/trading/ChartWorkbenchPage'));
const PaperTradingPage = lazy(() => import('@/pages/trading/PaperTradingPage'));
const LiveTradingPage = lazy(() => import('@/pages/trading/LiveTradingPage'));
const BacktestingPage = lazy(() => import('@/pages/analysis/BacktestingPage'));
const RiskAnalysisPage = lazy(() => import('@/pages/analysis/RiskAnalysisPage'));
const PortfolioPage = lazy(() => import('@/pages/analysis/PortfolioPage'));
const StyleBuilderPage = lazy(() => import('@/pages/tools/StyleBuilderPage'));
const PlaybookPage = lazy(() => import('@/pages/tools/PlaybookPage'));
const ScannerPage = lazy(() => import('@/pages/tools/ScannerPage'));
const StrategyExportPage = lazy(() => import('@/pages/tools/StrategyExportPage'));
const OraclePage = lazy(() => import('@/pages/ai/OraclePage'));
const JarvisPage = lazy(() => import('@/pages/ai/JarvisPage'));
const SignalsPage = lazy(() => import('@/pages/ai/SignalsPage'));
const MacroDashboardPage = lazy(() => import('@/pages/macro/MacroDashboardPage'));
const FedTrackerPage = lazy(() => import('@/pages/macro/FedTrackerPage'));
const CapitalFlowsPage = lazy(() => import('@/pages/macro/CapitalFlowsPage'));
const SettingsPage = lazy(() => import('@/pages/settings/SettingsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// --- Helper Components ---

const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background">
    {/* Replace with a proper spinner/loader component */}
    <p className="text-foreground">Loading...</p>
  </div>
);

const ProtectedRoute = () => {
  // Placeholder for authentication logic
  const isAuthenticated = true; // Replace with actual auth check, e.g., from authStore

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

// --- Router Configuration ---

const router = createBrowserRouter([
  // Public routes
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  // Protected routes
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'trading',
        children: [
          {
            path: 'chart-workbench',
            element: <ChartWorkbenchPage />,
          },
          {
            path: 'paper-trading',
            element: <PaperTradingPage />,
          },
          {
            path: 'live-trading',
            element: <LiveTradingPage />,
          },
        ],
      },
      {
        path: 'analysis',
        children: [
          {
            path: 'backtest',
            element: <BacktestingPage />,
          },
          {
            path: 'risk',
            element: <RiskAnalysisPage />,
          },
          {
            path: 'portfolio',
            element: <PortfolioPage />,
          },
        ],
      },
      {
        path: 'tools',
        children: [
          {
            path: 'style-builder',
            element: <StyleBuilderPage />,
          },
          {
            path: 'playbook',
            element: <PlaybookPage />,
          },
          {
            path: 'scanner',
            element: <ScannerPage />,
          },
          {
            path: 'export',
            element: <StrategyExportPage />,
          },
        ],
      },
      {
        path: 'ai',
        children: [
          {
            path: 'oracle',
            element: <OraclePage />,
          },
          {
            path: 'jarvis',
            element: <JarvisPage />,
          },
          {
            path: 'signals',
            element: <SignalsPage />,
          },
        ],
      },
      {
        path: 'macro',
        children: [
          {
            path: 'dashboard',
            element: <MacroDashboardPage />,
          },
          {
            path: 'fed-tracker',
            element: <FedTrackerPage />,
          },
          {
            path: 'capital-flows',
            element: <CapitalFlowsPage />,
          },
        ],
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
  // 404
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <RouterProvider router={router} />
  </Suspense>
);
