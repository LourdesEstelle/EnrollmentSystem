import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const PaymentSummary = ({ auth }) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Payment Summary" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
        {/* Implement your payment summary UI here */}
      </div>
    </AuthenticatedLayout>
  );
};

export default PaymentSummary;
