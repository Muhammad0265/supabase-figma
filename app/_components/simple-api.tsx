import { CodeBlock } from "@/components/shared/code-block"
import { Button } from "@/components/ui/button"
import { Shuffle, Wifi } from "lucide-react"

const SimpleApi = () => {
    return (
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 p-4 mx-auto max-w-5xl">
            <div className="flex flex-col gap-2">
                <h1 className="font-space-grotesk text-3xl">
                    Simple and convenient APIs
                </h1>
                <p className="font-space-grotesk text-muted-foreground text-sm">Built from the ground-up for interoperable authentication.</p>
                <p className="font-space-grotesk text-muted-foreground text-sm">Fast and easy to implement using our powerful library clients. Asset optimization and image transformation coming soon!</p>
                <div className="grid grid-cols-2 gap-2">
                    <div className='flex flex-col gap-2 p-3'>
                        <Wifi className='text-muted-foreground' />
                        <span className='font-space-grotesk text-md '>
                            Lightning fast
                        </span>
                        <span className='font-space-grotesk  text-md mt-4 '>Thin API server layer that leverages Postgres permissions and performance.</span>
                        <Button variant={'default'} className="w-32 cursor-pointer mt-4">
                            Coming soon
                        </Button>
                    </div>
                    <div className='flex flex-col gap-2 p-3'>
                        <Shuffle className='text-muted-foreground' />
                        <span className='font-space-grotesk text-md '>
                            Lightning fast
                        </span>
                        <span className='font-space-grotesk  text-md mt-4 '>Thin API server layer that leverages Postgres permissions and performance.</span>
                        <Button variant={'default'} className="w-32 cursor-pointer mt-4">
                            Coming soon
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-2 w-full justify-center items-center mt-10">
                    <Button variant={'secondary'} size={'sm'} className="cursor-pointer">
                        File previews
                    </Button>
                    <Button variant={'ghost'} size={'sm'} className="cursor-pointer text-muted-foreground">
                        Column view
                    </Button>
                    <Button variant={'ghost'} size={'sm'} className="cursor-pointer text-muted-foreground">
                        List view
                    </Button>
                    <Button variant={'ghost'} size={'sm'} className="cursor-pointer text-muted-foreground">
                        Multi select
                    </Button>
                </div>
                <CodeBlock
                    code={`const spaceCat = event.target.files[0];
const { data, error } = await supabase
    .storage
    .from("avatars")
    .upload("cats/spacecat.png", spaceCat
    )
                   `}
                    language="javascript"
                />
            </div>
        </div>
    )
}

export default SimpleApi