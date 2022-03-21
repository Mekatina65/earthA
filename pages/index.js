import Link from 'next/link'
import Footer from '../comp/footer';
import Navbar from '../comp/navbar';
import styles from '../styles/Home.module.css'

const Home = () => {
  return ( 

    <div>
    <Navbar />
        <Link a href="/cont/northamerica"><a> North America</a></Link> <br />
        <Link a href="/cont/southamerica"><a> South America</a></Link>
    <Footer />
        </div>
   );
}
 
export default Home;