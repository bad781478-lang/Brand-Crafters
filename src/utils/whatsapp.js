export const WHATSAPP_PHONE_DISPLAY = '+91 78770 28481';
export const WHATSAPP_PHONE_NUMBER = '917877028481';

export const DEFAULT_WHATSAPP_MESSAGE = [
  'Hi Brand Crafters, I want to start a project.',
  'I am interested in branding, website, creative content, or digital growth support.',
  'Please share the next steps.',
].join('\n');

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_URL = getWhatsAppUrl();

export function buildProjectInquiryMessage(form) {
  const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();
  const services = form.services.length > 0 ? form.services.join(', ') : 'Not selected';

  return [
    'Hi Brand Crafters, I want to start a project.',
    '',
    `Name: ${fullName}`,
    `Email: ${form.email.trim()}`,
    `Phone: ${form.phone.trim() || 'Not provided'}`,
    `Services: ${services}`,
    '',
    'Project details:',
    form.message.trim(),
    '',
    'Please share the next steps.',
  ].join('\n');
}
