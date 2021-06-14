import React from 'react';
import styled from 'styled-components';

interface Props {
	image: string;
	title: string;
	to: string;
	tags: string[];
	git: string;
	demo: string;
}

export const ProjectCard = ({ image, title, tags, git, demo, to }: Props) => {
	return (
		<Container>
			<Img src={`thumbnails/${image}`} />
			<TitleContainer>
				<Title>{title}</Title>
				<Hr />
			</TitleContainer>
			<div>
				<TagList>
					{tags.map((tag, i) => (
						<Tag key={i}>{tag}</Tag>
					))}
				</TagList>
			</div>
			<Links>
				<Link href={git}>Source</Link>
				<Link href={demo}>Demo</Link>
			</Links>
		</Container>
	);
};

const Container = styled.div`
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 400px;
	height: 600px;

	@media ${({ theme }) => theme.breakpoints.sm} {
		width: 100%;
	}
`;
const Img = styled.img`
	width: 100%;
	height: 60%;
	object-fit: cover;
	overflow: hidden;
`;
const TitleContainer = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`;

const Title = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${({ title }) => (title ? '3rem' : '2rem')};
`;

const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background-color: #d0bb57;
`;

const TagList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
`;

const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
`;

const Links = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`;

const Link = styled.a`
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background-color: #6b3030;
	border-radius: 15px;
	transition: 0.5s;
	&:hover {
		background-color: #801414;
	}
`;
