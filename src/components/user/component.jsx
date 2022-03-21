export const User = ({className, user}) => {
    const { name } = user;
    return (
        <div className={className}>Привет, {name}</div>
    );
} 