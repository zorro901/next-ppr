import { Suspense } from "react"
import { StaticComponent, DynamicComponent, Fallback } from "@/app/ui"

export const experimental_ppr = true

export default function Page() {
  return (
    <>
      <StaticComponent />
      <Suspense fallback={<Fallback />}>
        <DynamicComponent />
      </Suspense>
    </>
  );
}