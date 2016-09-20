import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import MoreHorizontalIcon from 'material-ui/svg-icons/navigation/more-horiz'
import MediaQuery from 'react-responsive'
import Measure from 'react-measure'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'


class Header extends React.Component {
    constructor(props){
        super(props)

    }





    render () {
        const {minWidth, title, onMenuTouchTap, children} = this.props       


        return <header>
            <MediaQuery maxWidth={minWidth}>
                <div className="layout horizontal center">
                    <IconButton onTouchTap={onMenuTouchTap} >
                        <MenuIcon />
                    </IconButton>
                    <h1>{title}</h1>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={minWidth}>
                <div>
                    <Measure onMeasure={this.onContainerChangedWith}>
                    <nav className="layout horizontal center">{children}</nav>
                    </Measure>
                </div>
            </MediaQuery>
        </header>
    }
}


Header.propTypes = {
    minWidth: PropTypes.number,
    title: PropTypes.string,
    onMenuTouchTap: PropTypes.func.isRequired
}

Header.defaultProps = {
    minWidth: 760,
    primaryTitle: 'App Container',
    children: [
        <MenuItem primaryText="Maps" key="mi1" />,
        <MenuItem primaryText="Books" key="mi2" />,
        <MenuItem primaryText="Flights" key="mi3" />,
        <MenuItem primaryText="Apps" key="mi4" />
    ]
}

export default Header
