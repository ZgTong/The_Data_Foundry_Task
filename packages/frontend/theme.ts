import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
    interface TypographyVariants {
        d1: React.CSSProperties;
        d2: React.CSSProperties;
        d3: React.CSSProperties;
        d4: React.CSSProperties;
        label1: React.CSSProperties;
        label2: React.CSSProperties;
        label3: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        d1?: React.CSSProperties;
        d2?: React.CSSProperties;
        d3?: React.CSSProperties;
        d4?: React.CSSProperties;
        label1?: React.CSSProperties;
        label2?: React.CSSProperties;
        label3?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        d1: true;
        d2: true;
        d3: true;
        d4: true;
        h1: true;
        h2: true;
        h3: true;
        h4: true;
        body1: true;
        body2: true;
        label1: true;
        label2: true;
        label3: true;
        button: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        caption: false;
        overline: false;
    }
}
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 768,
            lg: 1024,
            xl: 1200,
        },
    },
    palette: {
        // 4 grays
        primary: {
            main: '#757575',
            light: '#bfc0c4',
            dark: '#424242',
            contrastText: '#858483',
        },
        // 2 oranges
        secondary: {
            main: '#EA4A18',
            dark: '#F6521E',
        },
        // 1 creame
        info: {
            main: '#EEE5D8',
        },
        warning: {
            main: '#141414',
            dark: '#424242',
        },
    },
    typography: {
        fontFamily: 'var(--font-dm-sans)',
        h5: undefined,
        h6: undefined,
        subtitle1: undefined,
        subtitle2: undefined,
        button: undefined,
        caption: undefined,
        overline: undefined,
    },
});
theme.typography.fontSize = theme.breakpoints.up('lg') ? 16 : 14;
theme.typography.d1 = {
    display: 'block',
    fontFamily: 'Denton Test Black',
    fontSize: '90px',
    lineHeight: '72px',
    letterSpacing: '-0.9px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Black',
        fontSize: '102px',
        lineHeight: '82px',
        letterSpacing: '-1.02px',
    },
};
theme.typography.d2 = {
    display: 'block',
    fontFamily: 'Denton Test Black',
    fontSize: '80px',
    lineHeight: '64px',
    letterSpacing: '-0.8px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Black',
        fontSize: '90px',
        lineHeight: '72px',
        letterSpacing: '-0.9px',
    },
};
theme.typography.d3 = {
    display: 'block',
    fontFamily: 'Denton Test Black',
    fontSize: '72px',
    lineHeight: '58px',
    letterSpacing: '-0.72px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Black',
        fontSize: '80px',
        lineHeight: '64px',
        letterSpacing: '-0.8px',
    },
};
theme.typography.d4 = {
    display: 'block',
    fontFamily: 'Denton Test Black',
    fontSize: '64px',
    lineHeight: '52px',
    letterSpacing: '-0.64px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Black',
        fontSize: '72px',
        lineHeight: '58px',
        letterSpacing: '-0.72px',
    },
};
theme.typography.h1 = {
    display: 'block',
    fontFamily: 'Denton Test Bold',
    fontSize: '36px',
    lineHeight: '44px',
    letterSpacing: '-0.36px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Bold',
        fontSize: '40px',
        lineHeight: '48px',
        letterSpacing: '-0.4px',
    },
};
theme.typography.h2 = {
    display: 'block',
    fontFamily: 'Denton Test Bold',
    fontSize: '32px',
    lineHeight: '38px',
    letterSpacing: '-0.32px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Bold',
        fontSize: '36px',
        lineHeight: '44px',
        letterSpacing: '-0.36px',
    },
};
theme.typography.h3 = {
    display: 'block',
    fontFamily: 'Denton Test Bold',
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '-0.28px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Bold',
        fontSize: '32px',
        lineHeight: '38px',
        letterSpacing: '-0.32px',
    },
};
theme.typography.h4 = {
    display: 'block',
    fontFamily: 'Denton Test Bold',
    fontSize: '20px',
    lineHeight: '20px',
    letterSpacing: '-0.2px',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontFamily: 'Denton Test Bold',
        fontSize: '28px',
        lineHeight: '34px',
        letterSpacing: '-0.28px',
    },
};
theme.typography.body1 = {
    display: 'block',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '400',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: '400',
    },
};
theme.typography.body2 = {
    display: 'block',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '400',
    },
};
theme.typography.label1 = {
    display: 'block',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.28px',
    fontWeight: '700',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.32px',
        fontWeight: '700',
    },
};
theme.typography.label2 = {
    display: 'block',
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '0.26px',
    fontWeight: '700',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0.28px',
        fontWeight: '700',
    },
};
theme.typography.label3 = {
    display: 'block',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
    fontWeight: '700',
    // lg breakpoint
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        fontSize: '13px',
        lineHeight: '16px',
        letterSpacing: '0.26px',
        fontWeight: '700',
    },
};

export default theme;
