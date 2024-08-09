import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const StorySkeletonList = () => {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, index) => (
        <Card key={index} className="border-green-200 shadow-md">
          <CardHeader className="bg-green-100">
            <Skeleton className="h-6 w-3/4 bg-green-200" />
          </CardHeader>
          <CardContent className="bg-white">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-1/4 bg-green-100" />
              <Skeleton className="h-4 w-20 bg-green-100" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StorySkeletonList;