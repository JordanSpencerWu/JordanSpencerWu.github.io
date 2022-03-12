import React, { ReactElement, useEffect } from "react"
import { graphql } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { SPACE } from "../../utils/constants"
import "./style/index.less"

export default (props): ReactElement => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })

  const {
    data: {
      markdownRemark: {
        frontmatter: { author, title, seo_description },
        html,
      },
    },
  } = props

  useEffect(() => {
    // @ts-ignore
    window.MathJax && window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])
  })

  const authorNames = author.join(`, `)

  return (
    <Layout>
      <SEO title={title} description={seo_description} />
      <div className="book-note-container">
        <animated.div style={spring} className="book-note-content-container">
          <h1 className="book-note-title">{title}</h1>
          <small>By {authorNames}</small>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </animated.div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        seo_description
        title
      }
    }
  }
`
