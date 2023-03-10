import { atom } from 'recoil';
import { StoargeEnum } from '../effect/constant/StorageEnum';
import { localStorageEffect } from '../effect/Storage';

/**
 * 인증
 */
export interface Auth {
  /**
   * 유저 아이디
   */
  userId: string;
  /**
   * 토큰
   */
  token: string;
}

/**
 * 인증 atom
 */
const authAtom = atom<Auth>({
  key: 'auth',
  default: {
    userId: '',
    token: '',
  } as Auth,
  effects: [localStorageEffect(StoargeEnum.AUTH)],
});

export { authAtom };
