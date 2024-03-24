const usernames = [
    'Leopold',
    'Mortas',
    'Fertuitus',
    'Eoghan',
    'Caleb',
    'Phaeron',
    'Maggart',
    'Lothaire',
    'Adrian',
    'Melchior',
    'Ellanora',
    'Margaret',
    'Calliope',
    'Morgan',
    'Parthena',
    'Permelia',
    'Velika',
    'Faine',
    'Tabitha',
    'Thordis'
];
const emails = [
    'Acornleaf@oakmail.com',
    'Cleverthorn@oakmail.com',
    'Springjuniper@oakmail.com',
    'Yewsnarl@oakmail.com',
    'Ashfang@oakmail.com',
    'Khadael@oakmail.com',
    'Guinaya@oakmail.com',
    'Pisciloth@oakmail.com',
    'Senegalild@oakmail.com',
    'Rhunaema@oakmail.com',
    'Summeroak@oakmail.com',
    'Fallelm@oakmail.com',
    'Nettlelarch@oakmail.com',
    'Wisecypress@oakmail.com',
    'Pinegrove@oakmail.com',
    'Sason@oakmail.com',
    'Brolus@oakmail.com',
    'Corern@oakmail.com',
    'Gonoth@oakmail.com',
    'Citenth@oakmail.com',
];
const thoughts = [
    'Snails are overrated',
    'Worms should be worshiped',
    'Rikki-tikki knew that he must catch her',
    'all the trouble would begin again',
    'She headed straight for the long grass by the thorn-bush',
    'and as he was running Rikki-tikki heard Darzee still singing',
    'his foolish little song of triumph. But Darzee',
    'wife was wiser. She flew off her nest as Nagaina came along',
    'and flapped her wings about Nagaina',
    'head. If Darzee had helped they might have turned her;',
    'but Nagaina only lowered her hood and went on.',
    'Still, the instant delay brough Rikki-tikki up to her',
    'as she plunged into the rat-hole',
    'where she and Nag used to live',
    'his little white teeth were clenched on her tail',
    'he went down with her -- and very few mongooses',
    'however wise and old they may be',
    'care to follow a cobra into its hole.',
    'It was dark in the hole',
    'Rikki-tikki never knew when it might open out',
    'and give Nagaina room to turn and strike at him.',
    'He held on savagely',
    'and struck out his feet to act as brakes on the dark slope of the hot earth',
    'Then the grass by the mouth of the hole stopped waving',
    'Darzee said: It is all over with Rikki-tikki!',
    'We must sing his death song.',
    'Valiant Rikki-tikki is dead!',
    'For Nagaina will surely kill him underground.'
];
const reactions = [
    'Singer and tailor am I --',
    'Doubled the joys that I know --',
    'Proud of my lilt through the sky',
    'Proud of the house that I sew --',
    'Over and under, so weave I my music',
    '-- so weave I the house that I sew.',
    'Sing to your fledglings again',
    'Mother, oh lift up your head!',
    'Evil that plagued us is slain',
    'Death in the garden lies dead.',
    'Terror that hid in the roses is impotent',
    ' -- flung on the dung-hill and dead!',
    'Who hath delivered us, who?',
    'Tell me his nest and his name.',
    'Rikki, the valiant, the true,',
    'Tikki, with eyeballs of flame',
    'Rik-tikki-tikki, the ivory-fanged',
    ' the hunger with eye-balls of flame.',
    'Give him the Thanks of the birds',
    'Bowing with tail-feathers spread!',
    'Praise him with nightingale-words --',
    'Nay, I will praise him instead.',
    'Hear! I will sing you the praise of the bottle-tailed',
    'Rikki, with eyeballs of red!',
]

const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = ()=>
`${getRandomArrItem(usernames)}, `;

const getRandomEmail = () =>
`${getRandomArrItem(emails)}`;


const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        reactions: [...getReactions(3)],
        username: getRandomUser
      });
    }
    return results;
  };

  const getReactions= (int) => {
    if (int === 1) {
      return getRandomArrItem(reactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        tagBody: getRandomArrItem(reactions),
        username: getRandomUser(),
      });
    }
    return results;
  };

  module.exports = {getRandomUser, getRandomEmail, getRandomThoughts};