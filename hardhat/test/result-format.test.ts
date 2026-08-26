import { expect } from "chai";

import {
  statusLabel,
  shortQuestion,
  formatResult,
  resultLines,
  hasAnswer,
} from "../scripts/lib/result-format";

describe("result formatting", function () {
  const result = {
    id: 7n,
    question:
      "Will ETH reach the target before the market closes?",
    answer: "YES",
    resolved: true,
  };

  it("shows the resolved label", function () {
    expect(
      statusLabel(true),
    ).to.equal(
      "Resolved",
    );
  });

  it("shows the open label", function () {
    expect(
      statusLabel(false),
    ).to.equal(
      "Open",
    );
  });

  it("keeps short questions unchanged", function () {
    expect(
      shortQuestion("Hello"),
    ).to.equal(
      "Hello",
    );
  });

  it("shortens long questions", function () {
    const output =
      shortQuestion(
        "abcdefghijklmnopqrstuvwxyz",
        10,
      );

    expect(
      output.length,
    ).to.equal(10);
  });

  it("creates readable output", function () {
    const output =
      formatResult(result);

    expect(output).to.contain(
      "Status: Resolved",
    );

    expect(output).to.contain(
      "Answer: YES",
    );
  });

  it("splits the result into lines", function () {
    expect(
      resultLines(result),
    ).to.have.length(4);
  });

  it("detects an answer", function () {
    expect(
      hasAnswer(result),
    ).to.equal(true);
  });
});
