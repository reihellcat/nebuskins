import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import firebase from 'firebase';
import { View, IS_PLATFORM_ANDROID, IS_PLATFORM_IOS, Input, Panel, File, Link, Checkbox, PanelHeader, Div, Select, Placeholder, Button, ModalRoot, PanelHeaderButton, ModalPage, ModalPageHeader, FormLayout } from '@vkontakte/vkui';

import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';

import AddSkinForm from './AddSkinForm';

const MODAL_PAGE_SUBMIT = 'add_skin_submit';


class AddSkin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: null,
      modalHistory: [],
    };

    this.modalBack = () => {
      this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
    };
  }


  setActiveModal(activeModal) {
    activeModal = activeModal || null;
    let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

    if (activeModal === null) {
      modalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
    } else {
      modalHistory.push(activeModal);
    }

    this.setState({
      activeModal,
      modalHistory
    });
  };
    

  render() {
   const modal = (
      <ModalRoot
        activeModal={this.state.activeModal}
        onClose={this.modalBack}>
          <ModalPage
          id={MODAL_PAGE_SUBMIT}
          onClose={this.modalBack}
          header={
            <ModalPageHeader
              left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={this.modalBack}><Icon24Cancel /></PanelHeaderButton>}
              right={<PanelHeaderButton autoSave onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
            >
              Предложить скин
            </ModalPageHeader>
          }> 
          <AddSkinForm/>
         </ModalPage>
        </ModalRoot>
   );
      return (
          <View id="add_skin" activePanel="add_skin" modal={modal}>
          <Panel id="add_skin">
            <PanelHeader>Предложить</PanelHeader>
            <Div>
        <Placeholder
          icon={<Icon28PictureStackOutline width={128} height={128} />}
          header="Предложить свой скин"
  action={<Button onClick={() => this.setActiveModal(MODAL_PAGE_SUBMIT)} mode="commerce" size="l">Предложить скин</Button>}
          >
          <h4>Привет! В данном разделе ты можешь предложить свой собственный скин для каталога приложения!
          Владелец каждого скина, который будет принят в каталог приложения получит от 2,500 до 5,000
          плазмы от администраторов сообщества Nebulous.</h4>
        </Placeholder>
        </Div>
          </Panel>
        </View>
       
        )
      }
    }

export default AddSkin;