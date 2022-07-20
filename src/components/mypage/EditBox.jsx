import {React, useState, useRef} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import Input from '@mui/material/Input';
import {Link} from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const ariaLabel = { 'aria-label': 'description' };

// chip option
const options = [
  '발라드',
  '댄스',
  '랩/힙합',
  'R&B/Soul',
  '인디음악',
  '록/메탈',
  '트로트',
  '포크/블루스',
  'OST',
  '클래식'
];

const EditBox = (props) => {

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

    // option
      // const [anchorEl, setAnchorEl] = React.useState(null);
      // const [selectedIndex, setSelectedIndex] = React.useState(1);
      // const open = Boolean(anchorEl);
      // const handleClickListItem = (event) => {
      //   setAnchorEl(event.currentTarget);
      // };

      // const handleMenuItemClick = (event, index) => {
      //   setSelectedIndex(index);
      //   setAnchorEl(null);
      // };

      // const handleClose = () => {
      //   setAnchorEl(null);
      // };

  return (
    <Box
    sx={{
      width: 370,
      height: 740,
      border: 1,
      borderColor: '#e6e6e6',
      backgroundColor : '#fff',
      marginLeft: 5
    }}
  >
        <Box
        sx={{
            width: 320,
            height: 60,
            borderBottom:1,
            borderColor: '#b5b5b5',
            // backgroundColor: 'gray',
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
            <Input defaultValue="NickName" inputProps={ariaLabel} />
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
        width: 320,
        height: 60,
        marginLeft:3,
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
      
        {/* <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: 'background.paper', width: '70px', height: '20px' }}
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary={options[selectedIndex]}
            />
          </ListItem>
        </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu> */}
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            인디음악
          </Box>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            팝송
          </Box>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            OST
          </Box>
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
            소개글 (15/50자)
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
            안녕하세요. 코드개발자 입니다.
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
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
            # coldplay # IU # 데이먼스이어 # 백예린
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
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
            # 밤편지 # 0310 # Antifreeze
          </Box>
      </Box>
  </Box> 
  )
}

export default EditBox