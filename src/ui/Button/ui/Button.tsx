import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: 'normal' | 'clear';
}

const Button = (props: ButtonProps) => {
    const { className, children, type = 'button', theme = 'normal', ...buttonProps } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            type={type}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

const Memoized = memo(Button);

export { Memoized as Button };
