import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { PanelHeader, Panel, PanelHeaderBack, Headline } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";




const Pets = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Собственный фон</PanelHeader>
        <Headline level="2" weight="regular" style={{ marginBottom: 16, textAlign: 'center' }}>В этом разделе можно найти
        изображения для собственного фона игры.</Headline>
	</Panel>
);


Pets.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Pets;