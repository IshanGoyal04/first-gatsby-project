import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({ data }) {
  console.log(data);
  //const projects = data.allMarkdownRemark.nodes;
  const projects = data.projects.nodes;
  const contact = data.contacts.siteMetadata.contact;
  return (
    <Layout>
    <div className={styles.portfolio}>
      <h2>Projects Portfolio</h2>
      <h3>Projects & websites I have Created.</h3>
      <div className={styles.projects}>
        {projects.map(project => (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
      <p>Like what you see? Email me at { contact } for a quote!</p>
    </div>
    </Layout>
  )
}

// export page query

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contacts: site {
    siteMetadata {
      contact
    }
  }
}
`
