import { Button } from "@repo/ui/src/button";

export default function Page(): JSX.Element {
  return (
    <div className="bg-primary text-secondary h-screen grid place-items-center">
      <h1 className="text-3xl font-bold">Web</h1>
      <Button />
    </div>
  );
}
