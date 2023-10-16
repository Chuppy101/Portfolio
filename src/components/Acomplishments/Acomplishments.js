import React from "react"

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents"
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles"

const data = [
	{ number: 10, text: "Open Source Проектов" },
	{ number: 6, text: "Лет обучения программированию" },
	{ number: "B2", text: "Уровень владения Английским языком" },
	{
		number: 3,
		text: "Языков программирования ",
	},
]

const Acomplishments = () => (
	<Section>
		<SectionTitle>Личные Достижения</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
)

export default Acomplishments
