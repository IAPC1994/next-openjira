import { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';


const HomePage:NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>
        In Development...
      </Typography>
    </Layout>
  )
}


export default HomePage;