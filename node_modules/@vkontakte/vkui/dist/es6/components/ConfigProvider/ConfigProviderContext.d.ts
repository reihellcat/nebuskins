/// <reference types="react" />
import { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';
export declare enum Appearance {
    DARK = "dark",
    LIGHT = "light"
}
export declare enum Scheme {
    DEPRECATED_CLIENT_LIGHT = "client_light",
    DEPRECATED_CLIENT_DARK = "client_dark",
    BRIGHT_LIGHT = "bright_light",
    SPACE_GRAY = "space_gray"
}
export declare enum WebviewType {
    VKAPPS = "vkapps",
    INTERNAL = "internal"
}
export interface ConfigProviderContextInterface {
    scheme?: AppearanceSchemeType;
    isWebView?: boolean;
    webviewType?: WebviewType.INTERNAL | WebviewType.VKAPPS;
    app?: string;
    appearance?: AppearanceType;
}
export declare const ConfigProviderContext: import("react").Context<ConfigProviderContextInterface>;
