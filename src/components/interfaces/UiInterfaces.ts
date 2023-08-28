
export interface ICardProps {
    children: React.ReactNode;
    className?: string
}

export interface IButton {
    children: React.ReactNode;
    icon?: React.ReactNode;
    loading?: boolean;
    className?:string;
    handleSubmit?: () => void;
}
export interface IinputProp {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    value?: string;
    placeholder?: string;
    className?: string;
}