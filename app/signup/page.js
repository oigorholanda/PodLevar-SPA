'use client'

import Button from '@/components/Button'
import Page from '@/components/Page'
import { color12, color16, color17, color18 } from '@/constants/colors'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab, TextField } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiDonateHeart } from 'react-icons/bi'
import { styled } from 'styled-components'

export default function Login() {
   const router = useRouter()
   const [value, setValue] = useState(0)
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()
   const onSubmit = (data) => console.log(data)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   console.log(watch('Email')) // watch input value by passing the name of it

   return (
      <Container>
         <h2 onClick={() => router.push('/')}>
            PodLevar <BiDonateHeart size={41} className="icon" />
         </h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <TabContext value={value}>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <ColoredTab onChange={handleChange} textColor="inherit" aria-label="lab API tabs example">
                     <Tab label="Sou doador" value={0} />
                     <Tab label="Sou instituição" value={1} />
                  </ColoredTab>
               </Box>
               <TabPanel value={0}>
                  <div>
                     <label htmlFor="Email">Email</label>
                     <br />
                     <Field
                        type="email"
                        placeholder="Email"
                        {...register('Email', { required: true, maxLength: 80 })}
                     />
                  </div>
                  <div>
                     <label htmlFor="password">Senha</label>
                     <br />
                     <Field
                        type="password"
                        placeholder="Senha"
                        {...register('Password', { required: true, maxLength: 100 })}
                     />
                  </div>
                  <Link href="/login">Já está inscrito? Faça login</Link>
                  <Submit type="submit">Enviar</Submit>
               </TabPanel>
               <TabPanel value={1}>Em Breve</TabPanel>
            </TabContext>
         </form>
      </Container>
   )
}

const Container = styled(Page)`
   background: linear-gradient(to bottom, ${color16}, ${color17});

   form {
      width: 30%;
      background-color: white;
      border-radius: 10px;
      padding: 10px 20px;
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
   }
   .icon {
      color: ${color12};
      margin-top: 3px;
   }
   h2 {
      cursor: pointer;
   }
   a {
      font-size: 15px;
      text-decoration: underline;
   }
   label {
      font-size: 20px;
   }
`

const ColoredTab = styled(TabList)({
   '& .MuiTabs-indicator': {
      backgroundColor: `${color12}`,
   },
   '&.Mui-selected': {
      color: `${color12}`,
   },
   '&.Mui-focusVisible': {
      backgroundColor: 'red',
   },
})

const Submit = styled(Button)`
   height: 50px;
   margin-top: 50px;
`

const Field = styled(TextField)`
   margin-top: 8px;
   border-color: ${color12};
`
