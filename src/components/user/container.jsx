import { User } from "./component";
import { useSelector } from 'react-redux';

export const UserContainer = ({className}) => {

    const user = useSelector(
        state => state.user["currentUser"] || null
    );
    if( user == null ) return null;

    return (
        <User className={className} user={user} />
    );
}