import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const SleekDashboard = () => {
    return (
        <div className="flex flex-col gap-2  max-w-5xl pt-10 p-4">
            <h1 className="font-space-grotesk text-4xl">Sleek dashboard for managing your media</h1>
            <span className="text-muted-foreground font-space-grotesk text-md mt-5">A complete Object Explorer so that any of your team can use.</span>
            <h1 className="text-muted-foreground font-space-grotesk text-md">Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</h1>
            <div className="grid grid-cols-2  max-lg:grid-cols-1">
                <div className="flex flex-col ">
                    <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-2 w-full justify-center items-center mt-10">
                        <Button variant={'secondary'} size={'sm'} className="cursor-pointer">
                            Upload a file
                        </Button>
                        <Button variant={'ghost'} size={'sm'} className="cursor-pointer text-muted-foreground">
                            Download a file
                        </Button>
                        <Button variant={'ghost'} size={'sm'} className="cursor-pointer text-muted-foreground">
                            List files
                        </Button>
                        <Button variant={'ghost'} size={'sm'} className="cursor-pointer text-muted-foreground">
                            Move and rename files
                        </Button>
                    </div>
                    <div className="relative w-full h-96 max-sm:h-60 mt-4">
                        <Image src={'/assets/seek.jpg'} alt="seek" fill className="object-contain" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-10 px-5 py-1">
                    <h1 className="font-space-grotesk text-xl">File previews</h1>
                    <p>Preview any media type, including video and audio.</p>
                    <span className="mt-5 font-space-grotesk text-xl">
                        Check out our example app
                    </span>
                    <div className=" w-full border flex flex-col item-start justify-between gap-2 dark:bg-[#181818] bg-[#fafafa] rounded-lg p-4 space-y-5">
                        <span className="font-space-grotesk ">Profile management example</span>
                        <span className="font-space-grotesk text-sm">
                            Update a user account with public profile information, including uploading a profile image.
                        </span>
                        <div className="flex gap-2 items-center ">
                            <span className="font-montserrat"> Created by: </span>
                            <Image src={'/assets/logo-sup.png'} alt="logo" width={24} height={24} className="object-cover rounded-full border" />supabase
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 space-y-2.5">
                        <h2 className="font-space-grotesk">nextjs-ts-user-management</h2>
                        <Button variant={'default'} className="w-32 cursor-pointer">
                            Deploy
                        </Button>
                    </div>
                    <Separator />
                </div>
            </div>
        </div>
    )
}

export default SleekDashboard