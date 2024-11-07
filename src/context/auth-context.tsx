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
    const [user, setUser] = useState<UserType | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true);
    const pathName = usePathname()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            if (pathName === '/login' || (token && pathName === '/'))
                router.replace('/dashboard');
            else setLoading(false);
        } else {
            if ((pathName === '/login' && !token) || (!token && pathName === '/'))
                router.replace('/login');
        }
        setLoading(false)
    }, [router, pathName]);

    async function login({email, password}: LoginParams): Promise<{ success: boolean, message?: string }> {
        return new Promise<{success: boolean; message?: string}>((resolve, reject) => {
            setTimeout(() => {
                if (email === "admin@example.com" && password === "admin") {
                    setUser({id: 'user_12345', name: 'Jhon', last_name: 'Doe', email})
                    setIsAuthenticated(true);
                    localStorage.setItem('token', "simulated-jwt-token");
                    router.push('/dashboard');
                    resolve({success: true});
                } else {
                    reject({success: false, message: "Invalid credentials"});
                }
            }, 3000);
        }).finally(() =>
            setLoading(false));
    }

    function logout() {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('token');
        router.push('/login')
    }

    if (loading) {
        return <Loader size={'44px'}/>;  // Mostrar pantalla de carga
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
