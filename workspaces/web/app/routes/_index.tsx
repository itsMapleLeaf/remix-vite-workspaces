import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { theClientAnswer } from "~/answer.client.ts"
import { theAnswer } from "~/answer.server.ts"
import { Counter } from "~/components/Counter.tsx"

export async function loader({ request }: LoaderFunctionArgs) {
	return { theAnswer }
}

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	]
}

export default function Index() {
	const { theAnswer } = useLoaderData<typeof loader>()
	return (
		<div>
			<h1>Welcome to Remix</h1>
			<p>The answer is {theAnswer}</p>
			<p>The client answer is {theClientAnswer}</p>
			<Counter />
		</div>
	)
}
