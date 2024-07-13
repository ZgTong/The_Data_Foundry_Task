'use client';
import {
    FC,
    memo,
    useState,
    MouseEvent,
    useEffect,
} from 'react';
import { useRouter, useParams } from 'next/navigation';
import { signOut, getCurrentUser } from 'aws-amplify/auth';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import {
    ThemeProvider,
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    SvgIcon,
    MenuItem,
    Menu,
    Link,
    Typography,
} from '@mui/material';
import theme from '@root/theme';
import { HearderMenuData } from '@data/siteData';
export const headerID = 'headerNav';

const signOutAmplify = async () => {
    await signOut();
}
const Header: FC = memo(() => {
    const KL_theme = theme;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setMobileOpen((prevState) => !prevState);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileOpen((prevState) => !prevState);
    };
    const menuSVG_1 = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='14'
            viewBox='0 0 22 14'
            fill='none'
        >
            <path
                d='M1 1H21'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
            <path
                d='M7 6.5L21 6.5'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
            <path
                d='M1 12.5H21'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
        </svg>
    );
    const menuSVG_2 = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='14'
            viewBox='0 0 22 14'
            fill='none'
        >
            <path
                d='M1 1.5L21 12.5'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
            <path
                d='M1 12.5L21 1.5'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
        </svg>
    );
    const activeHeaderTab = useAppSelector(
        (state) => state.app.activeHeaderTab
    );
    const showHeader = useAppSelector((state) => state.app.showHeader);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const params = useParams();
    const scrollToAnchor = (anchor: string) => {
        const anchorElement = document.getElementById(anchor);
        if (anchorElement) {
            // console.log('scrolling to', anchorElement, anchorElement.getBoundingClientRect().top, window.scrollY, window.innerHeight / 2, anchorElement.clientHeight / 2);
            const elePosition =
                anchorElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition =
                elePosition -
                window.innerHeight / 2 +
                anchorElement.clientHeight / 2;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };
    useEffect(() => {
        const fetchUser = async () => {
            const user = await getCurrentUser();
            if(user) dispatch({ type: 'app/setUsername', payload: user.signInDetails?.loginId });
        }
        fetchUser();
    }, []);
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const anchor = hash.replace('#', '');
            // console.log('hash', anchor);
            scrollToAnchor(anchor);
        }
    }, [params]);
    const handleClick = (e: MouseEvent, id: number, route: string) => {
        e.preventDefault();
        if (id == 1)
            dispatch({ type: 'app/setSelectedWorksIndex', payload: id - 1 });

        router.push(route);
    };
    return (
        <ThemeProvider theme={KL_theme}>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    position: 'fixed',

                    top: 0,
                    paddingTop: {
                        xs: '60px',
                        lg: '46px',
                    },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingX: {
                        xs: '16px',
                        lg: '32px',
                    },
                    display: showHeader ? 'flex' : 'none',
                    justifyContent: 'center',
                    zIndex: 1000,
                    backgroundImage:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100px)',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1400px',
                        height: {
                            xs: '46px',
                            lg: '84px',
                        },
                        boxSizing: 'border-box',
                        boxShadow: '0px 0px 24px 0px rgba(41, 41, 41, 0.9)',
                        backgroundColor: 'warning.main',
                        borderRadius: {
                            xs: '16px 0',
                            lg: '32px 0',
                        },
                    }}
                    id={headerID}
                >
                    <CssBaseline />
                    <AppBar
                        component={'nav'}
                        sx={{
                            position: 'static',
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            borderRadius: {
                                xs: '16px 0',
                                lg: '32px 0',
                            },
                            backgroundColor: 'warning.main',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Toolbar
                            variant='dense'
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                height: '100%',
                                padding: {
                                    sm: '8px 16px',
                                    lg: '16px 32px',
                                },
                                boxSizing: 'border-box',
                            }}
                        >
                            <Link
                                href='/'
                                sx={{
                                    height: '100%',
                                    width: 'auto',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    color={'info.main'}
                                    variant='h4'
                                    sx={{
                                        fontStyle: 'normal',
                                        width: '100%',
                                        '&:hover': {
                                            color: 'secondary.main',
                                            transition:
                                                'color 0.3s ease-in-out',
                                        },
                                        '&:focus': {
                                            color: 'secondary.main',
                                            transition:
                                                'color 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    The Data Foundry
                                </Typography>
                            </Link>
                            <IconButton
                                color='inherit'
                                aria-label='open drawer'
                                edge='start'
                                onClick={(e) => handleMenuClick(e)}
                                onMouseEnter={() =>
                                    !isHovered && setIsHovered(true)
                                }
                                onMouseLeave={() =>
                                    isHovered && setIsHovered(false)
                                }
                                sx={{
                                    display: {
                                        xs: 'block',
                                        lg: 'none',
                                    },
                                }}
                            >
                                <SvgIcon
                                    children={
                                        mobileOpen ? menuSVG_2 : menuSVG_1
                                    }
                                />
                            </IconButton>
                            <Box
                                sx={{
                                    display: {
                                        xs: 'none',
                                        lg: 'flex',
                                    },
                                    gap: '64px',
                                }}
                            >
                                {HearderMenuData.map((item, index) => (
                                    <Link
                                        key={item.id}
                                        onClick={(e) =>
                                            handleClick(e, item.id, item.route)
                                        }
                                        sx={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Typography
                                            variant='label1'
                                            color={
                                                item.href == activeHeaderTab ||
                                                item.id == 4
                                                    ? 'secondary.main'
                                                    : 'info.main'
                                            }
                                            sx={{
                                                '&:hover': {
                                                    color: 'secondary.main',
                                                    transition:
                                                        'color 0.3s ease-in-out',
                                                },
                                                '&:focus': {
                                                    color: 'secondary.main',
                                                    transition:
                                                        'color 0.3s ease-in-out',
                                                },
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </Link>
                                ))}
                                <Link
                                    key={'singout'}
                                    onClick={async (e) => await signOutAmplify()}
                                    sx={{
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                        width: '100%',
                                        padding: 0,
                                    }}
                                >
                                    <Typography
                                        variant='label1'
                                        color={'info.main'}
                                        sx={{
                                            '&:hover': {
                                                color: 'secondary.main',
                                                transition:
                                                    'color 0.3s ease-in-out',
                                            },
                                            '&:focus': {
                                                color: 'secondary.main',
                                                transition:
                                                    'color 0.3s ease-in-out',
                                            },
                                        }}
                                    >
                                        Logout
                                    </Typography>
                                </Link>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {HearderMenuData && HearderMenuData.length > 0 && (
                        <Menu
                            open={showHeader && open}
                            id='headerMenu'
                            anchorEl={anchorEl}
                            onClose={handleMenuClose}
                            sx={{
                                '.MuiPaper-root': {
                                    backgroundColor: 'warning.main',
                                    padding: '40px 32px',
                                    borderRadius: {
                                        xs: '0 16px',
                                    },
                                    boxShadow:
                                        '0px 9px 51.3px 0px rgba(41, 41, 41, 0.9)',
                                },
                                '.MuiList-root': {
                                    padding: 0,
                                },
                                '.MuiMenuItem-root': {
                                    padding: '8px 0',
                                },
                            }}
                        >
                            {HearderMenuData.map((item) => {
                                return (
                                    <MenuItem
                                        key={item.id}
                                        onClick={handleMenuClose}
                                        id={item.href}
                                    >
                                        <Link
                                            sx={{
                                                textDecoration: 'none',
                                                textAlign: 'center',
                                                color:
                                                    item.href ==
                                                        activeHeaderTab ||
                                                    item.id == 4
                                                        ? 'secondary.main'
                                                        : 'info.main',
                                                width: '100%',
                                                padding: 0,
                                                '&:hover': {
                                                    color: 'secondary.main',
                                                    transition:
                                                        'color 0.3s ease-in-out',
                                                },
                                                '&:focus': {
                                                    color: 'secondary.main',
                                                    transition:
                                                        'color 0.3s ease-in-out',
                                                },
                                            }}
                                            onClick={(e) =>
                                                handleClick(
                                                    e,
                                                    item.id,
                                                    item.route
                                                )
                                            }
                                        >
                                            <Typography variant='label1'>
                                                {item.text}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                );
                            })}

                            <Link
                                key={'singout'}
                                onClick={async (e) => await signOutAmplify()}
                                sx={{
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    width: '100%',
                                    padding: 0,
                                }}
                            >
                                <Typography
                                    variant='label1'
                                    color={'info.main'}
                                    sx={{
                                        '&:hover': {
                                            color: 'secondary.main',
                                            transition:
                                                'color 0.3s ease-in-out',
                                        },
                                        '&:focus': {
                                            color: 'secondary.main',
                                            transition:
                                                'color 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    Logout
                                </Typography>
                            </Link>
                        </Menu>
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
});
Header.displayName = 'Header';
export default Header;
