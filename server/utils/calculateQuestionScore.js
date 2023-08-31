function calculateStringSimilarityScore(
  actualAnswer,
  submittedAnswer,
  totalScore
) {
  function levenshteinDistance(a, b) {
    const matrix = Array(a.length + 1)
      .fill(null)
      .map(() => Array(b.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) {
      matrix[i][0] = i;
    }

    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }

    return matrix[a.length][b.length];
  }

  const distance = levenshteinDistance(actualAnswer, submittedAnswer);

  const similarityScore = Math.max(
    0,
    totalScore *
      (1 - distance / Math.max(actualAnswer.length, submittedAnswer.length))
  );

  return similarityScore.toFixed(2);
}

module.exports = calculateStringSimilarityScore;
