'use client'
import Image from 'next/image'
import React from 'react'
import { Line, LineMobile } from '@/components/heroSection/line/line';
import alx from '@/public/svg/alx.svg'
import ictChember from '@/public/svg/ict-chamber.svg'
import sand from '@/public/svg/sand.svg'
import hero from '@/public/svg/hero.svg'
import { Button } from '@nextui-org/button';
import talents from '@/public/svg/Group 403.svg'
import project from '@/public/svg/Group 408.svg'
import business from '@/public/svg/Group 409.svg'
import hero_mobile from '@/public/svg/hero-mobile.svg'
import { useRouter } from 'next/navigation';
import { orgz } from '@/utils/imageUtils';

const Hero = () => {
    const router = useRouter()
    const handleClick = (link: string) => {
        if (link) {
            router.push(link)
            console.log(link);

        }
    }
    const organization1 = [
        {
            name: "SandTech",
            image: orgz.sandTech
        },
        {
            name: "ICT Chember",
            image: orgz.ICTChamber
        },
        {
            name: "Irembo",
            image: orgz.irembo
        },
        {
            name: "Umurava",
            image: orgz.umurava
        },
        {
            name: "Youth Connekt Afrika",
            image: orgz.YCA
        },
        {
            name: "EmergeHer",
            image: orgz.emergeHer
        },
    ]
    const organization = [
        {
            name: "simucubator",
            image: orgz.simicubator
        },
        {
            name: "RCA",
            image: orgz.RCA
        },
        {
            name: "Alx",
            image: orgz.alx
        },
        {
            name: "KT Radio",
            image: orgz.KTradio
        },
        {
            name: "Next Gen",
            image: orgz.nextGen
        },
        {
            name: "TVO",
            image: orgz.TVO
        },
        {
            name: "UR",
            image: orgz.UR
        },
    ]

    const orgzMobile=[
        {
            name: "SandTech",
            image: orgz.sandTech
        },
        {
            name: "ICT Chember",
            image: orgz.ICTChamber
        },
        {
            name: "Irembo",
            image: orgz.irembo
        },
        {
            name: "Umurava",
            image: orgz.umurava
        },
        {
            name: "Youth Connekt Afrika",
            image: orgz.YCA
        },
        {
            name: "EmergeHer",
            image: orgz.emergeHer
        },
        {
            name: "simucubator",
            image: orgz.simicubator
        },
        {
            name: "RCA",
            image: orgz.RCA
        },
        {
            name: "Alx",
            image: orgz.alx
        },
        {
            name: "KT Radio",
            image: orgz.KTradio
        },
        {
            name: "Next Gen",
            image: orgz.nextGen
        },
        {
            name: "TVO",
            image: orgz.TVO
        },
        {
            name: "UR",
            image: orgz.UR
        },
    ]
    return (
        <div className='flex w-full max-sm:flex-col'>
            <div className='w-[60%] max-md:w-full md:hidden'>
                <Image className='w-full' src={hero_mobile} alt='hero section' />
            </div>
            <div className='w-[40%] max-md:w-full justify-center flex flex-col gap-8'>
                <div>
                    <h1 className='mt-4 ml-2 text-3xl font-semibold max-md:text-3xl g-tight max-md'>Empowering <span className='font-semibold text-primary'>Your</span> Learning Journey with <span className='font-semibold text-primary'>Real-World Experience</span></h1>
                    <div>
                        <div className='max-md:hidden'>
                            <Line />
                        </div>
                        <div className='md:hidden'>
                            <LineMobile />
                        </div>
                    </div>
                </div>
                <p className='text-xl'>Complete projects for real companies, gain employable skills and build your professional network.</p>
                <div className='flex justify-between gap-4 w-[90%] max-md:w-full'>
                    <Button onClick={() => handleClick("https://form.jotform.com/241956791680570")} className='text-white max-md:px-14 bg-primary w-52' size='lg'>Join as organization</Button>
                    <Button onClick={() => handleClick("https://app.posinnove.com/login")} variant="bordered" className='bg-white w-52 border-primary text-primary' size='lg'>Get started</Button>
                </div>
                <h1 className="mt-4 font-bold text-center text-primary md:text-2xl">
                    Recognized by
                </h1>
                <div className='flex justify-between max-sm:hidden'>
                    {organization1.map((item) => {
                        return (
                            <Image height={40} src={item.image} alt={item.name} />
                        )
                    })}
                </div>
                <div className='flex justify-between max-sm:hidden'>
                    {organization.map((item) => {
                        return (
                            <Image height={40} src={item.image} alt={item.name} />
                        )
                    })}
                </div>
                <div className='flex flex-wrap justify-between max-sm:gap-2 max-sm:justify-center sm:hidden'>
                    {orgzMobile.map((item) => {
                        return (
                            <Image height={40} src={item.image} alt={item.name} />
                        )
                    })}
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
