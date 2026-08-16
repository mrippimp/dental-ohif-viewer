import React from 'react';
import { useActiveTheme } from '@ohif/ui-next';

export function DentalThemeToggle() {
  const { activeTheme, setActiveTheme } = useActiveTheme();
  const isDental = activeTheme === 'dental';

  const handleToggle = () => {
    setActiveTheme(isDental ? 'default' : 'dental');
  };

  return (
    <button
      onClick={handleToggle}
      className="bg-secondary text-secondary-foreground hover:bg-accent flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
      title={isDental ? 'Switch to default theme' : 'Switch to Dental theme'}
    >
      {isDental ? '🦷 Dental Mode' : 'Enable Dental Theme'}
    </button>
  );
}

export default DentalThemeToggle;
