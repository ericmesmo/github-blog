import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ProfileContainer, ProfileInfoHeader, ProfileInfoContainer, InfoProfile } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UsersContext";

export function Profile() {
    const { user } = useContext(UserContext)

    return (
        <ProfileContainer>
            <div>
                <img src={user.avatar_url} alt="" />
                
                <ProfileInfoContainer>
                    <ProfileInfoHeader>
                        <h2>{user.name}</h2>
                        
                        <a href={user.profile_url} target="_blank">
                            github
                            <FontAwesomeIcon 
                                icon={faArrowUpRightFromSquare}
                            />
                        </a>
                    </ProfileInfoHeader>
                    
                    <p>{user.bio}</p>
                    
                    <InfoProfile>
                        <div>
                            <FontAwesomeIcon 
                                icon={faGithub}
                            />
                            
                            <span>{user.login}</span>
                        </div>
                        
                        <div>
                            <FontAwesomeIcon 
                                icon={faBuilding}
                            />
                            
                            <span>{user.company}</span>
                        </div>
                        
                        <div>
                            <FontAwesomeIcon 
                                icon={faUserGroup}
                            />
                            
                            <span>{user.followers} seguidores</span>
                        </div>
                    </InfoProfile>
                </ProfileInfoContainer>
            </div>
        
        </ProfileContainer>
    )
}