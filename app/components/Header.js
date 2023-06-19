'use client'

import Link from 'next/link'
import { styled } from 'styled-components'
import { BiDonateHeart } from 'react-icons/bi'
import { color12, color15 } from '@/constants/colors'

export default function Header() {
   return (
      <Container>
         <Link href="/">
            <h1>
               {' '}
               PodLevar <BiDonateHeart size={41} className="icon" />
            </h1>
         </Link>
         <Link href="/about">
            <h2>Sobre a plataforma</h2>
         </Link>

         <Link href="/donations">
            <h2>Ver doações</h2>
         </Link>

         <Link href="/new/donation">
            <h2>Quero Doar</h2>
         </Link>

         <Link href="/new/request">
            <h2>Solicitar</h2>
         </Link>
      </Container>
   )
}

const Container = styled.div`
   width: 100vw;
   height: 10vh;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   background-color: ${color15};
   padding: 2rem;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;
   color: white;
   h1 {
      display: flex;
      align-items: flex-end;
      gap: 0.8rem;
   }
   .icon {
      color: ${color12};
      margin-bottom: 2px;
   }
`
