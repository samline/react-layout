/* Packages */
import { _interop } from '@honeybee-js/js-interop'
import styled from 'styled-components'
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system'

export const Ly = _interop(styled).div`
  ${compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )}
`
