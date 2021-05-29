import React from 'react'
import PropTypes from "prop-types"
import {ThemeProvider} from 'styled-components';
import {theme} from '../../theme'
import '../../assets/fonts/cerebrisans/cerebrisans.css'
import '../../assets/fonts/font-awesome/font-awesome.css'
import '../../assets/css/bootstrap.css';
import {GlobalStyle} from '../../assets/css/main-style'
//import ScrollToTop from '../../components/ui/Driftchat'
// import Transition from '../../components/transition'
import Driftchat from '../../components/ui/Driftchat'

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <GlobalStyle/>
                {children}                
                <Driftchat/>
            </div>
        </ThemeProvider>
    )
}
 
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default Layout