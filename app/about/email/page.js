'use client'

import { AppBar, Box, Button, Grid, Stack, Tab, Tabs } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

export default function Home() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()
   const [store, setStore] = useState({ test1: '', test2: '', test3: '' })
   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   function TabPanel(props) {
      const { children, value, index, ...other } = props

      return (
         <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
         >
            {value === index && <Box p={3}>{children}</Box>}
         </div>
      )
   }

   const onSubmit = (data) => {
      setStore({
         ...store,
         ...data,
      })
   }

   return (
      <Grid
         container
         height="100vh"
         alignItems="center"
         justifyContent="center"
         direction="column"
         gap="30px"
         bgcolor="salmon"
      >
         <h1>Using Material UI with Next.js 13</h1>

         <StyledTabs value={value} onChange={handleChange} textColor="white" aria-label="simple tabs example">
            <Tab label="text" />
            <Tab label="contained" />
            <Tab label="OMG" />
         </StyledTabs>

         <TabPanel value={value} index={0}>
            <form onSubmit={onSubmit}>
               <input placeholder="form1" {...register('test1')} />
               <input type="submit" />
            </form>
         </TabPanel>
         <TabPanel value={value} index={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input placeholder="form2" {...register('test2')} />
               <input type="submit" />
            </form>
         </TabPanel>
         <TabPanel value={value} index={2}>
            <p>omgalul</p>
         </TabPanel>

         <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                     <Tab label="Item One" value="1" />
                     <Tab label="Item Two" value="2" />
                     <Tab label="Item Three" value="3" />
                  </TabList>
               </Box>
               <TabPanel value={1}>Item One</TabPanel>
               <TabPanel value={2}>Item Two</TabPanel>
               <TabPanel value={3}>Item Three</TabPanel>
            </TabContext>
         </Box>
      </Grid>
   )
}

const StyledTabs = styled(Tabs)``
