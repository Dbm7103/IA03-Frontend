export interface User {
    email: string;
    password: string;
    createdAt?: Date;
}

export interface PopupProps {
    message: string;
    onClose: () => void;
}