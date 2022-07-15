import React from 'react';
import Data from '../profilepage/data/talk.json'
import { Container,Box } from '@mui/system'
import FilterBox from './FilterBox'
import TalkContent from '../profilepage/TalkContent'

const MainTalk = () => {

  return (
   
    <Container sx={{'position':'relative','top':'100px'}}>
      <FilterBox/>
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
     
    </Container>
  )
}

export default MainTalk