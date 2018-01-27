const formatBcp47 = require('format-bcp-47');

const formatLanguages = (languageTags) => {
  const validAndFormattedTags = [];
  languageTags.forEach(langTag => {
    const formattedTag = formatBcp47(langTag);
    if (formattedTag) {
      validAndFormattedTags.push(formattedTag);
    }
  });
  return validAndFormattedTags;
};

module.exports = () => {
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
