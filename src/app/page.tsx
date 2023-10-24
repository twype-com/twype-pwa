import { Feed } from "@/features/explore/Feed/Feed";
import { PostPreview } from "@/features/explore/PostPreview/PostPreview";

export default function Home() {
  const fakeContent = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Feed>
      {fakeContent.map((item) => (
        <PostPreview
          key={item}
          title="Name of the stream"
          tags={[
            "crypto",
            "bitcoin",
            "ethereum",
            "react",
            "javascript",
            "typescript",
            "nextjs",
            "css",
            "html",
            "scss",
            "sass",
            "less",
            "nodejs",
            "express",
            "mongodb",
            "postgresql",
            "mysql",
            "redis",
            "webpack",
          ]}
          user={{ nickName: "nickName" }}
        />
      ))}
    </Feed>
  );
}
