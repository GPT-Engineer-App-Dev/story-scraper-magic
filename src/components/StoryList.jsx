import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StoryList = ({ stories }) => {
  return (
    <div className="space-y-4">
      {stories.map((story) => (
        <Card key={story.objectID}>
          <CardHeader>
            <CardTitle className="text-lg">{story.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {story.points} upvotes | by {story.author}
              </span>
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-600"
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