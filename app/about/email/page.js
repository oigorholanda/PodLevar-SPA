'use client'

import Link from 'next/link'
import { styled } from 'styled-components'
import {notFound } from 'next/navigation'

export default function Email() {
   return (
      <Link href="/">
        {notFound()}
      </Link>
   )
}

const Back = styled.button`
   margin-top: 20px;
   width: 200px;
   height: 50px;
`
