import React from 'react'
import { Container } from '@mui/system'
import TalkContent from './TalkContent'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Data from './data/talk.json'

const TalkTab = () => {

  return (
    <Container sx={{width: "790px",margin: 0}}>
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
    <Stack spacing={5} position="relative" bottom={10} left="35%" marginTop={3}>
      <Pagination count={3} color="secondary" />
    </Stack>
    </Container>
  )
}

export default TalkTab