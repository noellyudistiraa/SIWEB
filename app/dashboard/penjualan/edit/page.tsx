// app/dashboard/penjualan/edit/page.tsx  
import { Suspense } from 'react';  
import EditPenjualanForm from '@/app/dashboard/penjualan/edit/edit-form'

export default function EditPenjualanPage() {  
  return (  
    <Suspense fallback={<div>Loading...</div>}>  
      <EditPenjualanForm />  
    </Suspense>  
  );  
}  
