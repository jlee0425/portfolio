import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

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
			<ImageWrapper>
				<Image
					src={`/thumbnails/${image}`}
					layout="fill"
					alt=""
					objectFit="cover"
				/>
			</ImageWrapper>

			<Main>
				<Title>{title}</Title>
				<Hr />
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
			</Main>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 320px;
	aspect-ratio: 2/3;
	@media ${({ theme }) => theme.breakpoints.sm} {
		flex-direction: row;
		width: 100%;
		height: 180px;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 60%;
	margin-bottom: 1rem;
	& > span {
		border-radius: 10px 10px 0 0;
	}
	@media ${({ theme }) => theme.breakpoints.sm} {
		max-width: 40%;
		height: 100%;
		margin-right: 2rem;

		& > span {
			border-radius: 10px 0 0 10px;
		}
	}
`;
const Main = styled.div`
	@media ${({ theme }) => theme.breakpoints.sm} {
		width: 60%;
		padding: 1rem;
	}
`;

const Title = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 1rem 0;
	font-size: 2rem;
	@media ${({ theme }) => theme.breakpoints.sm} {
		font-size: 1.5rem;
	}
`;

const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 1.5rem auto;
	border: 0;
	background-color: #d0bb57;
	@media ${({ theme }) => theme.breakpoints.sm} {
		margin: 1rem auto;
	}
`;

const TagList = styled.ul`
	display: flex;
	justify-content: space-evenly;
	margin: 2rem 0;
`;

const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
	@media ${({ theme }) => theme.breakpoints.sm} {
		font-size: 1.1rem;
	}
`;

const Links = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-evenly;
	margin: 2rem 0;
	@media ${({ theme }) => theme.breakpoints.sm} {
		margin-top: 3rem;
	}
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
	@media ${({ theme }) => theme.breakpoints.sm} {
		font-size: 1.2rem;
	}
`;
