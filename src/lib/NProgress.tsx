import nProgress from 'nprogress';
import { ChildrenProps } from '@/types';

const NProgress = ({ children }: ChildrenProps) => {
    nProgress.configure({
        easing: 'ease',
        speed: 500
    });

    return children;
};

export default NProgress;
