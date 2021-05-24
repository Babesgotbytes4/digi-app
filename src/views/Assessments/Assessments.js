import React from 'react';
import useAuth from '../../utilities/useAuth'

export const Assessments = () => {
    const {handleLogOutButton}=useAuth({
        shouldBeLoggedIn:true,
    })
    return (
    
    <div>
        <button onClick={handleLogOutButton}>Log out</button>
    </div>
        
        )
};

export default Assessments;