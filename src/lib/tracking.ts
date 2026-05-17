// Tracking helpers — call these from inline scripts in components
// dataLayer events are consumed by GTM Container GTM-MQWKFKRP

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const TRACKING_EVENTS = {
  PHONE_CLICK: 'phone_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  FORM_SUBMIT: 'form_submit',
  SCROLL_DEPTH: 'scroll_depth',
  CTA_CLICK: 'cta_click',
} as const;

export const CONVERSION_VALUES = {
  PHONE: 50,
  WHATSAPP: 40,
  FORM: 80,
} as const;
