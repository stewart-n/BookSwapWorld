import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [

  // dummy data for now until connect to backend
    {
      id: 'user1',
      name: 'Yvette Green',
      image:
        'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      books: 3

    }

  ];

  return <UsersList items={USERS} />;
};

export default Users;