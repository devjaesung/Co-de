import React from 'react';
import Data from '../profilepage/data/talk.json'
import { Container,Box } from '@mui/system'
import FilterBox from './FilterBox'
import TalkContent from '../profilepage/TalkContent'
import TalkRight from '../talkdetail/talkdetailin/TalkRight';

const MainTalk = () => {

  return (
   
    <Container sx={{'position':'relative','top':'100px','left':"0px"}}>
      <FilterBox width="788px"/>
      
       <Box style={{"width":"788px", "position":"absolute",'top':"55px"}}>
       {Data && Data.map(data => {
        return(
          <TalkContent
          key={data.id}
          title={data.title}
          day={data.day}
          content={data.content}
          hashtag={data.hashtag}
          like={data.like}
          chat={data.chat}
          boolean={data.boolean}
          />
        )
      })}
      </Box>
      <TalkRight space="1000px"/>
     
    </Container>
  )
}

export default MainTalk