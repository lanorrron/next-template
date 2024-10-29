export type LoginParams = {
    email: string,
    password: string
}

export type AuthValues = {
    user: any,
    login: (params: LoginParams) => Promise<{ success: boolean; message?: string }>
    logout: () => void
    isAuthenticated: boolean
}
