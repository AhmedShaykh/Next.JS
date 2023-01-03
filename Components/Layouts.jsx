import Navbar from "./Navbar";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar /> <div>{children}</div>
        </>
    )
};

export default Layouts;