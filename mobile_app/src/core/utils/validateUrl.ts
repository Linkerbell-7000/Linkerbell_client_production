export const validateUrl = (text: string) => {
  const url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#]+\.?)+(\/[^\s]*)?$/i;
  return text.match(url_pattern) ? true : false;
};
