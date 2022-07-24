import React,{useState} from 'react'
import { Grid, Box,Button, Divider, List, ListItem, ListItemButton ,ListItemText, Avatar, Typography } from '@mui/material';

const TalkRight = (props) => {


  const Data = [
    {
      "id":1,
      "nickname":"abc1234",
      "img": "images/avatar.jpg",
      "boolean": true
    },
    {
      "id":2,
      "nickname":"ayayay_fyfy",
      "img": "images/avatar02.jpg",
      "boolean": true
    },
    {
      "id":3,
      "nickname":"jaesung0621",
      "img": "images/profile.jpg",
      "boolean": true
    },
    {
      "id":4,
      "nickname":"qwerty99",
      "img": "images/avatar03.jpg",
      "boolean": true
    },
    {
      "id":5,
      "nickname":"hihi_1998",
      "img": "images/avatar04.jpg",
      "boolean": true
    },
  ]

  const FollowList = (props) => {
    const [followBtn,setFollowBtn] = useState(props.boolean);
    const Invert = () =>{
        setFollowBtn((current)=>!followBtn)
    }
    return(
      <ListItem sx={{py:1, px:0}}>
            <ListItemButton sx={{py:0,px:1, display:"flex",justifyContent:"space-between"}}>
          <Box sx={{display:"flex",alignItems:"flex-end"}}>
            <Avatar alt="profile image" src={props.img} sx={{width:"24px",height:"24px", marginRight:"5px"}}/>
            <Typography variant='body2' component="p" >{props.nickname}</Typography>
          </Box>
            <Button variant={followBtn? 'contained' : 'outlined'} onClick={Invert} color="secondary" size="small">
            {followBtn? "Follow" : "Followed"}
            </Button>
            </ListItemButton>
      </ListItem>
    )
  }

  return (
    <Grid container columnSpacing={1} left={props.space} sx={{position:"fixed", width:"274px"}}>
    <Grid item 
      sx={{
           width:"274px", 
           height:"atuo",
           background:"#fff",
           p:"16px",
           boxShadow:"2px 2px 2px rgba(0, 0, 0, 0.3)"}}>
      <Box>
        <h3 style={{color:"#6667AB", margin:0, marginBottom:"5px"}}>이 달의 공연 리스트</h3>
        <Divider />
        <List>
          <ListItem sx={{p:0}}>
            <ListItemButton sx={{py:0, px:"3px"}}>
              <ListItemText 
                primary="2022 케이시 콘서트 <May, Be>"
                secondary="신한pLay 스퀘어 라이브홀"
              />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton sx={{py:0, px:"3px"}}>
              <ListItemText
                primary="2022 케이시 콘서트 <May, Be>"
                secondary="신한pLay 스퀘어 라이브홀"
              />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton sx={{py:0, px:"3px"}}>
              <ListItemText
                primary="2022 케이시 콘서트 <May, Be>"
                secondary="신한pLay 스퀘어 라이브홀"
              />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton sx={{py:0, px:"3px"}}>
              <ListItemText
                primary="2022 케이시 콘서트 <May, Be>"
                secondary="신한pLay 스퀘어 라이브홀"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box>
        <h3 style={{color:"#6667AB", margin:0, marginBottom:"5px"}}>모집글</h3>
        <Divider />
        <List>
          <ListItem sx={{p:0}}>
            <ListItemButton sx={{py:0, px:"3px"}}>
              <ListItemText
                primary="홍대) 20대 초 ~ 30대 중 락밴드 드럼 구합니다."
              />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton sx={{py:0, px:"3px"}}>
              <ListItemText
                primary="초보 밴드 단원 모집"
              />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton sx={{py:0, px:"3px"}}>
              <ListItemText
                primary="직장인 밴드 기타, 베이스 파트 구합니다."
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Grid>
    {/*Follow 추천 */}
    <Grid
      item
      sx={{
        width:"274px", 
        height:"atuo",
        background:"#fff",
        p:"16px",
        boxShadow:"2px 2px 2px rgba(0, 0, 0, 0.3)",
        marginTop:'20px'}}>
          
    <Box>
        <h3 style={{color:"#6667AB", margin:0, marginBottom:"5px"}}>팔로우 추천</h3>
        <Divider />
        <List>
        {Data && Data.map(data => {
        return(
          <FollowList
          key={data.id}
          nickname={data.nickname}
          img={data.img}
          boolean={data.boolean}
          />
        )
      })}
        </List>
      </Box>
    </Grid>
    </Grid>
  )
}

export default TalkRight