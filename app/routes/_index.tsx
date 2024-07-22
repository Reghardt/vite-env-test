import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export function loader() {
  console.log(import.meta.env.VITE_APP_TITLE);
  return null;
}

export default function Index() {
  return <div>{import.meta.env.VITE_APP_TITLE}</div>;
}
