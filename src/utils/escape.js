export const escapeHtml = (string) => {
  return string.replace(/[&'`"<>]/g, match => {
    return {
      '&': '&amp;',
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;'
    }[match]
  })
}
