'use client'

import Button from '@/components/Button'
import Header from '@/components/Header'
import Page from '@/components/Page'
import { color17, color18 } from '@/constants/colors'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { styled } from 'styled-components'

export default function About() {
   const [logged, setLogged] = useState(true)
   const router = useRouter()
   const path = usePathname()

   return (
      <>
         <Header />
         <Container>
            {/* Estou na tela {path}
            <Back onClick={() => router.push('/')}>Voltar</Back> */}
            {logged && (
               <h2>
                  Faça seu login antes
                  <GoToLogin onClick={() => router.push('/login')}>Login</GoToLogin>
               </h2>
            )}
         </Container>
      </>
   )
}
const Container = styled(Page)`
   background-color: ${color17};
   color: ${color18};
`
const GoToLogin = styled(Button)`
   height: 60px;
`

const Back = styled.button`
   margin-top: 20px;
   width: 200px;
   height: 50px;
`
