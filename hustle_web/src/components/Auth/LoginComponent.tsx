import Profile from '../../assets/icons/profile_icon.svg'
import {LoginProps} from '../../constants/interfaces'

interface userProps{
    user: LoginProps;
    onClick: () => void; 
}

export const LoginComponent = ({ user, onClick }: userProps) => {
    return(
        <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Profile} alt=""/>
            <div>{user.username}</div>
        </div>
        
    )
}