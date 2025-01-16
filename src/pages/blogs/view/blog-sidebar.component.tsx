import React, { useState } from 'react';
import { Link2, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareLinks = {
    twitter: `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold mb-3">Share this</h3>
      <div className="flex gap-2">
        <Button
          className='bg-transparent border border-gray-400'
          variant="outline"
          size="icon"
          onClick={handleCopyLink}
          title={copied ? 'Copied!' : 'Copy link'}
        >
          <Link2 className="h-4 w-4" />
        </Button>
        <Button
          className='bg-transparent border border-gray-400'
          variant="outline"
          size="icon"
          asChild
        >
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" title="Share on LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button
          className='bg-transparent border border-gray-400'
          variant="outline"
          size="icon"
          asChild
        >
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" title="Share on Twitter">
            <img className='h-4 w-4' src="https://private-user-images.githubusercontent.com/130232913/341180954-2ecdfcf4-d572-4b6a-8613-8ca5e3455061.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzcwMzg3OTYsIm5iZiI6MTczNzAzODQ5NiwicGF0aCI6Ii8xMzAyMzI5MTMvMzQxMTgwOTU0LTJlY2RmY2Y0LWQ1NzItNGI2YS04NjEzLThjYTVlMzQ1NTA2MS5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExNlQxNDQxMzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYTg5MmVkN2FiM2MyODYwYjkyYTBkYTNkYjkwOTdlNmRhODEzYjMyMDBkZmM3ODUzMmMyZTZkMmNlOWUzYmUxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4jwPpCeJuUulmdsdNnnFm5roS-TBCUnF7H6sehj9GTs" alt="" />
          </a>
        </Button>
        <Button
          className='bg-transparent border border-gray-400'
          variant="outline"
          size="icon"
          asChild
        >
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" title="Share on Facebook">
            <Facebook className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function NewsletterSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log('Subscribe email:', email);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-8">
      <h3 className="text-sm font-semibold mb-2">Subscribe to newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">Get the latest posts delivered right to your inbox.</p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      </form>
    </div>
  );
}