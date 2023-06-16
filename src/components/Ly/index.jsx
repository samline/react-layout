/* Styles */
import { Ly as LyStyled } from './styles.js'

/**
 * Ly - "div" as default
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns Component
 *
 * @styleSystem * - https://styled-system.com/table
 */

export const Ly = ({ children, innerRef, ...props }) => (
  <LyStyled {...props} ref={innerRef}>
    {children}
  </LyStyled>
)
