import { authService } from "fbase";
import { useHistory } from "react-router";

const Profile = ({ userObj }) => {
    const history = useHistory()

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;