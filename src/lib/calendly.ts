export const openCalendlyPopup = () => {
  const calendlyUrl = 'https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08';
  
  const popup = window.open(
    calendlyUrl,
    'calendly-popup',
    'width=800,height=800,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
  );
  
  if (popup) {
    popup.focus();
  } else {
    // Fallback if popup is blocked
    window.open(calendlyUrl, '_blank');
  }
};
