'use client'
import Input from "@/components/ui/input";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BiSolidShow} from "react-icons/bi";
import {IoIosEyeOff} from "react-icons/io";
import {useContext, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {AuthContext} from "@/context/auth-context";
import {LoginParams} from "@/context/types";
import {Loader} from "@/@core/components/loader/Loader";
import {SiTailwindcss} from "react-icons/si";
import Typography from "@/@core/components/typography";
import Image from 'next/image';
import Link from "next/link";


interface ErrorType {
    success: boolean
    message: string;
}

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('admin@example.com')
    const [password, setPassword] = useState<string>('admin')
    const {login} = useContext(AuthContext)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<ErrorType | null>(null)

    function togglePasswordVisibility(e: React.MouseEvent) {
        e.stopPropagation()
        e.preventDefault()
        setShowPassword(prev => !prev)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        const params: LoginParams = {email, password};
        await login(params)
            .catch(error => {
                setError(error)
            })
            .finally(() =>
                setLoading(false))
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
                                Welcome to hello world! 👋
                            </Typography>
                            <Typography variant={'body1'} className={'text-foreground'}>
                                Please log in to explore all functions
                            </Typography>
                            <Card className={'bg-primary/15 border-none p-2 mt-4'}>
                                <Typography variant={'body2'} className={'text-primary'}>Email: admin@example.com /
                                    Pass: admin</Typography>
                            </Card>
                        </div>

                        <form onSubmit={handleSubmit}
                              className={' flex flex-col justify-center items-center w-full gap-4 px-8  md:w-full max-w-md mx-auto'}>
                            <Input type={'email'} label={'Email'} value={email} error={!!error}
                                   errorMessage={error?.message}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></Input>
                            <Input type={showPassword ? 'text' : 'password'} label={'Password'} value={password}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                   icon={!showPassword ? <BiSolidShow onClick={(e) => togglePasswordVisibility(e)}/> :
                                       <IoIosEyeOff onClick={(e) => togglePasswordVisibility(e)}/>}></Input>
                            <div className={'flex items-center justify-between w-full m-3'}>
                                <div className="flex items-center gap-2">
                                    <Checkbox className={'mt-[2px]'}/>
                                    <span>Remember me</span>
                                </div>
                                <Link href={'/forgot-password'} className="text-primary">Forgot password?</Link>
                            </div>
                            <Button type={'submit'} className={'w-full'} disabled={loading}> {loading ?
                                <Loader color={'text-primary-foreground'} size={'24px'}/> : 'Log In'}</Button>
                            <div className={'justify-center'}>
                                <span>New on our platform?</span>
                                <Link href={'/register'} className={'text-primary'}> Create an account</Link>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </div>


    )
}
export default Login