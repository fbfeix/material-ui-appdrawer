
import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MediaQuery from 'react-responsive'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export * from './Header.jsx'
import Header from './Header.jsx'

class AppContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        this._toggle = this._toggle.bind(this)
    }

    _toggle(e) {
        e.preventDefault()
        //this.leftNav.toggle()
        this.setState({open: !this.state.open})
    }

    render () {

        const {appTitle, children, drawerContent, minWidth} = this.props

        return <MuiThemeProvider >
            <div>

                <Header onMenuTouchTap={this._toggle} title={appTitle}/>
                <MediaQuery maxWidth={minWidth}>
                <Drawer
                    ref={(ref) => this.leftNav = ref}
                    docked={false}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}>
                        {drawerContent}
                    </Drawer>
                </MediaQuery>


                    <div>
                        {children}
                    </div>
            </div>
        </MuiThemeProvider >
    }
}

AppContainer.propTypes = {
    drawerContent: PropTypes.node,
    appTitle: PropTypes.string,
    minWidth: PropTypes.number,
}

AppContainer.defaultProps = {
    appTitle: 'Awesome App',
    minWidth: 760,
}


export default AppContainer
