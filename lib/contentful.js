import { createClient } from 'contentful';

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
    throw new Error("Contentful space ID and access token must be defined " + SPACE_ID + " " + ACCESS_TOKEN);
}

const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

export async function fetchEntries(contentType) {
    const entries = await client.getEntries({
        content_type: contentType,
    });
    return entries.items;
}
