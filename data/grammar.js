// data/grammar.js — Grammar Rules seed cards
var GRAMMAR_DATA = [
  {
    id: 'g_r1', tag: 'pre-populated', type: 'rule',
    title: 'Topic Particle (은/는)',
    formula: 'Noun + 은 (after FC) / 는 (after V)',
    explain: '은/는 marks the topic of a sentence — what the sentence is "about". It can contrast, emphasise, or set context. It does NOT always mean the subject did the action.',
    ex1: '저는 학생이에요. (As for me, I am a student.)',
    ex2: '밥은 먹었어요. (As for the rice, I ate it.)',
    exception: 'Topic ≠ subject. 저는 marks topic/contrast; 제가 marks grammatical subject (who did it).'
  },
  {
    id: 'g_r2', tag: 'pre-populated', type: 'rule',
    title: 'Subject Particle (이/가)',
    formula: 'Noun + 이 (after FC) / 가 (after V)',
    explain: '이/가 marks the grammatical subject — the doer of the action, or what a descriptive verb describes. Used when introducing new information or when the subject is the focus.',
    ex1: '고양이가 잔다. (The cat is sleeping.)',
    ex2: '누가 왔어요? (Who came?)',
    exception: '저 → 제가, 나 → 내가 (special contraction with 가). 이/가 is often dropped in casual speech.'
  },
  {
    id: 'g_r3', tag: 'pre-populated', type: 'rule',
    title: 'Object Particle (을/를)',
    formula: 'Noun + 을 (after FC) / 를 (after V)',
    explain: 'Marks the direct object — what is being acted on. Korean is SOV (subject-object-verb), so the object comes before the verb.',
    ex1: '책을 읽어요. (I read a book.)',
    ex2: '커피를 마셔요. (I drink coffee.)',
    exception: 'Frequently dropped in casual speech. Certain verbs take 을/를 where English uses "at", "to", etc.: 학교를 가다 (go to school).'
  },
  {
    id: 'g_r4', tag: 'pre-populated', type: 'rule',
    title: 'Present Tense Polite (아/어요)',
    formula: 'verb stem + 아요 (after bright V) / 어요 (after dark V)',
    explain: 'Drop 다 from dictionary form. If the last vowel in the stem is ㅏ or ㅗ, add 아요. All other vowels: add 어요. 하다 verbs use 해요. This is the everyday polite speech level (해요체).',
    ex1: '먹다 → 먹 + 어요 → 먹어요',
    ex2: '가다 → 가 + 아요 → 가요 (contracts)',
    exception: '하다 → 해요. Contraction happens when stem ends in ㅏ/ㅓ: 가아요 → 가요, 서어요 → 서요.'
  },
  {
    id: 'g_r5', tag: 'pre-populated', type: 'rule',
    title: 'Past Tense Polite (았/었어요)',
    formula: 'verb stem + 았어요 (after bright V) / 었어요 (after dark V)',
    explain: 'Same vowel harmony rule as present tense. ㅏ/ㅗ stems take 았어요, all others take 었어요. 하다 → 했어요.',
    ex1: '먹다 → 먹었어요',
    ex2: '살다 → 살았어요',
    exception: '하다 → 했어요. Irregular ㅂ verbs: 덥다 → 더웠어요 (ㅂ drops, 우 inserts before 었).'
  },
  {
    id: 'g_r6', tag: 'pre-populated', type: 'rule',
    title: 'Future / Intention (ㄹ/을 거예요)',
    formula: 'verb stem + ㄹ 거예요 (after V) / 을 거예요 (after FC)',
    explain: 'Expresses future plans or intentions. Literally means "it will be the thing of [doing]". Very common in everyday speech.',
    ex1: '먹다 → 먹을 거예요 (I will eat)',
    ex2: '가다 → 갈 거예요 (I will go)',
    exception: 'ㄹ-stem verbs drop the ㄹ before adding ㄹ 거예요: 알다 → 알 거예요 (no double ㄹ).'
  },
  {
    id: 'g_r7', tag: 'pre-populated', type: 'rule',
    title: 'Negation — Short Form (안)',
    formula: '안 + verb / 안 + adjective',
    explain: '안 is placed directly before the verb or adjective to negate it. Simple and common in spoken Korean.',
    ex1: '안 먹어요. (I don\'t eat / I\'m not eating.)',
    ex2: '안 예뻐요. (It\'s not pretty.)',
    exception: '하다 verbs: 공부 안 해요 (NOT 안 공부해요). The 안 splits the noun and 하다.'
  },
  {
    id: 'g_r8', tag: 'pre-populated', type: 'rule',
    title: 'Negation — Long Form (-지 않아요)',
    formula: 'verb/adj stem + 지 않아요',
    explain: 'A more formal or emphatic negation. Attaches to the verb stem. Slightly more common in written Korean but used in speech too.',
    ex1: '먹지 않아요. (I do not eat.)',
    ex2: '좋지 않아요. (It is not good.)',
    exception: 'In formal writing, -지 않습니다. Past: -지 않았어요. Future: -지 않을 거예요.'
  },
  {
    id: 'g_r9', tag: 'pre-populated', type: 'rule',
    title: 'Connective — And / Then (-고)',
    formula: 'verb stem + 고',
    explain: 'Connects two actions or states, meaning "and" or "and then". The tense is only marked on the final verb. Both clauses share the same subject unless stated otherwise.',
    ex1: '밥을 먹고 잤어요. (I ate and then slept.)',
    ex2: '크고 예뻐요. (It\'s big and pretty.)',
    exception: '-고 나서 emphasises sequence more strongly: 먹고 나서 갔어요 (after eating, went).'
  },
  {
    id: 'g_r10', tag: 'pre-populated', type: 'rule',
    title: 'Connective — Because (-아서/어서)',
    formula: 'verb/adj stem + 아서 (after bright V) / 어서 (after dark V)',
    explain: 'Gives a reason or cause that directly leads to the result. The cause is often a natural or inherent consequence. Cannot be used with past tense on the -아서 clause.',
    ex1: '배가 고파서 먹었어요. (Because I was hungry, I ate.)',
    ex2: '비가 와서 못 갔어요. (Because it rained, I couldn\'t go.)',
    exception: 'Do NOT use -았/었 before -아서/어서. Wrong: 먹었어서. Use 먹어서 (the result verb carries past tense).'
  },
  {
    id: 'g_r11', tag: 'pre-populated', type: 'rule',
    title: 'Location Particle (에 vs 에서)',
    formula: 'Noun + 에 (destination/existence) / 에서 (action location)',
    explain: '에 marks where something exists (있다/없다) or the destination of movement. 에서 marks where an action actively takes place.',
    ex1: '학교에 있어요. (I am at school.) / 학교에 가요. (I go to school.)',
    ex2: '학교에서 공부해요. (I study at school.)',
    exception: '에서 also means "from" with motion verbs: 서울에서 왔어요 (I came from Seoul).'
  },
  {
    id: 'g_t1', tag: 'pre-populated', type: 'table',
    title: 'Common Particles Summary',
    tableData: {
      headers: ['Particle', 'After V', 'After FC', 'Function'],
      rows: [
        ['Topic', '는', '은', 'marks topic or contrast'],
        ['Subject', '가', '이', 'marks grammatical subject'],
        ['Object', '를', '을', 'marks direct object'],
        ['Location/dest', '에', '에', 'where s.t. is / goes to'],
        ['Action location', '에서', '에서', 'where action happens'],
        ['With (and)', '와', '과', 'noun conjunction'],
        ['With (colloquial)', '랑', '이랑', 'noun conjunction (casual)'],
        ['From (person)', '한테서', '한테서', 'from a person'],
        ['To (person)', '한테', '한테', 'to a person (casual)'],
        ['Possessive', '의', '의', 'of / \'s (often dropped)'],
      ]
    }
  },
];
