import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'
export default function ProjectDetails({ data }) {

  const { html } = data.markdownRemark;
  const { title, stack, featured } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featured.childImageSharp.fluid} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html}} /> {/**It is used to represent html data from file */}
      </div>
    </Layout> 
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`