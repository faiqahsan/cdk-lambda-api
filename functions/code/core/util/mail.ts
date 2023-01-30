import { SendMailOptions } from "nodemailer";
import { renderFile } from "ejs";
import { transporter } from "./transporter";
import { formatResponse } from ".";

export const sendEmail = async (
  templateId: string,
  templateData: Record<any, any>
) => {
  console.log("sending email ========>");
  const htmlData = await renderFile(
    __dirname + `/../templates/${templateId}/${templateId}.ejs`,
    templateData
  );
  const mainOptions: SendMailOptions = {
    from: templateData.sender,
    to: templateData.recipient,
    subject: templateData.subject,
    html: htmlData,
  };
  await transporter.sendMail(mainOptions);
  console.log("Email sent");
  return formatResponse(200, "Email sent successfully");
};
