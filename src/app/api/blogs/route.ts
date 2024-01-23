import { getBlogs } from '@/firebase/services/blogs.service';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const blogs = await getBlogs();
  return NextResponse.json({ blogs });
}
