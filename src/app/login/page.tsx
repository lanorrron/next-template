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


interface ErrorType {
    success: boolean
    message: string;
}
const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('test@example.com')
    const [password, setPassword] = useState<string>('password123')
    const {login} = useContext(AuthContext)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState< ErrorType | null>(null)

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
            <div className="hidden md:flex w-full">Hijo 1</div>
            <div className="w-full md:w-[450px] flex-none flex justify-end items-end">
                <Card className={'flex h-screen w-full rounded-none border-none shadow'}>
                    <form onSubmit={handleSubmit}
                          className={' flex flex-col justify-center items-center w-full gap-4 px-8  md:w-full max-w-md mx-auto mt-20'}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam
                            assumenda
                            beatae consectetur cum doloremque ex illo, ipsam nemo optio provident quas repudiandae
                            similique sunt ullam veniam veritatis.
                        </div>
                        <Input type={'email'} label={'Email'} value={email} error={!!error} errorMessage={error?.message}
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
                            <span className="text-primary">Forgot password?</span>
                        </div>
                        <Button type={'submit'} className={'w-full'} disabled={loading}> {loading?<Loader color={'text-primary-foreground'}/>:'Log In'}</Button>
                        <div className={'justify-center'}>
                            <span>New on our platform?</span>
                            <span className={'text-primary'}> Create an account</span>
                        </div>
                    </form>

                </Card>
            </div>
        </div>


    )
}
export default Login