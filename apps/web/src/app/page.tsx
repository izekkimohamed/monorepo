import { Button } from "@repo/ui/src";

export default function Page(): JSX.Element {
  return (
    <div className="bg-primary text-secondary h-screen grid place-items-center">
      <h1 className="text-3xl font-bold">Web</h1>
      <Button className="bg-yellow-400" size={"lg"}>
        Web
      </Button>
    </div>
  );
}
