import * as React from 'react';
import {useState, useRef} from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Avatar, TextField } from '@mui/material';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import Input from '@mui/material/Input';
import {Link} from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const ariaLabel = { 'aria-label': 'description' };

// 장르선택
const genre = [
  { title:'발라드'},
  { title:'댄스'},
  { title:'힙합'},
  { title:'R&B'},
  { title:'인디'},
  { title:'록'},
  { title:'트로트'},
  { title:'블루스'},
  { title:'OST'},
  { title:'클래식'},
  { title:'팝송'}
];
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function EditBox(props) {

  // 프로필 사진 추가
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const fileInput = useRef(null)

  const [File, setFile] = useState('')
  const onChange = (e) => {
    if(e.target.files[0]){
        setFile(e.target.files[0])
    }else{ //업로드 취소할 시
        setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    return
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
           setImage(reader.result)
          }
      }
      reader.readAsDataURL(e.target.files[0])
    }


    // 소개글, 좋아하는아티스트,노래
    const onNickChange = (e) =>{
      e.preventDefault()
     props.setNickname(e.currentTarget.value);
    }
    const onCommentChange = (e) =>{
          e.preventDefault()
        props.setComment(e.currentTarget.value);
    }
    const onArtChange = (e) =>{
          e.preventDefault()
        props.setArt(e.currentTarget.value);
    }
    const onSongChange = (e) =>{
          e.preventDefault()
        props.setSong(e.currentTarget.value);
    }


  return (
    <Box
    sx={{
      width: 370,
      height: 740,
      border: 1,
      borderColor: '#e6e6e6',
      backgroundColor : '#fff',
      marginLeft: 5,
      zIndex: 999
    }}
  >
        <Box
        sx={{
            width: 320,
            height: 60,
            borderBottom:1,
            borderColor: '#b5b5b5',
            marginTop:5,
            marginLeft:3,
            display: 'flex',
            alignItems:'center'
        }}
        >
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
                flex:8
            }}
            noValidate
            autoComplete="off"
            >
             <Input inputProps={ariaLabel}
              onChange={onNickChange}
              value={props.Nickname}></Input>
            </Box>
            <Link to="/Mypage">
            <Button
            sx={{
               marginLeft: 'auto',
               backgroundColor: '#6667AB',
               color: 'white',
               fontWeight: 'bold',
               ':hover': {
                bgcolor: '#dddddd', 
                color: '#8b8b8d',
               }
            }}
            >
            확인
            </Button>
            </Link>
        </Box>
      <Box
        sx={{
          width: 320,
          height: 40,
          marginLeft:3,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
      }}>
          
          <Box
            sx={{
              display:'flex',
              fontSize:'12px',
              fontWeight: 'bold',
              color:'#999999'
            }}>
            팔로워
          </Box>
          <Box
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            paddingLeft: '5px'
          }}>
            2995
          </Box>
          <Box
            sx={{
              display:'flex',
              fontSize:'12px',
              fontWeight: 'bold',
              color:'#999999',
              paddingLeft: '15px'
            }}>
            팔로우
          </Box>
          <Box
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            paddingLeft: '5px'
          }}>
            456
          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 165,
        marginLeft:3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
       <Avatar 
        src={Image} 
        style={{margin:'20px', width: '120px', height:'120px', cursor: 'pointer'}} 
        onClick={()=>{fileInput.current.click()}}/>
         <input 
            type='file' 
            style={{display:'none'}}
            accept='image/jpg,impge/png,image/jpeg' 
            name='profile_img'
            onChange={onChange}
            ref={fileInput}
          />
      </Box>

      <Box
      sx={{
        width: '350px',
        height: '60px',
        marginLeft:2,
        display: 'flex',
        flexWrap:'nowrap'
      }}>
          <Autocomplete
            multiple
            limitTags={3}
            id="checkboxes-tags-demo"
            size="small"
            options={genre}
            defaultValue={[genre[4], genre[10], genre[8]]}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: '340px'}}
            renderInput={(params) => (
              <TextField {...params} label="좋아하는 장르 (최대 3가지)"/>
            )}
          />
      </Box>

      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        borderBottom:1,
        borderColor: '#cacaca',
      }}>
          <Box
          sx={{
            paddingLeft: 1,
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a'
          }}>
            소개글
          </Box>
          <Box
          sx={{
            height: 70,
            marginTop:2,
            color: '#acacac',
            fontSize: '13px'
          }}>
           <TextField 
            sx={{ width: '320px', height: '70px' , fontSize:'13px'}}
            placeholder='안녕하세요. 코드 개발자입니다.'
            inputProps={{style: {fontSize: '13px'}}}
            onChange={onCommentChange}
            >
            
           </TextField>
          </Box>
      </Box>
      
      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        marginTop: 2,
        borderBottom: 1,
        borderColor: '#cacaca'
      }}>
        <Box
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a',
            display: 'flex'
          }}>
            <LoyaltyIcon
            sx={{
              marginRight: 1
            }}>
            </LoyaltyIcon>
            좋아하는 아티스트
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            color: '#acacac',
            fontSize: '13px'
          }}>
            <TextField 
            sx={{ width: '320px', height: '70px' , fontSize:'13px'}}
            placeholder='# coldplay # IU # 데이먼스이어 # 백예린'
            inputProps={{style: {fontSize: '13px'}}}
            onChange={onArtChange}
            >
           </TextField>

          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        marginTop: 2
      }}>
        <Box
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a',
            display: 'flex'
          }}>
            <AudioFileIcon
            sx={{
              marginRight: 1
            }}>
            </ AudioFileIcon>
            좋아하는 노래
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            color: '#acacac',
            fontSize: '13px'
          }}>
            <TextField 
            sx={{ width: '320px', height: '70px' , fontSize:'13px'}}
            placeholder='# 밤편지 # 0310 # Antifreeze'
            inputProps={{style: {fontSize: '13px'}}}
            onChange={onSongChange}
            >
            
           </TextField>
          </Box>
      </Box>
  </Box>
   
  )
}