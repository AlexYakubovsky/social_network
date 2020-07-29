import React from "react";
import styles from "./Friends.module.css";
import * as axios from "axios";
import userLogo from "../../assets/images/user-logo.png"

class Friends extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return (
            <div>
                {this.props.users.map(v => {
                    return (
                        <div key={v.id} className={styles.friends}>
                            <img alt='' src={v.photos.small ? v.photos.small : userLogo}/>
                            <div>
                                <div>
                                    {v.name}
                                </div>
                                <div>
                                    {v.status}
                                </div>
                            </div>
                            <div>
                                {v.followed ? <button onClick={() => this.props.unfollowUser(v.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.followUser(v.id)}>Follow</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Friends;