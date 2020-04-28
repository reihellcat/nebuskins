import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import { Root, View, Panel, PanelHeader, Group, PanelHeaderBack, Text, Button, Div, PanelHeaderButton, Header } from '@vkontakte/vkui';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon24Smile from '@vkontakte/icons/dist/24/smile';
// import MainFeed from './MainFeed';
// import DefaultSkins from './DefaultSkins';
import TestFeed from './TestFeed';

class Feed extends React.Component {
    constructor(props) {
     super(props);
      
          this.state = {
            activeView: 'main'
          }
        }
      
        render() {
          return (
            <Root activeView={this.state.activeView}>
              <View activePanel="main" id="main">
                <Panel id="main">
                  <PanelHeader>Главная</PanelHeader>
                  <Header>Выберите категорию скина</Header>
                  <Div style={{display: 'center' }}>
      <Button size="xl" onClick={ () => this.setState({ activeView: 'def_skin' }) } style={{marginBottom: '10px', blockSize: 60 }} mode="primary"><Text style={{ fontWeight: 700, fontSize: 20 }}>Обычные скины</Text></Button>
      <Button size="xl" onClick={ () => this.setState({ activeView: 'pets' }) } after={<Icon24Smile style={{ width: 40 }} />} style={{marginBottom: '10px', blockSize: 60 }} mode="primary"><Text style={{ fontWeight: 700, fontSize: 20 }}>Питомцы</Text></Button>
      <Button size="xl" onClick={ () => this.setState({ activeView: 'particles' }) } style={{marginBottom: '10px', blockSize: 60  }} mode="primary"><Text style={{ fontWeight: 700, fontSize: 20 }}>Частицы</Text></Button>
     </Div>
                </Panel>
              </View>
              <View header activePanel="def_skin" id="def_skin">
                <Panel id="def_skin">
                  <PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'main' }) }/>} >Обычные скины</PanelHeader>
                  <Group>
                    <TestFeed />
                  </Group>
                </Panel>
              </View>
              <View header activePanel="pets" id="pets">
                <Panel id="pets">
                  <PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'main' }) }/>} >Питомцы</PanelHeader>
                  <Group>
                  </Group>
                </Panel>
              </View>
               <View header activePanel="particles" id="particles">
                 <Panel id="particles">
                   <PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'main' }) }/>} >Частицы</PanelHeader>
                   <Group>
                   </Group>
                 </Panel>
               </View>
            </Root>
          )
        }
      }
export default Feed;