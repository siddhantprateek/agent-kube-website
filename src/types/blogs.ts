// types/blogs.ts

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _id: string;
    url: string;
  };
}

export interface SanityReference {
  _ref: string;
  _type: 'reference';
}

export interface Author {
  _id: string;
  name: string;
  bio: any[];
  image: SanityImage;
}

export interface Category {
  _id: string;
  title: string;
}

export interface CodeBlock {
  _type: 'code';
  _key: string;
  language: string;
  code: string;
}

export interface TableRow {
  _key: string;
  cells: string[];
}

export interface Table {
  _type: 'table';
  _key: string;
  rows: TableRow[];
}


export interface BlockImage {
  _type: 'image';
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
    url: string;
  };
  caption?: string;
}

export interface BlockContent {
  _key: string;
  _type: 'block' | 'image' | 'code' | 'table';
  style?: string;
  children?: Array<{
    _key: string;
    _type: string;
    text: string;
    marks: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
  language?: string;
  code?: string;
  rows?: TableRow[];
  listItem?: 'bullet' | 'number';
  level?: number;
  asset?: {
    _ref: string;
    _type: "reference";
  }
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: SanitySlug;
  author: Author;
  mainImage: SanityImage | null;
  categories: Category[];
  publishedAt: string;
  body: BlockContent[];
}

// Update your component's state type
export type IPost = Post[];