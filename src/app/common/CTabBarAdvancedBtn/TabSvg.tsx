import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { isIphone } from '~utils/utilities'

type Props = SvgProps & {
	color?: string
}

export const TabSvg: React.FC<Props> = ({ color = '#FFFFFF', ...props }) => {
	const viewBox = isIphone ? '0 0 75 49' : '0 0 75 40'
	return (
		<Svg
			width={75}
			height={isIphone ? 49 : 40}
			viewBox={viewBox}
			{...props}>
			<Path
				d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
				fill={color}
			/>
		</Svg>
	)
}
