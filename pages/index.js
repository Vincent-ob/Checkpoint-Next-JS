// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;