import { ChartNoAxesColumnIncreasing, SquareCheckBig, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Info = () => {
    return (
        <div className='grid grid-cols-3 max-sm:grid-cols-2 max-w-5xl items-center justify-center gap-4 mx-auto'>
            <div className='flex flex-col gap-2 p-3'>
                <div className='flex justify-start items-center gap-2'>
                    <Image src={'/assets/trash.png'} alt='trash' width={32} height={32} className='border rounded-lg' />
                    <X className='text-muted-foreground' size={18} />
                    <Image src={'/assets/key.png'} alt='trash' width={32} height={32} className='border rounded-lg' />
                    <X className='text-muted-foreground' size={18} />
                    <Image src={'/assets/burger.png'} alt='trash' width={32} height={32} className='border rounded-lg' />
                </div>
                <span className='font-space-grotesk text-md '>
                    Interoperable
                </span>
                <span className='font-space-grotesk text-md mt-4 '>Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.</span>
            </div>
            <div className='flex flex-col gap-2 p-3'>
                <ChartNoAxesColumnIncreasing className='text-muted-foreground' />
                <span className='font-space-grotesk text-md '>
                    Lightning fast
                </span>
                <span className='font-space-grotesk  text-md mt-4 '>Thin API server layer that leverages Postgres permissions and performance.</span>
            </div>
            <div className='flex flex-col gap-2 p-3'>
                <SquareCheckBig className='text-muted-foreground' />
                <span className='font-space-grotesk text-md '>
                    Lightning fast
                </span>
                <span className='font-space-grotesk  text-md mt-4 '>Thin API server layer that leverages Postgres permissions and performance.</span>
            </div>
        </div>
    )
}

export default Info