import {ReactNode} from "react";

const variantMapping = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-semibold',
    h6: 'text-base font-semibold',
    subtitle1: 'text-lg font-medium',
    subtitle2: 'text-base font-medium ',
    body1: 'text-base',
    body2: 'text-sm text-muted-foreground',
    inherit: '',
};
interface Props {
    variant?: keyof typeof variantMapping
    className?: string
    children: ReactNode
}

const Typography = ({ variant = 'inherit', className = '', children }: Props) => {
    const classes = `${variantMapping[variant]} ${className}`.trim();

    return <span className={classes}>{children}</span>;
};

export default Typography;