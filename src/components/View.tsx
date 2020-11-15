import React from 'react'

function View(props: { children: React.ReactNode }) {
    const sectionStyle = {
        display: 'flex',
        height: '100vh',
        width: '25rem',
        textAlign: 'center' as const,
        flexDirection: 'column' as const,
        justifyContent: 'center',
    }
    return (
        <section
            className='section'
            style={sectionStyle}
            >
            {props.children}
        </section>
    )
}
export default View