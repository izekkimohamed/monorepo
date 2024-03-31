import Categories from "./categories-list";

async function Tabs() {
  return (
    <div className="max-w-full max-h-full row-span-1 overflow-y-scroll col-span-full bg-gradient-to-b from-primary to-primary-foreground/50 from-30%">
      <Categories />
    </div>
  );
}

export default Tabs;
