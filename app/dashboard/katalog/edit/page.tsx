import { Suspense } from 'react';  
import EditKatalogForm from '@/app/dashboard/katalog/edit/edit-form';  

export default function EditKatalogPage() {  
  return (  
    <Suspense fallback={<div>Loading...</div>}>  
      <EditKatalogForm />  
    </Suspense>  
  );  
}  
