// Home.js
import React, { useEffect } from 'react';
import { useUser } from './UserContext'; // Import the context
import Hero from './hero';
import WhatsInside from './WhatsInside';
import HowItWorks from './HowItWorks';

function Home() {
  const { userData } = useUser(); // Access user data from context

  useEffect(() => {
    document.title = userData ? `Welcome, ${userData.email}!` : 'LootBox - Home';
  }, [userData]);

  return (
    <div>
      <Hero />
      <WhatsInside />
      <HowItWorks />
    </div>
  );
}

export default Home;