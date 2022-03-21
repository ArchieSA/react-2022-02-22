export const Auth = ({ isSignedIn, login, logout }) => {
    return <button onClick={isSignedIn ? logout : login}>
        {isSignedIn ? 'Logout' : 'Login'}
    </button>
}