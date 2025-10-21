import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-background-secondary p-4">
      <div className="mb-8 flex h-16 items-center justify-center">
        <h1 className="text-2xl font-bold text-foreground">ATLAS</h1>
      </div>
      <nav>
        {/* Navigation links will be added here */}
        <ul>
          <li className="mb-2">
            <a href="/dashboard" className="block rounded-md px-4 py-2 text-foreground hover:bg-background-elevated">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="/trading/chart-workbench" className="block rounded-md px-4 py-2 text-foreground hover:bg-background-elevated">
              Trading
            </a>
          </li>
          <li className="mb-2">
            <a href="/analysis/backtest" className="block rounded-md px-4 py-2 text-foreground hover:bg-background-elevated">
              Analysis
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
