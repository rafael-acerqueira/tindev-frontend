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
	Footer,
	Empty
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

	const handleLike = async id => {
		await api.post(`devs/${id}/likes`, null, {
			headers: {
				user: match.params.id
			}
		})
		setDevs(devs.filter(dev => dev._id !== id))
	}

	const handleDislike = async id => {
		await api.post(`devs/${id}/dislikes`, null, {
			headers: {
				user: match.params.id
			}
		})
		setDevs(devs.filter(dev => dev._id !== id))
	}

	return (
		<Container>
			<img src={logo} alt="logo" />
			{devs.length > 0 ? (
				<List>
					{devs.map(dev => (
						<ListItem key={dev._id}>
							<ImageList src={dev.avatar} alt={dev.name} />
							<Footer>
								<Name>{dev.name}</Name>
								<Bio>{dev.bio}</Bio>
							</Footer>
							<ButtonsContainer>
								<Button type="button" onClick={() => handleDislike(dev._id)}>
									<ImageList src={dislike} alt="dislike" />
								</Button>
								<Button type="button" onClick={() => handleLike(dev._id)}>
									<ImageList src={like} alt="like" />
								</Button>
							</ButtonsContainer>
						</ListItem>
					))}
				</List>
			) : (
				<Empty>Acabou :(</Empty>
			)}
		</Container>
	)
}

export default Main
