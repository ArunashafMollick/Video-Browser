import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const videoItems = videos.map((video) => {
		return (
			<VideoListItem
				key={video.id.videoId}
				video={video}
				onVideoSelect={onVideoSelect}
			/>
		);
	});

	return <div className='ui relaxed divided list'>{videoItems}</div>;
};

export default VideoList;
