"use client"
import React from 'react'
import AdminDashboard from '../../components/AdminDashboard';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const page = () => {

  const isAdminAuth = useSelector((state) => state.admin.isAdminAuth);
  const Router = useRouter();

  return (
    <div>
        {isAdminAuth ? <AdminDashboard /> : Router.push("/admin/pages")}
    </div>
  )
}

export default page