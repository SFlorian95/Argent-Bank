import { selectCurrentToken } from "./authSlice"
import Profile from "../profile/Profile/Profile"
import Error from "../../common/Error/Error"


const RequireAuth = () => {
    const IsAuth = selectCurrentToken

    return IsAuth ? (
        <Profile />
    ) : <Error />
}

export default RequireAuth