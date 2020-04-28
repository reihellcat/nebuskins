import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, PanelHeader, Div, Button, Text } from '@vkontakte/vkui';

const MainFeed = props => (
    <Panel id={props.id}> 
       <PanelHeader>Главная</PanelHeader>
  <Div style={{display: 'center' }}>
  <Button size="xl" onClick={() => props.this.goToPage("default_skins")} style={{marginBottom: '10px', blockSize: 60 }} mode="primary"><Text style={{ color: '#ffffff', fontWeight: 700, textAlign: 'left', fontSize: 20 }}>Обычные скины</Text></Button>
<Button size="xl"  style={{marginBottom: '10px', blockSize: 60 }} mode="primary"><Text style={{ fontWeight: 700, textAlign: 'left', fontSize: 20 }}>Питомцы</Text></Button>
<Button size="xl" style={{marginBottom: '10px', blockSize: 60  }} mode="primary"><Text style={{ color: '#ffffff', fontWeight: 700, textAlign: 'left', fontSize: 20 }}>Частицы</Text></Button>
     </Div>
    </Panel>
);
export default MainFeed;