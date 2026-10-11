import hoolockHoolockAudio from "../../../public/Hoolock_hoolock.wav";

export const normalizeArchiveId = (
  value: string | null | undefined,
  itemCount: number,
): number => {
  if (!value || itemCount <= 0 || !/^\d+$/.test(value)) return 0;

  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed < itemCount ? parsed : 0;
};

const cosAudioUrl = (filename: string) =>
  `https://static-1314371099.cos.ap-beijing.myqcloud.com/audio/${filename}`;

export const archiveAudioUrls = [
  cosAudioUrl("Hoolock_tianxing.mp3"),
  cosAudioUrl("Nomascus_hainanus.mp3"),
  cosAudioUrl("Nomascus_nasutus.mp3"),
  cosAudioUrl("Nomascus_concolor.mp3"),
  cosAudioUrl("Nomascus_leucogenys.mp3"),
  cosAudioUrl("Hylobates_lar.mp3"),
  hoolockHoolockAudio,
];
