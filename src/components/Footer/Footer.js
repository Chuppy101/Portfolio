import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaTelegram } from "react-icons/fa"

import { SocialIcons } from "../Header/HeaderStyles"
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles"

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Позвонить</LinkTitle>
					<LinkItem href="tel:+79218685366">+7-921-868-53-66</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Написать</LinkTitle>
					<LinkItem href="mailto:a_chubchik@mail.ru">
						a_chubchik@mail.ru
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/Chuppy101" target="_blank">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://t.me/Chubachubs" target="_blank">
						<FaTelegram size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
