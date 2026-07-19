export const normalizeArchiveId = (
  value: string | null | undefined,
  itemCount: number,
): number => {
  if (!value || itemCount <= 0 || !/^\d+$/.test(value)) return 0;

  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed < itemCount ? parsed : 0;
};

export const archiveAudioUrls = [
  "Hoolock_tianxing.mp3",
  "Nomascus_hainanus.mp3",
  "Nomascus_nasutus.mp3",
  "Nomascus_concolor.mp3",
  "Nomascus_leucogenys.mp3",
  "Hylobates_lar.mp3",
  "Hoolock_hoolock.mp3",
].map(
  (filename) =>
    `https://static-1314371099.cos.ap-beijing.myqcloud.com/audio/${filename}`,
);
