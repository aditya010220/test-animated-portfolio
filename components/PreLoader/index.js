import React, { useEffect, useState } from 'react'

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty('--scrollBarWidth', '8px');
            handleLoader(false)
        }, 3000)
    }, [])

    return (
        <div className={`ai-pre-loader ${loader ? 'ai-pre-loader-enabled' : 'ai-pre-loader-disabled'}`}>
            <div className='ai-pre-loader-boarder' />
            <div className='ai-pre-loader-container'>
                <div className='ai-welcome-content'>
                    <h1 className='ai-welcome-title'>Welcome to my</h1>
                    <h2 className='ai-welcome-subtitle'>CursedWorld</h2>
                    <div className='ai-welcome-divider'></div>
                    <p className='ai-welcome-tagline'>Explore my creative journey</p>
                </div>
            </div>
        </div>
    )
}

PreLoader.propTypes = {}

export default PreLoader
