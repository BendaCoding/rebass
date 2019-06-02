import React from 'react'
import { Link } from '@rebass/emotion'
import { Link as GLink } from 'gatsby'

export default props =>
  <Link
    {...props}
    as={GLink}
  />
