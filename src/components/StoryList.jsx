import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StoryList = ({ stories }) => {
  return (
    <div className="space-y-4">
      {stories.map((story) => (
        <Card key={story.objectID} className="border-green-200 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-lg text-green-800">{story.title}</CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-600">
                {story.points} upvotes | by {story.author}
              </span>
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 hover:text-green-600"
              >
                Read more
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StoryList;