import MoviesSlider from '../MoviesSlider'

import {
  MainContainer,
  PrimeImage,
  MoviesContainer,
  Heading,
  SliderContainer,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  //   console.log(comedyMoviesList)

  return (
    <MainContainer>
      <PrimeImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />

      <MoviesContainer>
        <Heading>Action Movies</Heading>
        <SliderContainer>
          <MoviesSlider moviesList={actionMoviesList} />
        </SliderContainer>
      </MoviesContainer>
      <MoviesContainer>
        <Heading>Comedy Movies</Heading>

        <SliderContainer>
          <MoviesSlider moviesList={comedyMoviesList} />
        </SliderContainer>
      </MoviesContainer>
    </MainContainer>
  )
}

export default PrimeVideo
