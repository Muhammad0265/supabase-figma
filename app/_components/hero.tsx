import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='mx-auto flex max-w-6xl justify-between items-center gap-2 max-lg:flex-col'>
            <div className='flex flex-col gap-2 p-3 space-x-2'>
                <div className='flex gap-2 w-full items-center mt-10'>
                    <Image src={'/assets/store.png'} width={30} height={16} alt='store' />
                    <span>Store</span>
                </div>
                <h1 className='font-space-grotesk text-5xl max-sm:text-3xl'>Store and serve any type of digital content</h1>
                <span className='text-muted-foreground text-lg mt-5 max-sm:text-sm'>
                    An open source Object store service with unlimited scalability, for any file type.
                </span>
                <span className='text-muted-foreground text-lg mt-5 max-sm:text-sm'>
                    With custom policies and permissions that are familiar and easy to implement.
                </span>
                <Button variant={'secondary'} className='mt-5 w-32 cursor-pointer'>
                    Start a project
                </Button>
            </div>
            <div className='relative w-1/1 h-96'>
                <Image src={'/assets/hero-1.png'} alt='hero' fill className='object-contain' />
            </div>
        </div>
    )
}

export default Hero