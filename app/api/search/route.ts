import users from '@/data/users.json';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const userData = users.filter((user) =>
    user.name.toLowerCase().includes(name?.toLowerCase() ?? ''),
  );
  return NextResponse.json(userData);
}
