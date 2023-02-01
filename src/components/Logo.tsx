import React, { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'mui-image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Stack direction="row" spacing={2}>
     
      <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/abstract.png" alt="Certificate icon" width={50} height={40} />
              </Box>
               
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? '#00695c' : 'unset' } }}
      >
        Recon<span>Lab</span>
      </Typography>
      </Stack>
    </Box> 
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
