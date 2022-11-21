import {Outlet} from 'react-router-dom'
import {Suspense} from 'react'

import {NavigationBox} from './SharedLayout.styled';
import AppBar from 'components/AppBar/AppBar'


export default function SharedLayout(){
    return <>
    <NavigationBox>
    <AppBar />
    </NavigationBox>
    <Suspense fallback={<div>Loading page...</div>}>
    <Outlet />
    </Suspense>
    </>
}

