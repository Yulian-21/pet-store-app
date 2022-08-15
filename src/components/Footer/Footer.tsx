import React from 'react'
import f from './Footer.module.css'
import { Container, Grid, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer className={f.footer}>
      <Box px={{ xs: 3, sm: 10 }} sx={{ color: 'secondary' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href='/' color='inherit'>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href='/' color='inherit'>
                  Login
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Pets</Box>
              <Box>
                <Link href='/' color='inherit'>
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  History
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Pet Shop {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer