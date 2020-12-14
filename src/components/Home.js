
import React, { useState, Component } from 'react'
import ParticlesBg from 'particles-bg'
import Trail from './Trail'
import {useSpring, animated} from 'react-spring'

export default function Home() {

    const props = useSpring({
        to: {opacity: 1, color: 'red'}
    ,
        from:{opacity: 0, color: 'black'}
      })
    const [open, set] = useState(true)
    const props1 = useSpring(
      {
          from: {marginLeft: -900},
          to: {marginLeft: 260} ,
      })

    return (
        <div style={{marginTop: 140}}>
        <Trail open={open} onClick={() => set((state) => !state)}>
                    <span>Shehla Mushtaq</span>
                    {/* <span>Shehla</span>
                    <span>Mushtaq</span> */}
        </Trail>
      
      <div>
            <animated.h3 style={props1}>I am a web development engineer and I use react to develop pages. This project is a resume template that can be used as the project home page or resume page.</animated.h3>
            
            </div>
        <ParticlesBg color="#B79898" num={100} type="cobweb" bg={true} style={{backgroundColor: 'black'}} />
             
        </div>
    )
}
