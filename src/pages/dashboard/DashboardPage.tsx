import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-foreground">Welcome to your Dashboard</h1>
      <p className="text-foreground-secondary">
        This is a placeholder for your main dashboard content. Widgets for portfolio overview,
        active positions, AI signals, and risk metrics will be displayed here.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for a widget */}
        <div className="rounded-lg bg-background-secondary p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Portfolio Value</h2>
          <p className="text-3xl font-bold text-bullish">$127,450.00</p>
        </div>

        {/* Placeholder for another widget */}
        <div className="rounded-lg bg-background-secondary p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Today's P&L</h2>
          <p className="text-3xl font-bold text-bullish">+$2,340 (1.8%)</p>
        </div>

        {/* Placeholder for another widget */}
        <div className="rounded-lg bg-background-secondary p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Active Positions</h2>
          <p className="text-3xl font-bold text-foreground">12</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
