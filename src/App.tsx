import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';
import MyDDL from './pages/MyDDL';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:topicId" element={<TopicDetail />} />
        <Route path="/my" element={<MyDDL />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
