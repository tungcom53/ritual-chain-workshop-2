export type MarketResult = {
  id: bigint;
  question: string;
  answer: string;
  resolved: boolean;
};

export function statusLabel(
  resolved: boolean,
): string {
  return resolved
    ? "Resolved"
    : "Open";
}

export function shortQuestion(
  question: string,
  limit = 60,
): string {
  const clean =
    question.trim();

  if (clean.length <= limit) {
    return clean;
  }

  return (
    clean.slice(0, limit - 3) +
    "..."
  );
}

export function formatResult(
  result: MarketResult,
): string {
  return [
    `#${result.id}`,
    `Question: ${shortQuestion(
      result.question,
    )}`,
    `Status: ${statusLabel(
      result.resolved,
    )}`,
    `Answer: ${result.answer}`,
  ].join("\n");
}

export function resultLines(
  result: MarketResult,
): string[] {
  return formatResult(
    result,
  ).split("\n");
}

export function hasAnswer(
  result: MarketResult,
): boolean {
  return (
    result.answer.trim()
      .length > 0
  );
}
