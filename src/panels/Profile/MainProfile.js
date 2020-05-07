import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Avatar, Button, Cell, Div } from '@vkontakte/vkui';

const MainProfile = ({ fetchedUser }) => (
	<Panel>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description="Подпишись на нашу группу!"
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

	
	</Panel>
);

MainProfile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		}),
};

export default MainProfile;