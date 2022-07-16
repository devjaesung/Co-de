import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormHelperText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const BlackBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;
const KaKao = styled(Button)`
  &:hover {
    background: #fee000
  }
`
const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const {Kakao} = window;
const loginWithKakao = () =>{
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/Loginpage'
  })
}



const Registerpage = () => {
  const theme = createTheme();
  const [emailError, setEmailError] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
const onhandlePost=async(data)=>{
  const { email, name, password } = data;
}

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      email: data.get('email'),
      name: data.get('name'),
      password: data.get('password'),
      rePassword: data.get('rePassword'),
    };
    const { email, name, password, rePassword } = joinData;

    // 이메일 유효성 체크
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)|^(010|011|016|017|018|019)[0-9]{3,4}[0-9]{4}$/;
    if (!emailRegex.test(email)) setEmailError('올바른 이메일또는 전화번호 형식이 아닙니다.');
    else setEmailError('');

    // 비밀번호 유효성 체크
    const passwordRegex = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    if (!passwordRegex.test(password))
      setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
    else setPasswordState('');

    // 비밀번호 같은지 체크
    if (password !== rePassword) setPasswordError('비밀번호가 일치하지 않습니다.');
    else setPasswordError('');

    // 이름 유효성 검사
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(name) || name.length < 1) setNameError('올바른 이름을 입력해주세요.');
    else setNameError('');
      
  if (
    emailRegex.test(email) &&
    passwordRegex.test(password) &&
    password === rePassword &&
    nameRegex.test(name)
  ) {
    onhandlePost(joinData);
  }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p:3,
            border :1,
          }}
        >
          <Typography sx={{
            marginBottom:'20px',
            marginTop:'50px',
          }}>
          <a href="Loginpage"><img src="images/logob.png" alt="logo" /></a>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <KaKao  onClick={loginWithKakao}
              fullWidth
              sx={{
                  borderRadius:'15px',
                  height:'45px',
                  backgroundColor:'#fee000',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'Black',
                  marginTop:'15px',
                  opacity:'0.8',
                  ':hover':{
                    backgroundColor:'#fee000',
                    opacity:'1'
                  }
              }}
            ><img src="images/KaKao.png" alt="logo"  className='KaKao'/><p>카카오로 간편 회원가입</p></KaKao>
          <Box
              sx={{
                width:'346px',
                height:'36px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Box
                  sx={{
                    width:'150px',
                    height:'2px',
                    backgroundColor:'#000'
                  }}/>
                  <Box
                    sx={{
                      padding:'5px',
                      fontWeight:'bold'
                    }}>
                    또는
                  </Box>
                  <Box
                  sx={{
                    width:'150px',
                    height:'2px',
                    backgroundColor:'#000'
                  }}/>
              </Box>
            <BlackBorderTextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="전화번호 또는 이메일을 입력해주세요"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                '& fieldset':{
                  borderRadius:'25px',
                },
              }}
              error={emailError !== '' || false}
            /><FormHelperTexts>{emailError}</FormHelperTexts>
              <BlackBorderTextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="이름을 입력해 주세요"
              name="name"
              sx={{
                '& fieldset':{
                  borderRadius:'25px',
                },
              }}
              error={nameError !== '' || false}
            /><FormHelperTexts>{nameError}</FormHelperTexts>
            <BlackBorderTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호를 입력해 주세요"
              type="password"
              id="password"
              sx={{
                '& fieldset':{
                  borderRadius:'25px',
                },
              }}
              error={passwordState !== '' || false}
            /><FormHelperTexts>{passwordState}</FormHelperTexts>
            <BlackBorderTextField
              margin="normal"
              required
              fullWidth
              name="rePassword"
              label="비밀번호 재입력"
              type="password"
              id="rePassword"
              autoComplete="current-password"
              sx={{
                '& fieldset':{
                  borderRadius:'25px',
                },
              }}
              error={passwordError !== '' || false}
            /><FormHelperTexts>{passwordError}</FormHelperTexts>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: "black", backgroundColor: "white", fontWeight:"bold",
                borderRadius:'25px',
                background:'#7777AB',
                fontSize:'16px',
              ':hover': {
                bgcolor:'#7777AB',
                color: 'white'},
              }}
              
            >
              회원가입
            </Button>

          </Box>
        </Box>
        <Container
                  sx={{
                    border:1,
                    marginTop:'20px'
                  }}>
        <Box
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:'30px'
          }}>
          아이디가 있으신가요?
          <Link to="/Loginpage">
          <Button
            sx={{
              color:'#6667AB',
              cursor:'pointer',
              textDecoration:'none',
              paddingLeft:'10px',
              fontSize:'16px',
              ':hover': {
                textDecoration:'none',
                fontWeight:'bolder'
              },
            }}>로그인하기</Button></Link>
        </Box>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
export default Registerpage