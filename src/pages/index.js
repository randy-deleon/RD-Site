// @ts-nocheck
import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get';
import SimpleHero from '../components/simple-hero'

class HomeIndex extends Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges');
    return (
      <Fragment>
          <Helmet title="randydeleon.com" />
          <SimpleHero person={author} />
      </Fragment>
    )
  }
}
export default HomeIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
        }
      }
    }
  }
`