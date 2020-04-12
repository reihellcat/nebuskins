import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Second from './panels/second';

const App = () => {
	const [activePanel, setActivePanel] = useState("home");
	const [scheme, SetScheme] = useState("bright_light")
	const [history, setHistory] = useState(['home'])
	
	function goToPage(name) {
		window.history.pushState({panel: name}, name)
		setActivePanel(name);
		history.push(name)
	};

	function goBack() {
  		if(history.length === 1){
    		connect.send("VKWebAppClose");
  		} else if(history.length > 1){
			history.pop()
			setActivePanel(history[history.length - 1])
  		}
	}

	function UpdateTheme() {
			if(scheme === "bright_light" || scheme === "client_light") {
				SetScheme('space_gray');
				connect.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000"});
			}
			else if(scheme === "space_gray" || scheme === "client_dark"){
				SetScheme('bright_light');
				connect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#fff"});
			}
	}

	useEffect(() => {
        window.addEventListener('popstate', () => goBack()); //  Добавляем обработчик события изменения истории для работы аппаратных кнопок.
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				SetScheme(data.scheme)
			}
		});
	}, []);
	 
	return (
		<ConfigProvider isWebView={true} scheme={scheme}>
			<View 
			activePanel={activePanel}
			onSwipeBack={goBack}
            history={history}>
				<Home id='home' goToPage={goToPage}/>
				<Second id='second' UpdateTheme={UpdateTheme}/>
			</View>
		</ConfigProvider>
	);
}

export default App;


