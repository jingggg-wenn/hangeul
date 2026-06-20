// data/pronunciation.js — Pronunciation Rules seed cards
var PRONUNCIATION_DATA = [
  {
    id: 'p_r1', tag: 'pre-populated', type: 'rule',
    title: 'Batchim Liaison (연음)',
    formula: '[consonant batchim] + vowel syllable → consonant moves over',
    explain: 'When a syllable ends in a consonant (batchim) and the next syllable starts with ㅇ (silent placeholder), the batchim sound shifts to fill the ㅇ slot. The written form stays the same; only the pronunciation changes.',
    ex1: '먹어요 → [머거요]',
    ex2: '닭이 → [달기]',
    exception: 'Double batchim: only the second consonant links over. 닭 → 달 + ㄱ links to next vowel.'
  },
  {
    id: 'p_r2', tag: 'pre-populated', type: 'rule',
    title: 'Nasalisation (비음화)',
    formula: 'ㄱ/ㄷ/ㅂ + ㄴ/ㅁ → ㅇ/ㄴ/ㅁ',
    explain: 'Stop consonants (ㄱ ㄷ ㅂ) become the corresponding nasal sound when followed by a nasal consonant (ㄴ or ㅁ). The mouth shape stays the same but the air flows through the nose.',
    ex1: '국물 → [궁물]',
    ex2: '입문 → [임문]',
    exception: 'ㄹ also triggers nasalisation of a preceding stop: 독립 → [동닙]'
  },
  {
    id: 'p_r3', tag: 'pre-populated', type: 'rule',
    title: 'Tensification (경음화)',
    formula: 'voiceless stop/ㄹ + plain consonant → tense consonant',
    explain: 'Plain consonants (ㄱ ㄷ ㅂ ㅅ ㅈ) become tense (ㄲ ㄸ ㅃ ㅆ ㅉ) when they follow a voiceless stop batchim (ㄱ ㄷ ㅂ). No aspiration, just a sharper, held sound.',
    ex1: '학교 → [학꾜]',
    ex2: '국밥 → [국빱]',
    exception: 'After ㄹ batchim, ㄷ becomes ㄸ: 발달 → [발딸]'
  },
  {
    id: 'p_r4', tag: 'pre-populated', type: 'rule',
    title: 'ㅎ Weakening & Aspiration',
    formula: 'stop + ㅎ (or ㅎ + stop) → aspirated consonant',
    explain: 'ㅎ as a batchim merges with a following plain stop to produce an aspirated consonant. The reverse also works. ㅎ also weakens to silence between voiced sounds.',
    ex1: '입학 → [이팍] (ㅂ+ㅎ → ㅍ)',
    ex2: '좋다 → [조타] (ㅎ+ㄷ → ㅌ)',
    exception: '놓아 → [노아]: ㅎ batchim before a vowel is silent (dropped, not linked).'
  },
  {
    id: 'p_r5', tag: 'pre-populated', type: 'rule',
    title: 'ㄹ Assimilation',
    formula: 'ㄴ + ㄹ or ㄹ + ㄴ → ㄹ + ㄹ',
    explain: 'When ㄴ and ㄹ meet across a syllable boundary (in either order), both become ㄹ. This creates a doubled l-sound.',
    ex1: '신라 → [실라]',
    ex2: '난로 → [날로]',
    exception: 'Some Sino-Korean words resist this rule. Check a dictionary when unsure.'
  },
  {
    id: 'p_t1', tag: 'pre-populated', type: 'table',
    title: 'Batchim Pronunciation Chart',
    tableData: {
      headers: ['Batchim', 'Pronounced as', 'Example', 'Notes'],
      rows: [
        ['ㄱ ㅋ ㄲ', '[ㄱ]', '부엌 → [부억]', 'all collapse to ㄱ sound'],
        ['ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ', '[ㄷ]', '옷 → [옫]', '7 consonants → ㄷ'],
        ['ㅂ ㅍ', '[ㅂ]', '앞 → [압]', 'bilabial stop'],
        ['ㄴ', '[ㄴ]', '눈', 'unchanged'],
        ['ㄹ', '[ㄹ]', '말', 'unchanged'],
        ['ㅁ', '[ㅁ]', '봄', 'unchanged'],
        ['ㅇ', '[ㅇ]', '방', 'ng sound, unchanged'],
      ]
    }
  },
];
