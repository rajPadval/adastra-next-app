"use client"
import React from 'react'
import AdminDashboard from '../../components/AdminDashboard';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const page = () => {

    const isAdminAuth = useSelector((state) => state.admin.isAdminAuth)
    const Router = useRouter();
    if (isAdminAuth && localStorage.getItem("isAdminAuth")) {
        return null;
      } else {
        Router.push("/admin/pages");
      }

  return (
    <div>
        <AdminDashboard />
    </div>
  )
}

export default page