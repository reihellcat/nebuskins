import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Tappable, IS_PLATFORM_ANDROID, Panel, PanelHeader, Div, Placeholder, Button, ModalRoot, PanelHeaderButton, ModalPage, ModalPageHeader } from '@vkontakte/vkui';

import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

import AddSkinForm from './AddSkinForm';
import ImageUploaderSkins from './ImageUploaderSkins';

const MODAL_PAGE_SUBMIT = 'add_skin_submit';


class AddSkin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: null,
      modalHistory: []
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
              right={<PanelHeaderButton  onClick={this.modalBack}> <Icon24Done /></PanelHeaderButton>}
            >
              Предложить
            </ModalPageHeader>
          }> 
          <AddSkinForm/>
         </ModalPage>
        </ModalRoot>
   );
      return (
          <View  id="add_skin" activePanel="add_skin" modal={modal}>
          <Panel id="add_skin">
            <Tappable onClick={this.eruda}>
            <PanelHeader>Предложить</PanelHeader>
            </Tappable>
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
        <ImageUploaderSkins/>
          </Panel>
        </View>
       
        )
      }
    }

export default AddSkin;