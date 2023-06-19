'use client'

import Header from "@/components/Header"
import Page from "@/components/Page"
import { color17, color18 } from "@/constants/colors"
import { usePathname, useRouter } from "next/navigation"
import { styled } from "styled-components"

export default function Donations() {
    const router = useRouter()
    const path = usePathname()

    return(
        <>
        <Header/>
        <Container>
    <section>Estou na tela {path}</section>
    <p>Ainda não há doações registradas</p>
    <Back onClick={() => router.push('/')}>Voltar</Back>
    </Container></>
)
}
const Container = styled(Page)`
justify-content: center;
    background-color: ${color17};
    color:${color18};
    section {
      position: fixed;
      right: 10px;
      top: 13vh;
      text-align: end;
   }
`

const Back = styled.button`
    margin-top: 20px;
    width: 200px;
    height: 50px;
`