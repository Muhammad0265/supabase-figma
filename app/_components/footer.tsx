import { Github, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-5 max-lg:grid-cols-4 max-sm:grid-cols-2  max-md:grid-cols-3 justify-between gap-18 max-w-6xl mx-auto'>
            <div className='flex flex-col'>
                <Link href={'/'} className=" py-3 dark:hidden">
                    <Image src={'/assets/supabase-dark.png'} alt="logo" width={100} height={1} />
                </Link>
                <Link href={'/'} className=" py-3 dark:flex hidden">
                    <Image src={'/assets/supabase.png'} alt="logo" width={100} height={1} />
                </Link>
                <div className='flex gap-2  items-center justify-start'>
                    <Twitter />
                    <Github />
                </div>
            </div>
            <div className='flex flex-col gap-2 py-2'>
                <h1 className='font-space-grotesk text-muted-foreground'>Product</h1>
                <span>Database</span>
                <span>Authentication</span>
                <span>Storage</span>
                <span>Functions</span>
                <span>Coming soon</span>
                <span>Pricing</span>
            </div>
            <div className='flex flex-col gap-2 py-2'>
                <h1 className='font-space-grotesk text-muted-foreground'>Resources</h1>
                <span>Support</span>
                <span>Case Studies</span>
                <span>System Status</span>
                <span>Terms of service</span>
            </div>
            <div className='flex flex-col gap-2 py-2'>
                <h1 className='font-space-grotesk text-muted-foreground'>Developers</h1>
                <span>Documentation</span>
                <span>API Reference</span>
                <span>Guides</span>
            </div>
            <div className='flex flex-col gap-2 py-2'>
                <h1 className='font-space-grotesk text-muted-foreground'>Company</h1>
                <span>Blog</span>
                <span>Open Source</span>
                <span>Humans.txt</span>
                <span>Lawyers.txt</span>
            </div>
        </div>
    )
}

export default Footer