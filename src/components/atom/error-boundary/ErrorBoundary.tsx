import { Box } from '@mui/material';
import { Component, ErrorInfo } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 에러
 */
const Error = () => {
  /**
   * react router Hook
   */
  const navigate = useNavigate();

  /**
   * 홈 화면으로 이동
   */
  const onGoBackToHome = () => {
    // redirect to home if already logged in
    navigate('/');
  };

  /**
   * 이전 페이지로 이동
   */
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Box style={{ gridArea: 'main hd ft' }}>
        <div>에러가 생겼습니다.</div>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={onGoBackToHome}>홈 화면 이동</button>
      </Box>
    </>
  );
};

/**
 * 에러 경계 컴포넌트
 */
class ErrorBoundary extends Component<{ children: any }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
