import {NavItem} from './AppBar.styled'

const navItems = [
    {href: '/', text: 'Home'},
    {href: 'movies', text: 'Movies'}
]

export default function AppBar() {
return <>
    {navItems.map(({href, text}) => {
     return <NavItem to={href} key={href}>
    {text}
    </NavItem>
    })}
      </>
}