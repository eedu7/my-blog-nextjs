export interface RegisterUserRequest {
    username?: string;
    email?: string;
    password?: string;
}

export interface LoginUserRequest {
    email?: string;
    password?: string;
}

export interface CheckUserExistRequest {
    field?: string;
    value?: string;
}

export interface CheckUserExistResponse {
    message?: string;
    exist?: boolean;
}

export interface AuthResponse {
    message?: string;
    token?: {
        access_token?: string;
        refresh_token?: string;
        token_type?: string;
        expiry_minutes?: number;
    };
    user?: {
        email?: string;
        username?: string;
        uuid?: string;
    };
}
