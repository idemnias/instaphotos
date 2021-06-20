import * as React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const style = {
    
    link: {
        color: '#555', 
        textDecoration: 'none',
    },
    navbar:{
        borderBotton: 'solid 1px #aaa',
        padding: '10px 15px',
    },

}

export default class NavBar extends React.Component {
    public render() {
        return(
            <div style={style.navbar}>
                <Link to='/app/newsfeed'><FontAwesomeIcon icon={faNewspaper}/>Instacool</Link>
                <div style={{float:'right'}}><Link style={style.link} to='/app/profile'><FontAwesomeIcon icon={faUser}/>Perfil</Link></div>
            </div>
        )
    }
}