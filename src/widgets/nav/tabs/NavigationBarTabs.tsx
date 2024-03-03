import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import Avatar from '@mui/material/Avatar'
import HomeIcon from '@mui/icons-material/Home'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import TextsmsIcon from '@mui/icons-material/Textsms'

export const NavigationBarTabs = () => {
    const [value, setValue] = React.useState('one')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    const tabSx = {
        minHeight: '20px',
        padding: '0',
        fontSize: '10px',
    }

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                <Tab icon={<HomeIcon />} label="Home" sx={tabSx} />
                <Tab icon={<PeopleAltIcon />} label="Friends" sx={tabSx} />
                <Tab icon={<TextsmsIcon />} label="Messages" sx={tabSx} />
                <Tab
                    icon={
                        <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24, bgcolor: 'blue' }}>
                            G
                        </Avatar>
                    }
                    label="Me"
                    sx={tabSx}
                />
            </Tabs>
        </Box>
    )
}
