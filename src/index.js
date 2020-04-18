import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";
import App from "./App";
import bridge from '@vkontakte/vk-bridge';
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';
import {platform, IOS} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

bridge.send('VKWebAppInit', {}); // Запусааем приложение
const root = document.getElementById('root');
if(platform() === IOS) {
    mVKMiniAppsScrollHelper(root); // Добавляем скролхелпер для Safari
}
ReactDOM.render(<App />, document.getElementById("root"));