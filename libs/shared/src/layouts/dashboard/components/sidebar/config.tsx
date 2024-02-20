import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';

export const ElephantIcon = (props: SvgIconProps, active?: boolean) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8137 0H7.28613V4.53014C7.28613 5.32956 7.60353 6.09627 8.16856 6.66179C8.7336 7.2273 9.50004 7.54534 10.2995 7.54601H12.4136V5.8453H10.6381C10.4205 5.84497 10.205 5.80176 10.0041 5.71813C9.80323 5.63451 9.62077 5.51211 9.46718 5.35794C9.3136 5.20376 9.1919 5.02084 9.10905 4.81961C9.02619 4.61838 8.9838 4.4028 8.9843 4.18518V1.70071H11.4739C11.9131 1.70071 12.3344 1.87521 12.645 2.18583C12.9557 2.49645 13.1302 2.91774 13.1302 3.35702V11.4585C13.13 11.6285 13.1633 11.7969 13.2283 11.9539C13.2932 12.111 13.3885 12.2538 13.5086 12.3741C13.6287 12.4943 13.7714 12.5897 13.9284 12.6548C14.0855 12.7199 14.2538 12.7534 14.4238 12.7534H14.8296V3.01587C14.8296 2.61982 14.7516 2.22765 14.6 1.86174C14.4485 1.49584 14.2263 1.16338 13.9463 0.883327C13.6662 0.603278 13.3338 0.381131 12.9679 0.229569C12.602 0.0780077 12.2098 0 11.8137 0Z"
          fill={active ? theme.palette.primary.main : 'black'}
        />
        <path
          d="M14.4375 11.0537V12.7544H15.7111C15.9999 12.7544 16.2768 12.6401 16.4815 12.4364C16.6861 12.2327 16.8018 11.9563 16.8031 11.6675V11.0588L14.4375 11.0537Z"
          fill="black"
        />
        <path
          d="M6.65029 4.09719V2.29883H3.9388C2.93347 2.30184 1.97018 2.70263 1.25942 3.41363C0.548653 4.12464 0.148184 5.08805 0.145508 6.09339L0.145508 12.7542H1.94387V6.09339C1.9442 5.56429 2.15445 5.05693 2.52846 4.68268C2.90248 4.30843 3.4097 4.09786 3.9388 4.09719H6.65029Z"
          fill={active ? theme.palette.primary.main : 'black'}
        />
        <path
          d="M7.28446 8.72559C6.21672 8.72693 5.19312 9.15177 4.43823 9.9069C3.68334 10.662 3.25882 11.6858 3.25781 12.7535H5.05617C5.04908 12.4563 5.10149 12.1607 5.21032 11.8841C5.31915 11.6075 5.4822 11.3554 5.68987 11.1427C5.89755 10.93 6.14566 10.761 6.41962 10.6456C6.69357 10.5302 6.98783 10.4708 7.2851 10.4708C7.58236 10.4708 7.87663 10.5302 8.15058 10.6456C8.42453 10.761 8.67265 10.93 8.88032 11.1427C9.088 11.3554 9.25105 11.6075 9.35987 11.8841C9.4687 12.1607 9.52111 12.4563 9.51402 12.7535H11.3124C11.311 11.6856 10.8862 10.6619 10.1312 9.90682C9.37606 9.15173 8.35232 8.72693 7.28446 8.72559Z"
          fill={active ? theme.palette.primary.main : 'black'}
        />
      </svg>
    </SvgIcon>
  );
};

export const SpiderIcon = (props: SvgIconProps, active?: boolean) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.97199 6.45431L8.84531 2.486L15.7186 6.45431V14.3909L8.84531 18.3592L1.97199 14.3909V6.45431ZM8.84531 0.376953L17.5451 5.39978V15.4454L8.84531 20.4683L0.145508 15.4454V5.39978L8.84531 0.376953ZM5.13559 8.28079L8.84534 6.13896L12.5551 8.28079V12.5644L8.84534 14.7063L5.13559 12.5644V8.28079ZM8.84534 4.02992L14.3816 7.22627V13.619L8.84534 16.8153L3.3091 13.619V7.22627L8.84534 4.02992Z"
          fill={active ? theme.palette.primary.main : 'black'}
        />
      </svg>
    </SvgIcon>
  );
};

