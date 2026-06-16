
const WATI_API_URL = 'https://eu-app-api.wati.io/api/v1';
const WHATSAPP_TOKEN = import.meta.env.VITE_WHATSAPP_CHAT_TOKEN;

/**
 * Send a WhatsApp message via WATI API
 * @param {string} phoneNumber - The recipient's phone number with country code
 * @param {string} message - The message content
 */
export const sendWhatsAppMessage = async (phoneNumber, message) => {
    try {
        const response = await fetch(`${WATI_API_URL}/sendSessionMessage/${phoneNumber}`, {
            method: 'POST',
            headers: {
                'Authorization': `${WHATSAPP_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messageText: message
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to send WhatsApp message');
        }

        return data;
    } catch (error) {
        console.error('WhatsApp Service Error:', error);
        throw error;
    }
};
