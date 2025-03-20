import React, { FC } from 'react'
import Meta from './Meta'
import { GlobalStyles, Flex, Theme, Sans } from '@favish/canvas'
import theme from '../theme/theme'
import Navigation from './Navigation'

const Layout: FC<any> = ({ siteTitle, siteDescription, children }) => (
  <>
    <Theme theme={theme}>
      <GlobalStyles />
      <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
      <Flex width={1} justifyContent="center" mt={100}>
        <Navigation />
        <Flex flexDirection="column" ml={4} width={800}>
          <Sans fontSize={42} fontWeight={600} lineHeight="34px">
            {siteTitle}
          </Sans>
          {children}
        </Flex>
      </Flex>
    </Theme>
  </>
)

export default Layout
