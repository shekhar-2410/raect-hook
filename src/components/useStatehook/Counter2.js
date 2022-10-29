import React, { useState } from 'react';

const Counter2 = () => {
	const [ name, setName ] = useState({ firstName: '', lastName: '' });
	return (
        <>
		<form>
			<input type="text" value={name.firstName} onChange={e =>setName ({...name,firstName:e.target.value})} placeholder='put first name' />
            <input type="text" value={name.lastName} onChange={e =>setName ({...name,lastName:e.target.value})} placeholder='put last name'/>
            <h1>First Name -- {name.firstName}</h1>
            <h1>Last Name -- {name.lastName}</h1>
		</form>
       
       
        </>
	);
};

export default Counter2;
