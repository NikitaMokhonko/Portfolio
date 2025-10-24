import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/novabank')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/novabank"!</div>
}
