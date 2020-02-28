import React from 'react'
import {css} from '@emotion/core'
import theme from '../../config/theme'
import {bpMaxMD, bpMaxSM} from '../lib/breakpoints'
import {rhythm, fonts} from '../lib/typography'
import Markdown from 'react-markdown'
import Container from 'components/container'

import heroImageRight from '../images/hero/path-right.svg'
import heroImageLeft from '../images/hero/path-left.svg'
import photoOfKent from '../images/hero/kent.png'

function Hero({
  children,
  title = `Hi, I'm Kent C. Dodds. I help people make the world better through quality software.`,
  text,
  background = `url(${heroImageRight}), url(${heroImageLeft}),
  linear-gradient(-213deg, #5e31dc 0%, #3155dc 100%)`,
  image = `${photoOfKent}`,
  headerColor, // pluk this out of the props so it's not applied to the section
  ...props
}) {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background: #3155dc;
        background-image: ${background};
        background-position: center right, center left;
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 0;
        position: relative;
        align-items: center;
        display: flex;
        padding-top: 40px;

        ${bpMaxMD} {
          background-size: cover;
        }
        ${bpMaxSM} {
          padding-top: 60px;
        }
      `}
      {...props}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          //justify-content: center;
          padding-bottom: 0;
          ${bpMaxMD} {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        <div
          css={css`
            display: none;
            visibility: hidden;
            ${bpMaxMD} {
              display: block;
              visibility: visible;
              width: 250px;
              height: 250px;
              //background: #241d44;
              ${image === photoOfKent &&
                `
                width: 160px;
              height: 160px;
              overflow: 'hidden';
              border-radius: 50%;
              background: #4b4ddf;
              `}
              background-image: url(${image});
              background-size: cover;
              background-position-y: 10px;
              background-repeat: no-repeat;
              margin-bottom: 25px;
            }
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <h1
            css={css`
              position: relative;
              z-index: 5;
              line-height: 1.5;
              margin: 0;
              max-width: ${rhythm(17)};
              font-size: 30px;
              height: 100%;
              display: flex;
              //align-self: center;
              padding-bottom: ${image === photoOfKent ? '40px' : '0'};
            `}
          >
            {title}
          </h1>
          {text && (
            <Markdown
              css={css`
                padding-bottom: 30px;
                p {
                  color: hsla(255, 100%, 100%, 0.9);
                  font-family: ${fonts.light};
                }
                max-width: 400px;
                margin-top: ${rhythm(0.5)};
                a {
                  text-decoration: underline;
                  color: hsla(255, 100%, 100%, 1);
                  :hover {
                    color: hsla(255, 100%, 100%, 0.9);
                  }
                }
              `}
            >
              {text}
            </Markdown>
          )}
          {children}
        </div>
        <div
          css={{
            marginRight: '-160px',
            width: 380,
            height: 336,
            display: 'flex',
            [bpMaxMD]: {
              display: 'none',
              visibility: 'hidden',
            },
          }}
        >
          <img
            src={image}
            alt="Kent C. Dodds"
            css={{maxWidth: '100%', marginBottom: 0}}
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
