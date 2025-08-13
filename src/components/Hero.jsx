import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero-title', { 
      opacity: 1, 
      delay: 2, 
      y: 0, 
      duration: 1
    })

    gsap.to('#cta', { 
      opacity: 1, 
      delay: 2, 
      y: -50, 
      duration: 1
    })
  }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col '>
        <p id='hero-title' className='hero-title translate-y-20'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id = 'cta' className='flex-center flex-col opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999.</p>
      </div>

    </section>
  )
}

export default Hero