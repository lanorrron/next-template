'use client'
import Typography from "@/@core/components/typography";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound() {

    return (
        <div className={'flex flex-col justify-center items-center min-h-screen gap-2'}>
            <Typography variant={'h1'}>
                404
            </Typography>
            <Typography variant={'h3'}>
                Page Not Found
            </Typography>
            <Link href={'/dashboard'}>
                <Button>
                    return home
                </Button>
            </Link>

        </div>
    )
}