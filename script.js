const form = document.getElementById("quiz-form");
const resultsBox = document.getElementById("results-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = {};
  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    answers[key] = value;
  }

  // MBTI
  const E = answers.q1 === "a" ? 1 : 0;
  const I = answers.q1 === "b" ? 1 : 0;

  const S = answers.q2 === "a" ? 1 : 0;
  const N = answers.q2 === "b" ? 1 : 0;

  const T = answers.q3 === "a" ? 1 : 0;
  const F = answers.q3 === "b" ? 1 : 0;

  const J = answers.q4 === "a" || answers.q8 === "a" ? 1 : 0;
  const P = answers.q4 === "b" || answers.q8 === "b" ? 1 : 0;

  const mbti =
    (E >= I ? "E" : "I") +
    (S >= N ? "S" : "N") +
    (T >= F ? "T" : "F") +
    (J >= P ? "J" : "P");

  // OCEAN
  const openness = (answers.q2 === "b" ? 40 : 20) + (answers.q7 === "a" ? 40 : 20);
  const conscientiousness = (answers.q4 === "a" ? 40 : 20) + (answers.q8 === "a" ? 40 : 20);
  const extraversion = (answers.q1 === "a" ? 50 : 20) + (answers.q12 === "a" ? 30 : 10);
  const agreeableness = (answers.q3 === "b" ? 30 : 10) + (answers.q10 === "a" ? 50 : 15);
  const neuroticism = (answers.q9 === "a" ? 70 : 25);

  // DISC
  let d = 0, i = 0, s = 0, c = 0;

  if (answers.q5 === "a") d += 2;
  if (answers.q5 === "b") i += 2;
  if (answers.q6 === "a") s += 2;
  if (answers.q6 === "b") c += 2;
  if (answers.q10 === "b") d += 1;
  if (answers.q10 === "a") i += 1;
  if (answers.q8 === "a") c += 1;
  if (answers.q12 === "a") i += 1;
  if (answers.q9 === "b") s += 1;

  const discScores = { D: d, I: i, S: s, C: c };
  const disc = Object.keys(discScores).reduce((a, b) =>
    discScores[a] > discScores[b] ? a : b
  );

  // Enneagram
  let enneagram = "Type 9 - Peacemaker";
  if (answers.q11 === "a") enneagram = "Type 3 - Achiever";
  if (answers.q11 === "b") enneagram = "Type 6 - Loyalist";
  if (answers.q3 === "b" && answers.q10 === "a") enneagram = "Type 2 - Helper";
  if (answers.q6 === "b" && answers.q12 === "b") enneagram = "Type 5 - Investigator";
  if (answers.q5 === "a" && answers.q10 === "b") enneagram = "Type 8 - Challenger";

  // 4 Temperaments
  let temperament = "Phlegmatic";
  if (answers.q12 === "a" && answers.q1 === "a") temperament = "Sanguine";
  else if (answers.q5 === "a" && answers.q10 === "b") temperament = "Choleric";
  else if (answers.q12 === "b" && answers.q6 === "b") temperament = "Melancholic";
  else if (answers.q6 === "a" && answers.q9 === "b") temperament = "Phlegmatic";

  // Result descriptions
  const discDescriptions = {
    D: "Dominance: direct, competitive, result-oriented.",
    I: "Influence: expressive, social, enthusiastic.",
    S: "Steadiness: calm, patient, supportive.",
    C: "Conscientiousness: analytical, careful, precise."
  };

  const temperamentDescriptions = {
    Sanguine: "Optimistic, energetic, talkative and lively.",
    Choleric: "Strong-willed, ambitious, action-oriented and decisive.",
    Melancholic: "Deep thinker, careful, sensitive and detail-focused.",
    Phlegmatic: "Calm, balanced, patient and easygoing."
  };

  resultsBox.innerHTML = `
    <div class="result-grid">
      <div class="result-card">
        <h3>MBTI</h3>
        <p><strong>${mbti}</strong></p>
        <p>Your answers suggest this MBTI style.</p>
      </div>

      <div class="result-card">
        <h3>OCEAN</h3>
        <p><strong>Openness:</strong> ${openness}%</p>
        <p><strong>Conscientiousness:</strong> ${conscientiousness}%</p>
        <p><strong>Extraversion:</strong> ${extraversion}%</p>
        <p><strong>Agreeableness:</strong> ${agreeableness}%</p>
        <p><strong>Neuroticism:</strong> ${neuroticism}%</p>
      </div>

      <div class="result-card">
        <h3>DISC</h3>
        <p><strong>${disc}</strong></p>
        <p>${discDescriptions[disc]}</p>
      </div>

      <div class="result-card">
        <h3>Enneagram</h3>
        <p><strong>${enneagram}</strong></p>
        <p>This is a simple estimate based on your motivations and behavior.</p>
      </div>

      <div class="result-card">
        <h3>4 Temperaments</h3>
        <p><strong>${temperament}</strong></p>
        <p>${temperamentDescriptions[temperament]}</p>
      </div>
    </div>

    <p class="small-note">
      Note: this is a simple educational personality guesser, not an official psychological assessment.
    </p>
  `;

  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});
