import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export function loader() {
  console.log(import.meta.env);
  return null;
}

export default function Index() {
  console.log(import.meta.env);
  return <div>{import.meta.env.VITE_APP_TITLE}</div>;
}
