import Link from "next/link";


export default function NavBar() {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>
                            home
                        </button>
                    </Link>
                </li>
                {username && (
                    // signed in with username
                    <>
                        <li>
                            <Link href="/admin">
                                <button> create post</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <button>your profile</button>
                            </Link>
                        </li>
                    </>
                )}
                {!username && (
                    // not signed in
                    <li>
                    <Link href="/login">
                        <button> log in</button>
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    )
}