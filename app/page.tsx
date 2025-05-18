import { Separator } from "@/components/ui/separator"
import Hero from "./_components/hero"
import Info from "./_components/info"
import Navbar from "./_components/navbar"
import SleekDashboard from "./_components/sleek-dashboard"
import SimpleApi from "./_components/simple-api"
import SupabaseAuth from "./_components/supabase-auth"
import { Button } from "@/components/ui/button"
import Footer from "./_components/footer"

const HomePage = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <Navbar />
        <Hero />
        <Info />
        <Separator className="mt-10" />
        <SleekDashboard />
        <SimpleApi />
        <Separator className="mt-10" />
        <SupabaseAuth />
        <div className="flex py-28 flex-col items-center justify-center space-y-5 ">
          <h1 className=" text-3xl">
            Build in a weekend, scale to millions
          </h1>
          <Button variant={'secondary'} className="cursor-pointer">
            Start your project
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage