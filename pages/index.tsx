import { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { EntryList, NewEntry } from '@/components/ui';


const HomePage:NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{
            height: 'calc(100vh - 100px)'
          }}>
            <CardHeader title='Pending' />
            <NewEntry />
            <EntryList status='pending'/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{
            height: 'calc(100vh - 100px)'
          }}>
            <CardHeader title='In progress' />
            <NewEntry />
            <EntryList status='in-progress'/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{
            height: 'calc(100vh - 100px)'
          }}>
            <CardHeader title='Completed' />
            <NewEntry />
            <EntryList status='completed'/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}


export default HomePage;