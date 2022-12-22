

export const paginationLogic  = (currentPage, pokemonFilters ) => {
    const pokemonsPerPage = 12

    const sliceStart = (currentPage - 1) * pokemonsPerPage
    const sliceEnd = currentPage * pokemonsPerPage
    const pokemonsInPage = pokemonFilters.slice(sliceStart, sliceEnd)

    const lastPage = Math.ceil(pokemonFilters.length / pokemonsPerPage)

    const pagesPerBlock = 5
    const actualBlock = Math.ceil(currentPage / pagesPerBlock)

    const pagesInBlock = []
    const minPage = (actualBlock * pagesPerBlock - pagesPerBlock)
    const maxPage = actualBlock * pagesPerBlock
    for (let i = minPage; i <= maxPage; i++){
        if (i  <= lastPage){
            pagesInBlock.push(i)
        }
    }

    return {lastPage, pagesInBlock,  pokemonsInPage}
}