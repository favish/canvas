import React from 'react'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const CodeWrapper = styled.div`
  h2 {
    font-weight: 500;
    margin-top: 20px;
  }
  pre {
    padding: 10px;
    background-color: rgba(240, 240, 240, 1);
    border-radius: 3px;
  }

  table {
    width: 100%;
  }
  th {
    text-align: left !important;
  }
  td {
    width: 33%;
    text-align: left !important;
    border-bottom: solid 1px aquamarine;
  }
`

const BorderBox: React.FC<any> = ({ title, frontmatter, markdownBody }) => {
  return (
    <Layout siteTitle={title}>
      <CodeWrapper>
        <ReactMarkdown source={markdownBody} />
      </CodeWrapper>
    </Layout>
  )
}

export default BorderBox

export async function getStaticProps() {
  const content = await import(`../markdowns/index.md`)
  const data = matter(content.default)

  return {
    props: {
      title: 'Canvas',
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
