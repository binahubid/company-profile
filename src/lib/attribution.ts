const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "msclkid",
  "source",
] as const;

function locationWithoutQuery(value: string) {
  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`.slice(0, 2048);
  } catch {
    return "";
  }
}

function clean(value: string | null, maxLength: number) {
  const trimmed = value?.trim();
  return trimmed ? trimmed.slice(0, maxLength) : undefined;
}

export function readPageAttribution(currentUrl: string, referrer: string) {
  const current = new URL(currentUrl);
  const explicitSource = clean(current.searchParams.get("source"), 200);
  const attribution = {
    utmSource: clean(current.searchParams.get("utm_source"), 200) || (explicitSource === "program" ? undefined : explicitSource),
    utmMedium: clean(current.searchParams.get("utm_medium"), 200),
    utmCampaign: clean(current.searchParams.get("utm_campaign"), 300),
    utmContent: clean(current.searchParams.get("utm_content"), 300),
    utmTerm: clean(current.searchParams.get("utm_term"), 300),
    gclid: clean(current.searchParams.get("gclid"), 500),
    fbclid: clean(current.searchParams.get("fbclid"), 500),
    msclkid: clean(current.searchParams.get("msclkid"), 500),
    landingPage: locationWithoutQuery(currentUrl),
    referrer: locationWithoutQuery(referrer) || undefined,
  };
  return Object.fromEntries(Object.entries(attribution).filter(([, value]) => Boolean(value)));
}

export function assessmentUrlWithAttribution(destination: string, currentUrl: string, referrer: string) {
  const target = new URL(destination);
  const current = new URL(currentUrl);

  for (const key of TRACKING_KEYS) {
    const value = current.searchParams.get(key)?.trim();
    if (value) target.searchParams.set(key, value.slice(0, 500));
  }

  target.searchParams.set("landing_page", locationWithoutQuery(currentUrl));
  const safeReferrer = locationWithoutQuery(referrer);
  if (safeReferrer) target.searchParams.set("referrer", safeReferrer);
  return target.toString();
}
