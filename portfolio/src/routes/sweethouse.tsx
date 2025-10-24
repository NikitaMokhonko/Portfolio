import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sweethouse')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sweethouse"!</div>
}
