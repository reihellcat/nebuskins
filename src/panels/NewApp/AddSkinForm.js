import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { Button, Div, Input, Select, File, Checkbox, Link, FormLayout, PanelHeaderBack, PanelHeader, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


import ImageUploaderSkins from '../AddSkin/ImageUploaderSkins';


const AddSkinForm = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="add_skin"/>}>Обычные скины</PanelHeader>
        <Div>
         <FormLayout>
            <Input maxLength="16" top="Введите ваш никнейм" placeholder="Paykan, hellcat, Legenda, Elly, Metalcore"/>
            <Input  maxLength="8" top="Введите ваш игровой ID" type="tel" placeholder="5562478"/>
            <Select  top="Категория" placeholder="Выберите категорию скина">
              <option value="Обычные скины">Обычные скины</option>
             <option value="Питомцы">Питомцы</option>
              <option value="Частицы">Частицы</option>
            </Select>
            <ImageUploaderSkins/>
             <File type='image' top="Загрузите фото скина" size="l">Открыть галерею</File>
             <Checkbox >Я согласен со всем, что вы <Link>там</Link> понаписали</Checkbox>
             <Button  size="xl"  >Отправить</Button>
             </FormLayout>
 </Div>
	</Panel>
)

AddSkinForm.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
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