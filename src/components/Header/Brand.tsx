import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export const StyledBrand = styled.h1`
  margin-left: 16px;
  margin-right: auto;
`

export type BrandProps = HTMLAttributes<HTMLHeadingElement>

const Brand: FC<BrandProps> = ({ children, ...rest }) => {
  return <StyledBrand {...rest}>{children}</StyledBrand>
}

export default Brand
