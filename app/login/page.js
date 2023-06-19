'use client'
import Header from "@/components/Header";
import Page from "@/components/Page";
import { color17, color18 } from "@/constants/colors";
import { styled } from "styled-components";

export default function Login() {

    return (<>
    <Header/>
    <Container>

        </Container></>)
}

const Container = styled(Page)`
   justify-content: center;
   background-color: ${color17};
   color: ${color18};
`