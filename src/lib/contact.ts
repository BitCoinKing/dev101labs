type MailtoConfig = {
  to: string;
  subject: string;
  bodyLines: string[];
};

export function buildMailtoHref({
  to,
  subject,
  bodyLines,
}: MailtoConfig) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(bodyLines.join("\n"));

  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

export const strategyCallMailto = buildMailtoHref({
  to: "info@dev101labs.com",
  subject: "Strategy Call Request - Dev101Labs Website",
  bodyLines: [
    "Hi Dev101Labs,",
    "",
    "My name is: [Name]",
    "My company is: [Company]",
    "Website: [URL]",
    "",
    "What I'd like help with:",
    "[Brief description of project or needs]",
    "",
    "Estimated budget range: [Budget]",
    "Ideal timeline: [Timeline]",
    "",
    "How did you hear about Dev101Labs?",
    "[Referral or source]",
    "",
    "-",
    "[Your Name]",
  ],
});
