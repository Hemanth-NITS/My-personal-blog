import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="Hemanth" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h3 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            I'm Hemanth!
            </h3>
            <p className='font-medium mt-4 text-base'>
            currently &nbsp;pursuing &nbsp;B.Tech &nbsp; in &nbsp;computer science and engineering (CSE) &nbsp;from &nbsp;one &nbsp;of &nbsp;the &nbsp;top &nbsp;NIT &nbsp;in &nbsp;India, &nbsp;Here &nbsp;is &nbsp;my &nbsp;<a href="https://drive.google.com/file/d/1AnI8RYjV8eem5Q658WIqw5zj4T8swtWg/view?usp=sharing" target="_blank" style={{color: 'blue', textDecoration: 'underline', backgroundColor: 'yellow'}}> Resume</a>.
            I&nbsp;am&nbsp;passionate &nbsp;about &nbsp;learning &nbsp;new &nbsp;technologies &nbsp;and &nbsp;building &nbsp;projects. I &nbsp;am &nbsp;a &nbsp;quick&nbsp; learner&nbsp; and&nbsp; a&nbsp; team&nbsp; player. &nbsp;<span style={{fontWeight: 'bold', backgroundColor: 'yellow'}}>Winners</span>&nbsp; of&nbsp; NITS&nbsp; Hacks-7.o &nbsp;which&nbsp; is&nbsp; considred&nbsp; as&nbsp; one&nbsp; of&nbsp; the&nbsp; biggest&nbsp; hackathons &nbsp;in&nbsp; India. &nbsp;Here &nbsp;are&nbsp; some my &nbsp;skills &nbsp;<span style={{fontSize: '1.2rem'}}>👇👇👇</span>.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection