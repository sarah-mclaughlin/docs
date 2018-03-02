/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Shift Studio',
    image: '/docs/img/shift-logo.svg',
    infoLink: 'https://shift.studio',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Shift University' /* title for your website */,
  tagline: 'Guide to Shift',
  url: 'https://shift-studio.github.io' /* your website url */,
  baseUrl: '/docs/' /* base url for your project */,
  projectName: 'docs',
  headerLinks: [
    {doc: 'overview', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/shift-logo.svg',
  footerIcon: 'img/shift-logo.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#000',
    secondaryColor: '#2693FF',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Shift',
  organizationName: 'shift-studio', // or set an env variable ORGANIZATION_NAME
  projectName: 'docs', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/shift-studio/docs',
};

module.exports = siteConfig;
