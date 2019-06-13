import React from 'react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu} from 'semantic-ui-react';
import './SideBar.scss';

export class SideBar extends React.Component{
    render(){
        return(
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
             <SideBarItem highlight={true} label='Home' icon='home' />
             <SideBarItem label= 'Trending' icon='fire' />
             <SideBarItem label= 'History' icon='history' />   
             <SideBarItem label='Liked Videos' icon='thumbs up' />
             <SideBarItem label='Help' icon='help circle' />
            </Menu>
        )
    }
}