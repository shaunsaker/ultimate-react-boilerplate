import { Link as LinkPrimitive } from 'react-router-dom'
import styled from 'styled-components'

import { ANCHOR_TEXT_CSS } from '../anchorText/AnchorText'

export const Link = styled(LinkPrimitive)`
  all: unset;
  cursor: pointer;
  ${ANCHOR_TEXT_CSS};
`
