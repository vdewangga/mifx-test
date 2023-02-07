import { Box, Backdrop, CircularProgress } from '@mui/material';

const Loading = () => (
  <Box>
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </Box>
)

export default Loading 
