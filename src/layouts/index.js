import React,{Component,Fragment} from 'react';
import Head from './head'
import GridContainer from './grid-container'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import '../layouts/index.css'
 import Raven from 'raven-js';
class Template extends Component {
  render() {
    const {location, children } = this.props;
    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return (
      <Fragment>
      { process.env.NODE_ENV === 'production' ? Raven.config(`${process.env.SENTRY_DSN}`, { environment: 'production'}).install(): null }
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
