
export type UserType ={
    id: number;
    email: string;
    status: 'active' | 'pending' | 'inactive';
    avatar: string;
    names: string;
    role: string;
    first_name: string;
    last_name: string;
}

export interface PaginationResponse {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPage: number;
    items: UserType[]
}