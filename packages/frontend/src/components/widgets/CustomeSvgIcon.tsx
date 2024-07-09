import { FC, memo, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { createSvgIcon } from '@mui/material/utils';

const CustomeSvgIcon: FC<{
    id: number;
    children: ReactNode;
    width: string | object;
    height: string | object;
}> = memo(({ id, children, width, height }) => {
    const CustomeIcon = createSvgIcon(children, 'CustomeIcon');
    const StyledSvgIcon = styled(CustomeIcon)(({ theme }) => ({
        '&:hover': {
            stroke: theme.palette.secondary.main,
            fill: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            transition:
                'color 0.3s ease-in-out, fill 0.3s ease-in-out, stroke 0.3s ease-in-out',
            circle: {
                stroke: theme.palette.secondary.main,
                fill: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                transition:
                    'color 0.3s ease-in-out, fill 0.3s ease-in-out, stroke 0.3s ease-in-out',
            },
            path: {
                stroke: theme.palette.secondary.main,
                fill: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                transition:
                    'color 0.1s ease-in-out, fill 0.1s ease-in-out, stroke 0.1s ease-in-out',
            },
        },
    }));
    return (
        <StyledSvgIcon
            inheritViewBox
            sx={{
                width: width,
                height: height,
            }}
        />
    );
});

export default CustomeSvgIcon;
