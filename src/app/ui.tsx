export function StaticComponent() {
  return <div>StaticComponent</div>;
}

export async function DynamicComponent() {
  const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  await delay(1000);
  return <div>DynamicComponent</div>;
}

export function Fallback() {
  return <div>Fallback</div>;
}