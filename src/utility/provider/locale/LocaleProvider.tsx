import { memo, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { useRecoilValue } from 'recoil';
import MmtLocale from '../../locale/MmtLocale';
import { localeAtom } from '../../recoil/locale/Locale.atom';
import { IntlGlobalProvider } from '../../util';

/**
 * 번역기 제공 소품
 */
interface LocaleProviderProps {
  /**
   * react node
   */
  children: ReactNode;
}

/**
 * 번역기 제공
 */
const LocaleProvider = (props: LocaleProviderProps) => {
  /**
   * 소품
   */
  const { children } = props;
  /**
   * 언어
   */
  const locale = useRecoilValue(localeAtom);

  /**
   * json file 읽는다.
   *
   * @param nestedMessages 메시지
   * @param prefix 접두사
   * @returns json
   */
  const flattenMessages = (nestedMessages: any, prefix = '') => {
    return Object.keys(nestedMessages).reduce((messages, key) => {
      const msg: any = messages;
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'string') {
        msg[prefixedKey] = value;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.assign(msg, flattenMessages(value, prefixedKey));
      }
      return msg;
    }, {});
  };

  return (
    <IntlProvider locale={locale} defaultLocale='ko' messages={flattenMessages(MmtLocale[locale])}>
      <IntlGlobalProvider>{children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default memo(LocaleProvider);
