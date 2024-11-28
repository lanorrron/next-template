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
        last_name: "Doe",
        country: "USA",
        direction: "123 Main St, Springfield, USA",
        phone_number: "+1 555-1234",
        date_of_birth: "1985-06-15"
    },
    {
        id: 2,
        email: "user2@example.com",
        status: "pending",
        avatar: "",
        names: "Jane Smith",
        role: "editor",
        first_name: "Jane",
        last_name: "Smith",
        country: "Canada",
        direction: "456 Maple Ave, Toronto, Canada",
        phone_number: "+1 555-5678",
        date_of_birth: "1990-07-22"
    },
    {
        id: 3,
        email: "user3@example.com",
        status: "active",
        avatar: "/avatars/man-3.jpg",
        names: "Mike Johnson",
        role: "subscriber",
        first_name: "Mike",
        last_name: "Johnson",
        country: "USA",
        direction: "789 Elm St, Seattle, USA",
        phone_number: "+1 555-9012",
        date_of_birth: "1988-04-10"
    },
    {
        id: 4,
        email: "user4@example.com",
        status: "active",
        avatar: "",
        names: "Emily Davis",
        role: "admin",
        first_name: "Emily",
        last_name: "Davis",
        country: "UK",
        direction: "10 Downing St, London, UK",
        phone_number: "+44 20 7946 0958",
        date_of_birth: "1992-12-05"
    },
    {
        id: 5,
        email: "user5@example.com",
        status: "inactive",
        avatar: "",
        names: "Robert Brown",
        role: "subscriber",
        first_name: "Robert",
        last_name: "Brown",
        country: "Australia",
        direction: "32 Wallaby Way, Sydney, Australia",
        phone_number: "+61 2 9876 5432",
        date_of_birth: "1980-09-30"
    },
    {
        id: 6,
        email: "user6@example.com",
        status: "pending",
        avatar: "",
        names: "Laura Wilson",
        role: "editor",
        first_name: "Laura",
        last_name: "Wilson",
        country: "New Zealand",
        direction: "15 Queen St, Auckland, New Zealand",
        phone_number: "+64 9 555 1234",
        date_of_birth: "1995-01-11"
    },
    {
        id: 7,
        email: "user7@example.com",
        status: "active",
        avatar: "",
        names: "Chris Miller",
        role: "subscriber",
        first_name: "Chris",
        last_name: "Miller",
        country: "Germany",
        direction: "21 Berlin Ave, Berlin, Germany",
        phone_number: "+49 30 1234 5678",
        date_of_birth: "1987-03-18"
    },
    {
        id: 8,
        email: "user8@example.com",
        status: "inactive",
        avatar: "",
        names: "Sarah Moore",
        role: "editor",
        first_name: "Sarah",
        last_name: "Moore",
        country: "France",
        direction: "11 Rue de Paris, Paris, France",
        phone_number: "+33 1 42 56 78 90",
        date_of_birth: "1992-08-25"
    },
    {
        id: 9,
        email: "user9@example.com",
        status: "active",
        avatar: "",
        names: "David Taylor",
        role: "admin",
        first_name: "David",
        last_name: "Taylor",
        country: "India",
        direction: "22 MG Road, Bangalore, India",
        phone_number: "+91 80 2345 6789",
        date_of_birth: "1980-02-14"
    },
    {
        id: 10,
        email: "user10@example.com",
        status: "pending",
        avatar: "",
        names: "Olivia Anderson",
        role: "subscriber",
        first_name: "Olivia",
        last_name: "Anderson",
        country: "South Africa",
        direction: "30 Nelson Mandela Blvd, Cape Town, South Africa",
        phone_number: "+27 21 123 4567",
        date_of_birth: "1994-11-01"
    },
    {
        id: 11,
        email: "user11@example.com",
        status: "pending",
        avatar: "",
        names: "Daniel Thomas",
        role: "editor",
        first_name: "Daniel",
        last_name: "Thomas",
        country: "USA",
        direction: "44 Sunset Blvd, Los Angeles, USA",
        phone_number: "+1 555-3210",
        date_of_birth: "1993-05-20"
    },
    {
        id: 12,
        email: "user12@example.com",
        status: "active",
        avatar: "",
        names: "Sophia Martinez",
        role: "subscriber",
        first_name: "Sophia",
        last_name: "Martinez",
        country: "Mexico",
        direction: "20 Reforma St, Mexico City, Mexico",
        phone_number: "+52 55 1234 5678",
        date_of_birth: "1991-10-03"
    },
    {
        id: 13,
        email: "user13@example.com",
        status: "inactive",
        avatar: "",
        names: "Matthew Jackson",
        role: "admin",
        first_name: "Matthew",
        last_name: "Jackson",
        country: "Italy",
        direction: "15 Via Roma, Rome, Italy",
        phone_number: "+39 06 1234567",
        date_of_birth: "1982-07-22"
    },
    {
        id: 14,
        email: "user14@example.com",
        status: "active",
        avatar: "",
        names: "Emma White",
        role: "editor",
        first_name: "Emma",
        last_name: "White",
        country: "Spain",
        direction: "18 Gran Via, Madrid, Spain",
        phone_number: "+34 91 234 5678",
        date_of_birth: "1996-04-12"
    },
    {
        id: 15,
        email: "user15@example.com",
        status: "pending",
        avatar: "",
        names: "James Harris",
        role: "subscriber",
        first_name: "James",
        last_name: "Harris",
        country: "Brazil",
        direction: "55 Av Paulista, São Paulo, Brazil",
        phone_number: "+55 11 98765-4321",
        date_of_birth: "1989-09-10"
    },
    {
        id: 16,
        email: "user16@example.com",
        status: "active",
        avatar: "",
        names: "Mia Clark",
        role: "admin",
        first_name: "Mia",
        last_name: "Clark",
        country: "Canada",
        direction: "99 Churchill Ave, Ottawa, Canada",
        phone_number: "+1 613-555-0101",
        date_of_birth: "1994-06-30"
    },
    {
        id: 17,
        email: "user17@example.com",
        status: "pending",
        avatar: "",
        names: "Lucas Lewis",
        role: "subscriber",
        first_name: "Lucas",
        last_name: "Lewis",
        country: "Australia",
        direction: "10 Harbour St, Melbourne, Australia",
        phone_number: "+61 3 1234 5678",
        date_of_birth: "1992-01-15"
    },
    {
        id: 18,
        email: "user18@example.com",
        status: "inactive",
        avatar: "",
        names: "Amelia Young",
        role: "editor",
        first_name: "Amelia",
        last_name: "Young",
        country: "Japan",
        direction: "5 Shibuya Crossing, Tokyo, Japan",
        phone_number: "+81 3-5555-1234",
        date_of_birth: "1995-03-10"
    },
    {
        id: 19,
        email: "user19@example.com",
        status: "active",
        avatar: "",
        names: "Ethan Walker",
        role: "subscriber",
        first_name: "Ethan",
        last_name: "Walker",
        country: "USA",
        direction: "50 Park Ave, New York, USA",
        phone_number: "+1 212-555-6789",
        date_of_birth: "1990-05-05"
    },
    {
        id: 20,
        email: "user20@example.com",
        status: "inactive",
        avatar: "",
        names: "Isabella Walker",
        role: "admin",
        first_name: "Isabella",
        last_name: "Walker",
        country: "USA",
        direction: "10 Park Ave, New York, USA",
        phone_number: "+1 212-555-6789",
        date_of_birth: "1990-05-05"
    }]


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
export  function getUserById(userId: number): UserType | null{
    const user =  mockUsers.find((user)=> user.id === userId)
    return user? user : null
}