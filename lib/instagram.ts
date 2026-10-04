const FEED_URL = "https://feeds.behold.so/XIY8p8B1ROMea2RmkYX6";

export type InstagramReel = {
  id: string;
  permalink: string;
  image: string;
  caption: string;
};

type BeholdSize = { mediaUrl?: string };

type BeholdPost = {
  id?: string;
  permalink?: string;
  caption?: string;
  prunedCaption?: string;
  mediaType?: string;
  visibility?: string;
  sizes?: {
    small?: BeholdSize;
    medium?: BeholdSize;
    large?: BeholdSize;
  };
};

type BeholdFeed = {
  username?: string;
  posts?: BeholdPost[];
};

function reelImage(post: BeholdPost) {
  return post.sizes?.large?.mediaUrl || post.sizes?.medium?.mediaUrl || post.sizes?.small?.mediaUrl || "";
}

export async function getInstagramReels(limit = 8): Promise<{ username: string; reels: InstagramReel[] }> {
  const fallback = { username: "prof.eyalsheiner", reels: [] as InstagramReel[] };

  try {
    const response = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!response.ok) return fallback;

    const data = (await response.json()) as BeholdFeed;
    const reels = (data.posts ?? [])
      .filter((post) => post.visibility !== "hidden" && post.mediaType === "VIDEO" && post.id && post.permalink)
      .map((post) => ({
        id: post.id as string,
        permalink: post.permalink as string,
        image: reelImage(post),
        caption: (post.prunedCaption || post.caption || "").trim(),
      }))
      .filter((reel) => reel.image)
      .slice(0, limit);

    return {
      username: data.username || fallback.username,
      reels,
    };
  } catch {
    return fallback;
  }
}
