import React from 'react'
import image from '/assets/portfolioImage.jpeg'

const Intro = () => {
    return (
        <div className='flex items-center flex-col md:flex-row justify-around pt-20 pb-6'>
            <div className='flex flex-col'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Martin</h1>
            <p className='text-base md_text-xl mb-3 font-medium'>Full Stack Developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                Hello, I'm Martin, a dedicated web developer specializing in React and React Native. I'm passionate about creating visually compelling and functionally efficient websites and apps. My expertise spans across designing responsive sites and building cross-platform apps, ensuring seamless functionality across all devices. I thrive in problem-solving, constantly learning new tools and techniques to remain at the forefront of the digital world. </p>
            </div>
            <img className='rounded-full max-w-[30%]' src={image} />
        </div>
    )
}

export default Intro;