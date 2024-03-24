import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { createTheme, useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { FriendsPage } from './widgets/friends/FriendsPage'
import { HomePage } from './widgets/home/HomePage'
import { MessagesPage } from './widgets/messages/MessagesPage'
import { MobileBottomTabs } from './widgets/nav/tabs/MobileBottomTabs'
import { MobileNavigationBar } from './widgets/nav/MobileNavigationBar'
import { NavigationBar } from './widgets/nav/NavigationBar'
import { ProfilePage } from './widgets/profile/ProfilePage'

import Box from '@mui/material/Box'

const theme = createTheme({
    typography: {
        fontFamily: 'Segoe UI, sans-serif',
    },
})

function App() {
    const isMobile = useMediaQuery('(max-width:600px)')
    const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 1024px)')

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#F4F2EE',
                    overflow: 'auto',
                }}
            >
                <Router basename="/gregle">
                    {isMobile || isTablet ? <MobileNavigationBar /> : <NavigationBar />}
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/friends" element={<FriendsPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/me" element={<ProfilePage />} />
                        <Route path="/*" element={<Navigate to="/home" />} />
                    </Routes>
                    {(isMobile || isTablet) && <MobileBottomTabs />}
                </Router>
            </Box>
        </ThemeProvider>
    )
}

export default App
