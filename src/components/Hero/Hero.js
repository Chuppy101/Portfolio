import React from "react"

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Моё персональное <br />
					Портфолио
				</SectionTitle>
				<SectionText>
					Добро пожаловать в моё персональныое портфолио, где дизайн и
					технологии встречаются в гармонии. Узнайте больше о моих проектах.
				</SectionText>
				<a href="#projects">
					<Button onClick={props.handleClick}>Узнать</Button>
				</a>
			</LeftSection>
		</Section>
	</>
)

export default Hero
