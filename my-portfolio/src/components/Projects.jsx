import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';

import p1 from '../assets/p1.jpeg'
import p2 from '../assets/2.jpeg'
import p3 from '../assets/3.jpeg'
import p4 from '../assets/4.jpeg'
import p5 from '../assets/5.jpeg'

const Projects = () => {

    let projectList =  (
        <>
        <Card id='project-card' className='hover:border hover:border-darkWhite' sx={{ maxWidth: 400 }}>
        <CardMedia
            id='project-image'
            component="img"
            alt="<3"
            image={p1}
        />
        <CardContent className='bg-lightBeige'>
            <Typography id='project-name' gutterBottom variant="h5" component="div">
            Cocktail Menu
            </Typography>
            <Typography id='project-desc' variant="body2">
            A simple front end application made with JavaScript that provides different recipes for cocktails and mocktails!
            </Typography> 
            <Typography id='project-date' variant="body2">
            Published on: March 10th, 2023
            </Typography> 
        </CardContent>
        </Card>
        <Card id='project-card' className='hover:border hover:border-darkWhite' sx={{ maxWidth: 400 }}>
        <CardMedia
            id='project-image'
            component="img"
            alt="<3"
            image={p3}
        />
        <CardContent className='bg-lightBeige'>
            <Typography id='project-name' gutterBottom variant="h5" component="div">
            Budget Bot
            </Typography>
            <Typography id='project-desc' variant="body2">
            A back end application built with python and SQL. Allows user to input monthly income and expenses so they can keep track of reaccurring expenses and find a budget that works for them to save the max amount of money each month.
            </Typography> 
            <Typography id='project-date' variant="body2">
            Published on: April 21st, 2023
            </Typography> 
        </CardContent>
        </Card>
        <Card id='project-card' className='hover:border hover:border-darkWhite' sx={{ maxWidth: 400 }}>
        <CardMedia
            id='project-image'
            component="img"
            alt="<3"
            image={p2}
        />
        <CardContent className='bg-lightBeige'>
            <Typography id='project-name' gutterBottom variant="h5" component="div">
            Swolldiers
            </Typography>
            <Typography id='project-desc' variant="body2">
            React application inspired by modern day gyms. Users can log in, read about the gym and trainors, sign up for memberships and access free exercises.
            </Typography> 
            <Typography id='project-date' variant="body2">
            Published on: March 31st, 2023
            </Typography> 
        </CardContent>
        </Card>
        <Card id='project-card' className='hover:border hover:border-darkWhite' sx={{ maxWidth: 400 }}>
        <CardMedia
            id='project-image'
            component="img"
            alt="<3"
            image={p4}
        />
        <CardContent className='bg-lightBeige'>
            <Typography id='project-name' gutterBottom variant="h5" component="div" className='flex justify-center'>
            Arcadia
            </Typography>
            <Typography id='project-desc' variant="body2">
            Full-stack application inspired by pinterest. Users are able to log in, and post images with desriptions. Users can also interact with other peoples posts, and follow each other.
            </Typography> 
            <Typography id='project-date' variant="body2">
            Published on: May 12th, 2023
            </Typography> 
        </CardContent>
        </Card>
        <Card id='project-card' className='hover:border hover:border-darkWhite' sx={{ maxWidth: 400 }}>
        <CardMedia
            id='project-image'
            component="img"
            alt="<3"
            image={p5}
        />
        <CardContent className='bg-lightBeige'>
            <Typography id='project-name' gutterBottom variant="h5" component="div">
            Elysian
            </Typography>
            <Typography id='project-desc' variant="body2">
            A full-stack salon application created with Vite, Python and SQL and tailwind. Once logged in, users have access to look at locations, stylists and services, as well as book appointments and write reviews.
            </Typography> 
            <Typography id='project-date' variant="body2">
            Published on: June 2nd, 2023
            </Typography> 
        </CardContent>
        </Card>
        </>
    )

    return (
        <div id='projects' className='bg-white'>
            <div className='flex justify-center'>
                <p className="text-transparent"> this is a filler</p>
                <p id='projects-title' className="text-darkGray opacity-75">Projects</p>
            </div>
            <div id='projects-box' className='flex justify-center'>
            <Box sx={{overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={20}>
                {projectList}
            </ImageList>
            </Box>
            </div>
            <p className='text-transparent'> this is a filler </p>
        </div>
    )
}

export default Projects