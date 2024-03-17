import React, { useState, useEffect } from 'react'

interface TypewriterProps {
    text: string
    typingSpeed: number
    setInitialPostText?: ((initialText: string) => void) | undefined
}

const Typewriter = ({ text, typingSpeed, setInitialPostText }: TypewriterProps) => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, typingSpeed)

            return () => clearTimeout(timeout)
        } else {
            setInitialPostText!('')
        }
    }, [setInitialPostText, currentIndex, typingSpeed, text])

    return <span>{currentText}</span>
}

export default Typewriter
