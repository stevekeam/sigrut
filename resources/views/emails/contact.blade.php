<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form - Sigrut Farm</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 10px; }
        .header { background: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-radius: 5px; }
        .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
        .value { color: #333; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Sigrut Farm Website</p>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <span class="value">{{ $data['name'] }}</span>
            </div>
            
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">{{ $data['email'] }}</span>
            </div>
            
            @if(!empty($data['phone']))
            <div class="field">
                <span class="label">Phone:</span>
                <span class="value">{{ $data['phone'] }}</span>
            </div>
            @endif
            
            <div class="field">
                <span class="label">Subject:</span>
                <span class="value">{{ $data['subject'] }}</span>
            </div>
            
            <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="margin-top: 10px; white-space: pre-wrap;">{{ $data['message'] }}</div>
            </div>
            
            <div class="footer">
                <p>This message was sent from your website contact form on {{ now()->format('F j, Y \a\t g:i A') }}</p>
                <p>IP Address: {{ request()->ip() }}</p>
            </div>
        </div>
    </div>
</body>
</html>