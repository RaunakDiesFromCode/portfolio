import { Project } from "@/lib/types";

export default function getEmailTemplate(projects: Project[]) {
    projects = Array.isArray(projects) ? projects : [];

    return `
        <!DOCTYPE html> ̰
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Your Newsletter</title> <!-- Title often ignored by clients, but good practice -->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #f4f4f4; }

  /* Responsive styles */
  @media screen and (max-width: 600px) {
    .content-table {
      width: 100% !important;
      max-width: 100% !important;
    }
    .mobile-padding {
        padding-left: 10px !important;
        padding-right: 10px !important;
    }
    .section-padding {
        padding: 20px 15px !important;
    }
    h1 {
        font-size: 24px !important;
        line-height: 1.2 !important;
    }
      h2 {
        font-size: 20px !important;
        line-height: 1.2 !important;
    }
     h3 {
        font-size: 18px !important;
        line-height: 1.2 !important;
    }
    .social-icon {
        width: 35px !important;
        height: 35px !important;
        margin: 0 5px !important; /* Adjust spacing for mobile */
    }
    .button-td, .button-a { /* Make buttons full width on mobile */
        display: block !important;
        width: 100% !important;
        text-align: center !important;
        padding: 12px 0 !important;
    }
  }
</style>
</head>
<body style="margin: 0 !important; padding: 0 !important; background-color: #f4f4f4;">

  <!-- Avoid preview text showing up -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
     Your preview text here (optional) - short description of the email content.
  </div>

  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" bgcolor="#f4f4f4" style="padding: 20px 0;">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 3px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" class="content-table">

          <!-- === WELCOME SECTION === -->
          <tr>
            <td align="center" style="padding: 40px 30px 30px 30px; font-family: Arial, sans-serif; color: #333333;" class="section-padding mobile-padding">
              <h1 style="margin: 0; font-size: 28px; line-height: 1.3; font-weight: bold;">Welcome to My Newsletter!</h1>
              <p style="margin: 15px 0 0; font-size: 16px; line-height: 1.5;">
                Hi , thanks for joining our Newsletter! Here's a quick update with some recent news and projects.
              </p>
            </td>
          </tr>

          <!-- === GITHUB REPOS SECTION === -->
          <tr>
            <td align="left" bgcolor="#f9f9f9" style="padding: 30px 30px; font-family: Arial, sans-serif; color: #333333; border-top: 1px solid #dddddd; border-bottom: 1px solid #dddddd;" class="section-padding mobile-padding">
              <h2 style="margin: 0 0 20px 0; font-size: 22px; line-height: 1.3; font-weight: bold;">Checkout My GitHub Repos</h2>

              ${projects
                  .map((project: Project) => {
                      return `
              <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5;">
                <strong style="font-size: 17px;"><a href="${
                    project.html_url
                }" target="_blank" style="color: #007bff; text-decoration: none;">${
                          project.name
                      }</a></strong><br>
                ${project.description || "No description available."}
                </p>`;
                  })
                  .join("")}
            </td>
          </tr>

          <!-- === TECH NEWS SECTION === -->
          <tr>
            <td align="left" style="padding: 30px 30px; font-family: Arial, sans-serif; color: #333333;" class="section-padding mobile-padding">
              <h3 style="margin: 0 0 15px 0; font-size: 20px; line-height: 1.3; font-weight: bold;">Some Latest Tech News</h3>
              <h4 style="margin: 0 0 5px 0; font-size: 18px; line-height: 1.3;">[Tech News Headline]</h4>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5;">
                [Two lines describing the tech news. Keep it concise and engaging, leading the user to want to learn more.]
              </p>
              <!-- Button -->
              <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tr>
                  <td align="center" style="border-radius: 5px; background-color: #007bff;" class="button-td">
                    <a href="[News Article URL]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; padding: 12px 25px; border: 1px solid #007bff; display: inline-block; font-weight: bold;" class="button-a">Read More</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- === SOCIAL MEDIA SECTION === -->
          <tr>
            <td align="center" bgcolor="#f9f9f9" style="padding: 30px 30px; border-top: 1px solid #dddddd;" class="section-padding mobile-padding">
              <h4 style="margin: 0 0 15px 0; font-family: Arial, sans-serif; font-size: 18px; line-height: 1.3; color: #333333;">Connect With Me</h4>
              <!-- Social Icons Table -->
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Icon 1 -->
                  <td align="center" style="padding: 0 5px;">
                     <a href="[Your LinkedIn URL]" target="_blank">
                       <img src="[URL to LinkedIn Icon Image - e.g., https://img.icons8.com/fluent/48/000000/linkedin.png]" alt="LinkedIn" width="40" height="40" style="display: block;" border="0" class="social-icon">
                     </a>
                  </td>
                  <!-- Icon 2 -->
                  <td align="center" style="padding: 0 5px;">
                     <a href="[Your GitHub URL]" target="_blank">
                       <img src="[URL to GitHub Icon Image - e.g., https://img.icons8.com/fluent/48/000000/github.png]" alt="GitHub" width="40" height="40" style="display: block;" border="0" class="social-icon">
                     </a>
                  </td>
                  <!-- Icon 3 -->
                  <td align="center" style="padding: 0 5px;">
                     <a href="[Your Twitter/X URL]" target="_blank">
                       <img src="[URL to Twitter/X Icon Image - e.g., https://img.icons8.com/fluent/48/000000/twitter.png]" alt="Twitter" width="40" height="40" style="display: block;" border="0" class="social-icon">
                     </a>
                  </td>
                  <!-- Add more icons as needed -->
                </tr>
              </table>
            </td>
          </tr>

          <!-- === FOOTER (Optional but Recommended) === -->
           <tr>
            <td align="center" style="padding: 20px 30px; font-family: Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #888888;" class="mobile-padding">
              <p style="margin: 0;">[Your Name/Company Name] | [Your Address, if applicable]</p>
              <p style="margin: 5px 0 0 0;">You received this email because you opted in. <a href="[Unsubscribe Link]" target="_blank" style="color: #888888; text-decoration: underline;">Unsubscribe</a></p>
            </td>
          </tr>

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
  </table>

</body>
</html>
    `;
}
