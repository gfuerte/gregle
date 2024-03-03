import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextsmsIcon from '@mui/icons-material/Textsms'

import Button from '@mui/material/Button'

export const NavigationBarTabs = () => {
    const navigate = useNavigate()
    const [currentTab, setCurrentTab] = React.useState('home')

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue)
        const newPath = `/${newValue}`
        navigate(newPath)
    }

    const tabSx = {
        minHeight: '20px',
        padding: '0',
        fontSize: '10px',
    }

    return (
        <Box>
            <Tabs value={currentTab} onChange={handleTabChange} aria-label="wrapped label tabs example">
                <Tab icon={<HomeIcon />} label="Home" value="home" sx={tabSx} />
                <Tab icon={<PeopleAltIcon />} label="Friends" value="friends" sx={tabSx} />
                <Tab icon={<TextsmsIcon />} label="Messages" value="messages" sx={tabSx} />
                <Tab
                    icon={
                        <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24, bgcolor: 'blue' }}>
                            G
                        </Avatar>
                    }
                    label="Me"
                    value="me"
                    sx={tabSx}
                />
            </Tabs>
        </Box>
    )
}
