import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import styles from "./essay.module.css"

import Title from "../components/article_title.js"
import Body from "../components/article_body.js"
import Meta from "../components/article_meta.js"
import TOC from "../components/article_toc.js"

function TOContent (props) {
  return (
  <li>
    <a href={props.dest}>{props.content}</a>
    <hr />
  </li>
  )
}

function main ({props, data}) {
  const post = data.markdownRemark
  return (
  <div className={styles.wrapper}>
    <Helmet>
      <title>Jacob | {post.frontmatter.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
    </Helmet>
    <Title
      headline={post.frontmatter.title}
      subheadline={post.frontmatter.subtitle}
    ></Title>
    <Meta
      tags={post.frontmatter.tags}
      word_count={post.wordCount.words}
      pub_date={post.frontmatter.date}
    ></Meta>
    <div className={styles.article_wrapper}>
      <Body>
        <TOC>
          {data.markdownRemark.headings.map(({ value }) => {
            return(
              <TOContent content={value}></TOContent>
            )
            })
          }
        </TOC>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Body>
    </div>
  </div>
  )
}

export default main

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      headings(depth: h1) {
        value
        depth
      }
      wordCount {
        words
      }
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        subtitle
        tags
      }
    }
  }
`
