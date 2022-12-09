import { useState } from 'react';
import { UserContext } from './UserContext';

const user1 = {
  id:123,
  name:'Enrique alejo',
  email: 'enriquecorreo@correo.com'
}


export const UserProvider = ({ children }) => {

  const[ user, setUser ]= useState(user1);

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}