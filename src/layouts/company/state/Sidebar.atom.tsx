import { atom } from 'recoil';
import { StoargeEnum } from '../../../utility/recoil/effect/constant/StorageEnum';
import { localStorageEffect } from '../../../utility/recoil/effect/Storage';

/**
 * 사이드바 Atom
 */
interface SidebarAtom {}

/**
 * 사이드바 Atom
 */
export const sidebarAtom = atom<SidebarAtom>({
  key: 'sidebarAtom',
  default: '',
  effects: [localStorageEffect(StoargeEnum.ETC)],
});

