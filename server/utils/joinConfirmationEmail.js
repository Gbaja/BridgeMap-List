const sgMail = require("@sendgrid/mail");

module.exports = data => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data["Organisation email"],
    from: "no-reply@bridgemaplist.com",
    subject: "Join BridgeMap List Confirmation Email",
    html: `<p>Hello,</p>
    <p>Thank you for submitting an application for ${
  data["Name of Organisation"]
} to join the BridgeMap List.</p>
    <p>We are now going to review the organisation and verify the details you have submitted. We estimate that this process will take 14 working days. We will notify you via email if your organisation has been listed.</p>
    <p>In the meantime, we need your help getting more people to know about BridgeMap List, please share the website(link below) with your networks and keep up to date with all things BridgeMap by following us on twitter <a href="https://www.twitter.com/BridgeMap">@BridgeMap</a></p>
    <p>We will be in touch soon.</p>
    <p>Kind regards,</p>
    <p><a href="https://bridgemap-list.herokuapp.com/">https://bridgemap-list.herokuapp.com</a></p>
    <p>The BridgeMap team</p>
   `
  };
  sgMail.send(msg);
};
