import { SendMailOptions } from "nodemailer";
import { renderFile } from "ejs";
import { transporter } from "./transporter";

export const sendEmail = (
  templateId: string,
  templateData: Record<any, any>
) => {
  console.log("sending email ========>");
  renderFile(
    __dirname + `/templates/${templateId}/${templateId}.ejs`,
    templateData,
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        const mainOptions: SendMailOptions = {
          from: "muhammadusama387@gmail.com",
          to: "usama.shahid@devigital.com",
          subject: "Testing lambda",
          html: data,
        };
        console.log("html data ======================>", mainOptions.html);
        transporter.sendMail(mainOptions, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log("Message sent: " + info);
          }
        });
      }
    }
  );
};
