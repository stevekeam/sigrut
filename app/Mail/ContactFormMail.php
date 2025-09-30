<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                    ->subject('New Contact Form Message')
                    ->view('emails.contact-form')
                    ->with([
                        'name' => $this->data['name'],
                        'email' => $this->data['email'],
                        'phone' => $this->data['phone'],
                        'subjectText' => $this->data['subject'],
                        'messageText' => $this->data['message'],
                    ]);
    }
}
