import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export const TokensGrid = ({
  tokens,
  hasRemValue = false,
}: TokensGridProps) => (
  <table className="tokens-grid">
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </tr>
    </thead>
    <tbody>
      {Object.entries(tokens).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
          {hasRemValue && <td>{+value.replace('rem', '') * 16}px</td>}
        </tr>
      ))}
    </tbody>
  </table>
)
