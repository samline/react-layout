/* Packages */
import { _interop } from '@honeybee-js/js-interop'
import styled, { css } from 'styled-components'
import { compose, flexbox, grid, layout, space } from 'styled-system'

export const Flex = _interop(styled).div`
  align-items: center;
  display: flex;

  ${(props) =>
    props.show &&
    css`
      outline: 2px dashed;
    `}

  ${compose(flexbox, grid, layout, space)}
`
