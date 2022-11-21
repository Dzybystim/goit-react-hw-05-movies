import PropTypes from 'prop-types'

import {Link, useLocation} from 'react-router-dom'
import {BoxAditionalInformation} from './AditionalInformation.styled'


export default function AditionalInformation() {
    const navItems = [
        {href: 'cast', text: 'Cast'},
        {href: 'reviews', text: 'Reviews'}
    ]
    const location = useLocation()

    return <>
    <BoxAditionalInformation>
       <h2>Aditional Information</h2>
       <ul>
       {navItems.map(({href, text}) => {
        return <li key={href}><Link to={href} key={href} state={{from: location.state?.from ?? "/"}}>
                {text}
                </Link></li>
    })}
       </ul>
    </BoxAditionalInformation>

    </>
}

AditionalInformation.propTypes = {
    state: PropTypes.object.isRequired
}