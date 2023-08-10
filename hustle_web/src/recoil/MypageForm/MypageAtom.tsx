import { atom } from 'recoil';

export const profileState = atom({
  key: 'profileState',
  default: null,
})

export const clubsState = atom({
  key: 'clubState',
  default: [],
})

export const securitySettingsState = atom({
  key:'securitySettingsState',
  default: {},
})

