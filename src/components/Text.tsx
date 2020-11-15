import React,{ ChangeEvent} from 'react'

function Text(props: {
    value: string | number | readonly string[]
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    autoFocus?: boolean
    placeholder?: string
    maxLenght?: number
    required?: boolean
}) {
    const textStyle = {
        border: '0',
        outline: '0',
        cursor:'pointer',
        width:'100%',
        fontSize: '2rem',
        padding: '2rem 0',
        textAlign: 'center' as const,
        borderRadius: '0.5rem',
        marginTop:'1rem',
    }
return(
    <input
        type='text'
        value={props.value}
        className='i-text'
        style={textStyle}
        onChange={props.onChange}
        required={true}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
        maxLength={props.maxLenght}
        >
    </input>
    )
}
export default Text