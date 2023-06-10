'use client'

import Header from "@/components/Header"
import { color17, color18 } from "@/constants/colors"
import { useRouter } from "next/navigation"
import { styled } from "styled-components"

export default function About() {
    const router = useRouter()

    return(
        <>
        <Header/>
        <Container >
    Estou na tela de nova doação
    <Back onClick={() => router.push('/')}>Voltar</Back>
    </Container></>
)
}
const Container = styled.div`
    background-color: ${color17};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:${color18}
`

const Back = styled.button`
    margin-top: 20px;
    width: 200px;
    height: 50px;
`