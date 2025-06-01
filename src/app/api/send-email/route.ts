import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const data = await request.json();
  // data: { name, email, message, ... }

  // OAuth2 ile transporter ayarları
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.SMTP_USER,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      // accessToken: process.env.OAUTH_ACCESS_TOKEN, // refreshToken varsa otomatik alınır
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'limayturkkan@gmail.com',
      subject: data.subject || 'Yeni İletişim Formu Mesajı',
      text: `
İsim: ${data.name || ''}
E-posta: ${data.email || ''}
Mesaj: ${data.message || ''}
      `,
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><b>İsim:</b> ${data.name || ''}</p>
        <p><b>E-posta:</b> ${data.email || ''}</p>
        <p><b>Mesaj:</b> ${data.message || ''}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Hata detayını logla ve döndür
    let errorMessage = 'Mail gönderilirken bir hata oluştu.';
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json(
      { success: false, error: 'Mail gönderilemedi.', detail: errorMessage || error },
      { status: 500 }
    );
  }
}