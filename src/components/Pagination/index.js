import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from 'prop-types'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && 
      <AniLink to={prevPage} cover direction="left" bg="#16022c" duration={0.6}> página anterior</AniLink>
    }
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && 
      <AniLink to={nextPage} cover direction="right" bg="#16022c" duration={0.6}>proxima página </AniLink>
    }
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  prevPage: propTypes.string.isRequired,
  nextPage: propTypes.string,
}

export default Pagination