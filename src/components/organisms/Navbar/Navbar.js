import { Flex, Hide, Icon, Link } from '~/components/atoms'
import { MenuButton } from '~/components/molecules'
import { toggleNav } from '~/store/navbar/action'
import React from 'react'
import { connect } from 'react-redux'

import { Wrapper } from './styles'

const Navbar = props => {
  return (
    <Wrapper opaque reverse {...props}>
      <MenuButton isOpen={props.isOpen} toggleNav={props.toggleNav} />

      <Link href="/portfolio">
        <Icon name="logo" />
      </Link>

      <Hide sm width="100%">
        <Flex justify="space-around" width="100%">
          <Link m={0} href="/stack">
            Stack
          </Link>
          <Link href="/allApps">MicroApps</Link>
          <Link href="/apiApps">APIs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      </Hide>

      {/* <StyledIcon href="/allApps" name="briefcase" height={100} /> */}
    </Wrapper>
  )
}

const mapStateToProps = state => ({ isOpen: state.navbar.isOpen })

export default connect(mapStateToProps, { toggleNav })(Navbar)
