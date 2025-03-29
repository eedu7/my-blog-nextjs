export interface RegisterUserRequest {
    username: string;
    email: string;
    password: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface CheckUserExistRequest {
    field: string;
    value: string;
}

export interface CheckUserExistResponse {
    message: string;
    exist: boolean;
}
