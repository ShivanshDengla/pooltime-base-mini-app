export const openExternalUrl = (url: string) => {
  if (typeof window === 'undefined') return;
  const anyWindow = window as any;
  try {
    if (anyWindow?.sdk?.actions?.openURL) {
      anyWindow.sdk.actions.openURL(url);
    } else {
      window.open(url, '_blank');
    }
  } catch {
    window.open(url, '_blank');
  }
}; 