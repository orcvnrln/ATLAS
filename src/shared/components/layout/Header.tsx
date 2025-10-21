import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-border bg-background-secondary px-6">
      <div className="flex items-center">
        {/* Search bar can go here */}
        <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* User profile, settings, notifications can go here */}
        <div className="h-10 w-10 rounded-full bg-background-elevated"></div>
        <span className="text-foreground">User Name</span>
      </div>
    </header>
  );
};

export default Header;
