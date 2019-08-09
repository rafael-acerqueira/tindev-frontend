import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Form, Input, Button } from './styles'

const Login = () => (
	<Container>
		<Form>
			<img src={logo} alt="logo" />
			<Input placeholder="Digite seu usuário no Github" />
			<Button type="submit">Enviar</Button>
		</Form>
	</Container>
)

export default Login
