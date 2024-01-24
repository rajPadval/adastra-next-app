"use client"

import React from 'react'
import AdminLogin from '@/app/admin/components/AdminLogin'
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
        <AdminLogin />
    </div>
  )
}

export default page