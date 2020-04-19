import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';


class AddSkin extends React.Component {

    render () {
		
        return (
<View activePanel="add_skin_form">
    <Panel id="add_skin_from">
      <PanelHeader
        left={<PanelHeaderBack />}
        
      >
        Предложить скин
      </PanelHeader>
    </Panel>
  </View>
        )
}
}

export default AddSkin;