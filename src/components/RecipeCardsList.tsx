import { Box } from '@mantine/core'

export function RecipeCardsList({ children }: { children: React.ReactNode }) {
  return (
    <Box
      w="100%"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 'var(--mantine-spacing-md)',
      }}
    >
      {children}
    </Box>
  )
}
