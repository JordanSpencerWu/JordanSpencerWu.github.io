import React, { ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { SPACE } from "../../utils/constants"
import "./style/index.less"

export default (): ReactElement => {
  const {
    markdownRemark: {
      html,
      frontmatter: { author, seo_description, title },
    },
    allMarkdownRemark: { edges: electronicMusicAndSoundDesignNodes },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(
        fields: { slug: { eq: "/books/electronic-music-and-sound-design/" } }
      ) {
        html
        frontmatter {
          author
          seo_description
          title
        }
      }

      allMarkdownRemark(
        filter: {
          fields: { sourceInstanceName: { eq: "books" } }
          fileAbsolutePath: { regex: "/electronic-music-and-sound-design/.*/" }
        }
        sort: { fields: frontmatter___title }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const authorNames = author.join(SPACE)
  const electronicMusicAndSoundDesignLinks = electronicMusicAndSoundDesignNodes.map(
    ({ node }) => {
      const {
        fields: { slug },
        frontmatter: { title },
      } = node

      return {
        slug,
        title,
      }
    }
  )

  const renderChapters = electronicMusicAndSoundDesignLinks.map(
    ({ slug, title }) => (
      <Link key={slug} to={slug}>
        {title}
      </Link>
    )
  )

  return (
    <Layout>
      <SEO title={title} description={seo_description} />
      <div className="book-note-container">
        <div className="book-note-content-container">
          <h1>{title}</h1>
          <small>by {authorNames}</small>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <h3>Chapters</h3>
          {renderChapters}
        </div>
      </div>
    </Layout>
  )
}
