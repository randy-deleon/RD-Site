import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ArticlesContainer = styled.div`
    background-color:#fff;
    border-top: 5px solid #e54b4b;
`;
const Articles = styled.div`
    padding:15px;
`;
const PulishedDate = styled.small`
    color: #e54b4b;
    font-weight: bolder;
    letter-spacing: 1px;
    text-transform: uppercase;
`;
const TimeToRead = styled.small`
    color: #555;
    margin-left: 15px;
`;
const PreviewDescription = styled.p`
    margin-top:15px;
`;
const PreviewLink = styled(Link)`
    color: #555;
    text-decoration:none;
    & svg{
      max-height: 13px;
      max-width: 13px;
      margin-right: 10px;
    }
    &:hover ${PreviewLink} {
      fill: #e54b4b;
      color:#e54b4b;
    }
    & li {
      margin:10px 0;
    }
`;

export default ({ article }) => (
  <ArticlesContainer>
    <Articles>
    <h3>
      <PreviewLink to={`/blog/${article.slug}`}>
        <svg aria-labelledby="bloglink" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title id="bloglink"></title>
          <path d="M13.757 19.868a1.62 1.62 0 0 1-1.149-.476c-2.973-2.973-2.973-7.81 0-10.783l6-6C20.048 1.169 21.963.376 24 .376s3.951.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743a1.624 1.624 0 1 1-2.298-2.298l2.743-2.743a4.38 4.38 0 0 0 0-6.187c-.826-.826-1.925-1.281-3.094-1.281s-2.267.455-3.094 1.281l-6 6a4.38 4.38 0 0 0 0 6.187 1.624 1.624 0 0 1-1.149 2.774z"/>
          <path d="M8 31.625a7.575 7.575 0 0 1-5.392-2.233c-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743a1.624 1.624 0 1 1 2.298 2.298l-2.743 2.743a4.38 4.38 0 0 0 0 6.187c.826.826 1.925 1.281 3.094 1.281s2.267-.455 3.094-1.281l6-6a4.38 4.38 0 0 0 0-6.187 1.624 1.624 0 1 1 2.298-2.298c2.973 2.973 2.973 7.81 0 10.783l-6 6A7.575 7.575 0 0 1 8 31.625z"/>
        </svg>
        {article.title}
      </PreviewLink>
    </h3>
    <PulishedDate>{article.publishDate}</PulishedDate>
    <TimeToRead>{article.description.childMarkdownRemark.timeToRead} min read</TimeToRead>
    <PreviewDescription
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    </Articles>
  </ArticlesContainer>
)
