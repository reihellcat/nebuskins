import React from 'react';
import { View, Panel, PanelHeader, Div, Cell,
         CellButton, Separator, ConfigProvider, 
         ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import connect from '@vkontakte/vk-connect';
import bridge from '@vkontakte/vk-bridge';
import {platform, IOS} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import TestFeed from './TestFeed';

import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon16PaletteOutline from '@vkontakte/icons/dist/16/palette_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';
import Icon28NotificationDisableOutline from '@vkontakte/icons/dist/28/notification_disable_outline';
import Icon24NotificationCheckOutline from '@vkontakte/icons/dist/24/notification_check_outline';
import Icon32Graffiti from '@vkontakte/icons/dist/32/graffiti';


class Settings extends React.Component {

    constructor (props) {
        super(props);
   
        this.state = {
          activeStory: 'settings',
          scheme: "bright_light",
          popout: null,
      };
     
   
        this.openTheme = this.openTheme.bind(this);
        this.openNotifications = this.openNotifications.bind(this);
        this.UpdateTheme = this.UpdateTheme.bind(this);
      }
   
        componentDidMount() {
          connect.subscribe(({ detail: { type, data }}) => { 
              if (type === 'VKWebAppUpdateConfig') {
                  this.setState({scheme: data.scheme})
              }
          })
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
   
      openNotifications () {
          this.setState({ popout:
            <ActionSheet onClose={() => this.setState({ popout: null })}>
              <ActionSheetItem before={<Icon24NotificationCheckOutline width={28} height={28}/>}
                                               onClick={() => bridge.send("VKWebAppAllowNotifications", {})}
                                                autoclose>
                Включить
              </ActionSheetItem>
              <ActionSheetItem before={<Icon28NotificationDisableOutline/>}
                             onClick={() => bridge.send("VKWebAppDenyNotifications", {})} autoclose>
                Отключить
              </ActionSheetItem>
              {platform() === IOS && <ActionSheetItem autoclose mode="cancel">Закрыть</ActionSheetItem>}
            </ActionSheet>
             
          });
          }
         
          openTheme () {
              this.setState({ popout:
              <ActionSheet onClose={() => this.setState({ popout: null })}>
                  <ActionSheetItem before={<Icon32Graffiti width={28} height={28}/>} onClick={this.UpdateTheme} autoclose>
                  Сменить тему
                  </ActionSheetItem>
                  {platform() === IOS && <ActionSheetItem autoclose mode="cancel">Закрыть</ActionSheetItem>}
              </ActionSheet>
              });
          }

render() {
    return (
<ConfigProvider scheme={this.state.scheme}>
<View popout={this.state.popout} id="settings" activePanel="settings" > 
<Panel id="settings">
  <PanelHeader>О нас</PanelHeader>
  <Div>
<CellButton size="x1" before={<Icon24Flash width={28} height={28} />} href="https://vk.com/nebulous" >Группа ВКонтакте</CellButton>
  </Div>
  <Separator/>
  <Div>
  <Cell before={<Icon28InfoOutline />} description="Версия 2504200204">Информация</Cell>
</Div>
<Separator />
<Div>
<Cell asideContent={<Icon28ChevronRightOutline />} before={<Icon16PaletteOutline width={28} height={28}/>} onClick={this.openTheme} description="Доступные темы: Тёмная, Светлая">Темы</Cell>
<Cell asideContent={<Icon28ChevronRightOutline />} before={<Icon28Notifications />} description="Работают, но отключены">Уведомления</Cell>
</Div>
<TestFeed/>
</Panel>
</View>
</ConfigProvider>
    )
}
}
export default Settings;
