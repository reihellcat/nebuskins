import React from 'react';
import { View, Card, CardGrid, Panel, PanelHeader, Group } from '@vkontakte/vkui';



class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View activePanel="card">
            <Panel id="card">
                <CardGrid>
                  <Card size="l">
                    <div style={{ height: 96 }} />
                  </Card>
                  <Card size="m">
                    <div style={{ height: 96 }} />
                  </Card>
                  <Card size="m">
                    <div style={{ height: 96 }} />
                  </Card>
                  <Card size="s">
                    <div style={{ height: 96 }} />
                  </Card>
                  <Card size="s">
                    <div style={{ height: 96 }} />
                  </Card>
                  <Card size="s">
                    <div style={{ height: 96 }} />
                  </Card>
                  <Card size="l">
                    <div style={{ height: 96 }} />
                  </Card>
                </CardGrid>
            </Panel>
          </View>
        );
    }
}

export default Main;