export const PigeonIcon = (props: SvgIconProps, active?: boolean) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6763 11.8034V11.8316C22.5951 11.8007 22.5124 11.7742 22.4285 11.7521C22.3641 11.7352 22.2988 11.7216 22.233 11.7114C22.115 11.6907 21.9953 11.6806 21.8755 11.6811C21.2954 11.6813 20.7392 11.912 20.3291 12.3223C19.919 12.7326 19.6886 13.2889 19.6886 13.869C19.6886 14.0614 19.6834 14.3217 19.6781 14.4168C19.5954 15.7366 19.0126 16.9753 18.0484 17.8804C17.0843 18.7855 15.8113 19.2889 14.4889 19.2882H3.91082C3.82093 19.2881 3.73331 19.26 3.66011 19.2079C3.58692 19.1557 3.53178 19.082 3.50236 18.9971C3.47294 18.9122 3.47069 18.8202 3.49593 18.7339C3.52117 18.6476 3.57264 18.5714 3.64321 18.5157L4.46905 17.8717L4.78266 17.625L7.8665 15.229C8.001 15.1244 8.16653 15.0676 8.33692 15.0676C8.50731 15.0676 8.67283 15.1244 8.80733 15.229L9.52446 15.7904C9.65833 15.8957 9.82346 15.9535 9.9938 15.9547C10.1641 15.9558 10.33 15.9002 10.4653 15.7967L15.6022 11.8661L18.4582 9.68858L18.4854 9.66767C18.809 9.43276 19.1818 9.27442 19.5755 9.20461C19.9693 9.1348 20.3738 9.15533 20.7584 9.26466C21.1431 9.37399 21.4979 9.56926 21.7961 9.83574C22.0943 10.1022 22.328 10.4329 22.4797 10.8029C22.5132 10.8834 22.5414 10.965 22.5675 11.0486C22.6397 11.2937 22.6763 11.5479 22.6763 11.8034Z"
          stroke={active ? theme.palette.primary.main : 'black'}
          strokeWidth="1.25"
        />
        <path
          d="M16.254 8.51742L10.3487 13.0878C10.2416 13.1711 10.1097 13.2163 9.97396 13.2163C9.83822 13.2163 9.70635 13.1711 9.59919 13.0878L7.64331 11.5595L7.3297 11.3107L5.84841 10.1607L5.53479 9.91508L4.24481 8.9063L3.9312 8.65959L3.74617 8.51638C3.64542 8.43812 3.57166 8.33032 3.53523 8.20806C3.4988 8.0858 3.50152 7.95521 3.543 7.83457C3.58448 7.71393 3.66265 7.60928 3.76656 7.53528C3.87047 7.46128 3.99493 7.42163 4.1225 7.42188H15.8798C16.0074 7.42178 16.1319 7.46164 16.2358 7.53585C16.3396 7.61007 16.4177 7.71493 16.4589 7.83573C16.5002 7.95653 16.5026 8.08721 16.4659 8.20946C16.4291 8.33171 16.3551 8.4394 16.254 8.51742Z"
          stroke={active ? theme.palette.primary.main : 'black'}
          strokeWidth="1.25"
        />
      </svg>
    </SvgIcon>
  );
};

export type AppName = 'elephants' | 'spiders' | 'pigeons';

export const SIDEBAR_ICONS: Record<
  AppName,
  (props: SvgIconProps) => JSX.Element
> = {
  elephants: ElephantIcon,
  spiders: SpiderIcon,
  pigeons: PigeonIcon,
};