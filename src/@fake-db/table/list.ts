import {PaginationResponse, UserType} from "@/@fake-db/types";

const mockUsers: UserType[] = [
    {
        id: 1,
        email: "user1@example.com",
        status: "active",
        avatar: "",
        names: "John Doe",
        role: "admin",
        first_name: "John",
        last_name: "Doe"
    },
    {
        id: 2,
        email: "user2@example.com",
        status: "pending",
        avatar: "",
        names: "Jane Smith",
        role: "editor",
        first_name: "Jane",
        last_name: "Smith"
    },
    {
        id: 3,
        email: "user3@example.com",
        status: "active",
        avatar: "",
        names: "Mike Johnson",
        role: "subscriber",
        first_name: "Mike",
        last_name: "Johnson"
    },
    {
        id: 4,
        email: "user4@example.com",
        status: "active",
        avatar: "",
        names: "Emily Davis",
        role: "admin",
        first_name: "Emily",
        last_name: "Davis"
    },
    {
        id: 5,
        email: "user5@example.com",
        status: "inactive",
        avatar: "",
        names: "Robert Brown",
        role: "subscriber",
        first_name: "Robert",
        last_name: "Brown"
    },
    {
        id: 6,
        email: "user6@example.com",
        status: "pending",
        avatar: "",
        names: "Laura Wilson",
        role: "editor",
        first_name: "Laura",
        last_name: "Wilson"
    },
    {
        id: 7,
        email: "user7@example.com",
        status: "active",
        avatar: "",
        names: "Chris Miller",
        role: "subscriber",
        first_name: "Chris",
        last_name: "Miller"
    },
    {
        id: 8,
        email: "user8@example.com",
        status: "inactive",
        avatar: "",
        names: "Sarah Moore",
        role: "editor",
        first_name: "Sarah",
        last_name: "Moore"
    },
    {
        id: 9,
        email: "user9@example.com",
        status: "active",
        avatar: "",
        names: "David Taylor",
        role: "admin",
        first_name: "David",
        last_name: "Taylor"
    },
    {
        id: 10,
        email: "user10@example.com",
        status: "pending",
        avatar: "",
        names: "Olivia Anderson",
        role: "subscriber",
        first_name: "Olivia",
        last_name: "Anderson"
    },
    {
        id: 11,
        email: "user11@example.com",
        status: "pending",
        avatar: "",
        names: "Daniel Thomas",
        role: "editor",
        first_name: "Daniel",
        last_name: "Thomas"
    },
    {
        id: 12,
        email: "user12@example.com",
        status: "active",
        avatar: "",
        names: "Sophia Martinez",
        role: "subscriber",
        first_name: "Sophia",
        last_name: "Martinez"
    },
    {
        id: 13,
        email: "user13@example.com",
        status: "inactive",
        avatar: "",
        names: "Matthew Jackson",
        role: "admin",
        first_name: "Matthew",
        last_name: "Jackson"
    },
    {
        id: 14,
        email: "user14@example.com",
        status: "active",
        avatar: "",
        names: "Emma White",
        role: "editor",
        first_name: "Emma",
        last_name: "White"
    },
    {
        id: 15,
        email: "user15@example.com",
        status: "pending",
        avatar: "",
        names: "James Harris",
        role: "subscriber",
        first_name: "James",
        last_name: "Harris"
    },
    {
        id: 16,
        email: "user16@example.com",
        status: "active",
        avatar: "",
        names: "Mia Clark",
        role: "admin",
        first_name: "Mia",
        last_name: "Clark"
    },
    {
        id: 17,
        email: "user17@example.com",
        status: "pending",
        avatar: "",
        names: "Lucas Lewis",
        role: "subscriber",
        first_name: "Lucas",
        last_name: "Lewis"
    },
    {
        id: 18,
        email: "user18@example.com",
        status: "inactive",
        avatar: "",
        names: "Amelia Young",
        role: "editor",
        first_name: "Amelia",
        last_name: "Young"
    },
    {
        id: 19,
        email: "user19@example.com",
        status: "active",
        avatar: "",
        names: "Ethan Walker",
        role: "subscriber",
        first_name: "Ethan",
        last_name: "Walker"
    },
    {
        id: 20,
        email: "user20@example.com",
        status: "inactive",
        avatar: "",
        names: "Isabella Hall",
        role: "admin",
        first_name: "Isabella",
        last_name: "Hall"
    }
];

interface GetMockUserParams {
    search?: Record<string, string>;
    page?: number;
    pageSize?: number;
}

export function getMockUsers(params?: GetMockUserParams): PaginationResponse {

    const {search = {}, page = params?.page?? 1, pageSize = params?.pageSize?? 10} = params || {};

    const filteredUsers = mockUsers.filter((user) => {
        return Object.keys(search).every((key) => {
            const searchValue = search[key].trim()
            if (!searchValue) return true
            const value = user[key as keyof UserType]?.toString().toLowerCase() || '';

            return value.includes(search[key].toLowerCase());
        });
    });

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return {
        pageSize: pageSize ?? 10,
        currentPage: page ?? 1,
        totalPage: Math.ceil(filteredUsers.length / pageSize),
        totalItems: filteredUsers.length,
        items: paginatedUsers
    }
}

export async function deleteUser(id: number, params?: GetMockUserParams): Promise<PaginationResponse> {
    const userIndex = mockUsers.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        mockUsers.splice(userIndex, 1);
    }

    return getMockUsers(params);
}