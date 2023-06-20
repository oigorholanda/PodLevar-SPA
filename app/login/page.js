'use client'

import Button from '@/components/Button'
import Page from '@/components/Page'
import { color12, color13, color16, color17, color18 } from '@/constants/colors'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import { orange } from '@mui/material/colors'
import { publicDecrypt } from 'crypto'
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
            <TabContext value={value} >
               <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                  <ColoredTab onChange={handleChange} textColor="inherit" aria-label="lab API tabs example">
                     <Tab label="Usuário" value={0} />
                     <Tab label="Instituição" value={1} />
                  </ColoredTab>
               </Box>
               <TabPanel value={0}>
                  <div>
                     <label htmlFor="Email">Email</label>
                     <br />
                     <input
                        type="email"
                        placeholder="Email"
                        {...register('Email', { required: true, maxLength: 80 })}
                     />
                  </div>
                  <div>
                     <label htmlFor="password">Password</label>
                     <br />
                     <input
                        type="password"
                        placeholder="Password"
                        {...register('Password', { required: true, maxLength: 100 })}
                     />
                  </div>
               </TabPanel>
               <TabPanel value={1}>Item Two</TabPanel>
            </TabContext>

            <Submit type="submit">Enviar</Submit>
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
      color: ${color18};
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
  });

const Submit = styled(Button)`
   height: 50px;
   margin-top: 50px;
`
