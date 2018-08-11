import React from 'react'
// TODO - add proptypes


const Home = props => {
	let Greeting, Image;
	var imgName = 'guest';
	// User
	

	if (props.user === null) { // Non-login
		Greeting = (
			<p>Hello guest, please login to see your profile</p>
		)
	}  
	else if (props.user.local.username) { // A user has a login token
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.local.username} <br/></strong>
			</p>
		)
		imgName = props.user.local.username
	}

	imgName = "./images/profile_pics/" + imgName + ".jpg";

	console.log('----____-'+imgName)
	var temp = ''
	Image = (
		
		<img src={'./images/profile_pics/guest.jpg'}/>
		)


	return (
		<div className="Header">
			{Greeting}
			{Image}
		</div>
	)
}

export default Home
