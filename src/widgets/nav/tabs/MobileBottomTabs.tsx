import React from 'react'
import { LogoButton } from '../logo/LogoButton'
import { MobileNavigationTabs } from './MobileNavigationTabs'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import HomeIcon from '@mui/icons-material/Home'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextsmsIcon from '@mui/icons-material/Textsms'
import Typography from '@mui/material/Typography'

export const MobileBottomTabs = () => {
    const navigate = useNavigate()
    const [currentTab, setCurrentTab] = React.useState('home')

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue)
        const newPath = `/${newValue}`
        navigate(newPath)
    }

    const tabSx = {
        minHeight: '10px',
        padding: '0',
        fontSize: '10px',
        textTransform: 'none',
        minWidth: '10px',
    }

    return (
        <Box height={45} display="flex" position="fixed" bottom={0}>
            <Paper sx={{ width: '100vw' }}>
                <Container maxWidth="lg">
                    <Tabs value={currentTab} onChange={handleTabChange} variant="fullWidth" sx={{ paddingTop: 0.25 }}>
                        <Tab icon={<HomeIcon />} label="Home" value="home" sx={tabSx} />
                        <Tab icon={<PeopleAltIcon />} label="Friends" value="friends" sx={tabSx} />
                        <Tab icon={<TextsmsIcon />} label="Messages" value="messages" sx={tabSx} />
                        <Tab
                            icon={
                                <Avatar alt="Gregle Avatar" sx={{ width: 24, height: 24, bgcolor: 'blue' }}>
                                    <Typography>G</Typography>
                                </Avatar>
                            }
                            label="Me"
                            value="me"
                            sx={tabSx}
                        />
                    </Tabs>
                </Container>
            </Paper>
        </Box>
    )
}
