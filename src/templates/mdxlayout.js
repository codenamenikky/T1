import { Box, Button, Heading, Image, Text } from 'grommet'
import { Link, graphql } from 'gatsby'
import { Next as NextIcon, Previous as PreviousIcon } from 'grommet-icons'
import Helmet from 'react-helmet'
import React from 'react'
import get from 'lodash/get'

import Layout from '../components/Layout'

export default props => {
      return (
      <Layout>
        {props.children}
        {props.children}
      </Layout>
    )
  }


