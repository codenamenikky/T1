import React, { Component } from "react";
import { graphql } from "gatsby";

import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";

import Layout from '../components/Layout'

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, data, ...props } = this.props;

    return (
      <MDXProvider
        components={{
          h1: ({ children, ...props }) => (
            <h1 {...props}>{children}</h1>
          ),
          wrapper: "article"
        }}
      >
      <Layout>
        <div>
          <div>{children}</div>
          <MDXRenderer {...props}>{data.mdx.code.body}</MDXRenderer>
        </div>
        </Layout>
      </MDXProvider>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`;