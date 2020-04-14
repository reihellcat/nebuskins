import { HTMLAttributes, ReactNode } from 'react';
import { HasRef, HasRootRef } from '../../types';
export interface PanelHeaderSimpleProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    left?: ReactNode;
    addon?: ReactNode;
    right?: ReactNode;
    separator?: boolean;
    transparent?: boolean;
    /**
     * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
     */
    visor?: boolean;
}
declare const PanelHeaderSimple: {
    ({ className, left, addon, children, right, separator, visor, transparent, getRef, getRootRef, ...restProps }: PanelHeaderSimpleProps): JSX.Element;
    defaultProps: {
        separator: boolean;
        transparent: boolean;
        visor: boolean;
    };
};
export default PanelHeaderSimple;
