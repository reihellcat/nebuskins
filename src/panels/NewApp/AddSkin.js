import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import PropTypes from 'prop-types';
import { Text, Title, View, Tappable, IS_PLATFORM_ANDROID, Panel, PanelHeader, PanelHeaderBack, Div, Placeholder, Button, ModalRoot, PanelHeaderButton, ModalPage, ModalPageHeader, Link } from '@vkontakte/vkui';

import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';


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

// class AddSkin extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeModal: null,
//       modalHistory: []
//     };

//     this.modalBack = () => {
//       this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
//     };
//   }
  

//   setActiveModal(activeModal) {
//     activeModal = activeModal || null;
//     let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

//     if (activeModal === null) {
//       modalHistory = [];
//     } else if (modalHistory.indexOf(activeModal) !== -1) {
//       modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
//     } else {
//       modalHistory.push(activeModal);
//     }

//     this.setState({
//       activeModal,
//       modalHistory
//     });
//   };
    

//   render() {
//    const modal = (
//       <ModalRoot
//         activeModal={this.state.activeModal}
//         onClose={this.modalBack}>
//           <ModalPage
//           id={MODAL_PAGE_SUBMIT}
//           onClose={this.modalBack}
//           header={
//             <ModalPageHeader
//               left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={this.modalBack}><Icon24Cancel /></PanelHeaderButton>}
//               right={<PanelHeaderButton  onClick={this.modalBack}> <Icon24Done /></PanelHeaderButton>}
//             >
//               Предложить
//             </ModalPageHeader>
//           }> 
//           <AddSkinForm/>
//          </ModalPage>
//         </ModalRoot>
//    );
//       return (
//           <View  id="add_skin" activePanel="add_skin" modal={modal}>
//           <Panel id="add_skin">
//             <Tappable onClick={this.eruda}>
//             <PanelHeader>Предложить</PanelHeader>
//             </Tappable>
//             <Div>
//         <Placeholder
//           icon={<Icon28PictureStackOutline width={128} height={128} />}
//           header="Предложить свой скин"
//   action={<Button onClick={() => this.setActiveModal(MODAL_PAGE_SUBMIT)} mode="commerce" size="l">Предложить скин</Button>}
//           >
//           <h4>Привет! В данном разделе ты можешь предложить свой собственный скин для каталога приложения!
//           Владелец каждого скина, который будет принят в каталог приложения получит от 2,500 до 5,000
//           плазмы от администраторов сообщества Nebulous.</h4>
//         </Placeholder>
//         </Div>
//           </Panel>
//         </View>
       
//         )
//       }
//     }

export default AddSkin;