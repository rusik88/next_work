import Link from "next/link";


const Header = () => {
    return (
        <header>
            <span>ItNextJS</span>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/users">About</Link>
            </nav>
        </header>
    );
};

export default Header;