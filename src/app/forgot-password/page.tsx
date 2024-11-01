'use client'
import Input from "@/components/ui/input";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { useState} from "react";
import {SiTailwindcss} from "react-icons/si";
import Typography from "@/@core/components/typography";
import Image from 'next/image';
import Link from "next/link";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
    }

    return (
        <div className="flex h-screen">
            <div className={'fixed top-4 left-6 flex items-center gap-x-2 z-10'}>
                <SiTailwindcss className={'text-primary text-4xl'}/>
                <Typography variant={'h4'}> Hello world!</Typography>
            </div>
            <div className="hidden md:flex w-full">
                <div className={'flex justify-center items-center w-full h-full'}>
                    <Image
                        src="/avatars/admin-2.png"
                        alt="Admin Avatar"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="w-full md:w-[450px] flex-none flex justify-end items-end">
                <Card
                    className={'flex h-screen w-full rounded-none border-none shadow flex-col justify-center items-center gap-4'}>
                    <div>
                        <div className={'flex px-8 flex-col justify-center mb-4'}>
                            <Typography variant={'h2'} className={'text-foreground'}>
                               Forgot Password 🔒
                            </Typography>
                            <Typography variant={'body1'} className={'text-foreground'}>
                                Enter your email and you will receive a link to reset your password
                            </Typography>
                        </div>
                        <form onSubmit={handleSubmit}
                              className={' flex flex-col justify-center items-center w-full gap-4 px-8  md:w-full max-w-md mx-auto'}>

                            <Input type={'email'} label={'Email'} value={email}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></Input>
                            <Button type={'submit'} className={'w-full'}> Send link to email</Button>
                            <div className={'justify-center'}>
                                <Link href={'/login'} className={'text-primary'}> { <span className={'font-bold mr-1'}>{'<'}</span>}  Back to login</Link>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </div>


    )
}
export default ForgotPassword