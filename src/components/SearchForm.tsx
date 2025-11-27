import { useNavigate } from 'react-router-dom'
import { useForm } from '@mantine/form'
import { TextInput } from '@mantine/core'

export function SearchForm() {
  const navigate = useNavigate()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      query: '',
    },
    validate: {
      query: (value: string) => (value.trim().length > 0 ? null : 'Search'),
    },
  })

  function handleSubmitSearch(values: { query: string }) {
    const encodedQuery = encodeURIComponent(values.query)

    navigate(`/search/${encodedQuery}`)

    form.reset()
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmitSearch)}>
      <TextInput
        placeholder="Search"
        key={form.key('query')}
        {...form.getInputProps('query')}
      />
    </form>
  )
}
