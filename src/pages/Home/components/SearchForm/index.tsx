import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <div>
                <label htmlFor="search">Publicações</label>
                <span>6 publicações</span>
            </div>

            <input
                id="search"
                type="text"
                placeholder="Busque por transações"
            />
        </SearchFormContainer>
    )
}