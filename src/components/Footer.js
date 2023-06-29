import { useContext } from 'react';
import DataContext from '../context/useDataContext';

function Footer() {
  const { posts } = useContext(DataContext);
  const today = new Date();
  const postCount = posts.length;
  return (
    <footer className="Footer">
      <p>{postCount} Blog Posts</p>
      <span>🗒</span>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
