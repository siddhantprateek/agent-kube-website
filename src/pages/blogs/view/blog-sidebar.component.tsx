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
            <img className='h-4 w-4' src={"https://img.icons8.com/ios-glyphs/90/twitterx--v2.png"} alt="" />
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