import React from 'react';

interface svgProps {
  size?: string;
  icon: string;
}

export const svgSpriteSheet = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: 'none',
    }}
  >
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 24"
      id="_logoIpsum"
    >
      <g clipPath="url(#clip0_8892_6886)">
        <path
          d="M30 12C30 8.81744 28.7357 5.76516 26.4852 3.51472C24.2347 1.26429 21.1824 4.17348e-07 17.9998 0C14.8171 -4.17347e-07 11.7648 1.26429 9.51432 3.51472C7.26382 5.76516 5.99951 8.81744 5.99951 12H9.74964C10.9923 12 11.9614 10.9587 12.4166 9.80234C12.7155 9.04317 13.1689 8.3455 13.757 7.75736C14.8822 6.63215 16.4084 6.00001 17.9998 6.00001C19.5911 6.00001 21.1173 6.63215 22.2425 7.75736C23.3678 8.88258 23.9998 10.4087 23.9998 12H30Z"
          fill="url(#paint0_linear_8892_6886)"
        />
        <path
          d="M23.087 16.5922C23.6901 15.1363 24.0005 13.5759 24.0005 12H30C30 18.6274 24.6273 24 17.9997 24C16.9618 24 15.9546 23.8682 14.9941 23.6206C15.5376 23.4805 16.0717 23.3022 16.5925 23.0866C18.0485 22.4835 19.3713 21.5996 20.4857 20.4853C21.6 19.371 22.484 18.0481 23.087 16.5922Z"
          fill="#FBCF8E"
        />
        <path
          d="M0 12C-2.25446e-07 13.5759 0.310395 15.1363 0.913462 16.5922C1.51653 18.0481 2.40046 19.371 3.51479 20.4853C4.62911 21.5996 5.95201 22.4835 7.40795 23.0866C8.86387 23.6896 10.4243 24 12.0003 24C13.5761 24 15.1366 23.6896 16.5925 23.0866C18.0485 22.4835 19.3714 21.5996 20.4857 20.4853C21.6 19.371 22.4839 18.0481 23.087 16.5922C23.6901 15.1363 24.0005 13.5759 24.0005 12H20.2504C19.0077 12 18.0386 13.0413 17.5834 14.1976C17.5705 14.2305 17.5572 14.2633 17.5436 14.2961C17.2421 15.0241 16.8001 15.6855 16.2429 16.2426C15.6858 16.7998 15.0243 17.2418 14.2964 17.5433C13.5685 17.8448 12.7882 18 12.0003 18C11.2123 18 10.4321 17.8448 9.70413 17.5433C8.97612 17.2418 8.31471 16.7998 7.7575 16.2426C7.20035 15.6855 6.75839 15.0241 6.45686 14.2961C6.15532 13.5681 6.00012 12.7879 6.00012 12H0Z"
          fill="url(#paint1_linear_8892_6886)"
        />
        <path
          d="M0.000976562 12C0.000976562 5.37257 5.37365 0 12.0012 0C13.0388 0 14.0457 0.131696 15.0061 0.379295C12.9454 0.91015 11.0444 1.98446 9.51404 3.51473C7.26357 5.76515 5.99928 8.81744 5.99928 12H0.000976562Z"
          fill="#73E5E2"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_8892_6886"
          x1="30"
          y1="6.00001"
          x2="5.99951"
          y2="6.00001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#73E5E2" />
          <stop offset="1" stopColor="#394F87" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8892_6886"
          x1="7.8682e-07"
          y1="18"
          x2="24.0005"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBDC8E" />
          <stop offset="1" stopColor="#FB958E" />
        </linearGradient>
        <clipPath id="clip0_8892_6886">
          <rect width="30" height="24" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="AccountCircleFilled-1"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="AccountCircleFilled"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="AddFilled"
    >
      <path
        d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      id="Avatar"
    >
      <g clipPath="url(#clip0_8900_8636)">
        <rect width="40" height="40" fill="#BDBDBD" />
        <rect width="40" height="40" rx="20" fill="#BDBDBD" />
        <path
          d="M20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20ZM20 22C17.33 22 12 23.34 12 26V28H28V26C28 23.34 22.67 22 20 22Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_8900_8636">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="CancelFilled"
    >
      <path
        d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="CheckFilled"
    >
      <path
        d="M8.79508 15.875L4.62508 11.705L3.20508 13.115L8.79508 18.705L20.7951 6.705L19.3851 5.295L8.79508 15.875Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="EditFilled"
    >
      <path
        d="M2.99854 17.2512V21.0012H6.74854L17.8085 9.94125L14.0585 6.19125L2.99854 17.2512ZM20.7085 7.04125C21.0985 6.65125 21.0985 6.02125 20.7085 5.63125L18.3685 3.29125C17.9785 2.90125 17.3485 2.90125 16.9585 3.29125L15.1285 5.12125L18.8785 8.87125L20.7085 7.04125Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="FormatAlignLeftFilled"
    >
      <path
        d="M15 15H3V17H15V15ZM15 7H3V9H15V7ZM3 13H21V11H3V13ZM3 21H21V19H3V21ZM3 3V5H21V3H3Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      id="GitHub"
    >
      <path
        d="M43.6 8.4C25.2 10.4 10.4 25.2 8.40004 43.2C6.40004 62 17.2 78.8 33.6 85.2C34.8 85.6 36 84.8 36 83.2V76.8C36 76.8 34.4 77.2 32.4 77.2C26.8 77.2 24.4 72.4 24 69.6C23.6 68 22.8 66.8 21.6 65.6C20.4 65.2 20 65.2 20 64.8C20 64 21.2 64 21.6 64C24 64 26 66.8 26.8 68C28.8 71.2 31.2 72 32.4 72C34 72 35.2 71.6 36 71.2C36.4 68.4 37.6 65.6 40 64C30.8 62 24 56.8 24 48C24 43.6 26 39.2 28.8 36C28.4 35.2 28 33.2 28 30.4C28 28.8 28 26.4 29.2 24C29.2 24 34.8 24 40.4 29.2C42.4 28.4 45.2 28 48 28C50.8 28 53.6 28.4 56 29.2C61.2 24 67.2 24 67.2 24C68 26.4 68 28.8 68 30.4C68 33.6 67.6 35.2 67.2 36C70 39.2 72 43.2 72 48C72 56.8 65.2 62 56 64C58.4 66 60 69.6 60 73.2V83.6C60 84.8 61.2 86 62.8 85.6C77.6 79.6 88 65.2 88 48.4C88 24.4 67.6 5.6 43.6 8.4Z"
        fill="black"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="PeopleFilled"
    >
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="PersonAddFilled"
    >
      <path
        d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V7H4V10H1V12H4V15H6V12H9V10H6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="QueryBuilderFilled"
    >
      <path
        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
        fill="black"
        fillOpacity="0.54"
      />
      <path
        d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="SettingsFilled"
    >
      <path
        d="M19.1401 12.94C19.1801 12.64 19.2001 12.33 19.2001 12C19.2001 11.68 19.1801 11.36 19.1301 11.06L21.1601 9.48C21.3401 9.34 21.3901 9.07 21.2801 8.87L19.3601 5.55C19.2401 5.33 18.9901 5.26 18.7701 5.33L16.3801 6.29C15.8801 5.91 15.3501 5.59 14.7601 5.35L14.4001 2.81C14.3601 2.57 14.1601 2.4 13.9201 2.4H10.0801C9.84011 2.4 9.65011 2.57 9.61011 2.81L9.25011 5.35C8.66011 5.59 8.12011 5.92 7.63011 6.29L5.24011 5.33C5.02011 5.25 4.77011 5.33 4.65011 5.55L2.74011 8.87C2.62011 9.08 2.66011 9.34 2.86011 9.48L4.89011 11.06C4.84011 11.36 4.80011 11.69 4.80011 12C4.80011 12.31 4.82011 12.64 4.87011 12.94L2.84011 14.52C2.66011 14.66 2.61011 14.93 2.72011 15.13L4.64011 18.45C4.76011 18.67 5.01011 18.74 5.23011 18.67L7.62011 17.71C8.12011 18.09 8.65011 18.41 9.24011 18.65L9.60011 21.19C9.65011 21.43 9.84011 21.6 10.0801 21.6H13.9201C14.1601 21.6 14.3601 21.43 14.3901 21.19L14.7501 18.65C15.3401 18.41 15.8801 18.09 16.3701 17.71L18.7601 18.67C18.9801 18.75 19.2301 18.67 19.3501 18.45L21.2701 15.13C21.3901 14.91 21.3401 14.66 21.1501 14.52L19.1401 12.94ZM12.0001 15.6C10.0201 15.6 8.40011 13.98 8.40011 12C8.40011 10.02 10.0201 8.4 12.0001 8.4C13.9801 8.4 15.6001 10.02 15.6001 12C15.6001 13.98 13.9801 15.6 12.0001 15.6Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="SpaceDashboardFilled"
    >
      <path
        d="M11 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H11V21ZM13 21H19C20.1 21 21 20.1 21 19V12H13V21ZM21 10V5C21 3.9 20.1 3 19 3H13V10H21Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="ToggleOffFilled"
    >
      <path
        d="M17 7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM7 15C5.34 15 4 13.66 4 12C4 10.34 5.34 9 7 9C8.66 9 10 10.34 10 12C10 13.66 8.66 15 7 15Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="ToggleOnFilled"
    >
      <path
        d="M17 7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM17 15C15.34 15 14 13.66 14 12C14 10.34 15.34 9 17 9C18.66 9 20 10.34 20 12C20 13.66 18.66 15 17 15Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      id="Vector-1"
    >
      <path
        d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM2 16V2H8V16H2ZM16 16H10V9H16V16ZM16 7H10V2H16V7Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 16"
      id="Vector-2"
    >
      <path
        d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
    <symbol
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      id="Vector"
    >
      <path
        d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
        fill="black"
        fillOpacity="0.54"
      />
    </symbol>
  </svg>
);

export enum ICON {
  LOGO = '#_logoIpsum',
  ACCOUNT_CIRCLE = '#AccountCircleFilled',
  ADD = '#AddFilled',
  AVATAR = '#Avatar',
  CANCLE = '#CancelFilled',
  EDIT = '#EditFilled',
  BULLETIN = '#FormatAlignLeftFilled',
  GITHUB = '#GitHub',
  PEOPLE = '#PeopleFilled',
  PERSON_ADD = '#PersonAddFilled',
  CLOCK = '#QueryBuilderFille',
  SETTING = '#SettingsFilled',
  BOARD = '#Vector-1',
  TOGGLE_OFF = '#ToggleOffFilled',
  TOGGLE_ON = '#ToggleOnFilled',
  NOTIFICATION = '#Vector-2',
  SEARCH = '#Vector',
}

export function Icon({ size = '24', icon }: svgProps) {
  return (
    <svg width={size} height={size}>
      <use href={icon} />
    </svg>
  );
}
