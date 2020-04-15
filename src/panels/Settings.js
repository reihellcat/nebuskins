import React from 'react';
import { View, Card, CardGrid, Panel, PanelHeader, Group, Cell, Switch, Button } from '@vkontakte/vkui';
import connect from '@vkontakte/vkui-connect'; // VK Connect
import {ConfigProvider} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'; // Импортируем css

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scheme: "bright_light" // Если не придет тема - ставим эту по умолчанию.
        };
    }

    componentDidMount() {
        connect.subscribe(({ detail: { type, data }}) => { // Подписываемся на события.
			if (type === 'VKWebAppUpdateConfig') { // Получаем тему клиента.
                this.setState({scheme: data.scheme})
            }
        })
        //  Добавляем обработчик события изменения истории для работы аппаратных кнопок.
    }

    UpdateTheme() {
        if(this.state.scheme === "bright_light" || this.state.scheme === "client_light"){ // Если в стейте эти темы: 
            this.setState({scheme: 'space_gray'}); // меняем тему на альтернативную.
            connect.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000"}); // Устанавливаем цвет статус бара на белый и экшен бара на черный.
	} else if(this.state.scheme === "space_gray" || this.state.scheme === "client_dark") {
            this.setState({scheme: 'bright_light'}); // меняем тему на альтернативную.
            connect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#fff"}); // Устанавливаем цвет статус бара на черный и экшен бара на белый.
        }
     }
    
    render() {
        return(
            // scheme - это тема, которую мы ставим в приложением
            <ConfigProvider scheme={this.state.scheme}> 
            <View>
            <Cell asideContent={<Switch />}>
          Темная тема
        </Cell>
        <Button onClick={() => this.UpdateTheme()} size="xl" mode="secondary">Сменить тему на альтернативную</Button>
            </View>
            </ConfigProvider>
        );
    }
}

export default Settings;