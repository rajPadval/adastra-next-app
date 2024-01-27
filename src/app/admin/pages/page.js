"use client"

import React from 'react'
import AdminLogin from '@/app/admin/components/AdminLogin'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const page = () => {

  const isAdminAuth = useSelector((state) => state.admin.isAdminAuth);
  const Router = useRouter();

  return (
    <div>
        {isAdminAuth ? Router.push("/admin/pages/AdminDshboard") : <AdminLogin />}
    </div>
  )
}

export default page