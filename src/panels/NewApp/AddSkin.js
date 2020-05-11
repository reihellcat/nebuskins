import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import PropTypes from 'prop-types';
import { Text, Title, Panel, PanelHeader, PanelHeaderBack, Div, Button, Link } from '@vkontakte/vkui';



const AddSkin = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Предложить скин</PanelHeader>
    <Div>
   <Title level="1" weight="semibold" style={{ marginBottom: 16, textAlign: 'center' }}>Привет!</Title>
   <Text weight="medium" style={{ marginBottom: 16, textAlign: 'center' }}>
    Здесь ты можешь предложить свой скин!
    Владелец каждого скина, который будет принят в каталог приложения получит от 2,500 до 5,000        
    плазмы от администраторов сообщества Nebulous.
    </Text>
    </Div>
    <Div>
    <Text weight="medium" style={{ marginBottom: 16, textAlign: 'center' }}>
      Перед тем как отправить свой скин, прочтите <Link href="https://vk.com/topic-95380950_37955743">правила</Link>, чтобы Ваш скин не был отклонен.
   </Text>
   <Button onClick={go} data-to="add_skin_form" size="xl" mode="commerce">Предложить скин</Button>
    </Div>
	</Panel>
);


AddSkin.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};


export default AddSkin;