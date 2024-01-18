import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700;800&display=swap');
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--desktop-subtitle2: 'Public Sans';

/* font sizes */
--desktop-subtitle2-size: 14px;
--components-button-xsmall-size: 10px;
--desktop-overline-size: 12px;
--desktop-body1-size: 16px;
--desktop-h5-size: 20px;
--desktop-h2-size: 48px;
--font-size-10xl: 29px;
--font-size-19xl: 38px;
--desktop-h3-size: 32px;
--font-size-lgi: 19px;
--font-size-7xl: 26px;
--desktop-h4-size: 24px;

/* Colors */
--background-default: #fff;
--text-primary: #0089a9;
--other-linkedin: #007ebb;
--color-steelblue-100: #007ab9;
--background-default1: #003b52;
--text-disabled: #919eab;
--components-divider: rgba(145, 158, 171, 0.2);
--secondary-dark: #007892;
--primary-main: #28dac8;
--primary-12: rgba(40, 218, 200, 0.12);
--other-facebook: #1877f2;
--other-instagram: #e02d69;
--color-black: #000;
--text-secondary: #c8fdff;
--secondary-lighter: #affcff;
--error-lighter: #ffe9d5;
--info-main: #00b8d9;
--primary-lighter: #d9ffff;

/* Spacing */
--spacing-3: 24px;
--layout-header-main-height: 80px;
--spacing-1: 8px;
--icon-button-small-size: 36px;
--icon-button-radius: 500px;
--spacing-10: 80px;
--radius-05: 4px;
--button-xsmall-icon: 14px;
--spacing-25: 20px;
--spacing-5: 40px;
--spacing-20: 160px;
--spacing-15: 120px;
--spacing-2: 16px;
--card-radius: 16px;
--radius-15: 12px;
--icon-button-extra-small-size: 28px;
--icon-button-extra-small-icon: 28px;
--spacing-12: 96px;
--layout-container-main-: 144px;
--spacing-4: 32px;
--spacing-151: 12px;

/* Gaps */
--gap-xl: 20px;
--gap-5xs: 8px;
--gap-21xl: 40px;
--gap-5xl: 24px;
--gap-3xl: 22px;
--gap-8xs: 5px;
--gap-3xs: 10px;
--gap-2xl: 21px;
--gap-lg: 18px;
--gap-xs: 12px;
--gap-base: 16px;
--gap-13xl: 32px;
--gap-61xl: 80px;
--gap-6xs: 7px;

/* Paddings */
--padding-xl: 20px;
--padding-21xl: 40px;
--padding-53xl: 72px;
--padding-17xl: 36px;
--padding-8xs: 5px;
--padding-7xs: 6px;
--padding-5xs: 8px;
--padding-6xs: 7px;
--padding-12xs: 1px;
--padding-101xl: 120px;
--padding-32xl: 51px;
--padding-59xl: 78px;
--padding-base: 16px;
--padding-77xl: 96px;
--padding-13xl: 32px;
--padding-29xl: 48px;
--padding-31xl: 50px;

/* Border radiuses */
--br-481xl: 500px;
--br-9xs: 4px;
--br-base: 16px;
--br-xs: 12px;

/* Effects */
--shadow-z8: 0px 8px 16px rgba(145, 158, 171, 0.16);
--shadow-z4: 0px 4px 8px rgba(145, 158, 171, 0.16);
--shadow-pricing-card: drop-shadow(-40px 40px 80px rgba(145, 158, 171, 0.16));
}
`;
}
