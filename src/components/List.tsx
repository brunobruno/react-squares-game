import React from 'react'

export function List(props: {
	list: { value: number, text: string }[]
	limit: number
}) {
	const listStyle = {
		paddingLeft: '0',
		margin:'1rem 0 0 0',
		counterReset: 'counter',
		listStylePosition: 'inside' as const,
		userSelect: 'none' as const,
	}
	return (
		<ul 
			style={listStyle}
			className='stripe-count'>
			{props.list.slice(0, props.limit).map((item, i) => {
				return (
					<li key={i}>
						<div>{item.text}</div>
						<div>{item.value}</div>
					</li>
				)
			})}
		</ul>
	)
}
export default List