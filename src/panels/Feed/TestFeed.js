import React from 'react';
import firebase from 'firebase';
import { Div, Avatar, Banner, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Icon24ThumbUp from '@vkontakte/icons/dist/24/thumb_up';

function TestFeed() {
    const [skins, setSkins] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("skins").get()
            setSkins(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])


    return (
     <React.Fragment> 
                 
            {skins.map(skin => (
<Div key={skin.id}>
 <Banner style={{ blockSize: 100 }} size="l"
        before={<Avatar size={96} mode="image" src={skin.image} />}
        header={<React.Fragment>Предложил: {skin.nickname}</React.Fragment>}
        subheader={<React.Fragment>ID игрока: {skin.player_id}<br/>Категория: {skin.category}</React.Fragment>}
            text={<Button onClick='active' after={skin.likes} stretched mode="tertiary" style={{ width: 10, height: 30 }}><Icon24ThumbUp style={{ width: 5, height: 5 }}/></Button>}
      />
</Div>
))}
        </React.Fragment>
    );
}

export default TestFeed;