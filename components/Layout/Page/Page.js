

import GlobalStyles from '../../../styles/global-style';
import theme from '../../../styles/theme';
import { SCMainWrapper } from './Page.style';

export default function Page({ children,  background }) {

  return (
    <>
      <GlobalStyles background={theme.color[background || 'white']} />
      <SCMainWrapper>
        {children}
      </SCMainWrapper>
    </>
  );
}
