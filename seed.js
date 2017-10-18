var db = require('./db');
var Campus = require('./db/models/campus');
var Student = require('./db/models/student');

const campuses = [
  {name: 'Aries', image: 'https://static-s.aa-cdn.net/img/gp/20600005246199/d9VgpvzP8K8_hjRKDit2tDMsQxgxxklJk4Pl_b3n1v94q0Jw0pFrYWzafzUyOJuYLg=w300?v=1', darkside: 'You are not only arrogant and confrontational, you are also extremely rigid and dogmatic. Like a boa constricting its prey with its relentless death grip; your ego avoids being bruised at all costs, even if it means alienating everyone around you.', sunside: 'Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented.'},

  {name: 'Taurus', image: 'https://static-s.aa-cdn.net/img/gp/20600005234252/0kRT6KiN7EcP2Hj9h-L5snliW9xM_Cz9hAuuXkPEuWq7TztVKFREuCWKDxY73Ekx4DA=w300?v=1', darkside: 'Your tendency towards self-indulgence and laziness is truly perplexing. You believe very much that the world owes you something, but lack the motivation to get up and actually work. Your possessiveness and materialistic nature often makes you jealous of others, especially the ones who actually work for the things you covet.', sunside: 'The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic.'},

  {name: 'Gemini', image: 'https://static-s.aa-cdn.net/img/gp/20600005263283/JVL63sgOPCiBz0j8gN2-RrYQl-v7VcFPwRWM_janB8SscmQQKwkC-ZFHAo-iHbhN2BI=w300?v=1', darkside: 'You\'re a nervous Nellie who lacks decision making ability. Your inability to focus is not only annoying, it causes you to miss out on opportunities in life, which is odd considering how much value you place in superficial things like status symbols.', sunside: 'Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go.'},

  {name: 'Cancer', image: 'https://static-s.aa-cdn.net/img/gp/20600005242419/kYWYSmqEN8_oQewhvVfT3n7cSJQxBRoGRPPlmm9Z1v6L4NBHYbZr_oMFyh3D_FEq134=w300?v=1', darkside: 'You are moody, oppressive, chronically pessimistic, hyper-emotional, and suffocatingly clingy. If that weren\'t enough, you are also prone to being a nag and will find something in any situation to unceasingly complain about.', sunside: 'Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing.'},

  {name: 'Leo', image: 'https://static-s.aa-cdn.net/img/gp/20600005241359/ykFtehkOycojc2W_gaaxxcoP_omKms_D2l930TRUhuHGpn3cho5hfBWRChytCTSQJUs=w300?v=1', darkside: 'Your ego truly knows no bounds. You are indeed a legend in your own mind; and can\'t understand why others don\'t share the same opinions you beat them over the head with constantly while tooting your own horn.', sunside: 'Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving.'},

  {name: 'Virgo', image: 'https://static-s.aa-cdn.net/img/gp/20600005240228/AH90nNBk4BxqIcEWTUXqoiBOMMNwoB8tf28P4gDI_wKxxzkYUdEdgwMbW3TCnnGl=w300?v=1', darkside: 'You\'re fussy, hyper-critical and stubborn. This, coupled with your wholly anal retentive nature and inability to ever be pleased, make you easily one of the most excruciatingly painful people to ever have to work or live with.', sunside: 'The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them.'},

  {name: 'Libra', image: 'https://static-s.aa-cdn.net/img/gp/20600005238639/7uHTc6wdYPeu7QX51P-gH1mYdV3db7VwZ5hgg5VzZcwY0xexKmvp1ej-O0JGV79ENtI=w300?v=1', darkside: 'You are the ideal partner for the zodiac\'s more dominant signs. Your excessive vanity, inability to ever make up your mind and to be easily swayed by the opinions of those around you, make you an excellent trophy wife or doormat.', sunside: 'The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money.'},

  {name: 'Scorpio', image: 'https://static-s.aa-cdn.net/img/gp/20600005238485/TNxiVct-6A5kfWFnVx2fjbJdi2GAuL4JvjhcmdRXVBGZa7nwP4zFlFWN703j2GN-fQ=w300?v=1', darkside: 'You are the most ruthless and despicable sign of the Zodiac for a reason. Seriously, no one has anything nice to say about Scorpios except you\'re sexy—and well that\'s because all the idiots from the other signs love the challenge of a “bad” boy or girl to tame who also happens to be kind of hot.', sunside: 'The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty.'},

  {name: 'Sagittarius', image: 'https://static-s.aa-cdn.net/img/gp/20600005268241/OnZ_QsVmQfEBn9kie-PKUGfFdXUoozDf1fdM-C0_w11e4wawtk-eQZzADBoqETlN11Y=w300?v=1', darkside: 'Your utter lack of tact and diplomacy should ensure that everyone hates you, but for whatever reason, you have a fiery, magnetic personality that draws people in. Like a moth to a flame that is.', sunside: 'The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless.'},

  {name: 'Capricorn', image: 'https://static-s.aa-cdn.net/img/gp/20600005227634/D3I3btBL1Fda3P7ThXkcae2jxS-Tdj7QQZiSK7mQ_GNBcj2Go7ASpGDLoX_C_nQuEA=w300?v=1', darkside: 'You have the personality of a tree stump. Of all the signs, you are the most whiny and boring. You will always see the glass half-empty (or more), and nothing will convince you otherwise. You are the buzz kill at parties and you can suck the light out of the sunniest day.', sunside: 'The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives.'},

  {name: 'Aquarius', image: 'https://static-s.aa-cdn.net/img/gp/20600005242131/P8KvmrwUJcIj9AYRwxM1miSr1xYEmC_NGdMkhYZEKT0r55omf4-28zip2mkUNSW7dSM=w300?v=1', darkside: 'You are unpredictable, inconsistent, unyielding and stubborn. Your all or nothing attitude secures your spot as an extremist in whatever areas you obsess about in life. You are a control freak and probably a bit of a narcissist which enables you to turn your emotions on and off at will and as needed.', sunside: 'Aquarius is the 11th sign of the zodiac. Aquarians don\'t always care what others think about them. They take each opportunity they have and work towards formulating new ideas.'},

  {name: 'Pisces', image: 'https://static-s.aa-cdn.net/img/gp/20600005240933/KxT9ggAyGD88vH4kdBnJ0TcrffRtEOQw5Im4buYaBXDux3K0U8jnJ8mEzOQd9gg6r5Y=w300?v=1', darkside: 'Your idealism knows no bounds, which is probably why you spend most of your life escaping from reality rather than doing any actual work. You\'re the wounded idealist who is chronically demoralized and you have the ability to turn any molehill into a mountain larger than Everest.', sunside: 'Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend.'}
];

