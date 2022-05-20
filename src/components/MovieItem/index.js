import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import {Item, Thumbnail, PopupContainer, VideoPlayer} from './styledComponents'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  return (
    <Item>
      <Popup
        modal
        trigger={<Thumbnail src={movieDetails.thumbnailUrl} alt="thumbnail" />}
      >
        {close => (
          <PopupContainer>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>

            <VideoPlayer>
              <ReactPlayer url={movieDetails.videoUrl} controls />
            </VideoPlayer>
          </PopupContainer>
        )}
      </Popup>
    </Item>
  )
}

export default MovieItem
