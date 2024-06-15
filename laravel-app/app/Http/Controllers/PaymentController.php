<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function paymentList()
    {
        return Inertia::render('Payment/List'); // Assuming you have a Vue/React component named Payment/List
    }

    public function paymentSummary()
    {
        return Inertia::render('Payment/Summary'); // Assuming you have a Vue/React component named Payment/Summary
    }
}
