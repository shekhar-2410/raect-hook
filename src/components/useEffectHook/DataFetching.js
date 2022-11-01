import React, { useEffect, useState } from 'react';
import axios from 'axios';
const DataFetching = () => {
	const [ posts, setPost ] = useState({});
	const [ id, setId ] = useState(1);
	const [ idbtnclick, setButtonclick ] = useState(1);
	const handleClick = () => {
		setButtonclick(id);
	};
	useEffect(
		() => {
			axios
				.get(`https://jsonplaceholder.typicode.com/posts/${idbtnclick}`)
				.then((res) => {
					console.log(res);
					setPost(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		[ idbtnclick ]
	);
	return (
		<div>
			<input type={'text'} value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>
				Fetch Data
			</button>
			<div>{posts.title}</div>
			{/* <ul>{posts.map((item) => <li key={item.id}>{item.title}</li>)}</ul> */}
		</div>
	);
};

export default DataFetching;
