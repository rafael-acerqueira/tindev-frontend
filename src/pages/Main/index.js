import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import itsamatch from '../../assets/itsamatch.png'
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
	Empty,
	Avatar,
	MatchContainer
} from './styles'

import api from '../../services/api'

const Main = ({ match }) => {
	const [devs, setDevs] = useState([])
	const [matchDev, setMatchDev] = useState(null)

	useEffect(() => {
		const loadusers = async () => {
			const { data } = await api.get('/devs', {
				headers: { user: match.params.id }
			})

			setDevs(data)
		}
		loadusers()
	}, [match.params.id])

	useEffect(() => {
		const socket = io('http://localhost:3333', {
			query: { user: match.params.id }
		})

		socket.on('match', dev => {
			setMatchDev(dev)
		})
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
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>

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

			{matchDev && (
				<MatchContainer>
					<img src={itsamatch} alt="Its a match" />
					<Avatar src={matchDev.avatar} alt="avatar" />
					<strong>{matchDev.name}</strong>
					<p>{matchDev.bio}</p>
					<button type="button" onClick={() => setMatchDev(null)}>
						Fechar
					</button>
				</MatchContainer>
			)}
		</Container>
	)
}

export default Main
