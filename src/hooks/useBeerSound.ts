import React from 'react'

const useBeerSound = () => {
    let openGlassBottleAudio = new Audio("/glass-bottle-open.mp3");

    return {
        playOpenBottleSound: () => openGlassBottleAudio.play()
    }
}

export default useBeerSound