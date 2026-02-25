import { Resend } from 'resend';
import { ContactFormData } from '@/types';

let resendInstance: Resend | null = null;

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === 'your_resend_api_key_here') {
    return null;
  }

  if (!resendInstance) {
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: SendEmailParams) {
  const resendClient = getResendClient();
  const isPlaceholder = resendClient === null; // Determine if API key is configured based on client availability

  // Development fallback: Log the email instead of sending it if no valid API key is found
  if (process.env.NODE_ENV === 'development' && isPlaceholder) {
    console.log('--- DEVELOPMENT EMAIL LOG ---');
    console.log(`From: ${process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev'}`);
    console.log(`To: ${process.env.CONTACT_EMAIL_TO || 'dsriharik8432@gmail.com'}`);
    console.log(`Reply-To: ${email}`);
    console.log(`Subject: Portfolio Contact: Message from ${name}`);
    console.log('Message:', message);
    console.log('------------------------------');

    // Simulate a slight delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, data: { id: 'dev-mock-id' } };
  }

  if (!resendClient) {
    return { success: false, error: 'Email service is not configured.' };
  }

  try {
    const { data, error } = await resendClient.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO || 'dsriharik8432@gmail.com',

      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #667eea;">
                <h2 style="margin-top: 0; color: #1f2937; font-size: 18px;">Contact Information</h2>
                <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #764ba2;">
                <h2 style="margin-top: 0; color: #1f2937; font-size: 18px;">Message</h2>
                <p style="white-space: pre-wrap; color: #4b5563; line-height: 1.8;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
                <p>This email was sent from your portfolio contact form.</p>
                <p style="margin-top: 10px;">
                  <a href="mailto:${email}" style="display: inline-block; background: #667eea; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">Reply to ${name}</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Email send error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}
