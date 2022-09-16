import styles from './App.module.scss';
import  Header  from 'pages/Header/Header';
import Sidebar from 'pages/Sidebar/Sidebar';
import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from 'pages/Dashboard/Dashboard';
import { Exchange } from 'pages/Exchange/Exchange';
import { Algorithms } from 'pages/Algorithms/Algorithms';
import { Settings } from 'pages/Settings/Settings';
import { Support } from 'pages/Support/Support';


function App() {
  return (
   <div className={styles.App}>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="exchange" element={<Exchange/>}/>
      <Route path="algorithms" element={<Algorithms/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="support" element={<Support/>}/>

    </Route>
  </Routes>
   </div>
    
   
  );
}

export default App;
