import {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {
    const [windowWidth, setWindowWidth] = useState({width: window.innerWidth, height: window.innerHeight})

const detectSeze = () => {
    setWindowWidth({width: window.innerWidth, height: window.innerHeight})
}

    useEffect(() => {
        window.addEventListener('resize', detectSeze)
        return () => {
            window.removeEventListener('resize', detectSeze)
        }
    }, [windowWidth])


  return (
    <div>
        <ReactConfetti
            width={windowWidth.width}
            height={windowWidth.height}
            tweenDuration={3000}
        />
      
    </div>
  )
}


export default Confetti;

