import { id } from './id';
import longitudinalMode, {
  modeInstance as longitudinalModeInstance,
  longitudinalRoute,
} from '@ohif/mode-longitudinal';

const dentalExtensionDependencies = {
  'dental-extension': '^0.0.1',
};

export const modeInstance = {
  ...longitudinalModeInstance,
  // TODO: We're using this as a route segment
  // We should not be.
  id,
  routeName: 'dental',
  displayName: 'Dental',
  routes: [longitudinalRoute],
  extensions: {
    ...longitudinalModeInstance.extensions,
    ...dentalExtensionDependencies,
  },
  hangingProtocol: 'dental',
};

export const mode = {
  ...longitudinalMode,
  id,
  modeInstance,
  extensionDependencies: {
    ...longitudinalMode.extensionDependencies,
    ...dentalExtensionDependencies,
  },
};

export default mode;
