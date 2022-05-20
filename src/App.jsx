import React from 'react';

import './App.css';
import Main from './Components/Main';
import Head from './Components/Head';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

    <div>
      <Head />
      <Main />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme={"colored"}
         />
    </div>

  );
}

export default App;

