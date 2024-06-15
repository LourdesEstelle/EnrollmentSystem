<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function paymentList()
    {
        return inertia('Payment/List'); // Assuming you have a blade file named payment/list.blade.php
    }

    public function paymentSummary()
    {
        return inertia('Payment/Summary'); // Assuming you have a blade file named payment/summary.blade.php
    }
}
