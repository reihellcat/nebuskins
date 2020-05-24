import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { Div, Avatar, Banner, PanelHeader, Panel, PanelHeaderBack } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";




const TestFeed = ({ id, go, main_skin}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Обычные скины</PanelHeader>
 {main_skin.map(approved => (
<Div key={approved.id}>
 <Banner style={{ blockSize: 80, marginBottom: 30 }} size="l"
        before={<Avatar size={96} mode="image" src={approved.image} />}
        header={<React.Fragment>Предложил: {approved.nickname}</React.Fragment>}
        subheader={<React.Fragment>ID игрока: {approved.player_id}<br/>Категория: {approved.category}</React.Fragment>}
              />
</Div>
))}
	</Panel>
);


TestFeed.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	main_skin: PropTypes.func.isRequired
};

export default TestFeed;