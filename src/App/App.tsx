import React from 'react';
import AppRouter from '../routes/router';
import Interceptor from '@/services/interceptors';

const App = () => {
  return <Interceptor component={ <AppRouter/>}/>
  
}

export default App
