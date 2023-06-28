import Layout from './Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Missing from './pages/Missing';

import { Routes, Route } from 'react-router';
import { DataProvider } from './context/useDataContext';

function App() {
  return (
    <article className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="edit/:id" element={<EditPost />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
    </article>
  );
}

export default App;
