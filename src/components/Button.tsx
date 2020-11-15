import React,{ReactNode,SyntheticEvent} from 'react'

function Button(props: {
	onClick: (event: SyntheticEvent<HTMLButtonElement>) => void
	children: ReactNode
	className?: string
	autoFocus?: boolean
}) {
	const btnStyle = {
		border: '0',
		outline: '0',
		cursor: 'pointer',
		width: '100%',
		fontSize: '2rem',
		padding: '0.5rem',
		borderRadius: '0.5rem',
		margin:'1rem 0',
	}
	return (
		<button
			style={btnStyle}
			className={`btn ${props.className?props.className:''}`}
			onClick={props.onClick}
			autoFocus={props.autoFocus}
			>
			{props.children}
		</button>
	)
}
export default Button