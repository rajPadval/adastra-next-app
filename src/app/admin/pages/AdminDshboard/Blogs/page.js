import React from 'react'
import CreateBlogs from '@/app/admin/components/CreateBlogs';
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
        <CreateBlogs />
    </div>
  )
}

export default page