// darkside comes from https://exemplore.com/astrology/Negative-Astrology-Humor
// sunside comes from http://iml.jou.ufl.edu/projects/fall07/Bhimani/thezodiac/zodiacsigns.html

const students = [
  {name: 'Caryn', email: 'caryn@signs.zodiac', campusId: 3}, //gemini
  {name: 'Eleni', email: 'eleni@signs.zodiac', campusId: 7}, //
  {name: 'Shannon', email: 'shannon@signs.zodiac', campusId: 4}, //cancer
  {name: 'Emily', email: 'emily@signs.zodiac', campusId: 12}, // pisces
  {name: 'Priya', email: 'priya@signs.zodiac', campusId: 2}, //taurus
  {name: 'Cara', email: 'cara@signs.zodiac', campusId: 5}, //leo
  {name: 'Satya', email: 'satya@signs.zodiac', campusId: 2} //taurus
];

console.log('campuses', campuses);
console.log('students', students);

const createdCampuses = campuses.map(campus => Campus.create(campus));
//const builtStudents = students.map(student => Student.build(student));

console.log('built campuses', createdCampuses);
//console.log('built students', builtStudents);

db.sync()
.then( () => {
  return Promise.all(createdCampuses)
  .then((campuses) => {
    console.log(campuses);
    const createdStudents = students.map(student => Student.create(student));
    return Promise.all(createdStudents);
  })
  .catch((err) => console.log('seeding unsuccessful', err));
})
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.finally(function () {
  db.close();
  return null;
});

/* POSITIVE SIDE DATA
Aries (March 21- April 20): Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented.

Taurus (April 21- May 21): The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic.

Gemini (May 22- June 21): Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go.

Cancer (June 22- July 22): Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing.

Leo (July 23- August 21): Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving.

Virgo (August 22- September 23): The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them.

Libra (September 24- October 23): The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money.

Scorpio (October 24- November 22): The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty.

Sagittarius (November 23- December 22): The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless.

Capricorn (December 23- January 20): The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives.

Aquarius (January 21- February 19): Aquarius is the 11th sign of the zodiac. Aquarians don't always care what others think about them. They take each opportunity they have and work towards formulating new ideas.

Pisces (February 20- March 20): Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend.

*/
