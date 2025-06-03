import React from 'react';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <NavigationBar />
    <main style={{ flex: '1' }}>
      <AppRouter />
    </main>
    <Footer />
  </div>
);

export default App;
