import { useContext } from 'react';
import DataContext from '../context/useDataContext';
import { Link } from 'react-router-dom';

function Footer() {
  const { posts } = useContext(DataContext);
  const today = new Date();
  const postCount = posts.length;
  return (
    <footer className="Footer">
      <p>
        <Link to={'/'}>{postCount} Blog Posts</Link>
      </p>
      <span>
        <Link to={'/post'}>🗒</Link>
      </span>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
