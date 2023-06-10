'use client'

import Link from 'next/link'
import { styled } from 'styled-components'

export default function Email() {
   return (
      <Link href="/">
         <Back>Mail me</Back>
      </Link>
   )
}

const Back = styled.button`
   margin-top: 20px;
   width: 200px;
   height: 50px;
`
