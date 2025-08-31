import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, phone, location, service } = await req.json();

  if (!name || !email || !phone) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `Novo contato do formulário no site Ascender: ${name}`,
      text: `Recebemos um novo contato pelo formulário do site Ascender. Nome: ${name}, Email: ${email}, Telefone: ${phone}, Localização: ${location}, Serviço desejado: ${service}, Mensagem: ${message}`,
      html: `<h3>Novo contato pelo formulário do site Ascender</h3>
            <br/>
            <p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Telefone:</strong> ${phone}</p>
             <p><strong>Localização:</strong> ${location}</p>
             <p><strong>Serviço desejado:</strong> ${service}</p>
             <p><strong>Mensagem:</strong><br/>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
