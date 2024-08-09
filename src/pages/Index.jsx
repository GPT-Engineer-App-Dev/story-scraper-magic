import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HackerNewsApp from '../components/HackerNewsApp';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Hacker News Top 100</h1>
          <HackerNewsApp />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Index;