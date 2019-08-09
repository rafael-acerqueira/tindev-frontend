import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import {
	Container,
	List,
	ListItem,
	ImageList,
	Name,
	Bio,
	ButtonsContainer,
	Button,
	Footer
} from './styles'

import api from '../../services/api'

const Main = ({ match }) => {
	const [devs, setDevs] = useState([])

	useEffect(() => {
		const loadusers = async () => {
			const { data } = await api.get('/devs', {
				headers: { user: match.params.id }
			})

			setDevs(data)
		}
		loadusers()
	}, [match.params.id])

	return (
		<Container>
			<img src={logo} alt="logo" />
			<List>
				{devs.map(dev => (
					<ListItem key={dev._id}>
						<ImageList src={dev.avatar} alt={dev.name} />
						<Footer>
							<Name>{dev.name}</Name>
							<Bio>{dev.bio}</Bio>
						</Footer>
						<ButtonsContainer>
							<Button type="button">
								<ImageList src={dislike} alt="dislike" />
							</Button>
							<Button type="button">
								<ImageList src={like} alt="like" />
							</Button>
						</ButtonsContainer>
					</ListItem>
				))}
			</List>
		</Container>
	)
}

export default Main
