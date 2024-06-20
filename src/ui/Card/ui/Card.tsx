import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';

import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export const Card = (props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])} data-testid="Card" {...otherProps}>
            {children}
        </div>
    );
};
