const formatBcp47 = require('format-bcp-47');

module.exports = () => {
  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    return getLanguageTags();
  }
  return null;
};

const getLanguageTags = () => {
  let languages = null;
  if (navigator.languages) {
    languages = navigator.languages;
  } else if (navigator.language) {
    languages = [ navigator.language ];
  } else if (navigator.browserLanguage) {
    languages = [ navigator.browserLanguage ];
  } else if (navigator.userLanguage) {
    languages = [ navigator.userLanguage ];
  } else if (navigator.systemLanguage) {
    languages = [ navigator.systemLanguage ];
  }
  if (languages !== null) {
    languages = formatLanguages(languages);
    if (!languages.length) {
      languages = null;
    }
  }
  return languages;
};

const formatLanguages = (languageTags) => {
  const validAndFormattedTags = [];
  for (let i = 0; i < languageTags.length; i++) {
    const formattedTag = formatBcp47(languageTags[i]);
    if (formattedTag) {
      validAndFormattedTags.push(formattedTag);
    }
  }
  return validAndFormattedTags;
};
