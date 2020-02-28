import React from 'react'
import Link from '../components/link'
import {css} from '@emotion/core'
import theme from '../../config/theme'
import {bpMaxSM} from '../lib/breakpoints'
import SubscribeForm from './forms/subscribe'
import {Twitter, GitHub, YouTube, RSS} from './social'
import Container from './container'

import Signature from '../images/signature.png'

const Footer = ({subscribeForm = <SubscribeForm />, maxWidth}) => (
  <footer
    css={css`
      background: ${theme.colors.purple_dark};
      color: white;
      margin-top: 70px;
    `}
  >
    <Container
      maxWidth={maxWidth}
      css={css`
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${bpMaxSM} {
          padding-top: 0;
          flex-direction: column;
        }
      `}
    >
      {subscribeForm ? (
        <div css={{marginTop: -40}}>
          {subscribeForm}
          <br />
          <br />
        </div>
      ) : null}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          div,
          img {
            margin: 50px 0;
            ${bpMaxSM} {
              margin: 20px 0;
            }
          }
          ${bpMaxSM} {
            align-items: center;
          }
        `}
      >
        <div>
          <Twitter />
          <GitHub />
          <YouTube />
          <RSS />
        </div>

        <Link to="/" aria-label="Return to homepage">
          <img
            src={Signature}
            alt="Kent C. Dodds"
            css={css`
              max-width: 100px;
            `}
          />
        </Link>
      </div>
    </Container>
  </footer>
)

export default Footer
