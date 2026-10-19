import hoolockTianxingAudio from "../../../public/Hoolock_tianxing.m4a";
import hoolockHoolockAudio from "../../../public/Hoolock_hoolock.wav";
import data, { archiveSpeciesPath } from "../../../data/archive";

export { archiveBasePath } from "../../../data/archive";

export const archivePath = (index: number) =>
  archiveSpeciesPath(data[index].slug);

export const findArchiveIndexBySlug = (slug: string | undefined) =>
  slug ? data.findIndex((item) => item.slug === slug) : -1;

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
  hoolockTianxingAudio,
  cosAudioUrl("Nomascus_hainanus.mp3"),
  cosAudioUrl("Nomascus_nasutus.mp3"),
  cosAudioUrl("Nomascus_concolor.mp3"),
  cosAudioUrl("Nomascus_leucogenys.mp3"),
  cosAudioUrl("Hylobates_lar.mp3"),
  hoolockHoolockAudio,
];
