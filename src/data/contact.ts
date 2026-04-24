export const WHATSAPP_NUMBER = "919639043627";
export const WHATSAPP_MESSAGE = "Hello, I am interested in property details. Please share more information.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACTS = [
  { name: "Hemant Thakur", phone: "7017878031", role: "Property Consultant" },
  { name: "Rohit Thakur", phone: "9568208478", role: "Property Consultant" },
  { name: "Office WhatsApp", phone: "9639043627", role: "Customer Support", isWhatsApp: true },
] as const;

export const LOCATIONS = ["Moradabad", "Ramnagar", "Gurugram", "Noida", "Ghaziabad", "Rishikesh", "Haridwar", "Dehradun", "Milak", "Bareilly", "Kashipur"];
