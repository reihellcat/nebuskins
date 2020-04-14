import { Component, HTMLAttributes } from 'react';
import { Requireable } from 'prop-types';
import { HasInsets, HasPlatform, HasRootRef, OldRef } from '../../types';
export interface PanelProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasInsets, HasRootRef<HTMLDivElement> {
    id: string;
    separator?: boolean;
    centered?: boolean;
}
export interface PanelChildContext {
    panel: Requireable<string>;
}
export interface PanelContext {
    hasTabbar: Requireable<boolean>;
}
declare class Panel extends Component<PanelProps> {
    static childContextTypes: PanelChildContext;
    static defaultProps: Partial<PanelProps>;
    static contextTypes: PanelContext;
    getChildContext(): {
        panel: string;
    };
    container: HTMLDivElement;
    getRef: OldRef<HTMLDivElement>;
    render(): JSX.Element;
}
declare const _default: typeof Panel;
export default _default;
