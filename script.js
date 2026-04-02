function showInfo(model) {
  const infoBox = document.getElementById("info-box");

  const data = {
    mbti: `
      <h3>MBTI</h3>
      <p>
        Le MBTI est un modèle qui classe les individus en <strong>16 types de personnalité</strong>.
        Il repose sur 4 dimensions : Introversion/Extraversion, Sensation/Intuition,
        Pensée/Sentiment, Jugement/Perception.
      </p>
      <p>
        Il est très populaire, facile à comprendre, mais il est moins reconnu scientifiquement
        que le modèle OCEAN.
      </p>
    `,
    ocean: `
      <h3>OCEAN</h3>
      <p>
        Le modèle OCEAN, aussi appelé <strong>Big Five</strong>, mesure la personnalité selon
        5 grands traits : Ouverture, Conscience, Extraversion, Agréabilité et Neuroticisme.
      </p>
      <p>
        C’est le modèle le plus solide scientifiquement parmi ceux-ci.
      </p>
    `,
    disc: `
      <h3>DISC</h3>
      <p>
        Le DISC se concentre sur le <strong>comportement</strong> et la manière dont une personne
        interagit avec les autres.
      </p>
      <p>
        Il distingue 4 profils : Dominance, Influence, Stabilité et Conformité.
        Il est très utilisé en entreprise.
      </p>
    `,
    enneagramme: `
      <h3>Ennéagramme</h3>
      <p>
        L’Ennéagramme décrit <strong>9 types de personnalité</strong> en mettant l’accent sur
        les motivations profondes, les peurs et les désirs.
      </p>
      <p>
        Il est souvent utilisé pour le développement personnel.
      </p>
    `,
    temperaments: `
      <h3>4 Tempéraments</h3>
      <p>
        Ce modèle ancien répartit les personnes en 4 catégories :
        <strong>Sanguin, Colérique, Mélancolique et Flegmatique</strong>.
      </p>
      <p>
        Il est simple à comprendre mais moins précis que les modèles modernes.
      </p>
    `,
    ia: `
      <h3>IA</h3>
      <p>
        L’analyse par IA utilise des <strong>données, textes ou comportements</strong> pour
        détecter certains traits de personnalité.
      </p>
      <p>
        C’est une approche moderne, mais elle dépend fortement de la qualité des données utilisées.
      </p>
    `
  };

  infoBox.innerHTML = data[model];
}
