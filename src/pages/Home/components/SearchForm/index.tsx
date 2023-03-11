import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from "./styles";
import { useContext } from 'react';
import { UserContext } from '../../../../contexts/UsersContext';


const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { searchIssueInRepo, issues } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        watch
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchIssues(data: SearchFormInputs){
        searchIssueInRepo(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
            <div>
                <label htmlFor="search">Publicações</label>
                <span>{issues.length > 0 ? issues.length : 0} publicações</span>
            </div>

            <input
                id="search"
                type="text"
                placeholder="Busque sua issue"
                {...register('query')}
            />
        </SearchFormContainer>
    )
}