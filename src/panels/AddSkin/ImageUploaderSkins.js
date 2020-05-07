import React from 'react';
import {View, Progress, File, Div} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';


class ImageUploaderSkins extends React.Component {
    
    state = {
     image: '',
     imageURL: '',
     progress: 0
}

handleUploadStart = () => {
    
    this.setState({
        progress: 0
    })
}

handleUploadSuccess = filename => {
    this.setState({
        image: filename,
        progress: 100
    })

    firebase.storage().ref('avatars').child(filename).getDownloadURL()
    .then(url => this.setState({
        imageURL: url
    }))

}

render() {
    return (
        <View id="file_uploader">
            <Div>
        <FileUploader
            accept="image/*" 
            name='image'
            storageRef={firebase.storage().ref('avatars')}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
            />
</Div>
<Div>
        <Progress 
            value={this.state.progress}/>
</Div>
</View>
    )
}
}

export default ImageUploaderSkins;
