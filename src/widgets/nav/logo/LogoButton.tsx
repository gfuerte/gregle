import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import image from '../../../assets/gregle.png'

import Button from '@mui/material/Button'

export const LogoButton = () => {
    const navigate = useNavigate()

    const handleButtonClick = (event: React.SyntheticEvent) => {
        navigate('/gregle/home')
    }

    const isMobile = useMediaQuery('(max-width:600px)')
    const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 1024px)')

    return (
        <Button onClick={handleButtonClick}>
            <img src={image} alt="Gregle logo" height={isMobile || isTablet ? '25' : '35'} width={isMobile || isTablet ? '75' : '110'} />
        </Button>
    )
}
