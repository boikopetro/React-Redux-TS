import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();
    useEffect(() => {
        fetchUsers()
    },[]
);

    if (loading) {
        return <p>loading...</p>
    }

    if (error) {
        return <p>error {error}</p>
    }

    return (
        <div>
            {users.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    );
};

export default UserList;