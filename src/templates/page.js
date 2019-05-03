import React, { Component } from "react"
import { graphql } from "gatsby"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    console.log(currentPage)

    return (
      <div>
        <h1>{currentPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />

        <p>{currentPage.date}</p>
        <p>{currentPage.slug}</p>
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
