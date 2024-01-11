import { Button, Card, Input, Test } from "@repo/ui/src";

export default function Page(): JSX.Element {
  return (
    <div className="bg-card-foreground text-secondary h-screen space-y-3">
      <h1 className="text-3xl font-bold">Web</h1>
      <Button className="bg-yellow-400" size="lg">
        Web
      </Button>
      <Card className="bg-muted p-7 rounded">
        <Input className="bg-primary rounded" placeholder="Search" />
      </Card>
      <Test />
    </div>
  );
}
