import React, { Fragment } from 'react'
import { NavigationBar } from './widgets/nav/NavigationBar'

import Box from '@mui/material/Box'

function App() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#F4F2EE',
            }}
        >
            <NavigationBar />
        </Box>
    )
}

export default App
