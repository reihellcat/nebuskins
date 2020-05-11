import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ConfigProvider} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";
import connect from '@vkontakte/vk-connect';

import firebase from './firebase';

import Home from './panels/NewApp/Home';
import TestFeed from './panels/NewApp/TestFeed';
import Settings from './panels/NewApp/Settings';
import AddSkin from './panels/NewApp/AddSkin';
import AddSkinForm from './panels/NewApp/AddSkinForm';
import Pets from './panels/NewApp/Pets';
import BackTheme from './panels/NewApp/BackTheme';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null);
  const [scheme, SetScheme] = useState("space_gray");
  const [main_skin, setSkins] = React.useState([])

	useEffect(() => {
		// bridge.subscribe(({ detail: { type, data }}) => {
		// 	if (type === 'VKWebAppUpdateConfig') {
		// 		const schemeAttribute = document.createAttribute('scheme');
		// 		schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
		// 		document.body.attributes.setNamedItem(schemeAttribute);
		// 	}
		// });
		async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
		}
		fetchData();
  }, []);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data }}) => {
    if (type === 'VKWebAppUpdateConfig') {
      SetScheme(data.scheme)
    }
  });
  }, []);


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


    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("skins").get()
            setSkins(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])
  



	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
    <ConfigProvider scheme={scheme} >
		<View activePanel={activePanel}>
			<Home id='home' go={go} />
			<TestFeed id='def_skins' main_skin={main_skin} go={go} />
      <Settings id="settings" UpdateTheme={UpdateTheme} fetchedUser={fetchedUser} go={go} />
      <AddSkin id="add_skin" go={go}/>
      <AddSkinForm id="add_skin_form" fetchedUser={fetchedUser}  go={go} />
      <Pets id="pets" go={go} />
      <BackTheme id="back_theme" go={go} />
		</View>
    </ConfigProvider>
	);
}

export default App;