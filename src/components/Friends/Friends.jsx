import React from "react";
import styles from "./Friends.module.css";

const Friends = props => {
    const users = [
        {
            id: 1,
            isFollow: true,
            firstName: 'alex',
            lastName: 'yakubovsky',
            age: '21',
            location: 'Moscow',
            photo: 'https://img2.freepng.ru/20180716/lra/kisspng-logo-person-user-person-icon-5b4d2bd2236ca6.6010202115317841461451.jpg'
        },
        {
            id: 2,
            isFollow: false,
            firstName: 'kirill',
            lastName: 'trushin',
            age: '21',
            location: 'Moscow',
            photo: 'https://img2.freepng.ru/20180716/lra/kisspng-logo-person-user-person-icon-5b4d2bd2236ca6.6010202115317841461451.jpg'
        },
        {
            id: 3,
            isFollow: false,
            firstName: 'evgeny',
            lastName: 'smerdow',
            age: '21',
            location: 'Moscow',
            photo: 'https://img2.freepng.ru/20180716/lra/kisspng-logo-person-user-person-icon-5b4d2bd2236ca6.6010202115317841461451.jpg'
        },
    ];

    if (props.users.length === 0) props.setUsers(users);

    return (
        <div>
            {props.users.map(v => {
                return (
                    <div key={v.id} className={styles.friends}>
                        <img alt='' src={v.photo}/>
                        <div>
                            <div>
                                {v.firstName}
                            </div>
                            <div>
                                {v.lastName}
                            </div>
                            <div>
                                {v.age}
                            </div>
                        </div>
                        <div>
                            {v.location}
                        </div>
                        <div>
                            {v.isFollow ? <button onClick={() => props.unfollowUser(v.id)}>Unfollow</button> :
                                <button onClick={() => props.followUser(v.id)}>Follow</button>}
                        </div>
                    </div>

                )
            })}
        </div>
    )
};

export default Friends;