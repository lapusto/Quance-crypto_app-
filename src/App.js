import styles from './App.module.scss';

import  Header  from 'pages/Header/Header';
import Sidebar from 'pages/Sidebar/Sidebar';


function App() {
  return (
   <div className={styles.App}>
    <Header />
    <Sidebar/>
   </div>
    
   
  );
}

export default App;
