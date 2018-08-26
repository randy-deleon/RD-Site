import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'

const BlogContainer = styled.div`
  background-color:#fff;
  padding:10px;
  border-top: 5px solid #e54b4b;
`;

 const BlogTitle = styled.h1`
  font-size: 1.45rem;
  line-height: 1;
  margin: 15px 15px 0px 15px;
 `;

 const BlogDate = styled.small`
  color: #e54b4b;
  font-weight: bolder;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 15px;
 `;

 const BlogTimeToRead = styled.small`
  color: #555;
  margin-left: 15px;
`;

 const BlogContent = styled.div`
  margin: 0px 0px 30px 0;
  padding:15px;
  & ol {
    margin:0px 20px;
    & li {
      margin:10px 0px;
    }
  }
  & a {
    color:#e54b4b;
  }
  & pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow:auto;
    overflow-wrap: break-word;
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    margin:10px 0px;
    padding: 6px 10px;
    border-radius: 3px;
    max-width:100vw;
    & code {
      overflow-x: auto;
    }
  }
  & img {
    margin:10px 0px;
    width:100%;
  }
 `;
class BlogPostTemplate extends Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    return (
      <Fragment>
        <Helmet title={`Blog - ${post.title}`} />
        <BlogContainer>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogDate>{post.publishDate}</BlogDate>
          <BlogTimeToRead>{post.body.childMarkdownRemark.timeToRead} min read</BlogTimeToRead>
          <BlogContent
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </BlogContainer>
        </Fragment>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`
