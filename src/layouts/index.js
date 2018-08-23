import React,{Component,Fragment} from 'react';
import Head from './head'
import GridContainer from './grid-container'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import Raven from 'raven-js'
import '../layouts/index.css'
class Template extends Component {
  render() {
    process.env.NODE_ENV === 'production' ? Raven.config(`https://069eb3a55db741da8e44e285551621f4@sentry.io/1266601`).install(): null;
    const {location, children } = this.props;
    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }
    return (
      <Fragment>
        <Head />
        <GridContainer>
           {(location.pathname === '/') ? null : <Header nonav />}
          <Main>
            {children()}
          </Main>
          <Footer />
        </GridContainer>
      </Fragment>
    )
  }
}

export default Template
