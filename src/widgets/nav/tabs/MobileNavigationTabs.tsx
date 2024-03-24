import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

export const MobileNavigationTabs = () => {
    const navigate = useNavigate()

    const onClickSettings = useCallback(() => {
        const settingsPath = `/home`
        navigate(settingsPath)
    }, [])

    return (
        <Stack direction="row">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <IconButton onClick={onClickSettings}>
                <SettingsIcon />
            </IconButton>
        </Stack>
    )
}
