import { atom } from 'recoil';

export const passwordState = atom<string>({
  key: 'passwordState',
  default: '',
});

export const showPasswordWarningState = atom<boolean>({
  key: 'showWarningState',
  default: false,
});

export const confirmPasswordState = atom<string>({
    key:'confirmPassword',
    default:'',
});

export const showConfirmPasswordWarningState = atom<boolean>({
    key: 'showConfirmPasswordWarning',
    default: false,
})