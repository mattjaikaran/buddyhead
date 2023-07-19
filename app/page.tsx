'use client';

import Preloader from '@/components/Preloader';
import Providers from '@/components/Provider';
import SearchInput from '@/components/SearchInput';

import { store } from '@/store';
import { setStartupUsers } from '@/store/userSlice';
import Container from 'react-bootstrap/Container';
import sunset from '@/assets/images/sunset.jpg';

export default async function Home() {
  const request = await fetch('http://localhost:3000/api/search');
  const data = await request.json();
  store.dispatch(setStartupUsers(data));
  return (
    <main>
      <Container fluid>
        <h1>what up</h1>
        <img className="img-fluid" src={sunset.src} alt="whatup" />
        <Preloader users={data} />
        <Providers>
          <SearchInput />
        </Providers>
      </Container>
    </main>
  );
}
