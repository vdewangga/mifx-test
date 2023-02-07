import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Typography } from "@mui/material";
import Button from "../button/Button";

const NavButton = ({ prev, next, onClick, className, slide, images }) => (
  <Box
    sx={{
      position: 'relative',
      right: prev ? '-330px' : '0px',
      top: prev ? '350px' : '350px',
    }}
  >
    <Button sx={{ height: '24px', width: '24px', minWidth: '24px', background: 'none' }} onClick={onClick} className={className}>
      {next && <ArrowRightIcon sx={{ color: '#616366' }} />}
      {prev && <ArrowLeftIcon sx={{ color: '#616366' }} />}
    </Button>
    {prev && <Typography color="#616366" fontSize="14px" component="span">{slide}/{images.length}</Typography>}
  </Box>
)
export default NavButton;