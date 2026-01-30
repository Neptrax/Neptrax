import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { name, email, subject, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
          details: "name, email, and message are all required",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: "Invalid email format",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Validate message length (minimum 10 characters)
    if (message.trim().length < 10) {
      return new Response(
        JSON.stringify({
          error: "Message too short",
          details: "Message must be at least 10 characters long",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const RECEIVING_EMAIL = Deno.env.get("RECEIVING_EMAIL") || "info@neptrax.com";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Generate timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Prepare email subject
    const emailSubject = subject
      ? `Contact Form: ${subject}`
      : `New Contact Form Submission from ${name}`;

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Neptrax Contact Form <onboarding@resend.dev>",
        to: [RECEIVING_EMAIL],
        reply_to: email,
        subject: emailSubject,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <div style="background-color: #f9fafb; padding: 40px 20px;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">

                <!-- Header -->
                <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
                    New Contact Form Submission
                  </h1>
                  <p style="color: #e0e7ff; margin: 8px 0 0 0; font-size: 14px;">
                    Received ${timestamp}
                  </p>
                </div>

                <!-- Content -->
                <div style="padding: 40px 30px;">

                  <!-- Sender Info -->
                  <div style="background-color: #f0f9ff; border-left: 4px solid #2563eb; padding: 20px; margin-bottom: 20px; border-radius: 4px;">
                    <h2 style="color: #1e3a8a; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                      Sender Information
                    </h2>

                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 80px;">
                          NAME:
                        </td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">
                          ${name}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">
                          EMAIL:
                        </td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 15px;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                      ${subject ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">
                          SUBJECT:
                        </td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">
                          ${subject}
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </div>

                  <!-- Message -->
                  <div style="margin-top: 30px;">
                    <h3 style="color: #1e3a8a; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">
                      Message:
                    </h3>
                    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
                    </div>
                  </div>

                  <!-- Quick Action Button -->
                  <div style="text-align: center; margin-top: 30px;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your inquiry')}"
                       style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);">
                      Reply to ${name}
                    </a>
                  </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 25px 30px; text-align: center;">
                  <p style="color: #64748b; font-size: 13px; margin: 0 0 8px 0;">
                    This message was sent from the <strong style="color: #475569;">Neptrax</strong> contact form.
                  </p>
                  <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                    You can reply directly to this email to respond to the sender.
                  </p>
                </div>

              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      return new Response(
        JSON.stringify({
          error: "Failed to send email",
          details: resendData.message || "Unknown error",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        id: resendData.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
