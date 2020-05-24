import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';
import {Panel, Button, PanelHeader, Cell, Div, Title, Text} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";




const Thanks = ({ id, go, AllowMessage}) => (
	<Panel id={id}>
		<PanelHeader>Заявка отправлена</PanelHeader>
    <Div>
   <Title level="1" weight="semibold" style={{ marginBottom: 16, textAlign: 'center' }}>Спасибо!</Title>
   <Text weight="medium" style={{ marginBottom: 16, textAlign: 'center' }}>
    Ваш скин будет рассмотрен в течение нескольких часов.
    </Text>
    </Div>
    <Div>
    <Text weight="medium" style={{ marginBottom: 16, textAlign: 'center' }}>
     В личные сообщения сообщества будет отправлено сообщение об информации отправленого скина. Убедитесь, что Вы разрешили сообществу писать личные сообщения,
     иначе скин будет отклонен.
   </Text>
   <Cell>
   <Button onClick={AllowMessage} size="xl" mode="secondary">Разрешить писать сообщения</Button>
   </Cell>
   <Cell>
   <Button onClick={go} data-to="home" size="xl" mode="secondary">Главное меню</Button>
   </Cell>
    </Div>
	</Panel>
);

Thanks.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Thanks;