// data/irregular.js — Irregular Verbs seed cards
var IRREGULAR_DATA = [
  {
    id: 'ir_t1', tag: 'B2T2', type: 'table',
    title: 'Irregular Verb Forms (불규칙 동사)',
    expandableRows: true,
    tableData: {
      headers: ['Irregular Form', 'Type', 'When/Condition', 'Change'],
      rows: [
        {
          cells: ['ㄷ (digeut)', 'Verbs', 'ㅇ ("ying")', 'ㄷ → ㄹ'],
          note: '걷다 → 걸어요 (to walk)\n듣다 → 들어요 (to listen)\n묻다 → 물어요 (to ask)\n싣다 → 실어요 (to load)\n깨닫다 → 깨달아요 (to realize)\nPattern: ㄷ at the end of the stem changes to ㄹ when followed by a vowel.\nExceptions: 닫다, 믿다, 받다, 얻다, 쏟다 — these are regular (ㄷ does not change).\nNote: 묻다 has two meanings — "to ask" (irregular, 물어요) vs "to bury" (regular, 묻어요).'
        },
        {
          cells: ['ㅂ (bieup)', 'Adjectives', 'ㅇ ("ying")', 'ㅂ → 우 (워요)'],
          note: '맵다 → 매워요 (to be spicy)\n맵다 → 매우면 (if spicy)\n춥다 → 추워요 (to be cold)\n시끄럽다 → 시끄러워요 (to be noisy)\n덥다 → 더워요 (to be hot)\n어렵다 → 어려워요 (to be difficult)\n쉽다 → 쉬워요 (to be easy)\nPattern: all ㅂ FC adjectives → present tense ends in 워요. The ㅂ drops, 우 is added, then 우 + 어요 contracts to 워요.\nExceptions: 돕다 → 도와요, 곱다 → 고와요 — these two go to 와 instead of 워.\nExceptions: 입다, 씹다, 잡다, 좁다, 뽑다, 접다 — these are regular (ㅂ does not change).'
        },
        {
            cells: ['ㅡ (eu)', 'Verbs & Adj', '아/어 았/었 (present & past only)', 'Omit ㅡ'],
            note: '쓰다 → 써요 (to write/use)\n크다 → 커요 (to be big)\n슬프다 → 슬퍼요 (to be sad)\n예쁘다 → 예뻐요 (to be pretty)\n바쁘다 → 바빠요 (to be busy)\nPattern: drop ㅡ, then look at the vowel of the preceding syllable to decide 아 or 어. If no preceding syllable, use 어.\nAlso applies to: 아/어 주세요, 았/었는데요 — any ending that starts with 아/어 or 았/었.\nNo exceptions — this rule applies to all ㅡ-ending stems.'
        },
        {
          cells: ['ㄹ (rieul)', 'Verbs & Adj', 'ㅂ, ㄴ, ㅅ (바네사 씨 있어요?)', 'Omit ㄹ'],
          note: '알다 → 아는데요 (to know)\n만들다 → 만드는 게 어때요? (to make)\n열다 → 여니까 (to open)\n알다 → 아세요 (honorific, ㄹ drops before ㅅ)\n살다 → 사세요 (honorific, ㄹ drops before ㅅ)\n살다 → 삽니다 (formal, ㄹ drops before ㅂ)\nMore: 살다 (to live), 팔다 (to sell), 놀다 (to play), 길다 (to be long), 멀다 (to be far)\nPattern: when ㄹ meets ㅂ, ㄴ, or ㅅ, the ㄹ is dropped. Mnemonic: 바네사 씨 있어요? (Is Vanessa here?)\nNote: irregular ㄹ takes precedence over the special ㄹ rule.\nNote: special ㄹ rule takes effect likely when there is a presence of 으 (e.g. 을/ㄹ 때 OR 으면)\nNote: when special ㄹ rule applies, vowel option is used (no 으 buffer) (e.g. 살면, not 살으면) \nNo exceptions — this rule applies to all ㄹ-ending stems.'
        },
      ]
    }
  },
];
