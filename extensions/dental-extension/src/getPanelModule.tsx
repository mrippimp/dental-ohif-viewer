import React from 'react';
import DentalSettingsPanel from './panels/DentalSettingsPanel';

function getPanelModule({ servicesManager, commandsManager, extensionManager }) {
  return [
    {
      name: 'dentalSettings',
      iconName: 'settings',
      iconLabel: 'Dental Settings',
      label: 'Dental Settings',
      component: () => <DentalSettingsPanel />,
    },
  ];
}

export default getPanelModule;
