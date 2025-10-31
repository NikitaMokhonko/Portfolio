import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home-entertainment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home-entertainment"!</div>
}
