import React from 'react'
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

const Main = ({ match }) => (
	<Container>
		<img src={logo} alt="logo" />
		<List>
			<ListItem>
				<ImageList
					src="https://avatars2.githubusercontent.com/u/9022148?v=4"
					alt=""
				/>
				<Footer>
					<Name>Nome do usuário</Name>
					<Bio>Descrição</Bio>
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
			<ListItem>
				<ImageList
					src="https://avatars2.githubusercontent.com/u/9022148?v=4"
					alt=""
				/>
				<Footer>
					<Name>Nome do usuário</Name>
					<Bio>Descrição</Bio>
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
			<ListItem>
				<ImageList
					src="https://avatars2.githubusercontent.com/u/9022148?v=4"
					alt=""
				/>
				<Footer>
					<Name>Nome do usuário</Name>
					<Bio>Descrição</Bio>
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
			<ListItem>
				<ImageList
					src="https://avatars2.githubusercontent.com/u/9022148?v=4"
					alt=""
				/>
				<Footer>
					<Name>Nome do usuário</Name>
					<Bio>Descrição</Bio>
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
		</List>
	</Container>
)

export default Main
