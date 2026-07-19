export const getBilibiliEmbedUrl = (url: string) => {
  const bvMatch = url.match(/BV[\w]+/);
  if (bvMatch) {
    return `https://player.bilibili.com/player.html?bvid=${bvMatch[0]}&high_quality=1&autoplay=0`;
  }
  return url;
};

const VideoEmbed: React.FC<{ url: string; title?: string }> = ({
  url,
  title,
}) => {
  return (
    <div className="video-embed-container">
      <iframe
        src={getBilibiliEmbedUrl(url)}
        loading="lazy"
        allow="fullscreen"
        allowFullScreen={true}
        style={{
          width: "100%",
          height: "500px",
          maxWidth: "100%",
          border: "none",
          borderRadius: "8px",
        }}
        title={title || "Video"}
      />
    </div>
  );
};

export default VideoEmbed;
