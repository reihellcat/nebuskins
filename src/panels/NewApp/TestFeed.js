import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { Div, Avatar, Banner, PanelHeader, Panel, PanelHeaderBack } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";




const TestFeed = ({ id, go, main_skin}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Обычные скины</PanelHeader>
 {main_skin.map(skin => (
<Div key={skin.id}>
 <Banner style={{ blockSize: 80, marginBottom: 30 }} size="l"
        before={<Avatar size={96} mode="image" src={skin.image} />}
        header={<React.Fragment>Предложил: {skin.nickname}</React.Fragment>}
        subheader={<React.Fragment>ID игрока: {skin.player_id}<br/>Категория: {skin.category}</React.Fragment>}
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