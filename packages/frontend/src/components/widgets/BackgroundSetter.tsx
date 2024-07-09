import { useEffect } from 'react';
import { useAppSelector } from '@lib/hooks';
const BackgroundSetter = () => {
    const backgroundImageMobile = useAppSelector(
        (state) => state.app.backgroundImageMobile
    );
    const backgroundImageDesktop = useAppSelector(
        (state) => state.app.backgroundImageDesktop
    );
    const backgroundColor = useAppSelector(
        (state) => state.app.backgroundColor
    );
    useEffect(() => {
        document.body.style.setProperty(
            '--background-image-mobile',
            backgroundImageMobile
        );
    }, [backgroundImageMobile]);
    useEffect(() => {
        document.body.style.setProperty(
            '--background-image-desktop',
            backgroundImageDesktop
        );
    }, [backgroundImageDesktop]);
    useEffect(() => {
        // console.log("setting background color", backgroundColor)
        document.body.style.setProperty('--background-color', backgroundColor);
    }, [backgroundColor]);
    return null;
};

export default BackgroundSetter;
