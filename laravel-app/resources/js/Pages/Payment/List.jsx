import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const InvoiceDetails = ({ auth }) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Invoice Details" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Payment List</h2>
        <div className="border p-4">
          <div className="flex justify-between mb-6">
            <div>
              <h3 className="font-bold">Term:</h3>
              <p>Application Type:</p>
              <p>Academic Program: </p>
              <p>Department:</p>
              <p>Year:</p>
        


            </div>
            <div>
              <h3 className="font-bold">Client's details:</h3>
              <p>enrollment -term</p>
              <p>emrollment - applicationType</p>
              <p>chuchu</p>
              <p>chuchu</p>
              <p>chuhu</p>
             
            </div>
          </div>
          <div className="mb-6">
            <p><strong>Payment No:</strong> 012345</p>
            <p><strong>Payment Date:</strong> Dec 8th, 2021</p>
            <p><strong>Due Date:</strong> Dec 31st, 2021</p>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Units</th>
                <th className="border p-2">Laboratory</th>
                <th className="border p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">UX and UI Design</td>
                <td className="border p-2">65</td>
                <td className="border p-2">115.00</td>
                <td className="border p-2">7,475.00</td>
              </tr>
              <tr>
                <td className="border p-2">Photo Editing & Retouching</td>
                <td className="border p-2">25</td>
                <td className="border p-2">50.00</td>
                <td className="border p-2">1,250.00</td>
              </tr>
              <tr>
                <td className="border p-2">Vectors and Banners</td>
                <td className="border p-2">30</td>
                <td className="border p-2">45.00</td>
                <td className="border p-2">1,350.00</td>
              </tr>
              <tr>
                <td className="border p-2">2D Animation Package</td>
                <td className="border p-2">1</td>
                <td className="border p-2">499.00</td>
                <td className="border p-2">499.00</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 text-right">
            <p><strong>Subtotal:</strong> 10,574.00</p>
            <p><strong>Total:</strong> 10,574.00</p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default InvoiceDetails;
