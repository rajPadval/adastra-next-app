import React from 'react'
import CreateEvents from '@/app/admin/components/CreateEvents';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const page = () => {

    const isAdminAuth = useSelector((state) => state.admin.isAdminAuth);
    const Router = useRouter();

    if (isAdminAuth && localStorage.getItem("isAdminAuth")) {
        Router.push("/pages/AdminDashboard");
        return null;
      } else {
        Router.push("/admin/pages");
      }

  return (
    <div>
        <CreateEvents />
    </div>
  )
}

export default page