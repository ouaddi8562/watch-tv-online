// Contact details used across the site. Change them here only.
export const WHATSAPP_NUMBER = "19296072130";
export const WHATSAPP_DISPLAY = "+1 929-607-2130";
export const CRISP_WEBSITE_ID = "b5dfb1b1-ec10-4f34-93fb-cbd44d933df0";

export function whatsappLink(text?: string) {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
