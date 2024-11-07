export type LoginParams = {
    email: string,
    password: string
}

export type AuthValues = {
    user: UserType | null,
    login: (params: LoginParams) => Promise<{ success: boolean; message?: string }>
    logout: () => void
    isAuthenticated: boolean
}

export type UserType = {
    id:string,
    name:string,
    last_name: string
    email:string
}