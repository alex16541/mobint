import {  useEffect, useState } from 'react'
import { PageLoader } from './components/PageLoader';
import { CompaniesListPage } from './components/CompaniesListPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  if (isLoading) return <PageLoader />

  return (<CompaniesListPage />)
}

export default App;
