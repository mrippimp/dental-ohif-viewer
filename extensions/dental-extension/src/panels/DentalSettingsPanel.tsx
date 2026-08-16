import React from 'react';
import { DentalThemeToggle } from '../components/DentalThemeToggle';

export function DentalSettingsPanel() {
  return (
    <div className="p-4">
      <h3 className="text-foreground mb-3 text-sm font-semibold">Dental Settings</h3>
      <DentalThemeToggle />
    </div>
  );
}

export default DentalSettingsPanel;
