import React from 'react'
import ReactPlayer from 'react-player'


function VideoPlayer()
{
    return(

        <ReactPlayer 
        controls={true}
        url='https://youtu.be/ZxKM3DCV2kE?si=EbJuHOkMavh8hX8P'
        style={{ borderRadius: '10px', overflow: 'hidden' ,width:'60%'}}
        />
    );
    
}

export default VideoPlayer;