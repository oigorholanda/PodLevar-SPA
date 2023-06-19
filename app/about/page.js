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
            <section>Estou na tela {path}</section>
            <p>
               Somos uma plataforma focada em conectar pessoas que desejam fazer doações com pessoas ou organizações que
               precisam de ajuda, facilitando o processo de doação e ajudando a torná-lo mais transparente. Com nossa
               plataforma, os doadores podem buscar por pedidos de ajuda e ver como suas doações estão sendo usadas,
               enquanto os beneficiários podem criar solicitações de doação e receber ajuda diretamente dos doadores. A
               ideia é criar uma comunidade colaborativa, incentivando a economia circular, onde todos possam contribuir
               para tornar o mundo um lugar melhor.
            </p>
            <Back onClick={() => router.push('/')}>Voltar</Back>
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
   p{
      padding: 0 10vw;
      text-align: justify;
   }
`

const Back = styled.button`
   margin-top: 20px;
   width: 200px;
   height: 50px;
`
