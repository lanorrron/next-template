
export type UserType ={
    id: number;
    email: string;
    status: "active" | "pending" | "inactive";
    avatar: string;
    names: string;
    role: "admin" | "editor" | "subscriber";
    first_name: string;
    last_name: string;
    country: string;
    direction: string;
    phone_number: string;
    date_of_birth: string;
}

export interface PaginationResponse {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPage: number;
    items: UserType[]
}