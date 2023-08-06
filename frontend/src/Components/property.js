import React from 'react'

const Property = (props) =>
{
    const { property } = props;
    return(
        <div>
            <h1>{property.title}</h1>
        </div>
    )
}
export default Property;