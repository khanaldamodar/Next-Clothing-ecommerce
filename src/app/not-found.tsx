import { Link } from "lucide-react";
import Image from "next/image";

export default function page(){
    return(
        <>
        <div className="flex items-center justify-center gap-40">

            <div className="flex flex-col">
                <h1 className="text-6xl font-bold leading-40">Page not Found</h1>
                <p>This page is not Available for know...</p>
                    <Link href={"/"} className="">Back to Home </Link>
            </div>
            {/* 404 Image  */}
            <div className="relative h-[500px] w-[500px]">
                <Image src="/error.png" fill alt="Page not Found" className="object-cover"/>
            </div>
        </div>
        </>
    )
}