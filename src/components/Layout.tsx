import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import NetworkBar from './NetworkBar';

export default function Layout() {
  return (
    <div className="flex min-h-[100dvh] flex-col" style={{ background: '#F8FAFC' }}>
      <NetworkBar />
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}
