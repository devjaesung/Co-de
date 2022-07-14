import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const TalkDetail2 = () => {
  return (
    <>
      <Box>
        <h3 style={{color:"#6667AB", margin:0, marginBottom:"5px"}}>이 달의 공연 리스트</h3>
        <Divider />
        <List>
          <ListItem sx={{p:0}}>
            <ListItemButton>
            <ListItemText 
              primary="2022 케이시 콘서트 <May, Be>"
              secondary="신한pLay 스퀘어 라이브홀"
            />
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton>
            <ListItemText
              primary="2022 케이시 콘서트 <May, Be>"
              secondary="신한pLay 스퀘어 라이브홀"
            />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton>
            <ListItemText
              primary="2022 케이시 콘서트 <May, Be>"
              secondary="신한pLay 스퀘어 라이브홀"
            />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton>
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
            <ListItemButton>
            <ListItemText
              primary="홍대) 20대 초 ~ 30대 중 락밴드 드럼 구합니다."
            />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton>
            <ListItemText
              primary="초보 밴드 단원 모집"
            />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{p:0}}>
            <ListItemButton>
            <ListItemText
              primary="직장인 밴드 기타, 베이스 파트 구합니다."
            />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default TalkDetail2