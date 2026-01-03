import React, { useEffect } from 'react'

const consoleMyName = () => {
    console.log(`By CursedMen and Credit to Afzal for the Inspiration`)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
