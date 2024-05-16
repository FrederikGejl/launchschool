
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

function extractLang(extractLanguagecode) {
  const regex = /^[a-zA-Z]{2}/;
  const match = extractLanguagecode.match(regex);
// Check if a match is found
    if (match) {
        // Convert the matched language code to uppercase and return
        return match[0].toUpperCase();
    } else {
        // If no match is found, return null or handle the error according to your requirements
        return null;
    }

}


// Test cases
const string1 = 'ko_KR.UTF-16';
const string2 = 'en_GB.UTF-8';


console.log(extractLang(string2))





function extractLanguage(locale) {
  return locale.split('_')[0];
}

// Examples:
console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));