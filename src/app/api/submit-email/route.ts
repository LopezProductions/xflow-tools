import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Dynamic import to avoid module resolution issues
    const { Client } = await import('@notionhq/client');
    const notion = new Client({ auth: process.env.NOTION_TOKEN });

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
