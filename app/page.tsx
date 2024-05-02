// page.tsx
import React from 'react';
import { Card, H1, H2 } from "@/app/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Card color="bg-white-500" width="w-full" height="h-full" margin="mb-4"> {/* Background Card */}
        <Card color="bg-sky-200" height="h-24" margin="mb-4" rounded="rounded-t-lg"> {/* Navbar Card */}
          <Card color="bg-sky-100" height="h-full" width="w-1/2" margin="mb-4" shadow=""> {/* Logo Card */}
            <H1>Will Dibble</H1>
          </Card>
        </Card>
        <Card color="bg-violet-200" height="h-48" margin="mb-4" rounded="rounded-b-lg"> {/* Main feature card */}
        <H2>Feature</H2>
        </Card>
        <div className="flex justify-between space-x-4">
          <Card color="bg-rose-200" width="w-1/2" height="h-96" margin="mb-4"> {/* First vertical card */}
          <H2>Card 1</H2>
          </Card>
          <Card color="bg-emerald-200" width="w-1/2" height="h-96" margin="mb-4"> {/* Second vertical card */}
          <H2>Card 2</H2>
          </Card>
      </div>
      </Card>
    </main>
  );
}