

interface IHeaderProp {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: IHeaderProp) => {
  return (
    <p
      className={`text-[25px] text-gray-600 font-poppins  ${className}`}
    >
      {children}
    </p>
  );
};
export default Header;
