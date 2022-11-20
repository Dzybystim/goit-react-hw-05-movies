import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const NavItem = styled(NavLink)`

text-decoration: none;
color: black;

&.active {
    color: red;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: orange;
}
`