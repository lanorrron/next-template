'use client'
import {createContext, useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {AuthValues, LoginParams, UserType} from "@/context/types";
import {Loader} from "@/@core/components/loader/Loader";

const defaultValueProvider: AuthValues = {
    user: null,
    login: async () => ({success: false}),
    logout: () => Promise.resolve(),
    isAuthenticated: false
}

export const AuthContext = createContext(defaultValueProvider)

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const router = useRouter()
    const [user, setUser] = useState<UserType | null>(defaultValueProvider.user)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true);
    const pathName = usePathname()

    useEffect(() => {
        const checkAuthentication = async (): Promise<void> => {
            const token = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user')
            const isAuthenticated = Boolean(token);

            if (isAuthenticated && storedUser) {
                if (pathName === '/login' || pathName === '/') {
                    router.replace('/dashboard');
                }
                setIsAuthenticated(true);
                setUser(JSON.parse(storedUser))
            } else {
                if (pathName !== '/login') {
                    router.replace('/login');
                }
                setIsAuthenticated(false);
            }
            setLoading(false);
        };

        checkAuthentication();

    }, []);
    async function login({email, password}: LoginParams): Promise<{ success: boolean, message?: string }> {
        return new Promise<{ success: boolean; message?: string }>((resolve, reject) => {
            setTimeout(() => {
                if (email === "admin@example.com" && password === "admin") {
                    const user= {id: 'user_12345', name: 'John', last_name: 'Doe', email}
                    setUser(user)
                    setIsAuthenticated(true);
                    localStorage.setItem('token', "simulated-jwt-token");
                    localStorage.setItem('user',JSON.stringify(user))
                    router.push('/dashboard');
                    resolve({success: true});
                } else {
                    reject({success: false, message: "Invalid credentials"});
                }
            }, 3000);
        }).finally(() =>
            setLoading(false));
    }

    async function logout(): Promise<void> {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        setIsAuthenticated(false);
        router.replace('/login');
    }

    if (loading) {
        return (
            <div className={'h-screen flex items-center justify-center'}>
                <Loader size={'44px'}/>
            </div>
        )

    }

    const values = {
        user,
        login,
        isAuthenticated,
        logout
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
