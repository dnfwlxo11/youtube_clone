import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { loginUser} from '../../../_actions/user_action'

function LoginPage(props) {
	const dispatch = useDispatch();

	const [Email, setEmail] = useState("")
	const [Password, setPassword] = useState("")

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value)
	}

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value)
	}

	const onSubmitHandler = (event) => {
		// refresh 되는 것을 방지
		event.preventDefault();

		let body = {
			email: Email,
			password: Password
		}

		dispatch(loginUser(body))
		.then(response => {
			if (response.payload.loginSuccess) {
				props.history.push('/')
			} else {
				alert(response.payload.message)
			}
		})
	}

	return (
		<div style={{
			display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
		}}>
			<form onSubmit={onSubmitHandler} 
				style={{ display:'flex', flexDirection:'column'}}>
				<label>Email</label>
				<input type='email' value={Email} onChange={onEmailHandler} />
				<label>password</label>
				<input type='password' value={Password} onChange={onPasswordHandler} />
				<br />
				<button>
					Login
				</button>
			</form>

		</div>
	)
}

export default LoginPage
