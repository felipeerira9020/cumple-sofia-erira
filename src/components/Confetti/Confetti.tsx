import {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {
    const [windowWidth, setWindowWidth] = useState({width: window.innerWidth, height: window.innerHeight})
    const [confeti, setConfeti] = useState(true)


const detectSeze = () => {
    setWindowWidth({width: window.innerWidth, height: window.innerHeight})
}

    useEffect(() => {
        window.addEventListener('resize', detectSeze)
        return () => {
            window.removeEventListener('resize', detectSeze)
        }
    }, [windowWidth])


    //que setConefi se pase a false a los 3 segundos
    useEffect(() => {
        setTimeout(() => {
            setConfeti(false)
        }, 7000)
    }, [])



  return (
    <div>
        {/* <ReactConfetti
            width={windowWidth.width}
            height={windowWidth.height}
            tweenDuration={3000}
        /> */}

       {
           confeti ? 
           <ReactConfetti
            width={windowWidth.width}
            height={windowWidth.height}
            tweenDuration={3000}
        />  : <></>


           }
   

      
    </div>
  )
}


export default Confetti;

