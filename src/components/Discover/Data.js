import React from 'react'

function Data({img, link}) {
return (
        <a href={link} className="partner-img" target="_blank">
            <img src={img} />
        </a>
)
}

export default Data