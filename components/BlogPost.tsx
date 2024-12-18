import React from 'react';
import {useTranslations} from 'next-intl';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = React.memo(({title, content, date}) => {
  const t = useTranslations('BlogPost');

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-3xl font-bold">{title}</h1>
      <time className="text-gray-500">{date}</time>
      <div className="mt-4">{content}</div>
    </article>
  );
});

BlogPost.displayName = 'BlogPost';

export default BlogPost; 