import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home = () => {
  return ( 

    <div>
    
        <Link a href="/cont/northamerica"><a> North America</a></Link> <br /> 
        <Link a href="/cont/southamerica"><a> South America</a></Link>
  
        </div>
   );
}
 
export default Home;