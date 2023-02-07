import React from "react";
import { Box, Typography } from "@mui/material";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: "center", background: '#ffe1e3' }}>
          <Typography variant="h3" color="#f54f5c">
            Something Went Wrong!
          </Typography>
        </Box>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;