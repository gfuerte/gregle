import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { FriendsPage } from './widgets/friends/FriendsPage'
import { HomePage } from './widgets/home/HomePage'
import { MessagesPage } from './widgets/messages/MessagesPage'
import { NavigationBar } from './widgets/nav/NavigationBar'
import { ProfilePage } from './widgets/profile/ProfilePage'

import Box from '@mui/material/Box'

function App() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#F4F2EE',
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
    )
}

export default App
