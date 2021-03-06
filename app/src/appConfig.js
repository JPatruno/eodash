/* eslint-disable no-unused-vars */
const brands = [
  {
    id: 'esa',
    match: ['race.esa.int', 'eodash.eox.at', 'eodash-staging.eox.at', 'localhost2'],
    branding: {
      appName: 'Rapid Action on coronavirus and EO',
      primaryColor: '#003247',
      secondaryColor: '#0098DB',
      headerLogo: '/eodash-data/general/RACE_Logo.png',
      faviconPath: '/img/ESA/favicon.ico',
    },
    pageMeta: {
      rootPath: 'https://race.esa.int',
      googleSiteVerification: 'RfWilP51Q2wsZnVlKbxUTovIx90QqqLRFLebGpAeq14',
      shortDescription: 'The RACE platform demonstrates how the use of EO data can help shed new light on societal and economic changes currently taking place owing to the coronavirus pandemic.',
      twitterCardImagePath: '/img/ESA/twitter_card.jpg',
    },
    displayDummyLocations: '/eodash-data/data/dummylocations.csv',
    customCSS: 'esa',
    aboutText: '/eodash-data/general/about',
    welcomeText: '/eodash-data/general/welcome',
    showNewsCarousel: true,
    privacyText: '/eodash-data/general/privacy',
    termsText: '/eodash-data/general/terms',
    countDownTimer: '2020-06-05T12:00:00.000+02:00',
    countDownMatch: ['race.esa.int', 'eodash.eox.at'],
  },
  {
    id: 'trilateral',
    match: ['eodash-trilateral.eox.at', 'eodash-trilateral-staging.eox.at', 'localhost'],
    branding: {
      appName: 'Earth Observing Dashboard',
      primaryColor: '#000000',
      headerLogo: '/data/trilateral/Trilateral_Logo.svg',
    },
    pageMeta: {
      rootPath: 'https://race.esa.int',
      googleSiteVerification: 'RfWilP51Q2wsZnVlKbxUTovIx90QqqLRFLebGpAeq14',
      shortDescription: 'The RACE platform demonstrates how the use of EO data can help shed new light on societal and economic changes currently taking place owing to the coronavirus pandemic.',
      twitterCardImagePath: '/img/ESA/twitter_card.jpg',
    },
    displayDummyLocations: '/data/trilateral/dummylocations.csv',
    aboutText: '/data/trilateral/about',
    welcomeText: '/data/trilateral/welcome',
    privacyText: '/data/trilateral/privacy',
    termsText: '/data/trilateral/terms',
  },
];

export default {
  brands,
};
