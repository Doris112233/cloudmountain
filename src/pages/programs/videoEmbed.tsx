const VideoEmbed: React.FC<{ url: string; title?: string }> = ({
  url,
  title,
}) => {
  // Extract BV id from Bilibili URL
  const getBilibiliEmbedUrl = (url: string) => {
    const bvMatch = url.match(/BV[\w]+/);
    if (bvMatch) {
      return `https://player.bilibili.com/player.html?bvid=${bvMatch[0]}&high_quality=1&autoplay=0`;
    }
    return url;
  };

  return (
    <div className="video-embed-container">
      <iframe
        src={getBilibiliEmbedUrl(url)}
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
