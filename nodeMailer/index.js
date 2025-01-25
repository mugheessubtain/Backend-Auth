// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
// 	user: "mugheessubtain@gmail.com",
// 	pass: process.env.EMAIL_PASSWORD,
//   },
// });

// export default async function mailverification(name, email, link) {
//   const mailOptions = {
// 	from: "mugheessubtain@gmail.com",
// 	to: email,
// 	subject: "Verification Email",
// 	text: `Hello, ${name}. Click the link below to verify your email: ${link}`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
// 	if (error) {
// 	  console.log(error);
// 	} else {
// 	  console.log("Email sent: " + info.response);
// 	}
//   });
// }