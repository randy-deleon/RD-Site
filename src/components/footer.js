import React from 'react';
import styled from 'styled-components'

const Footer = styled.footer`
    grid-area: footer;
    align-content: end;
    display: grid;
`;

const Copyright = styled.div`
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
`;

const HeartIcon = styled.span`
    text-shadow: 0 0 0 #555;
    height:10px;
    color: transparent;
`;
const IconContainer = styled.div`
    margin-top: 5px;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
`;
const IconLink = styled.a`
    width: 40px;
    height: 36px;
    overflow: hidden;
    border: none;
    padding: 8px;
    margin: 0 0 10px 0px;
`;
const ContentfulIcon = styled.svg`
    cursor: pointer;
    height:27px;
    margin-top:-1px;
`;

const GatsbyIcon = styled.svg`
    cursor:pointer;
`;
const NetlifyIcon = styled.svg`
    cursor:pointer;
`;

export default () => (
<Footer>
<Copyright>
    Made with <HeartIcon>&#x2764; </HeartIcon> using
    <IconContainer>
    <IconLink href="https://www.gatsbyjs.org/"> <GatsbyIcon  aria-labelledby="gatsby" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title id="gatsby">GatsbyJS</title><path fill="#555" d="M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z"/></GatsbyIcon>Gatsby</IconLink>
    <IconLink href="https://www.contentful.com/"><ContentfulIcon aria-labelledby="cotentful" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="12 10.5 70 70"><title id="cotentful">Contentful Headless CMS</title><ellipse cx="47.2" cy="45" fill="#555" rx="30" ry="30"/><path fill="#D7D7D7" d="M41.1,52.2c-2-1.8-3.1-4.4-3.1-7.2s1.1-5.4,3-7.2c1.6-1.6,1.6-4.1,0-5.7c-1.6-1.6-4.1-1.6-5.7,0c-3.2,3.3-5.3,7.9-5.3,13s2.1,9.7,5.4,13c1.6,1.6,4.1,1.6,5.7,0C42.6,56.4,42.6,53.9,41.1,52.2z"/><path fill="#9C9C9C" d="M41.1,37.8c1.8-2,4.4-3.1,7.2-3.1s5.4,1.1,7.2,3c1.6,1.6,4.1,1.6,5.7,0c1.6-1.6,1.6-4.1,0-5.7c-3.3-3.2-7.9-5.3-13-5.3s-9.7,2.1-13,5.4c-1.6,1.6-1.6,4.1,0,5.7C37,39.3,39.5,39.3,41.1,37.8z"/><path fill="#7B7B7B" d="M55.6,52.2c-1.8,2-4.4,3.1-7.2,3.1s-5.4-1.1-7.2-3c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7c3.3,3.2,7.9,5.3,13,5.3s9.7-2.1,13-5.4c1.6-1.6,1.6-4.1,0-5.7C59.8,50.7,57.2,50.7,55.6,52.2z"/><circle fill="#7B7B7B" cx="38.3" cy="34.9" r="4"/><circle fill="#656565" cx="38.3" cy="55.1" r="4"/></ContentfulIcon>Contentful</IconLink>
    <IconLink href="https://www.netlify.com/"><NetlifyIcon aria-labelledby="netlify" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title id="netlify">Netlify Hosting</title><path fill="#555" d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"/></NetlifyIcon>Netlify</IconLink>
    </IconContainer>
</Copyright>
</Footer>)
