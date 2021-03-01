import {googleAuthProvider, auth} from "../lib/firebase";

export default function LoginPage({}) {
    const user = null;
    const username = null;
    return (
        <main>
            <h1>Log In</h1>
            {!user && <SignInButton/>}
            {username ? <SignOutButton/> : <CreateUsername/>}
        </main>
    )
}

function SignInButton () {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    }

    return (
        <button onClick={signInWithGoogle}> sign in with google </button>
    )

}

function SignOutButton () { 
    return (
        <button onClick={() => auth.signOut()}> sign out </button>
    )
}

function CreateUsername () {
    return (
        <button>create username</button>
    )
}