import { TextField, Box } from '@mui/material';
import React ,{ useState }from 'react'
import CommentList from './CommentList';


const Testcomments = () => {
  let post = e =>{
    const conpyFeedComments = [...feedComments];
    conpyFeedComments.push(comment);
    setFeedComments(conpyFeedComments);
    setComment('');
  };
  let [userName] = useState('hacker');
  let [comment, setComment] = useState('');
  let [feedComments, setFeedComments] =useState([]);
  let [isValid, setIsValid] = useState(false);
  
  
  return (
    <Box>
    <TextField
    label='댓글달기....'
    onChange={e=>{
        setComment(e.target.value);
    }}
    onKeyUp={e =>{
      e.target.value.length > 0
      ? setIsValid(true)
      : setIsValid(false)
    }}
    value={comment}/>
    <button className={
      comment.length >0
      ? 'submitCommentActive'
      : 'submitCommentInactive'}>게시</button>
    
    </Box>

  )
}
export default Testcomments