type User = {
  name: string
}

export function generateUsers(length: number): User[] {
  return Array(length).fill(null).map((_, i) => ({
    name: i.toLocaleString()
  }))
}