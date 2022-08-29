import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'
export default function Home({ data }) {
  /*console.log(data)
  const { title, description } = data.site.siteMetadata;*/


  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2>Projects!!!!!</h2>
        <h3>For Learning</h3>
        <p>By Ishan Goyal</p>
        <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} />
      {/**<p> { title } - { description }</p>*/}
    </section>
    </Layout>
  )
}

/*export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`*/

// Query added to use image from graphql not from static file
export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
//GatsbyImageSharpFluid It collects all the properties of fluid and using(...) we can add them all in fluid selector
