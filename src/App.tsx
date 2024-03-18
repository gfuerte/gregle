import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { FriendsPage } from './widgets/friends/FriendsPage'
import { HomePage } from './widgets/home/HomePage'
import { MessagesPage } from './widgets/messages/MessagesPage'
import { NavigationBar } from './widgets/nav/NavigationBar'
import { ProfilePage } from './widgets/profile/ProfilePage'

import Box from '@mui/material/Box'

const theme = createTheme({
    typography: {
        fontFamily: 'Segoe UI, sans-serif',
    },
})

function App() {
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
                    <NavigationBar />
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/friends" element={<FriendsPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/me" element={<ProfilePage />} />
                        <Route path="/*" element={<Navigate to="/home" />} />
                    </Routes>
                </Router>
            </Box>
        </ThemeProvider>
    )
}

export default App
