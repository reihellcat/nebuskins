import React from 'react';
import firebase from 'firebase';
import { Button, Div, Input, Card, CardGrid, Text, Separator, Avatar, Banner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

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
 <Banner style={{ blockSize: 80 }} size="l"
        before={<Avatar size={96} mode="image" src={skin.nickname} />}
        header={<React.Fragment>Предложил: {skin.nickname}</React.Fragment>}
        subheader={<React.Fragment>ID игрока: {skin.player_id}<br/>Категория: {skin.category}</React.Fragment>}
      />
</Div>
))}
        </React.Fragment>
    );
}

export default TestFeed;