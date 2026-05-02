const nodeMailer = require('nodemailer');

exports.sendMail = async (req, res)=>{
   const {name, email, phone, message} = req.body;

   const transporter = nodeMailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    }
});
  try {
      await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New Portfolio Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message} `
    });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Thanks for contacting me",
      text: `Hi ${name},
    Thank you for reaching out!

    I have received your message and will get back to you within 24 hours.
    Best regards,
    Sukshith,
    Frontend Developer
`
    });

    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
}