'use client'

import Header from '@/components/Header'
import Page from '@/components/Page'
import { color17, color18 } from '@/constants/colors'
import { usePathname, useRouter } from 'next/navigation'
import { styled } from 'styled-components'

export default function About() {
   const router = useRouter()
   const path = usePathname()

   return (
      <>
         <Header />
         <Container>
            Estou na tela {path}
            <Back onClick={() => router.push('/')}>Voltar</Back>
         </Container>
      </>
   )
}
const Container = styled(Page)`
   background-color: ${color17};
   color: ${color18};
`

const Back = styled.button`
   margin-top: 20px;
   width: 200px;
   height: 50px;
`
