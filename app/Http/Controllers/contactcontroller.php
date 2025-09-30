<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    /**
     * Handle contact form submission from API route
     */
    public function store(Request $request): JsonResponse
    {
        Log::info('API Contact form received', $request->all());

        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10|max:2000',
        ]);

        try {
            // Send email
            Mail::send('emails.contact', ['data' => $validated], function ($message) use ($validated) {
                $message->to('info@sigrut.com') // Change this to your email
                        ->subject('New Contact Form: ' . $validated['subject'])
                        ->from(config('mail.from.address'), config('mail.from.name'))
                        ->replyTo($validated['email'], $validated['name']);
            });

            Log::info('Contact form email sent successfully', $validated);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message! We will get back to you within 24 hours.'
            ]);

        } catch (\Exception $e) {
            Log::error('Contact form failed: ' . $e->getMessage(), [
                'data' => $validated,
                'error' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.'
            ], 500);
        }
    }

    /**
     * Handle contact form submission from web route
     */
    public function send(Request $request)
    {
        // For web route, we expect possibly different data format
        // Just call the store method to keep it consistent
        return $this->store($request);
    }
}