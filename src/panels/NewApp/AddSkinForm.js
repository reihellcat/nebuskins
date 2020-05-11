import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { Button, Div, Input, Select, File, Checkbox, Link, FormLayout, PanelHeaderBack, PanelHeader, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


function AddSkinForm({ id, go, fetchedUser }) {
  const [skins, setSkins] = React.useState([])
  const [newSkinNickname, setNewSkinNickname] = React.useState()
  const [newPlayerID, setNewPlayerID] = React.useState()
  const [newCategory, setNewCategory] = React.useState()

  React.useEffect(() => {
      const fetchData = async () => {
          const db = firebase.firestore()
          const data = await db.collection("skins").get()
          setSkins(data.docs.map(doc => doc.data()))

      }
      fetchData()
  }, [])

const onCreate = () => {
  const db = firebase.firestore()
  db.collection('skins').doc(newPlayerID).set({nickname: newSkinNickname, player_id: newPlayerID,
                                              category: newCategory, user:`${fetchedUser.first_name} ${fetchedUser.last_name}`, user_id:`${fetchedUser.id}`})
}
  return(
<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="add_skin"/>}>Предложить</PanelHeader>
        <Div>
         <FormLayout>
            <Input maxLength="16" top="Введите ваш никнейм" value={newSkinNickname} onChange={(e) => setNewSkinNickname(e.target.value)} placeholder="Dit"/>
            <Input  maxLength="8" top="Введите ваш игровой ID" value={newPlayerID} onChange={(e) => setNewPlayerID(e.target.value)} type="tel" placeholder="675"/>
            <Select  top="Категория" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Выберите категорию скина">
              <option value="Обычные скины">Обычные скины</option>
             <option value="Питомцы">Питомцы</option>
              <option value="Частицы">Частицы</option>
            </Select>
             <File type='image' top="Загрузите фото скина" size="l">Открыть галерею</File>
             <Checkbox >Я согласен со всем, что вы <Link>там</Link> понаписали</Checkbox>
             <Button mode="commerce" size="xl" onClick={onCreate} >Отправить</Button>
             </FormLayout>
 </Div>
	</Panel>
  )
  }
// const AddSkinForm = ({ id, go}) => (
// 	<Panel id={id}>
// 		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="add_skin"/>}>Обычные скины</PanelHeader>
//         <Div>
//          <FormLayout>
//             <Input maxLength="16" top="Введите ваш никнейм" value={newSkinNickname} placeholder="Paykan, hellcat, Legenda, Elly, Metalcore"/>
//             <Input  maxLength="8" top="Введите ваш игровой ID" type="tel" placeholder="5562478"/>
//             <Select  top="Категория" placeholder="Выберите категорию скина">
//               <option value="Обычные скины">Обычные скины</option>
//              <option value="Питомцы">Питомцы</option>
//               <option value="Частицы">Частицы</option>
//             </Select>
//             <ImageUploaderSkins/>
//              <File type='image' top="Загрузите фото скина" size="l">Открыть галерею</File>
//              <Checkbox >Я согласен со всем, что вы <Link>там</Link> понаписали</Checkbox>
//              <Button  size="xl"  >Отправить</Button>
//              </FormLayout>
//  </Div>
// 	</Panel>
// )

AddSkinForm.propTypes = {
	id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
		first_name: PropTypes.string,
		last_name: PropTypes.string,
})
};

export default AddSkinForm;

// function AddSkinForm() {
//     const [skins, setSkins] = React.useState([])
//     const [newSkinNickname, setNewSkinNickname] = React.useState()
//     const [newPlayerID, setNewPlayerID] = React.useState()
//     const [newCategory, setNewCategory] = React.useState()
    

//     React.useEffect(() => {
//         const fetchData = async () => {
//             const db = firebase.firestore()
//             const data = await db.collection("skins").get()
//             setSkins(data.docs.map(doc => doc.data()))
//         }
//         fetchData()
//     }, [])

   
//     return (
//         <Div>
//         <FormLayout>
//             <Input status={ newSkinNickname ? 'valid' : 'error'} maxLength="16" top="Введите ваш никнейм" placeholder="Paykan, hellcat, Legenda, Elly, Metalcore" value={newSkinNickname} onChange={(e) => setNewSkinNickname(e.target.value)}/>
//             <Input status={ newPlayerID ? 'valid' : 'error'} maxLength="8" top="Введите ваш игровой ID" type="tel" placeholder="5562478" value={newPlayerID} onChange={(e) => setNewPlayerID(e.target.value)}/>
//             <Select status={ newCategory ? 'valid' : 'error'} top="Категория" placeholder="Выберите категорию скина" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} >
//               <option value="Обычные скины">Обычные скины</option>
//               <option value="Питомцы">Питомцы</option>
//               <option value="Частицы">Частицы</option>
//             </Select>
//             <ImageUploaderSkins/>
//             {/* <File type='image' top="Загрузите фото скина" size="l">Открыть галерею</File> */}
//             <Checkbox >Я согласен со всем, что вы <Link>там</Link> понаписали</Checkbox>
//             <Button status={ newCategory ? 'active' : 'disabled'} size="xl" onClick={onCreate}  >Отправить</Button>
//             </FormLayout>
// </Div>
//     );
// }