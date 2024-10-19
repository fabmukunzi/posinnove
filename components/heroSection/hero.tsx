import Image from 'next/image'
import React from 'react'
import Line from '@/components/heroSection/line/line';
import alx from '@/public/svg/alx.svg'
import ictChember from '@/public/svg/ict-chamber.svg'
import sand from '@/public/svg/sand.svg'
import hero from '@/public/svg/hero.svg'
import { Button } from '@nextui-org/button';
import talents from '@/public/svg/Group 403.svg'
import project from '@/public/svg/Group 408.svg'
import business from '@/public/svg/Group 409.svg'
import hero_mobile from '@/public/svg/hero-mobile.svg'

const Hero = () => {
  return (
      <div className='flex w-full max-sm:flex-col'>
          <div className='w-[60%] max-md:w-full md:hidden'>
              <Image className='w-full' src={hero_mobile} alt='hero section' />
          </div>
          <div className='w-[40%] max-md:w-full justify-center flex flex-col gap-8'>
              <div>
                  <h1 className='text-5xl leadin:text-2xl g-tight max-mdfont-normal'>Empowering <span className='font-semibold text-primary'>Your</span> Learning Journey with <span className='font-semibold text-primary'>Real-World Experience</span></h1>
                  <Line />
              </div>
              <p className='text-xl'>Complete projects for real companies, gain employable skills and build your professional network.</p>
              <div className='flex justify-between gap-4 w-[90%]'>
                  <Button href="https://dev.posinnove.com/login" className='text-white bg-primary w-52' size='lg'>Join as organization</Button>
                  <Button variant="bordered" href="https://form.jotform.com/241956791680570" className='bg-white w-52 border-primary text-primary' size='lg'>Get started</Button>
              </div>
              <div className='flex justify-between'>
                  <Image src={alx} alt='alx' />
                  <Image src={ictChember} alt='ictchamber' />
                  <Image src={sand} alt='sandtech' />
              </div>
          </div>
          <div className='w-[60%] max-md:w-full max-md:hidden'>
              <Image className='max-md-hidden' src={hero} alt='hero section' />
          </div>
          <div className='w-[40%] max-md:w-full md:hidden justify-between flex my-8'>
            <Image src={talents} className='w-[30%]' alt='talents' />
            <Image src={project} className='w-[30%]' alt='talents' />
            <Image src={business} className='w-[30%]' alt='talents' />
          </div>
      </div>
  )
}

export default Hero
