import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
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

    const { name, email, message }: ContactFormData = await req.json();

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
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #2563eb; margin-top: 0; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>

              <div style="margin: 20px 0;">
                <p style="margin: 10px 0;">
                  <strong style="color: #1e3a8a;">Name:</strong><br/>
                  <span style="color: #374151;">${name}</span>
                </p>

                <p style="margin: 10px 0;">
                  <strong style="color: #1e3a8a;">Email:</strong><br/>
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </p>

                <p style="margin: 10px 0;">
                  <strong style="color: #1e3a8a;">Message:</strong><br/>
                  <span style="color: #374151; white-space: pre-wrap;">${message}</span>
                </p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                <p style="margin: 5px 0;">This message was sent from the Neptrax contact form.</p>
                <p style="margin: 5px 0;">Reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </div>
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
