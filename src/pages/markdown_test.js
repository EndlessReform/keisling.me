import React from "react"
import styles from "./temp_styles.module.css"

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

function main (props) {
  return (
  <div className={styles.wrapper}>
    <Title
      headline={"The Lion and the Unicorn"}
    ></Title>
    <Meta
      tags={"Keyboards"}
      word_count={"837"}
      pub_date={"2020-04-08"}
    ></Meta>
    <div className={styles.article_wrapper}>
      <Body>
        <TOC>
          <TOContent
            dest={"https://www.google.com"}
            content={"England Your England"}
          ></TOContent>
          <TOContent
            dest={"https://www.google.com"}
            content={"Shopkeepers at War"}
          ></TOContent>
          <TOContent
            dest={"https://www.google.com"}
            content={"The English Revolution"}
          ></TOContent>
        </TOC>
        <h1>One. England Your England</h1>
        <hr />
        <h2>I.</h2>
        <p>As I write, highly civilized human beings are flying overhead, trying to kill me.

        They do not feel any enmity against me as an individual, nor I against them. They are ‘only doing their duty’, as the saying goes. Most of them, I have no doubt, are kind-hearted law-abiding men who would never dream of committing murder in private life. On the other hand, if one of them succeeds in blowing me to pieces with a well-placed bomb, he will never sleep any the worse for it. He is serving his country, which has the power to absolve him from evil.</p>
      </Body>
    </div>
  </div>
  )
}

export default main
