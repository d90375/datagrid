import { SWITCH_VIRTUALIZATION } from '../actionTypes';

export const setVirt = bool => ({
  type: SWITCH_VIRTUALIZATION,
  bool,
});
