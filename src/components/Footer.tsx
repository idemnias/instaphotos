import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'

const style = {
    button: { 
        flex: 1,
        textAlign: 'center',
        padding: '10px 15px',
        cursor: 'pointer',
    },
    footer: { 
        background: '#eee', 
        display: 'flex', 
        marginBottom: '-10px', 
        marginLeft: '-15px', 
        width: 'calc(100% + 30px)',
    },
}

interface IFooterProps {
    like: () => void 
    share: () => void 
}

export default class Footer extends React.Component<IFooterProps> {
    public render(){
        const { like, share } = this.props
        return(
        <div style={style.footer}>
            <div onClick={like} style={style.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp}/> Like</div>
            <div onClick={share} style={style.button as React.CSSProperties}><FontAwesomeIcon icon={faRetweet} /> Compartir</div>
        </div>
        )
    }
}