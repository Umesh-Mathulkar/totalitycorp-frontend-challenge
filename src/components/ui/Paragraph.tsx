

interface IParagrphProps {
    children:React.ReactNode
    className?:string
}

const P = ({children,className}:IParagrphProps) =>{

    return(
        <p className={`text-[15px] text-gray-500 font-montserrat ${className} `}>
            {children}
        </p>
    )
}
export default P;