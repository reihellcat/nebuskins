import { ButtonHTMLAttributes, FunctionComponent } from 'react';
export interface PanelHeaderButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    primary?: boolean;
    href?: string;
    target?: string;
}
declare const PanelHeaderButton: FunctionComponent<PanelHeaderButtonProps>;
export default PanelHeaderButton;
