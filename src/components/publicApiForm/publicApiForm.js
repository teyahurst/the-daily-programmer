import React from 'react';

function PublicApiForm(props){
    const { className, ...otherProps} = props

    return(
        <form
            className={['Public-Api-Form', className].join(' ')}
            action='#'
            {...otherProps}
            />
    )
}

export default PublicApiForm;