import {Link, Outlet} from 'react-router-dom'
import {BoxAditionalInformation} from './AditionalInformation.styled'


export default function AditionalInformation({movieId}) {
    const navItems = [
        {href: 'cast', text: 'Cast'},
        {href: 'reviews', text: 'Reviews'}
    ]


    return <>
    <BoxAditionalInformation>
       <h2>Aditional Information</h2>
       <ul>
       {navItems.map(({href, text}) => {
        return <li key={href}><Link to={href} key={href}>
                {text}
                </Link></li>
    })}
       </ul>
    </BoxAditionalInformation>
    <Outlet movieId={movieId}/>
    </>
}