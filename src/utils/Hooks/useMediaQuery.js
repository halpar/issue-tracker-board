import { useMediaQuery } from 'react-responsive';

// xs - sm - md - lg
// --isMobile--

function useResponsive() {
    const xs = useMediaQuery({ query: '(max-width: 576px)' });
    const sm = useMediaQuery({ query: '(max-width: 768px)' });
    const lg = useMediaQuery({ query: '(max-width: 992px)' });
    const xl = useMediaQuery({ query: '(min-width : 1200px)' });
    const md = !(xs || lg || sm || xl);

    return { xs, sm: xs || sm, md, lg, xl, isMobile: xs || sm || md || xl };
}

export default useResponsive;
