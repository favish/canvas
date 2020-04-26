import React from 'react'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

const BorderBox: React.FC<any> = ({ title, frontmatter, markdownBody }) => {
  return (
    <Layout siteTitle={title}>
      <div className="blog__body">
        <ReactMarkdown source={markdownBody} />
      </div>
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
