'use client'
import Input from "@/components/ui/input";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BiSolidShow} from "react-icons/bi";
import {IoIosEyeOff} from "react-icons/io";
import { useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {SiTailwindcss} from "react-icons/si";
import Typography from "@/@core/components/typography";
import Image from 'next/image';
import Link from "next/link";

const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    function togglePasswordVisibility(e: React.MouseEvent) {
        e.stopPropagation()
        e.preventDefault()
        setShowPassword(prev => !prev)
    }

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
                        src="/pages/admin-2.png"
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
                                Explore without limits! 🌍
                            </Typography>
                            <Typography variant={'body1'} className={'text-foreground'}>
                                Access all the tools to manage your platform.
                            </Typography>

                        </div>
                        <form onSubmit={handleSubmit}
                              className={' flex flex-col justify-center items-center w-full gap-4 px-8  md:w-full max-w-md mx-auto'}>
                            <Input value={userName} label={'Username'}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>
                            <Input type={'email'} label={'Email'} value={email}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></Input>
                            <Input type={showPassword ? 'text' : 'password'} label={'Password'} value={password}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                   icon={!showPassword ? <BiSolidShow onClick={(e) => togglePasswordVisibility(e)}/> :
                                       <IoIosEyeOff onClick={(e) => togglePasswordVisibility(e)}/>}></Input>
                            <div className={'flex items-center w-full m-3 space-x-2'}>
                                <div className="flex items-center gap-2">
                                    <Checkbox className={'mt-[2px]'}/>
                                    <span>I agree to</span>
                                </div>
                                <span className="text-primary cursor-pointer">privacy policy & terms</span>
                            </div>
                            <Button type={'submit'} className={'w-full'}> Sing up</Button>
                            <div className={'justify-center'}>
                                <span>Already have an account?</span>
                                <Link href={'/login'} className={'text-primary'}> Sign in instead</Link>
                            </div>
                        </form>
                    </div>


                </Card>
            </div>
        </div>


    )
}
export default Register