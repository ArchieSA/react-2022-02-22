import {useSelector} from "react-redux";
import {Button} from "../button/component";

export const UserSign = ({isAuthorized, signIn, signOut}) => {
    return (
        isAuthorized ?
        <Button onClick={signOut} text="Sign Out" /> :
        <Button onClick={signIn} text="Sign In" />
    );
}