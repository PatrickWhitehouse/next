import Link from "next/link";
const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>Polished Pads</h1>
            </div>
            <div className="links">
                <Link href="/about"><a>About</a></Link>
                <Link href="/services"><a>Services</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </div>
        </nav>
    )
}

export default Navbar;