import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { hightlightsSlides } from '../constants';
import { playImg, pauseImg, replayImg } from '../utils';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {

    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);
    const {isEnd, isLastVideo, startPlay, videoId, isPlaying} = video;

    useGSAP (() => {
        gsap.to('#slider', {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: 'power2.inOut',
        })
        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none',
            },
            onComplete: () => {
                setVideo((prev) => ({...prev, startPlay: true, isPlaying: true}))
            }
        })
    }, [isEnd, videoId]);

    useEffect(() => {
        if(loadedData.length > 3) {
            if(!isPlaying) {
                videoRef.current[videoId].pause();
            }else{
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);

    const handleLoadedMetadata = (i, e) => setLoadedData((prev) => [...prev, e])


    useEffect(() => {
        // Reset all indicators to default state
        videoDivRef.current.forEach((el, index) => {
            if (el) {
                gsap.to(el, {
                    width: '0.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#9ca3af',
                    duration: 0.3
                });
            }
        });

        // Reset all progress bars
        videoSpanRef.current.forEach((el) => {
            if (el) {
                gsap.to(el, {
                    width: '0%',
                    duration: 0.3
                });
            }
        });

        // Set active indicator
        if (videoDivRef.current[videoId]) {
            gsap.to(videoDivRef.current[videoId], {
                width: window.innerWidth < 760
                    ? "10vw" // mobile
                    : window.innerWidth < 1200
                        ? "10vw" // tablet
                        : "4vw", // laptop
                borderRadius: '12px',
                backgroundColor: '#424242',
                duration: 0.3
            });
        }
    }, [videoId]);

    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            // animation to move the indicator
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    // get the progress of the video
                    const progress = Math.ceil(anim.progress() * 100);

                    if (progress != currentProgress) {
                        currentProgress = progress;

                        // set the width of the progress bar
                        gsap.to(videoDivRef.current[videoId], {
                            width: window.innerWidth < 760
                                ? "10vw" // mobile
                                : window.innerWidth < 1200
                                    ? "10vw" // tablet
                                    : "4vw", // laptop
                        });

                        // set the background color of the progress bar
                        gsap.to(span[videoId], {
                            width: `${currentProgress}%`,
                            backgroundColor: "white",
                            borderRadius: "12px",
                        });
                    }
                },

                // when the video is ended, replace the progress bar with the indicator and change the background color
                onComplete: () => {
                    if (isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: "12px",
                            borderRadius: "50%",
                        });
                        gsap.to(span[videoId], {
                            backgroundColor: "#afafaf",
                            borderRadius: "50%",
                        });
                    }
                },
            });

            if (videoId == 0) {
                anim.restart();
            }

            // update the progress bar
            const animUpdate = () => {
                anim.progress(
                    videoRef.current[videoId].currentTime /
                        hightlightsSlides[videoId].videoDuration
                );
            };

            if (isPlaying) {
                // ticker to update the progress bar
                gsap.ticker.add(animUpdate);
            } else {
                // remove the ticker when the video is paused (progress bar is stopped)
                gsap.ticker.remove(animUpdate);
            }
        }
    }, [videoId, startPlay]);

    const handleProcess = (type, i) => {
        switch(type) {
            case 'video-end': 
                setVideo((prev) => ({...prev, isEnd: true, videoId: i+1}))
                break;
            case 'video-last': 
                setVideo((prev) => ({...prev, isLastVideo: true}))
                break;
            case 'video-reset': 
                setVideo((prev) => ({...prev, videoId: 0, isLastVideo: false}))
                break;
            case 'pause': 
                setVideo((prev) => ({...prev, isPlaying: !prev.isPlaying}))
                break;
            case 'play': 
                setVideo((prev) => ({...prev, isPlaying: !prev.isPlaying}))
                break;
            default: 
                return video;
        }
    }

  return (
    <>
        <div className='video-slider-container'>
            {hightlightsSlides.map((list, i) => (
                <div key={list.id} id='slider' className='slider-padding'>
                    <div className='video-carousel_container'>
                        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                            <video 
                                id='video' 
                                playsInline={true} 
                                muted 
                                className={`${i === 2 && 'translate-x-44'} pointer-events-none`}
                                preload='auto' 
                                ref={(el) => videoRef.current[i] = el}
                                onEnded={() => {
                                    i !== 3 ? handleProcess('video-end', i) : handleProcess('video-last')
                                }}
                                onPlay={() => {
                                    setVideo((prevVideo) => ({
                                        ...prevVideo,
                                        isPlaying: true,
                                    }));
                                }}
                                onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                            >
                                <source src={list.video} type='video/mp4' />
                            </video>
                        </div>

                        <div className='absolute top-12 left-[5%] z-10'>
                            {list.textLists.map((text, i) => (
                               <p key={i} className='md:text-2xl text-xl font-medium text-white'>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='video-controls-container'>
            <div className='video-controls-buttons'>
                {videoRef.current.map((_, i) => (
                    <span
                        key={i}
                        ref={(el) => (videoDivRef.current[i] = el)}
                        className={`video-indicator ${i === videoId ? 'active' : ''}`}
                    >
                        <span 
                            className='video-progress' 
                            ref={(el) => (videoSpanRef.current[i] = el)}
                        />
                    </span>
                ))}
            </div>

            <button className="control-btn">
                <img
                    src={isLastVideo ? replayImg : 
                        !isPlaying ? playImg : pauseImg}
                    alt={isLastVideo ? 'replay' : 
                        !isPlaying? 'play' : 'pause'}
                    onClick={() => {
                        if (isLastVideo) {
                            handleProcess('video-reset');
                        } else if (!isPlaying) {
                            handleProcess('play');
                        } else {
                            handleProcess('pause');
                        }
                    }}
                />
            </button>
        </div>
    </>
    )
}


export default VideoCarousel