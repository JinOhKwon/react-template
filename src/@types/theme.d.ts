import '@mui/material';
import '@mui/material/styles';

interface MmtColor {
  black: true;
  white: true;
}

interface MmtButtonVariant {
  filledSmall: true;
}
declare module '@mui/material/SvgIcon' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface SvgIconPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Button' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ButtonPropsColorOverrides extends MmtColor {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ButtonPropsVariantOverrides extends MmtButtonVariant {}
}
declare module '@mui/material/StepButton' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ButtonPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/ButtonGroup' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ButtonGroupPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/CheckBox' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CheckboxPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Fab' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface FabPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Fab' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface FabPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Radio' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface RadioPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Slider' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface SliderPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Switch' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface SwitchPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Textfield' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TextFieldPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Badge' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface BadgePropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Chip' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ChipPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Pagination' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaginationPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/IconButton' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface IconButtonPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/TextField' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TextFieldPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Fab' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface FabPropsColorOverrides extends MmtColor {}
}
declare module '@mui/material/Alert' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface AlertPropsVariantOverrides {
    succeed: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headLineLarge: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    headLineLarge: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headLineLarge?: React.CSSProperties;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions {}

  /**
   * 팔레트 partial
   */
  export interface Palette {
    black: Palette['primary'];
    white: Palette['primary'];
  }

  export interface PaletteOptions {
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    black?: string;
    white?: string;
  }
  interface SimplePaletteColorOptions {
    black?: string;
    white?: string;
  }
}
