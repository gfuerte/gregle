import React, { Fragment } from 'react'
import { NavigationBar } from './widgets/nav/NavigationBar'

import Container from '@mui/material/Container'

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
            <NavigationBar />
        </Box>
    )
}

export default App
