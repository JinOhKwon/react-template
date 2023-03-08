import { Box } from '@mui/material';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Scrollbar } from '../../components/atom';
import Header from './header/Header';

/**
 * 기업 레이아웃
 */
const Layout = () => {
  return (
    <Box>
      <Box component='header'>
        <Header />
      </Box>
      <Box component='main'>
        <Scrollbar>
          <Box component='section'>
            <Outlet />
          </Box>
        </Scrollbar>
      </Box>
    </Box>
  );
};

export default memo(Layout);
