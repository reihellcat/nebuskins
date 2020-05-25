import React, {useEffect} from 'react';
import firebase from 'firebase';
import {app} from 'C:/Users/Павел/Desktop/vkapp/nebuskins/src/firebase.js';
import PropTypes from 'prop-types';
import { Div, Avatar, Banner, Group, Header, Cell, PanelHeader, Panel, PanelHeaderBack, Counter } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";




function DefaultSkins({ id, go}) {
	const db = app.firestore();
	const [request, setRequest] = React.useState([]);
	useEffect(() => {
		const fetchRequest = async () => {
		  const requestCollection = await db.collection("request").get();
		  setRequest(
			requestCollection.docs.map((doc) => {
			  return doc.data();
			})
		  );
		};
		fetchRequest();
	  }, [])
	  return (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Обычные скины</PanelHeader>
		<Group header={<Header mode="secondary">Новые скины</Header>}></Group>
{request.map((playerID) => {
          return (
		  <Cell expandable indicator={<Counter size="s" mode="prominent">Новый скин</Counter>}  before={<Avatar size={64} src={playerID.image} />}>Автор: {playerID.nickname}</Cell>
          );
        })}
	</Panel>
	  )
}


DefaultSkins.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	main_skin: PropTypes.func.isRequired
};

export default DefaultSkins;