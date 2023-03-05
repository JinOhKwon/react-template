import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
/**
 * loading 컴포넌트
 */
const Loader = () => {
  return (
    <Box>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <CircularProgress color='primary' />
      </Backdrop>
    </Box>
  );
};

export default Loader;
