import {React} from 'react'
import { Container } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FeedContent from './FeedContent';
import Data from './data/feed.json'

const FeedTab = () => {

  return (
    <Container sx={{width: "790px",margin: 0}}>
      
     {Data && Data.map(data => {
        return(
          <FeedContent
          key={data.id}
          title={data.title}
          day={data.day}
          content={data.content}
          hashtag={data.hashtag}
          like={data.like}
          chat={data.chat}
          thumbnail={data.thumbnail}
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

export default FeedTab