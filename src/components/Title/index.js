import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo_white.svg'
import Wordmark from '../../assets/wordmark_white.svg'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <img width={'30px'} src={Logo} style={{marginTop: '5px'}} alt="logo" />
          </UniIcon>
          <img width={'120px'} style={{ marginLeft: '8px', marginTop: '0px' }} src={Wordmark} alt="logo" />
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
