import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Container, Form, Input, Button } from './styles'

import api from '../../services/api'

const Login = ({ history }) => {
	const [username, setUsername] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		const { data } = await api.post('/devs', { username })

		const { _id } = data

		history.push(`/dev/${_id}`)
	}

	return (
		<Container>
			<Form>
				<img src={logo} alt="logo" />
				<Input
					placeholder="Digite seu usuário no Github"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<Button type="submit" onClick={handleSubmit}>
					Enviar
				</Button>
			</Form>
		</Container>
	)
}

export default Login
