/**
 * ============================================================================
 * GOOGLE APPS SCRIPT FOR KHUSHWINDER'S PORTFOLIO
 * Saves contact/quote inquiries directly into this Google Sheet (Excel format)
 * AND sends an instant email notification to Khushwinder.dev@gmail.com
 * ============================================================================
 * 
 * QUICK SETUP (Takes 60 seconds):
 * 1. Open a new Google Sheet (e.g. name it "Portfolio Leads & Quotes")
 * 2. Click "Extensions" > "Apps Script" in top menu
 * 3. Delete any default code in Code.gs and paste THIS ENTIRE FILE
 * 4. Click "Deploy" (top right) > "New deployment"
 * 5. Click the gear icon (Select type) > Choose "Web app"
 * 6. Set Description: "Portfolio Lead Webhook"
 * 7. Set "Execute as": "Me"
 * 8. Set "Who has access": "Anyone" (crucial so your portfolio can post to it)
 * 9. Click "Deploy", authorize permissions when prompted
 * 10. Copy the Web app URL (ends with /exec) and add it to your repo as
 *     NEXT_PUBLIC_GOOGLE_SCRIPT_URL (or enter it in localStorage)
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // 1. Setup headers automatically if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone / WhatsApp",
        "Service / Project Type",
        "Estimated Budget",
        "Message",
        "Source Page"
      ]);
      // Format headers
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4f46e5");
      headerRange.setFontColor("#ffffff");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // 2. Parse incoming payload (supports both JSON and form URL-encoded)
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.timestamp || new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    var name = data.name || "N/A";
    var email = data.email || "N/A";
    var phone = data.phone || "N/A";
    var service = data.service || data.project_type || "General Inquiry";
    var budget = data.budget || "Not Specified";
    var message = data.message || "N/A";
    var source = data.source || "Hero Quote Modal";

    // 3. Append new row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      service,
      budget,
      message,
      source
    ]);

    // 4. Send Instant Email Notification to Khushwinder
    var recipient = "Khushwinder.dev@gmail.com";
    var subject = "🚀 New Quote Inquiry: " + name + " (" + service + ")";

    var htmlBody = 
      "<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;'>" +
        "<div style='border-bottom: 2px solid #4f46e5; padding-bottom: 12px; margin-bottom: 20px;'>" +
          "<span style='background-color: #e0e7ff; color: #4338ca; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 4px 8px; border-radius: 9999px;'>New Portfolio Lead</span>" +
          "<h2 style='color: #0f172a; margin: 10px 0 4px 0; font-size: 22px;'>New Quote Request Received</h2>" +
          "<p style='color: #64748b; font-size: 13px; margin: 0;'>Logged into Google Sheet at " + timestamp + "</p>" +
        "</div>" +

        "<table style='width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;'>" +
          "<tr><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; width: 150px;'>Client Name:</td><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #0f172a;'>" + name + "</td></tr>" +
          "<tr><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;'>Email Address:</td><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9;'><a href='mailto:" + email + "' style='color: #4f46e5; font-weight: 600;'>" + email + "</a></td></tr>" +
          "<tr><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;'>Phone / WhatsApp:</td><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;'>" + phone + "</td></tr>" +
          "<tr><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;'>Project / Service:</td><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a;'><span style='background-color: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-weight: 600;'>" + service + "</span></td></tr>" +
          "<tr><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;'>Estimated Budget:</td><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #15803d;'>" + budget + "</td></tr>" +
          "<tr><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;'>Submission Source:</td><td style='padding: 10px 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px;'>" + source + "</td></tr>" +
          "<tr><td style='padding: 12px 8px; vertical-align: top; font-weight: 600; color: #475569;'>Project Details:</td><td style='padding: 12px 8px; background-color: #f8fafc; border-radius: 8px; white-space: pre-wrap; color: #334155; line-height: 1.5; font-size: 13px;'>" + message + "</td></tr>" +
        "</table>" +

        "<div style='text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9;'>" +
          "<a href='mailto:" + email + "?subject=Re: Your Project Quote Request - Khushwinder' style='background-color: #4f46e5; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 700; display: inline-block; font-size: 14px; margin-right: 10px;'>Reply via Email</a>" +
          (phone !== "N/A" ? "<a href='https://wa.me/" + phone.replace(/[^0-9]/g, "") + "' style='background-color: #25d366; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 700; display: inline-block; font-size: 14px;'>WhatsApp Client</a>" : "") +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Saved to sheet and email sent" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Allows testing the endpoint via a simple GET request
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ready", service: "Khushwinder Portfolio Lead API" }))
    .setMimeType(ContentService.MimeType.JSON);
}
