'use client'

import Button from '@/components/Button'
import Header from '@/components/Header'
import Page from '@/components/Page'
import { color17, color18 } from '@/constants/colors'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { styled } from 'styled-components'

export default function Request() {
   const [logged, setLogged] = useState(false)
   const router = useRouter()
   const path = usePathname()

   return (
      <>
         <Header />
         <Container>
         <section>Estou na tela {path}</section>
         
         {!logged && (
               <>
                  <p>É necessário realizar o login para solicitar doações</p>
                  <GoToLogin onClick={() => router.push('/login')}>Fazer Login</GoToLogin>
               </>
            )}
         </Container>
      </>
   )
}
const Container = styled(Page)`
   justify-content: center;
   background-color: ${color17};
   color: ${color18};
   section {
      position: fixed;
      right: 10px;
      top: 13vh;
      text-align: end;
   }
`

const GoToLogin = styled(Button)`
   width: 30%;
   height: 60px;
   margin-top: 50px;
`

const Back = styled.button`
   margin-top: 20px;
   width: 200px;
   height: 50px;
`
