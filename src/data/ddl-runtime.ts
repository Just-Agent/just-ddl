import { topics } from './topics';
import type { DDLItem } from './ddl-data';

type DDLLoader = () => Promise<DDLItem[]>;

const loaders: Record<string, DDLLoader> = {
  "academic-ddl": () => import('./ddl-runtime/academic-ddl').then((module) => module.ddlForAcademicDdl),
  "agent-ddl": () => import('./ddl-runtime/agent-ddl').then((module) => module.ddlForAgentDdl),
  "biotech-ddl": () => import('./ddl-runtime/biotech-ddl').then((module) => module.ddlForBiotechDdl),
  "car-launch-ddl": () => import('./ddl-runtime/car-launch-ddl').then((module) => module.ddlForCarLaunchDdl),
  "career-fair-ddl": () => import('./ddl-runtime/career-fair-ddl').then((module) => module.ddlForCareerFairDdl),
  "cas-partition-ddl": () => import('./ddl-runtime/cas-partition-ddl').then((module) => module.ddlForCasPartitionDdl),
  "civil-service-ddl": () => import('./ddl-runtime/civil-service-ddl').then((module) => module.ddlForCivilServiceDdl),
  "concert-ddl": () => import('./ddl-runtime/concert-ddl').then((module) => module.ddlForConcertDdl),
  "cv-ddl": () => import('./ddl-runtime/cv-ddl').then((module) => module.ddlForCvDdl),
  "data-science-ddl": () => import('./ddl-runtime/data-science-ddl').then((module) => module.ddlForDataScienceDdl),
  "design-ddl": () => import('./ddl-runtime/design-ddl').then((module) => module.ddlForDesignDdl),
  "exam-ddl": () => import('./ddl-runtime/exam-ddl').then((module) => module.ddlForExamDdl),
  "game-ddl": () => import('./ddl-runtime/game-ddl').then((module) => module.ddlForGameDdl),
  "game-dev-ddl": () => import('./ddl-runtime/game-dev-ddl').then((module) => module.ddlForGameDevDdl),
  "game-version-ddl": () => import('./ddl-runtime/game-version-ddl').then((module) => module.ddlForGameVersionDdl),
  "google-scholar-metrics-ddl": () => import('./ddl-runtime/google-scholar-metrics-ddl').then((module) => module.ddlForGoogleScholarMetricsDdl),
  "hackathon-ddl": () => import('./ddl-runtime/hackathon-ddl').then((module) => module.ddlForHackathonDdl),
  "holiday-ddl": () => import('./ddl-runtime/holiday-ddl').then((module) => module.ddlForHolidayDdl),
  "ielts-toefl-ddl": () => import('./ddl-runtime/ielts-toefl-ddl').then((module) => module.ddlForIeltsToeflDdl),
  "jcr-impact-factor-ddl": () => import('./ddl-runtime/jcr-impact-factor-ddl').then((module) => module.ddlForJcrImpactFactorDdl),
  "journal-ddl": () => import('./ddl-runtime/journal-ddl').then((module) => module.ddlForJournalDdl),
  "journal-volume-ddl": () => import('./ddl-runtime/journal-volume-ddl').then((module) => module.ddlForJournalVolumeDdl),
  "llm-release-ddl": () => import('./ddl-runtime/llm-release-ddl').then((module) => module.ddlForLlmReleaseDdl),
  "movie-tv-ddl": () => import('./ddl-runtime/movie-tv-ddl').then((module) => module.ddlForMovieTvDdl),
  "multimodal-ddl": () => import('./ddl-runtime/multimodal-ddl').then((module) => module.ddlForMultimodalDdl),
  "nlp-ddl": () => import('./ddl-runtime/nlp-ddl').then((module) => module.ddlForNlpDdl),
  "nsfc-ddl": () => import('./ddl-runtime/nsfc-ddl').then((module) => module.ddlForNsfcDdl),
  "open-source-ddl": () => import('./ddl-runtime/open-source-ddl').then((module) => module.ddlForOpenSourceDdl),
  "phone-launch-ddl": () => import('./ddl-runtime/phone-launch-ddl').then((module) => module.ddlForPhoneLaunchDdl),
  "programming-ddl": () => import('./ddl-runtime/programming-ddl').then((module) => module.ddlForProgrammingDdl),
  "regulation-ddl": () => import('./ddl-runtime/regulation-ddl').then((module) => module.ddlForRegulationDdl),
  "robotics-ddl": () => import('./ddl-runtime/robotics-ddl').then((module) => module.ddlForRoboticsDdl),
  "scholarship-ddl": () => import('./ddl-runtime/scholarship-ddl').then((module) => module.ddlForScholarshipDdl),
  "security-ddl": () => import('./ddl-runtime/security-ddl').then((module) => module.ddlForSecurityDdl),
  "sports-ddl": () => import('./ddl-runtime/sports-ddl').then((module) => module.ddlForSportsDdl),
  "startup-ddl": () => import('./ddl-runtime/startup-ddl').then((module) => module.ddlForStartupDdl),
  "student-contest-ddl": () => import('./ddl-runtime/student-contest-ddl').then((module) => module.ddlForStudentContestDdl),
};

const topicCache = new Map<string, Promise<DDLItem[]>>();
let allCache: Promise<DDLItem[]> | null = null;

function withTopicId(topicId: string, items: DDLItem[]): DDLItem[] {
  return items.map((item) => ({
    ...item,
    topicId: typeof item.topicId === 'string' && item.topicId ? item.topicId : topicId,
  }));
}

export async function loadDDLByTopic(topicId: string): Promise<DDLItem[]> {
  const loader = loaders[topicId];
  if (!loader) return [];
  const cached = topicCache.get(topicId);
  if (cached) return cached;

  const promise = loader().then((items) => withTopicId(topicId, items));
  topicCache.set(topicId, promise);
  return promise;
}

export async function loadAllDDL(): Promise<DDLItem[]> {
  if (allCache) return allCache;
  allCache = Promise.all(topics.map((topic) => loadDDLByTopic(topic.id))).then((groups) => groups.flat());
  return allCache;
}

export function knownDDLTopicIds(): string[] {
  return Object.keys(loaders);
}
