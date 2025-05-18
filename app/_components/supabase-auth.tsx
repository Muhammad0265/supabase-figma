import { CodeBlock } from "@/components/shared/code-block"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const SupabaseAuth = () => {
    return (
        <div className=" mt-10 grid grid-cols-2 max-md:grid-cols-1 gap-2 p-4 mx-auto max-w-5xl">
            <div className="flex flex-col gap-2 mt-18">
                <h1 className="font-space-grotesk text-3xl">
                    Integrates natively with Supabase Auth
                </h1>
                <p className="font-space-grotesk text-muted-foreground text-sm">Using Postgres Row Level Security to create Object access rules.</p>
                <p className="font-space-grotesk text-muted-foreground text-sm">Storage Authorization is built around Postgres so that you can use any combination of SQL, Postgres functions, and even your own metadata to write policies.</p>
                <Button variant={'secondary'} className="cursor-pointer w-60 flex items-center gap-2">
                    <ArrowUpRight />
                    <span className="text-sm font-space-grotesk"> Expore documentation</span>
                </Button>
            </div>
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 w-full justify-center items-center mt-10">
                    <Button variant={'secondary'} className="cursor-pointer w-full">
                        Access  Bucket
                    </Button>
                    <Button variant={'ghost'} className="cursor-pointer text-muted-foreground ">
                        Access Folder
                    </Button>
                    <Button variant={'ghost'} className="cursor-pointer text-muted-foreground ">
                        Authenticated bucket
                    </Button>
                </div>
                <CodeBlock
                    code={`create policy "Public Access"
on storage.objects for all
using (bucket_id = 'avatars');
               `}
                    language="javascript"
                />
            </div>
        </div>
    )
}

export default SupabaseAuth