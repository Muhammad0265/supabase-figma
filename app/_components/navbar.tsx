import { ModeToggle } from "@/components/shared/mode-toggle"
import { NavigationMenuDemo } from "@/components/shared/navigation-menu"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center gap-2">
      <div className="flex justify-center items-center space-x-8">
        <Link href={'/'} className="p-2 dark:hidden">
          <Image src={'/assets/supabase-dark.png'} alt="logo" width={100} height={1} />
        </Link>
        <Link href={'/'} className="p-2 dark:flex hidden">
          <Image src={'/assets/supabase.png'} alt="logo" width={100} height={1} />
        </Link>

        <NavigationMenuDemo />
        <ul className="flex justify-center items-center space-x-8 max-md:hidden">
          <li className="flex justify-center items-center space-x-1 cursor-pointer">
            <Link href={'/'} className="font-space-grotesk">
              Beta
            </Link>
          </li>
          <li className="flex justify-center items-center space-x-1 cursor-pointer">
            <Link href={'/'} className="font-space-grotesk">
              Price
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center space-x-2 ">
        <ModeToggle />
        <Button variant={'secondary'} size={'icon'} className="cursor-pointer hidden max-md:flex" title="Log In">
          <LogIn />
        </Button>
        <div className="flex justify-center items-center max-md:hidden gap-2">
          <Button variant={'secondary'} className="cursor-pointer">
            Start your project
          </Button>
          <Button variant={'ghost'} className="cursor-pointer">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar