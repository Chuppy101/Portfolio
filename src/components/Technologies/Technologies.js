import React from "react"
import { DiFirebase, DiReact, DiZend } from "react-icons/di"
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents"
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles"

const Technologies = () => (
	<Section id="tech">
		<SectionDivider divider />
		<SectionTitle>Технологии</SectionTitle>
		<SectionText>
			Я работал с целым рядом технологий в мире веб-разработки.
			<br /> От Front-end до взаимодействия с Back-end.
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<DiReact size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Опыт использования <br />
						React.js и TypeScript
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Опыт использования <br />
						Node и различных баз данных
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiZend size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Небольшой опыт в работе <br />С инструментами как Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider colorAlt />
	</Section>
)

export default Technologies
