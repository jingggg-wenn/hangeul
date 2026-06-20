// data/honorific.js — Honorific Forms seed cards
var HONORIFIC_DATA = [
  {
    id: 'hon_r6', tag: 'B2T1', type: 'rule',
    title: 'Honorific Noun Present Tense (이세요/세요)',
    formula: 'Noun + 이세요 (FC)\nNoun + 세요 (V)',
    explain: 'To say "is [noun]" in honorific polite speech, attach 이세요 after a noun ending in a FC (final consonant), or 세요 directly after a noun ending in a V (vowel). This is the honorific equivalent of 이에요/예요.',
    ex1: '선생님이세요? (Are you a teacher? — 님 ends in FC ㅁ)',
    ex2: '의사세요? (Are you a doctor? — 사 ends in V)',
    exception: 'Negative form: 이/가 아니세요. For third-person statements (선생님이세요 = He/She is a teacher), intonation is flat rather than rising.'
  },
  {
    id: 'hon_r7', tag: 'B2T1', type: 'rule',
    title: 'Honorific Noun Past Tense (이셨어요/셨어요)',
    formula: 'Noun + 이셨어요 (FC)\nNoun + 셨어요 (V)',
    explain: 'To say "was [noun]" in honorific polite speech, attach 이셨어요 after a noun ending in a FC (final consonant), or 셨어요 directly after a noun ending in a V (vowel). This is the past-tense counterpart of 이세요/세요.',
    ex1: '선생님이셨어요. (He/She was a teacher. — 님 ends in FC ㅁ)',
    ex2: '의사셨어요. (He/She was a doctor. — 사 ends in V)',
    exception: 'Negative past form: 이/가 아니셨어요. The underlying structure is 이다 + 시 + 었 + 어요 contracted into 이셨어요.'
  },
  {
    id: 'hon_r10', tag: 'B2T1', type: 'rule',
    title: 'Honorific V/A Base Form (으시다/시다)',
    formula: 'V/A~다~ + 으시다 (FC)\nV/A~다~ + 시다 (V)',
    explain: 'The dictionary/base form of an honorific verb or adjective. Remove 다 from the plain dictionary form, then attach 으시다 (if the stem ends in a FC) or 시다 (if it ends in a V). This is the unconjugated honorific form from which all tenses are derived.',
    ex1: '읽다 → 읽으시다 (to read — honorific base)',
    ex2: '가다 → 가시다 (to go — honorific base)',
    exception: 'ㄹ-stem verbs drop ㄹ before 시다: 살다 → 사시다. Some verbs have dedicated honorific bases: 먹다 → 드시다, 자다 → 주무시다.'
  },
  {
    id: 'hon_r8', tag: 'B2T1', type: 'rule',
    title: 'Honorific V/A Present Tense (으세요/세요)',
    formula: 'V/A stem + 으세요 (FC)\nV/A stem + 세요 (V)',
    explain: 'To conjugate a verb or adjective in honorific polite present tense, attach 으세요 after a stem ending in a FC (final consonant), or 세요 after a stem ending in a V (vowel). This is the -(으)시- infix combined with the 해요체 present ending.',
    ex1: '읽다 → 읽으세요 (Please read. — stem 읽 ends in FC ㄱ)',
    ex2: '가다 → 가세요 (Please go. — stem 가 ends in V)',
    exception: 'ㄹ-stem verbs drop ㄹ before 세요: 살다 → 사세요. Some verbs have dedicated honorific forms instead: 먹다 → 드세요, 자다 → 주무세요.'
  },
  {
    id: 'hon_r9', tag: 'B2T1', type: 'rule',
    title: 'Honorific V/A Past Tense (으셨어요/셨어요)',
    formula: 'V/A stem + 으셨어요 (FC)\nV/A stem + 셨어요 (V)',
    explain: 'To conjugate a verb or adjective in honorific polite past tense, attach 으셨어요 after a stem ending in a FC (final consonant), or 셨어요 after a stem ending in a V (vowel). This is the -(으)시- infix combined with the 해요체 past ending.',
    ex1: '읽다 → 읽으셨어요 (He/She read. — stem 읽 ends in FC ㄱ)',
    ex2: '가다 → 가셨어요 (He/She went. — stem 가 ends in V)',
    exception: 'ㄹ-stem verbs drop ㄹ before 셨어요: 살다 → 사셨어요. Dedicated honorific forms: 먹다 → 드셨어요, 자다 → 주무셨어요.'
  },
  {
    id: 'hon_t1', tag: 'pre-populated', type: 'table',
    title: 'Speech Level Overview (말높임법)',
    tableData: {
      headers: ['Level', 'Name', 'Ending (present)', 'Use with'],
      rows: [
        ['Formal high', '합쇼체', '-습니다 / -ㅂ니다', 'presentations, strangers, news'],
        ['Polite informal', '해요체', '-아요 / -어요', 'everyday polite speech'],
        ['Intimate', '해체', '-아 / -어', 'close friends, younger people'],
        ['Plain', '해라체', '-다', 'writing, narrating, self-talk'],
        ['Familiar', '하게체', '-네', 'older to younger adult (rare today)'],
      ]
    }
  },
  {
    id: 'hon_r1', tag: 'pre-populated', type: 'rule',
    title: 'Honorific Subject Marker (께서)',
    formula: '이/가 or 은/는 → 께서 (for respected subjects)',
    explain: 'Replace the subject particle 이/가 or 은/는 with 께서 when the subject is someone you respect — teacher, parent, boss, elder. The verb also needs an honorific ending (usually -(으)시-).',
    ex1: '선생님께서 오셨어요. (The teacher came.)',
    ex2: '아버지께서 말씀하셨어요. (Father spoke.)',
    exception: '께서 is only for living, respected people. Do not use for objects or for people you don\'t need to honour.'
  },
  {
    id: 'hon_r2', tag: 'pre-populated', type: 'rule',
    title: 'Honorific Verb Infix -(으)시-',
    formula: 'verb stem + 으시 (after FC) / 시 (after V) + tense ending',
    explain: 'Insert -(으)시- between the verb stem and the tense/mood ending to show respect to the subject of the verb.',
    ex1: '가다 → 가시다 → 가세요 / 가셨어요',
    ex2: '읽다 → 읽으시다 → 읽으세요 / 읽으셨어요',
    exception: 'Some verbs have dedicated honorific forms rather than using -(으)시-: 먹다/마시다 → 드시다, 있다 → 계시다, 자다 → 주무시다, 말하다 → 말씀하시다, 죽다 → 돌아가시다.'
  },
  {
    id: 'hon_r3', tag: 'pre-populated', type: 'rule',
    title: 'Formal Polite Endings (합쇼체)',
    formula: 'verb stem + 습니다 (after FC) / ㅂ니다 (after V)  |  questions: 습니까 / ㅂ니까',
    explain: 'The most formal speech level used in presentations, announcements, military, and first meetings. Questions replace -다 with -까.',
    ex1: '먹다 → 먹습니다 / 먹습니까?',
    ex2: '가다 → 갑니다 / 갑니까?',
    exception: '하다 → 합니다. 이다 → 입니다. 아니다 → 아닙니다. This level is used on Korean news broadcasts and formal speeches.'
  },
  {
    id: 'hon_t2', tag: 'pre-populated', type: 'table',
    title: 'Humble vs. Honorific Vocabulary',
    tableData: {
      headers: ['Meaning', 'Plain', 'Honorific (↑ for others)', 'Humble (↓ for self)'],
      rows: [
        ['to eat / drink', '먹다 / 마시다', '드시다', '—'],
        ['to be (exist)', '있다', '계시다', '있겠습니다'],
        ['to sleep', '자다', '주무시다', '—'],
        ['to speak / say', '말하다', '말씀하시다', '말씀드리다'],
        ['to give', '주다', '주시다', '드리다'],
        ['to see / meet', '보다 / 만나다', '뵙다 / 뵈다', '뵙다'],
        ['to know', '알다', '아시다', '알겠습니다'],
        ['name', '이름', '성함', '저의 이름'],
        ['house / home', '집', '댁', '저희 집'],
        ['age', '나이', '연세', '제 나이'],
      ]
    }
  },
  {
    id: 'hon_r4', tag: 'pre-populated', type: 'rule',
    title: 'Humble Verb Endings',
    formula: 'verb stem + 겠습니다 (willing) / 드리다 (give/do for superior)',
    explain: 'To lower yourself when speaking to a superior, use 겠습니다 to express willingness or intention, and 드리다 instead of 주다 when giving something to or doing something for the other person.',
    ex1: '도와드리겠습니다. (I will help you. — very polite)',
    ex2: '말씀드리겠습니다. (I will tell you. — respectful)',
    exception: '드리다 specifically means giving/doing *upward* (to someone of higher status). 주다 is neutral or downward.'
  },
  {
    id: 'hon_r5', tag: 'pre-populated', type: 'rule',
    title: 'Indirect Speech — Reported Statement (-다고 해요)',
    formula: 'verb stem + -ㄴ/는다고 해요 (statement) / -(으)라고 해요 (command)',
    explain: 'Used to report what someone else said. For statements, use -ㄴ/는다고 해요. For commands, use -(으)라고 해요. In honorific contexts, replace 해요 with 하셨어요 or 하십니다 depending on who spoke.',
    ex1: '온다고 했어요. (They said they\'re coming.)',
    ex2: '선생님이 공부하라고 하셨어요. (The teacher said to study.)',
    exception: 'With 이다: 학생이라고 해요 (They say s/he is a student). Adjectives use -다고 해요 directly.'
  },
];
