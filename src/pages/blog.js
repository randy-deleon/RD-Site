// @ts-nocheck
import React, {Component,Fragment} from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import ArticlePreview from '../components/article-preview'
import styled  from 'styled-components'

const ArticleContainer = styled.div`
  display: grid;
  grid-gap: 15px;
`;

const Title = styled.h2`
  letter-spacing:2px;
  text-transform: uppercase;
  text-align: center;
`;
const ArticleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ArticleItem = styled.li`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-two-color, #fff);
`;

class ArticleIndex extends Component {

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Fragment>
        <Helmet title="Blog"/>
        <ArticleContainer>
          <Title className="section-headline">Blog</Title>
          <ArticleList>
            {posts.map(({ node }) => {
              return (
                <ArticleItem key={node.slug}>
                  <ArticlePreview article={node} />
                </ArticleItem>
              )
            })}
          </ArticleList>
        </ArticleContainer>
        </Fragment>
    )
  }
}

export default ArticleIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
        }
      }
    }
  }
`
