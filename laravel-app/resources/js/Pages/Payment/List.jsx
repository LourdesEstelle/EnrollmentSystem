import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const PaymentList = ({ auth }) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Payment List" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Payment List</h2>
        {/* Implement your payment list UI here */}
      </div>
    </AuthenticatedLayout>
  );
};

export default PaymentList;
