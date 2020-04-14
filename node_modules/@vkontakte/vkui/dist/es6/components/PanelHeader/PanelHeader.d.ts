import React, { Component, HTMLAttributes, ReactNode } from 'react';
import { Requireable } from 'prop-types';
import { HasPlatform, HasRef } from '../../types';
import { WebviewType } from '../ConfigProvider/ConfigProviderContext';
export interface PanelHeaderProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement>, HasPlatform {
    left?: ReactNode;
    addon?: ReactNode;
    right?: ReactNode;
    transparent?: boolean;
}
export interface PanelHeaderState {
    ready: boolean;
}
export interface PanelHeaderContext {
    panel: Requireable<string>;
    document: Requireable<{}>;
    scheme: Requireable<string>;
    webviewType: Requireable<WebviewType>;
}
/**
 * @deprecated используйте PanelHeaderSimple
 */
declare class PanelHeader extends Component<PanelHeaderProps, PanelHeaderState> {
    static defaultProps: PanelHeaderProps;
    static contextTypes: PanelHeaderContext;
    state: PanelHeaderState;
    leftNode: HTMLElement;
    addonNode: HTMLElement;
    titleNode: HTMLElement;
    rightNode: HTMLElement;
    get document(): Document;
    get webviewType(): WebviewType;
    componentDidMount(): void;
    render(): React.ReactPortal[];
}
declare const _default: typeof PanelHeader;
export default _default;
