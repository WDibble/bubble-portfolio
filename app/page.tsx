// page.tsx
import React from 'react';
import { Card, H1, H2 } from "@/app/components/Card";
import AreaChartComponent from '@/app/components/infographics/AreaChart';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Card as="article" color="bg-white" width="w-full" height="h-full" margin="mb-4" padding="p-6">
        <Card as="section" color="bg-sky-200" height="h-24" margin="mb-4" rounded="rounded-t-lg" shadow="shadow-none" padding="p-2">
          <Card as="div" color="bg-sky-100" width="w-1/2" margin="mb-4" shadow="shadow-none" rounded='rounded-md' padding="p-5">
            <H1>Will Dibble</H1>
          </Card>
        </Card>
        <Card as="section" color="bg-violet-200" height="h-48" margin="mb-4" rounded="rounded-b-lg" shadow="shadow-none" padding="p-4">
          <H2>Feature</H2>
        </Card>
        <div className="flex justify-between space-x-4">
          <Card as="section" color="bg-rose-200" width="w-1/2" height="h-96" margin="mb-4" shadow="shadow-none" padding="p-4">
            <H2>Card 1</H2>
          </Card>
          <Card as="section" color="bg-emerald-200" width="w-1/2" height="h-96" margin="mb-4" shadow="shadow-none" padding="p-4">
            <H2>Card 2</H2>
            <Card margin="mb-4 mt-4" width="w-full" height="h-1/2" rounded="rounded-md" shadow="shadow-none">
            <AreaChartComponent 
              headerText="Global vs Moneycorp Flow"
              subHeaderText="Flow Per Day"
              xAxisLabel="Month"
              yAxisLabel="Flow"
            />
            </Card>
          </Card>
        </div>
      </Card>
    </main>
  );
}