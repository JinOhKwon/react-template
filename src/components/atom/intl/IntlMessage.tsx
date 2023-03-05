import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

/**
 * locale 컴포넌트
 *
 * @param props 소품
 */
const InjectMassage = (props: any) => <FormattedMessage {...props} />;
export default injectIntl(InjectMassage, {
  forwardRef: false,
});
