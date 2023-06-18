/* Packages */
import { _interop } from '@honeybee-js/js-interop'
import styled, { css } from 'styled-components'
import { compose, layout, position, space } from 'styled-system'

export const Box = _interop(styled).div`
  display: block;
  margin: 0 auto;
  padding: 0rem 0.625rem;
  width: 100%;

  ${(props) =>
    !props.fullWidth &&
    css`
      max-width: 85.375rem;
    `}

  ${compose(layout, position, space)}
`
