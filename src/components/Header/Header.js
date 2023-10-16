import Link from "next/link"
import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { DiCssdeck } from "react-icons/di"
import { FaTelegram } from "react-icons/fa"

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from "./HeaderStyles"

const Header = () => (
	<Container>
		<Div1>
			<Link
				href="/"
				style={{ display: "flex", alignItems: "center", color: "white" }}
			>
				<DiCssdeck size="3rem" /> <span>Портфолио</span>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Проекты</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Технологии</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>Обо мне</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/Chuppy101" target="_blank">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://t.me/Chubachubs" target="_blank">
				<FaTelegram size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
)

export default Header
