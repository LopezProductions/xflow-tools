import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Email: {
          type: 'email',
          email,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
