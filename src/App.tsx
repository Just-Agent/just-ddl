import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';
import MyDDL from './pages/MyDDL';
import About from './pages/About';
import ContributeTopic from './pages/ContributeTopic';
import { LanguageProvider } from './lib/language';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<TopicDetail />} />
          <Route path="/my" element={<MyDDL />} />
          <Route path="/contribute" element={<ContributeTopic />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

