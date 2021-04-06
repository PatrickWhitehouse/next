import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return(
        <div className="bg-gray-100 h-screen">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;
