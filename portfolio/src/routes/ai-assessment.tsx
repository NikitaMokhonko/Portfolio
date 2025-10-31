import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ai-assessment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ai-assessment"!</div>
}
