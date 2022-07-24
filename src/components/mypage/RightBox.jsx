import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MypostFeed from './MypostFeed';
import CardData from './card.json';
import MyTalkFeed from './MyTalkFeed';
import TalkData from './talk.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // pagination
  
  return (
    <Box
    sx={{
      width: 1100,
      height: 650,
      border: 1,
      borderColor: '#e6e6e6',
      backgroundColor : '#fff',
      marginTop: 10,
      marginLeft: 20,
      zIndex: 3
    }}
  >
        <Box
        sx={{
            width: 960,
            height: 70,
            marginLeft: 8.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent : 'center',
            fontWeight: 'bold'
        }}
        >
            <Tabs value={value} onChange={handleChange} textColor="secondary"
            indicatorColor="secondary" fontWeight="bold" aria-label="RightBox tabs">
                <Tab sx={{fontWeight: 'bold'}} label="게시물" {...a11yProps(0)} />
                <Tab sx={{fontWeight: 'bold'}} label="Talk" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
                <Box
                sx={{
                    width: 960,
                    height: 510,
                    marginLeft: 8,
                    marginTop: -2,
                    display: "flex",
                    justifyContent:"space-around",
                    flexWrap:"wrap"
                }}>
                {CardData && CardData.map(data=>{
                    return(
                    <MypostFeed title={data.title} key={data.id} image={data.image}/>
                    )
                })}
                </Box>
                <Box
                sx={{
                    width: 1100,
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent : 'center',
                }}
                >
                <Stack spacing={2}>
                <Pagination count={10} size="large" />
                </Stack>
                </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
                <Box
                sx={{
                    width: 962,
                    height: 520,
                    marginLeft: 8,
                    marginTop: -2,
                    overflow: 'hidden'
                    // backgroundColor: '#999'
                }}> 
                
                {TalkData && TalkData.map(data=>{
                    return(
                    <MyTalkFeed title={data.title} key={data.id} text={data.text}/>
                    )
                })}
                
                </Box>

                <Box
                sx={{
                    width: 1100,
                    height: 70,
                    marginTop:-1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent : 'center',
                }}
                >
                <Stack spacing={2}>
                <Pagination count={10} size="large" />
                </Stack>
                </Box>
        </TabPanel>
    </Box>
  );
}
